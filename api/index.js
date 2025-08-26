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

// Single pool reused across invocations
const pool = process.env.DATABASE_URL ? new Pool({ connectionString: process.env.DATABASE_URL }) : null;

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
  const mod = await import('@google/genai');
  const { GoogleGenAI } = mod;
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const model = process.env.GEMINI_MODEL || 'gemini-2.0-flash';
  const r = await ai.models.generateContent({
    model,
    contents: [{ role: 'user', parts: [{ text: prompt }]}]
  });
  return (r?.response?.text?.() || r?.outputText?.() || '').trim();
}

// Build strict prompt from retrieved chunks
function buildPrompt(question, matches) {
  const ctx = matches.map((m, i) =>
    `[${i + 1}] (${m.source_path || m.doc_id})\n${m.text}`
  ).join('\n\n---\n\n');

  return `Answer ONLY using the retrieved context. If the answer isn't in the context, reply exactly:
"I don't know. You can contact Erin at lunarspired@gmail.com."
Cite sources by index like [1], [2].

Question:
${question}

Context:
${ctx}`;
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

    // 1) Embed query (1536-dim, normalized)
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
