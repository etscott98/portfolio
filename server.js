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

// OpenAI configuration
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

// Erin's knowledge base
const knowledgeBase = `
AI Reference – Erin Scott (Nano-5 profile)
Last updated: Aug 24, 2025 • Use: short, factual answers; no fluff.

1) Identity & Contact
Name: Erin Scott (pronounced "AIR-IN")
Pronouns: she/her
Location / TZ: Raleigh, NC • Eastern Time (ET)
Primary email: lunarspired@gmail.com
LinkedIn: https://www.linkedin.com/in/erin-s-6369071b2/
Phone: Share by email or LinkedIn DM only (anti-scam policy)
Fastest contact: Email or LinkedIn DM
Portfolio: TBD
Resume: TBD
GitHub: TBD
Case study links (top 2–3): TBD

2) Role Targeting & Logistics
Current title: Lead Product Designer
Actively pursuing: Senior Product Designer, Lead Product Designer, Founding Product Designer
What I optimize for: ownership, end-to-end impact, cross-functional work, startup ambiguity
Work modes: Remote / Hybrid / On-site (rank preference: TBD)
Geo focus: SF Bay Area (open to remote US)
Timeline: TBD
Budget/comp: $120-160k base + equity, open to less base for higher equity in the right role
Visa situation: US citizen

3) Experience Summary
Core specialty: Product design (end-to-end), design systems
Years designing: 6+ years
Years at startups: 4+ years
Industry focus: B2B SaaS, consumer apps, AI/automation tools
Team sizes worked with: 2-50+ people
Design team sizes: solo designer to 8-person teams

4) Skills & Tools
Design: Figma (expert), Sketch, Adobe CC, Principle, ProtoPie
Research: User interviews, usability testing, analytics analysis, A/B testing
Development: HTML, CSS, JavaScript (functional), React basics
Collaboration: Slack, Linear, Notion, Miro, FigJam
Specialties: Design systems, mobile-first design, accessibility, motion design

5) Recent Work Highlights
- FloLogic Mobile App Redesign: 25% support call reduction, 30% faster implementation
- Circadia AI Bedtime App: 40+ token design system, 100% onboarding completion
- Teamu Social Platform: 8k+ members, conducted UX research and competitive analysis
- Device Provisioning Redesign: 63% cut in support tickets, 42% improved success rate
- Dashboard MVP: 88% increase in system visibility, 3x faster demo onboarding

6) Design Philosophy
"I design to feel something, code to feel nothing, and live somewhere in between"
Focus: Making users feel "even 1% more human" through thoughtful design
Approach: Accessibility-first, human-centered design with emotional intelligence
Balance: Beautiful design meets functional code

7) What I'm Looking For
Role focus: End-to-end product design with ownership
Team: Cross-functional collaboration, startup ambiguity
Impact: Products that reduce isolation, improve accessibility, enable communities
Growth: Opportunities to blend design and development skills

8) Availability & Preferences
Location: Raleigh, NC (open to remote US work)
Contact: lunarspired@gmail.com or LinkedIn DM
Interests: Art/painting, yoga, holistic living, journaling/astrology
Why I design: To make complex systems feel clear, human, and genuinely useful
`;

const systemPrompt = `You are Erin Scott's AI assistant. Use the provided knowledge base to answer questions about Erin's work, skills, experience, and projects. 

Guidelines:
- Be conversational and friendly, matching Erin's personality
- Focus on her design philosophy, technical skills, and project results
- If asked about something not in the knowledge base, politely redirect to what you do know
- Keep responses concise but informative
- Highlight her unique combination of design and development skills
- Mention specific project results and metrics when relevant
- If someone asks about availability or wants to work with Erin, encourage them to reach out

Knowledge Base:
${knowledgeBase}`;

// Smart fallback responses
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

// API endpoint for chat
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Rate limiting (simple)
    const userIP = req.ip;
    console.log(`Chat request from ${userIP}: ${message}`);

    // Try OpenAI API if key is available
    if (OPENAI_API_KEY) {
      try {
        const response = await fetch(OPENAI_API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: [
              {
                role: 'system',
                content: systemPrompt
              },
              {
                role: 'user',
                content: message
              }
            ],
            max_tokens: 500,
            temperature: 0.7
          })
        });

        if (response.ok) {
          const data = await response.json();
          const aiResponse = data.choices[0].message.content;
          
          return res.json({ 
            response: aiResponse,
            source: 'openai'
          });
        }
      } catch (error) {
        console.warn('OpenAI API failed, using fallback:', error.message);
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
  console.log(`🔑 OpenAI API: ${OPENAI_API_KEY ? 'Configured' : 'Using fallback only'}`);
});

module.exports = app;
