// api/chat.js — RAG-enabled chat API (Gemini + Postgres pgvector 768-dim) with chat history

const { Pool } = require('pg');
const { toSql } = require('pgvector/pg');
const { createClient } = require('@supabase/supabase-js');

// ---- Config checks (fail early with clear messages)
if (!process.env.DATABASE_URL) {
  console.warn('Missing DATABASE_URL (e.g., postgres://postgres:postgres@localhost:5433/kb)');
}
if (!process.env.GEMINI_API_KEY) {
  console.warn('Missing GEMINI_API_KEY — RAG will not run.');
}
if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
  console.warn('Missing SUPABASE_URL or SUPABASE_ANON_KEY — Chat history will not be saved.');
}

// Single pool reused across invocations with SSL config for Supabase
const pool = process.env.DATABASE_URL ? new Pool({ 
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL.includes('supabase') ? { rejectUnauthorized: false } : false
}) : null;

// Initialize Supabase client for chat history
const supabase = (process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY) 
  ? createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)
  : null;

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
        maxOutputTokens: 400
      }
    })
  });

  if (!response.ok) {
    throw new Error(`Gemini generation failed: ${response.statusText}`);
  }

  const data = await response.json();
  return data.candidates[0].content.parts[0].text;
}

// ---- Chat History Functions
async function getOrCreateSession(userIdentifier, userAgent = null, ipAddress = null) {
  if (!supabase) return null;
  
  try {
    // First, try to find an active session for this user (within last 24 hours)
    const { data: existingSessions, error: findError } = await supabase
      .from('chat_sessions')
      .select('id')
      .eq('user_id', userIdentifier)
      .gte('session_started_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString())
      .is('session_ended_at', null)
      .order('session_started_at', { ascending: false })
      .limit(1);

    if (findError) {
      console.error('Error finding existing session:', findError);
      return null;
    }

    if (existingSessions && existingSessions.length > 0) {
      return existingSessions[0].id;
    }

    // Create new session if none exists
    const { data: newSession, error: createError } = await supabase
      .from('chat_sessions')
      .insert({
        user_id: userIdentifier,
        user_agent: userAgent,
        ip_address: ipAddress
      })
      .select('id')
      .single();

    if (createError) {
      console.error('Error creating new session:', createError);
      return null;
    }

    return newSession.id;
  } catch (error) {
    console.error('Session management error:', error);
    return null;
  }
}

async function saveChatMessage(sessionId, messageType, content, metadata = {}) {
  if (!supabase || !sessionId) return false;
  
  try {
    const { error } = await supabase
      .from('chat_messages')
      .insert({
        session_id: sessionId,
        message_type: messageType,
        content: content,
        metadata: metadata
      });

    if (error) {
      console.error('Error saving chat message:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Chat message save error:', error);
    return false;
  }
}

function getUserIdentifier(req) {
  // Create a simple user identifier - you can enhance this logic
  // For now, we'll use IP address as the identifier
  const forwarded = req.headers['x-forwarded-for'];
  const ip = forwarded ? forwarded.split(',')[0] : req.connection.remoteAddress;
  return ip || 'unknown';
}

function getUserAgent(req) {
  return req.headers['user-agent'] || null;
}

function getClientIP(req) {
  const forwarded = req.headers['x-forwarded-for'];
  return forwarded ? forwarded.split(',')[0] : req.connection.remoteAddress;
}

// Build enhanced prompt with system instructions and retrieved chunks  
function buildPrompt(question, matches) {
  const systemPrompt = `You are Erin Scott's AI assistant, representing her professional portfolio and expertise as a UX/UI Designer and Frontend Developer.

## Response Style:
- **Be concise and direct** - keep responses brief unless the user asks for detailed explanations
- Start with a clear, direct answer to the question
- Use bullet points (•) for lists when needed
- Use **bold text** sparingly for key emphasis
- Only provide detailed explanations when specifically asked to "explain" or "elaborate"

## Personality & Tone:
- Be conversational, friendly, and professional
- Match Erin's authentic, thoughtful communication style
- Show enthusiasm for design and development work
- Be honest about limitations while staying helpful

## Content Focus:
- Highlight Erin's unique combination of design AND development skills
- Emphasize user-centered design approach and measurable results
- Include specific metrics and outcomes when relevant
- Reference her experience with AI platforms, mobile apps, and web development

## Response Length Guidelines:
- **Default**: 1-2 short paragraphs maximum
- **Only expand** if the user asks for explanations, details, or elaboration
- **Key info first**, then supporting details if space allows
- End with contact encouragement only when relevant

## When to Redirect:
If asked about something not covered in the knowledge base, acknowledge the limitation but redirect to relevant expertise areas.

## Contact Encouragement:
For collaboration inquiries, encourage reaching out via lunarspired@gmail.com or LinkedIn.`;

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

  const startTime = Date.now();
  let sessionId = null;

  try {
    // Parse input
    const { message, k } = (req.body || {});
    const topK = Number.isInteger(k) && k > 0 && k <= 20 ? k : 8;
    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Get user information for session tracking
    const userIdentifier = getUserIdentifier(req);
    const userAgent = getUserAgent(req);
    const clientIP = getClientIP(req);

    // Create or get session for chat history
    sessionId = await getOrCreateSession(userIdentifier, userAgent, clientIP);

    // Save user message to chat history
    if (sessionId) {
      await saveChatMessage(sessionId, 'user', message.trim());
    }

    // Ensure RAG prerequisites
    if (!pool || !process.env.GEMINI_API_KEY) {
      const fallbackResponse = minimalFallback();
      
      // Save AI response to chat history
      if (sessionId) {
        await saveChatMessage(sessionId, 'ai', fallbackResponse, {
          source: 'fallback',
          response_time_ms: Date.now() - startTime
        });
      }
      
      return res.status(200).json({ response: fallbackResponse, source: 'fallback' });
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
      const noMatchResponse = `I don't know. You can contact Erin at lunarspired@gmail.com.`;
      
      // Save AI response to chat history
      if (sessionId) {
        await saveChatMessage(sessionId, 'ai', noMatchResponse, {
          source: 'no_matches',
          response_time_ms: Date.now() - startTime,
          chunks_found: 0
        });
      }
      
      return res.status(200).json({
        response: noMatchResponse,
        source: 'no_matches',
        chunks: []
      });
    }

    // 3) Build prompt from retrieved chunks and generate answer
    const prompt = buildPrompt(message, matches);
    const answer = await generateWithGemini(prompt);
    const finalResponse = answer || minimalFallback();

    // Save AI response to chat history with metadata
    if (sessionId) {
      await saveChatMessage(sessionId, 'ai', finalResponse, {
        source: 'rag',
        response_time_ms: Date.now() - startTime,
        chunks_found: matches.length,
        top_chunk_score: matches[0]?.score || 0,
        retrieval_query: message.trim()
      });
    }

    return res.status(200).json({
      response: finalResponse,
      source: 'rag',
      chunks: matches
    });

  } catch (err) {
    console.error('RAG API error:', err?.stack || err);
    
    // Save error to chat history if we have a session
    if (sessionId) {
      await saveChatMessage(sessionId, 'ai', 'I encountered an error processing your request.', {
        source: 'error',
        response_time_ms: Date.now() - startTime,
        error_message: err.message || 'Unknown error'
      });
    }
    
    return res.status(500).json({ error: 'Internal server error' });
  }
};
