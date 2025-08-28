const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files from current directory

// Gemini configuration
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

// Database configuration for RAG
const DATABASE_URL = process.env.DATABASE_URL;
const { Pool } = require('pg');
const { toSql } = require('pgvector/pg');

// Initialize database pool if URL is available
const pool = DATABASE_URL ? new Pool({ 
  connectionString: DATABASE_URL,
  ssl: DATABASE_URL.includes('supabase') ? { rejectUnauthorized: false } : false
}) : null;

// Knowledge base is stored in Supabase vector database

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





// Import the handlers
const chatHistoryHandler = require('./api/chat-history');
const chatHandler = require('./api/chat');

// API endpoint for chat history (admin)
app.get('/api/chat-history', chatHistoryHandler);

// API endpoint for chat (with history logging)
app.post('/api/chat', chatHandler);

// Backup chat endpoint (original Express implementation)
app.post('/api/chat-express', async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Rate limiting (simple)
    const userIP = req.ip;
    console.log(`Chat request from ${userIP}: ${message}`);

      // Try RAG with vector database first, then fallback
  if (GEMINI_API_KEY && pool) {
    try {
      // Step 1: Get embedding for the user's question
      const embeddingResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/text-embedding-004:embedContent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-goog-api-key': GEMINI_API_KEY
        },
        body: JSON.stringify({
          model: 'models/text-embedding-004',
          content: {
            parts: [{ text: message }]
          }
        })
      });

      if (embeddingResponse.ok) {
        const embeddingData = await embeddingResponse.json();
        const queryVector = embeddingData.embedding.values;

        // Step 2: Search vector database for relevant chunks
        const { rows: matches } = await pool.query(
          `SELECT id, doc_id, "order", left(text, 1500) as text, headings, source_path, score
           FROM match_chunks($1::vector(768), $2::text, $3::int)`,
          [toSql(queryVector), message, 5]
        );

        if (matches && matches.length > 0) {
          // Step 3: Build enhanced prompt with retrieved context
          const context = matches.map((m, i) => 
            `[${i + 1}] ${m.text}`
          ).join('\n\n---\n\n');

          const ragPrompt = `${systemPrompt}

Retrieved Context:
${context}

User Question: ${message}

Please answer using the retrieved context above. If the context doesn't contain the information needed, use your general knowledge about Erin but mention that you're working with limited context.`;

          // Step 4: Generate response with enhanced context
          const response = await fetch(GEMINI_API_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-goog-api-key': GEMINI_API_KEY
            },
            body: JSON.stringify({
              contents: [
                {
                  role: 'user',
                  parts: [{ text: ragPrompt }]
                }
              ],
              generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 800
              }
            })
          });

          if (response.ok) {
            const data = await response.json();
            const aiResponse = data.candidates[0].content.parts[0].text;
            
            return res.json({ 
              response: aiResponse,
              source: 'rag',
              chunks_found: matches.length
            });
          }
        }
      }
    } catch (error) {
      console.warn('RAG failed, trying basic Gemini:', error.message);
    }
  }

  // Fallback: Basic Gemini without RAG
  if (GEMINI_API_KEY) {
    try {
      const response = await fetch(GEMINI_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-goog-api-key': GEMINI_API_KEY
        },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: `${systemPrompt}\n\nUser Question: ${message}` }]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 800
          }
        })
      });

      if (response.ok) {
        const data = await response.json();
        const aiResponse = data.candidates[0].content.parts[0].text;
        
        return res.json({ 
          response: aiResponse,
          source: 'gemini_basic'
        });
      } else {
        const errorData = await response.json();
        console.error('Gemini API Error:', errorData);
      }
    } catch (error) {
      console.warn('Gemini API failed, using fallback:', error.message);
    }
  }

    // Fallback response
    const fallbackResponse = getFallbackResponse(message);
    res.json({ 
      response: fallbackResponse,
      source: 'fallback'
    });

  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

function getFallbackResponse(userMessage) {
  const lowerMessage = userMessage.toLowerCase();
  
  if (lowerMessage.includes('design') && lowerMessage.includes('philosophy')) {
    return "Erin's design philosophy centers around making users feel 'even 1% more human' through thoughtful design. She believes in designing to evoke emotion while coding to be precise and functional, finding the perfect balance between the two.";
  }
  
  if (lowerMessage.includes('technical') || lowerMessage.includes('skills') || lowerMessage.includes('development')) {
    return "Erin combines strong design skills with technical development expertise. She's proficient in HTML, CSS, JavaScript, TypeScript, and modern frameworks. Her technical skills include Figma, design systems, GSAP animations, and Git workflows.";
  }
  
  if (lowerMessage.includes('projects') || lowerMessage.includes('work') || lowerMessage.includes('experience')) {
    return "Erin has worked on impressive projects like the FloLogic mobile app redesign (reducing support calls by 25%), Circadia AI bedtime app with custom animations, and Teamu social platform addressing loneliness. Each project showcases her ability to blend beautiful design with functional outcomes.";
  }
  
  if (lowerMessage.includes('location') || lowerMessage.includes('where') || lowerMessage.includes('based')) {
    return "Erin is currently based in Raleigh, North Carolina and is available for design projects and collaborations. She's open to both remote work and opportunities in the SF Bay Area.";
  }
  
  if (lowerMessage.includes('contact') || lowerMessage.includes('hire') || lowerMessage.includes('work with') || lowerMessage.includes('email')) {
    return "You can reach Erin at lunarspired@gmail.com or connect with her on LinkedIn. She's currently pursuing Senior Product Designer and Lead Product Designer roles, particularly interested in projects that combine design and development.";
  }
  
  return "Thanks for your question! Erin is a Lead Product Designer who combines beautiful design with functional code. She's worked on projects ranging from mobile app redesigns to AI-powered platforms, always focusing on making experiences more human. What specific aspect of her work would you like to know more about?";
}

// Serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`🤖 Chat API available at http://localhost:${PORT}/api/chat`);
  console.log(`🔑 Gemini API: ${GEMINI_API_KEY ? 'Configured' : 'Using fallback only'}`);
  console.log(`🗄️  Database: ${DATABASE_URL ? 'Connected (RAG enabled)' : 'Not connected (basic mode)'}`);
});

module.exports = app;
