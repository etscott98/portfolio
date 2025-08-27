// api/index.js — RAG-only API (Gemini + Postgres pgvector 1536-dim)

const { Pool } = require('pg');
const { toSql } = require('pgvector/pg');

// ---- Config checks (fail early with clear messages)
if (!process.env.DATABASE_URL) {
  console.warn('Missing DATABASE_URL (e.g., postgres://postgres:postgres@localhost:5433/kb)');
}
if (!process.env.GEMINI_API_KEY) {
  console.warn('Missing GEMINI_API_KEY — RAG will not run.');
}

// Single pool reused across invocations with SSL config for Supabase
const pool = process.env.DATABASE_URL ? new Pool({ 
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL.includes('supabase') ? { rejectUnauthorized: false } : false
}) : null;

// ---- Helpers
function l2norm(a) {
  let s = 0; for (const v of a) s += v * v;
  const inv = s ? 1 / Math.sqrt(s) : 0;
  return a.map(v => v * inv);
}

async function embedWithGemini(text) {
  // Use fetch to call Gemini embedding API directly (matching ingest script)
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/text-embedding-004:embedContent`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-goog-api-key': process.env.GEMINI_API_KEY
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
  return l2norm(data.embedding.values);
}

async function generateWithGemini(prompt) {
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-goog-api-key': process.env.GEMINI_API_KEY
    },
    body: JSON.stringify({
      contents: [
        {
          role: 'user',
          parts: [{ text: prompt }]
        }
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 800
      }
    })
  });

  if (!response.ok) {
    throw new Error(`Gemini generation failed: ${response.statusText}`);
  }

  const data = await response.json();
  return data.candidates[0].content.parts[0].text;
}

// Build enhanced prompt with system instructions and retrieved chunks  
function buildPrompt(question, matches) {
  const systemPrompt = `You are Erin Scott's AI assistant, representing her professional portfolio and expertise as a UX/UI Designer and Frontend Developer.

## Response Format Guidelines:
- Use clear, structured responses with proper paragraphs separated by double line breaks
- Start with a direct answer to the question
- Include specific examples and metrics when available
- Use bullet points (•) for lists and key accomplishments
- Use **bold text** for emphasis on important points
- Use ## for section headers when organizing longer responses
- Add spacing between different sections for better readability
- End with a call-to-action when appropriate

## Personality & Tone:
- Be conversational, friendly, and professional
- Match Erin's authentic, thoughtful communication style
- Show enthusiasm for design and development work
- Be honest about limitations while staying helpful

## Content Focus:
- Highlight Erin's unique combination of design AND development skills
- Emphasize user-centered design approach and measurable results
- Mention specific technologies, tools, and methodologies
- Include project outcomes and business impact when relevant
- Reference her experience with AI platforms, mobile apps, and web development

## Response Structure:
1. **Direct Answer**: Address the question immediately
2. **Supporting Details**: Provide context, examples, or elaboration
3. **Key Highlights**: Use bullet points for achievements or skills
4. **Next Steps**: Suggest how to learn more or get in touch

## When to Redirect:
If asked about something not covered in the knowledge base, acknowledge the limitation but redirect to relevant expertise areas.

## Contact Encouragement:
For inquiries about collaboration or availability, enthusiastically encourage reaching out via lunarspired@gmail.com or LinkedIn. When mentioning contact methods, always include the specific email address and mention LinkedIn by name for automatic link conversion.`;

  const context = matches.map((m, i) => 
    `[${i + 1}] ${m.text}`
  ).join('\n\n---\n\n');

  return `${systemPrompt}

Retrieved Context:
${context}

User Question: ${question}

Please answer using the retrieved context above. If the context doesn't contain the information needed, use your general knowledge about Erin but mention that you're working with limited context.`;
}

// Minimal final fallback (only if RAG cannot run at all)
function minimalFallback() {
  return `I don't know. You can contact Erin at lunarspired@gmail.com.`;
}

// ---- HTTP handler (Vercel / Next.js API)
module.exports = async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    // Parse input
    const { message, k } = (req.body || {});
    const topK = Number.isInteger(k) && k > 0 && k <= 20 ? k : 8;
    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Ensure RAG prerequisites
    if (!pool || !process.env.GEMINI_API_KEY) {
      return res.status(200).json({ response: minimalFallback(), source: 'fallback' });
    }

    // 1) Embed query (768-dim, normalized)
    const qvec = await embedWithGemini(message.trim());

    // 2) Vector + FTS retrieval via match_chunks(vector(768), text, int)
    //    NOTE: your DB must have the function defined for 768 dims.
    const { rows: matches } = await pool.query(
      `select id, doc_id, "order",
              left(text, 1500) as text,
              headings, source_path, score
       from match_chunks($1::vector(768), $2::text, $3::int)`,
      [toSql(qvec), message, topK]
    );

    if (!matches || matches.length === 0) {
      return res.status(200).json({
        response: `I don't know. You can contact Erin at lunarspired@gmail.com.`,
        source: 'no_matches',
        chunks: []
      });
    }

    // 3) Build prompt from retrieved chunks and generate answer
    const prompt = buildPrompt(message, matches);
    const answer = await generateWithGemini(prompt);

    return res.status(200).json({
      response: answer || minimalFallback(),
      source: 'rag',
      chunks: matches
    });

  } catch (err) {
    console.error('RAG API error:', err?.stack || err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
