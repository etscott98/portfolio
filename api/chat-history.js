// api/chat-history.js — Admin endpoint to view chat history

const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase client
const supabase = (process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY) 
  ? createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)
  : null;

// Simple authentication check (you should implement proper auth)
function isAuthorized(req) {
  const authHeader = req.headers.authorization;
  const adminKey = process.env.ADMIN_KEY || 'your-secret-admin-key-here';
  
  return authHeader === `Bearer ${adminKey}`;
}

async function getChatHistory(limit = 50, offset = 0, sessionId = null) {
  if (!supabase) {
    throw new Error('Supabase not configured');
  }

  let query = supabase
    .from('chat_sessions')
    .select(`
      id,
      user_id,
      session_started_at,
      session_ended_at,
      user_agent,
      ip_address,
      created_at,
      chat_messages (
        id,
        message_type,
        content,
        metadata,
        created_at
      )
    `)
    .order('session_started_at', { ascending: false });

  if (sessionId) {
    query = query.eq('id', sessionId);
  }

  const { data, error } = await query
    .range(offset, offset + limit - 1);

  if (error) {
    throw new Error(`Failed to fetch chat history: ${error.message}`);
  }

  return data;
}

async function getChatStats() {
  if (!supabase) {
    throw new Error('Supabase not configured');
  }

  const today = new Date();
  const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);
  const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

  // Get total sessions
  const { count: totalSessions } = await supabase
    .from('chat_sessions')
    .select('*', { count: 'exact', head: true });

  // Get sessions today
  const { count: sessionsToday } = await supabase
    .from('chat_sessions')
    .select('*', { count: 'exact', head: true })
    .gte('session_started_at', yesterday.toISOString());

  // Get sessions this week
  const { count: sessionsThisWeek } = await supabase
    .from('chat_sessions')
    .select('*', { count: 'exact', head: true })
    .gte('session_started_at', weekAgo.toISOString());

  // Get total messages
  const { count: totalMessages } = await supabase
    .from('chat_messages')
    .select('*', { count: 'exact', head: true });

  // Get user messages
  const { count: userMessages } = await supabase
    .from('chat_messages')
    .select('*', { count: 'exact', head: true })
    .eq('message_type', 'user');

  // Get AI messages
  const { count: aiMessages } = await supabase
    .from('chat_messages')
    .select('*', { count: 'exact', head: true })
    .eq('message_type', 'ai');

  return {
    totalSessions: totalSessions || 0,
    sessionsToday: sessionsToday || 0,
    sessionsThisWeek: sessionsThisWeek || 0,
    totalMessages: totalMessages || 0,
    userMessages: userMessages || 0,
    aiMessages: aiMessages || 0
  };
}

// Main handler
module.exports = async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  // For testing - if no admin key is set, provide demo data
  if (!process.env.ADMIN_KEY) {
    console.log('ADMIN_KEY not set, providing demo data for testing');
    return provideDemoData(req, res);
  }

  // Check authorization
  if (!isAuthorized(req)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (!supabase) {
    console.log('Supabase not configured, providing demo data');
    return provideDemoData(req, res);
  }

  try {
    const { action = 'history', limit = 50, offset = 0, sessionId } = req.query;

    if (action === 'stats') {
      const stats = await getChatStats();
      return res.status(200).json({ stats });
    } else if (action === 'history') {
      const limitNum = parseInt(limit) || 50;
      const offsetNum = parseInt(offset) || 0;
      
      const history = await getChatHistory(limitNum, offsetNum, sessionId);
      
      return res.status(200).json({
        sessions: history,
        pagination: {
          limit: limitNum,
          offset: offsetNum,
          hasMore: history.length === limitNum
        }
      });
    } else {
      return res.status(400).json({ error: 'Invalid action parameter' });
    }

  } catch (error) {
    console.error('Chat history API error:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
};

// Demo data function for testing without full Supabase setup
function provideDemoData(req, res) {
  const { action = 'history' } = req.query;
  
  if (action === 'stats') {
    return res.status(200).json({
      stats: {
        totalSessions: 5,
        sessionsToday: 2,
        sessionsThisWeek: 4,
        totalMessages: 24,
        userMessages: 12,
        aiMessages: 12
      }
    });
  } else if (action === 'history') {
    const demoSessions = [
      {
        id: 'demo-session-1',
        user_id: '192.168.1.100',
        session_started_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        session_ended_at: null,
        user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        ip_address: '192.168.1.100',
        created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        chat_messages: [
          {
            id: 'demo-msg-1',
            message_type: 'user',
            content: 'Tell me about Erin\'s design experience',
            metadata: {},
            created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
          },
          {
            id: 'demo-msg-2',
            message_type: 'ai',
            content: 'Erin Scott is a Lead Product Designer with extensive experience in both design and development. She has worked on projects like the FloLogic mobile app redesign which reduced support calls by 25%, and the Circadia AI bedtime app with custom animations.',
            metadata: {
              source: 'rag',
              response_time_ms: 1250,
              chunks_found: 3,
              top_chunk_score: 0.85
            },
            created_at: new Date(Date.now() - 2 * 60 * 60 * 1000 + 5000).toISOString()
          }
        ]
      },
      {
        id: 'demo-session-2',
        user_id: '192.168.1.101',
        session_started_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
        session_ended_at: null,
        user_agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
        ip_address: '192.168.1.101',
        created_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
        chat_messages: [
          {
            id: 'demo-msg-3',
            message_type: 'user',
            content: 'What technologies does Erin work with?',
            metadata: {},
            created_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
          },
          {
            id: 'demo-msg-4',
            message_type: 'ai',
            content: 'Erin is proficient in a wide range of technologies including HTML, CSS, JavaScript, TypeScript, React, Node.js, PostgreSQL, and design tools like Figma. She also has experience with animation libraries like GSAP and modern development workflows.',
            metadata: {
              source: 'rag',
              response_time_ms: 980,
              chunks_found: 2,
              top_chunk_score: 0.92
            },
            created_at: new Date(Date.now() - 24 * 60 * 60 * 1000 + 3000).toISOString()
          },
          {
            id: 'demo-msg-5',
            message_type: 'user',
            content: 'How can I contact her?',
            metadata: {},
            created_at: new Date(Date.now() - 24 * 60 * 60 * 1000 + 30000).toISOString()
          },
          {
            id: 'demo-msg-6',
            message_type: 'ai',
            content: 'You can reach Erin at lunarspired@gmail.com or connect with her on LinkedIn. She\'s currently open to Senior Product Designer and Lead Product Designer opportunities.',
            metadata: {
              source: 'rag',
              response_time_ms: 750,
              chunks_found: 1,
              top_chunk_score: 0.95
            },
            created_at: new Date(Date.now() - 24 * 60 * 60 * 1000 + 32000).toISOString()
          }
        ]
      }
    ];
    
    return res.status(200).json({
      sessions: demoSessions,
      pagination: {
        limit: 50,
        offset: 0,
        hasMore: false
      }
    });
  }
  
  return res.status(400).json({ error: 'Invalid action parameter' });
}
