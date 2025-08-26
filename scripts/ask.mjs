// scripts/ask.mjs
import { Pool } from "pg";
import pgv from "pgvector/pg";
import { GoogleGenAI } from "@google/genai";

const { toSql } = pgv;

const DATABASE_URL = process.env.DATABASE_URL;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-2.0-flash"; // set to your 2.5 model if you have the name

if (!DATABASE_URL || !GEMINI_API_KEY) {
  console.error("Set DATABASE_URL and GEMINI_API_KEY");
  process.exit(1);
}

const pool = new Pool({ connectionString: DATABASE_URL });
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

function l2norm(a) {
  let s = 0; for (const v of a) s += v*v;
  const inv = s ? 1/Math.sqrt(s) : 0;
  return a.map(v => v*inv);
}

async function embedQuery(q) {
  const r = await ai.models.embedContent({
    model: "gemini-embedding-001",
    contents: q,
    taskType: "RETRIEVAL_QUERY",
    outputDimensionality: 1536
  });
  return l2norm(r.embedding.values);
}

async function searchKB(q, k = 8) {
  const vec = await embedQuery(q);
  const { rows } = await pool.query(
    `select id, doc_id, "order", left(text,1000) as text, headings, source_path, score
     from match_chunks($1::vector(1536), $2::text, $3::int)`,
    [toSql(vec), q, k]
  );
  return rows;
}

function makePrompt(question, chunks) {
  const ctx = chunks.map((c,i) =>
    `[${i+1}] (${c.source_path || c.doc_id})\n${c.text}`
  ).join("\n\n---\n\n");
  return `You are a KB assistant. Answer ONLY using the context; if missing, say you don't know.
Cite sources by bracket index like [1], [2].

Question:
${question}

Context:
${ctx}`;
}

async function answer(question) {
  const chunks = await searchKB(question, 8);
  if (!chunks.length) return { answer: "No matches.", chunks };

  const prompt = makePrompt(question, chunks);
  // Generate answer with Gemini (adjust model via GEMINI_MODEL if needed)
  const resp = await ai.models.generateContent({
    model: GEMINI_MODEL,
    contents: [{ role: "user", parts: [{ text: prompt }]}]
  });

  // Some SDK versions expose output as .response.text() or .outputText()
  const out = resp?.response?.text?.() || resp?.outputText?.() || JSON.stringify(resp);
  return { answer: out, chunks };
}

const q = process.argv.slice(2).join(" ").trim();
if (!q) {
  console.error("Usage: node scripts/ask.mjs <your question>");
  process.exit(1);
}

answer(q).then(async (r) => {
  console.log("\n=== Answer ===\n");
  console.log(r.answer || "(no answer)");
  console.log("\n=== Top Chunks ===");
  r.chunks.forEach((c,i)=>console.log(`\n[${i+1}] ${c.source_path}  score=${c.score.toFixed(3)}\n${c.text.slice(0,300)}...`));
  await pool.end();
}).catch(async (e) => {
  console.error("Error:", e?.message || e);
  await pool.end();
  process.exit(1);
});