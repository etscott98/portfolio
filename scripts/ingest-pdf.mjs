// scripts/ingest-pdf.mjs
import fs from "fs/promises";
import path from "path";
import { Pool } from "pg";
import pgv from "pgvector/pg";
import { config } from "dotenv";

// Load environment variables
config();

const { toSql } = pgv;

const filePath = process.argv[2];
if (!filePath) {
  console.error('Usage: node scripts/ingest-pdf.mjs "C:\\path\\to\\file.pdf"');
  process.exit(1);
}

// Resolve the file path to handle special characters
const resolvedPath = path.resolve(filePath);
console.log('Looking for file:', resolvedPath);

// Check if file exists
try {
  await fs.access(resolvedPath);
  console.log('✓ File found');
} catch (error) {
  console.error('✗ File not found:', resolvedPath);
  console.error('Please check the file path and ensure the file exists.');
  process.exit(1);
}

const DATABASE_URL = process.env.DATABASE_URL;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!DATABASE_URL || !GEMINI_API_KEY) {
  console.error("Set env vars: DATABASE_URL and GEMINI_API_KEY");
  process.exit(1);
}

const pool = new Pool({ 
  connectionString: DATABASE_URL,
  ssl: DATABASE_URL.includes('supabase') ? { rejectUnauthorized: false } : false
});

// Function to get embeddings from Gemini API
async function getEmbeddings(texts) {
  const embeddings = [];
  
  for (const text of texts) {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/text-embedding-004:embedContent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-goog-api-key': GEMINI_API_KEY
      },
      body: JSON.stringify({
        model: 'models/text-embedding-004',
        content: {
          parts: [{ text: text }]
        }
      })
    });

    if (!response.ok) {
      throw new Error(`Gemini embedding failed: ${response.statusText}`);
    }

    const data = await response.json();
    embeddings.push(data.embedding.values);
  }
  
  return embeddings;
}

// Simple text extraction - reads from text files
async function extractTextFromFile(filePath) {
  try {
    console.log(`📖 Reading text file: ${filePath}`);
    
    // Read as UTF-8 text file
    const rawContent = await fs.readFile(filePath, 'utf-8'); const content = rawContent.replace(/\0/g, '').replace(/[\u0000-\u001F\u007F-\u009F]/g, ' ').replace(/\s+/g, ' ').trim();
    
    console.log(`✅ Text read: ${content.length} characters`);
    
    if (!content.trim()) {
      throw new Error('File is empty or contains no text');
    }
    
    return content;
    
  } catch (error) {
    console.log(`❌ Error reading file: ${error.message}`);
    throw new Error(`Failed to read file: ${error.message}`);
  }
}

// Best practice RAG chunking: sentence-aware with semantic boundaries
function chunkText(text, maxTokens = 128, overlapTokens = 20) {
  // Rough estimation: 1 token ≈ 4 characters
  const maxChars = maxTokens * 4;
  const overlapChars = overlapTokens * 4;
  
  // Split on sentence boundaries first (more semantic)
  const sentences = text.split(/(?<=[.!?])\s+/).filter(s => s.trim());
  const chunks = [];
  let currentChunk = "";
  
  for (const sentence of sentences) {
    const testChunk = currentChunk ? currentChunk + " " + sentence : sentence;
    
    if (testChunk.length <= maxChars) {
      currentChunk = testChunk;
    } else {
      // Current chunk is full, save it and start new one
      if (currentChunk) {
        chunks.push(currentChunk.trim());
        
        // Start new chunk with overlap from end of previous chunk
        const words = currentChunk.split(' ');
        const overlapWords = words.slice(-Math.floor(overlapChars / 5)); // rough word estimate
        currentChunk = overlapWords.join(' ') + " " + sentence;
      } else {
        // Single sentence is too long, split it
        currentChunk = sentence;
      }
    }
  }
  
  // Add the last chunk
  if (currentChunk.trim()) {
    chunks.push(currentChunk.trim());
  }
  
  // Filter out very small chunks (less than 50 characters)
  return chunks.filter(chunk => chunk.length >= 50);
}



console.log("Extracting text from knowledgeBase...");

const fullText = await extractTextFromFile(resolvedPath);
if (!fullText.trim()) {
  console.error("No text extracted from knowledgeBase.");
  process.exit(1);
}

const chunks = chunkText(fullText);
console.log(`Extracted ${chunks.length} chunks`);

const client = await pool.connect();
try {
  await client.query("BEGIN");

  // Ensure tables exist (matching API expectations)
  await client.query(`
    CREATE TABLE IF NOT EXISTS documents (
      id BIGSERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      source_path TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    )
  `);

  await client.query(`
    CREATE TABLE IF NOT EXISTS doc_chunks (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      doc_id BIGINT REFERENCES documents(id) ON DELETE CASCADE,
      "order" INTEGER NOT NULL,
      text TEXT NOT NULL,
      headings TEXT,
      source_path TEXT,
      embedding VECTOR(768),
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    )
  `);

  // Create or recreate the match function for 768-dim vectors
  await client.query(`
    CREATE OR REPLACE FUNCTION match_chunks(
      query_embedding VECTOR(768),
      query_text TEXT,
      match_count INT DEFAULT 8,
      match_threshold FLOAT DEFAULT 0.0
    )
    RETURNS TABLE (
      id UUID,
      doc_id BIGINT,
      "order" INTEGER,
      text TEXT,
      headings TEXT,
      source_path TEXT,
      score FLOAT
    )
    LANGUAGE sql STABLE
    AS $$
      SELECT
        doc_chunks.id,
        doc_chunks.doc_id,
        doc_chunks."order",
        doc_chunks.text,
        doc_chunks.headings,
        doc_chunks.source_path,
        1 - (doc_chunks.embedding <=> query_embedding) as score
      FROM doc_chunks
      WHERE 1 - (doc_chunks.embedding <=> query_embedding) > match_threshold
      ORDER BY score DESC
      LIMIT match_count;
    $$
  `);

  // Clear existing data and create new document entry
  await client.query("DELETE FROM doc_chunks");
  await client.query("DELETE FROM documents");

  // Insert document entry
  const { rows: [doc] } = await client.query(
    "INSERT INTO documents (title, source_path) VALUES ($1, $2) RETURNING id",
    ["Erin Scott Knowledge Base", "server.js"]
  );
  const docId = doc.id;

  // Embed and insert chunks with better batching
  const BATCH = 3; // Conservative batch size for API limits
  for (let i = 0; i < chunks.length; i += BATCH) {
    const batch = chunks.slice(i, i + BATCH);
    console.log(`Embedding batch ${Math.floor(i/BATCH) + 1}/${Math.ceil(chunks.length/BATCH)} (${i + 1}-${i + batch.length}/${chunks.length})`);

    const vectors = await getEmbeddings(batch);

    for (let j = 0; j < batch.length; j++) {
      const vec = toSql(vectors[j]);
      await client.query(
        `INSERT INTO doc_chunks (doc_id, "order", text, source_path, embedding)
         VALUES ($1, $2, $3, $4, $5::vector(768))`,
        [docId, i + j, batch[j], "server.js", vec]
      );
    }

    // Small delay to respect API rate limits
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  await client.query("COMMIT");
  console.log("Ingestion complete! Knowledge base stored in database.");
} catch (err) {
  await client.query("ROLLBACK");
  console.error("Ingestion failed:", err.stack || err.message);
  process.exitCode = 1;
} finally {
  client.release();
  await pool.end();
}
