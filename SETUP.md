# Portfolio AI Chat Setup

This guide explains how to set up the secure AI chat functionality for Erin's portfolio.

## 🔧 Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
```bash
# Copy the example environment file
cp env.example .env

# Edit .env and add your OpenAI API key
# Replace 'your_openai_api_key_here' with your actual API key
```

Your `.env` file should look like:
```
OPENAI_API_KEY=sk-proj-your-actual-api-key-here
PORT=3000
```

### 3. Start the Server
```bash
# For development (auto-restart on changes)
npm run dev

# For production
npm start
```

### 4. Access the Portfolio
Open your browser and go to:
```
http://localhost:3000
```

## 🔒 Security Features

- ✅ **API Key Protection**: OpenAI API key is stored securely on the backend
- ✅ **No Frontend Exposure**: API key never reaches the browser
- ✅ **Environment Variables**: Sensitive data in `.env` file (ignored by git)
- ✅ **Fallback System**: Works even if OpenAI API fails
- ✅ **Rate Limiting**: Basic protection against abuse

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Add environment variable `OPENAI_API_KEY` in Vercel dashboard

### Option 2: Netlify
1. Install Netlify CLI: `npm i -g netlify-cli`
2. Run: `netlify deploy`
3. Add environment variable in Netlify dashboard

### Option 3: Heroku
1. Install Heroku CLI
2. Create app: `heroku create your-portfolio-name`
3. Set API key: `heroku config:set OPENAI_API_KEY=your-key`
4. Deploy: `git push heroku main`

## 📁 Project Structure

```
portfolio-website/
├── server.js              # Secure backend server
├── package.json           # Dependencies
├── .env                   # Environment variables (not in git)
├── .gitignore            # Prevents .env from being committed
├── js/
│   └── chat.js           # Frontend chat interface (secure)
├── css/
│   └── _chat.css         # Chat styling
└── index.html            # Main portfolio page
```

## 🛠 How It Works

1. **User types message** → Frontend sends to `/api/chat`
2. **Backend receives request** → Validates and processes
3. **Backend calls OpenAI** → Using securely stored API key
4. **Response sent back** → Through backend to frontend
5. **Fallback system** → Works even if OpenAI fails

## 🆘 Troubleshooting

### Chat not working?
1. Check browser console for errors
2. Ensure server is running on http://localhost:3000
3. Verify `.env` file has correct API key
4. Try hard refresh: `Ctrl+Shift+R`

### API key issues?
1. Ensure API key starts with `sk-proj-`
2. Check OpenAI account has credits
3. Verify key has correct permissions

### Server won't start?
1. Run `npm install` to ensure dependencies are installed
2. Check if port 3000 is already in use
3. Try different port: `PORT=3001 npm start`

## 📝 Updates

To update Erin's information:
1. Edit the `knowledgeBase` variable in `server.js`
2. Restart the server
3. The AI will use the updated information

The knowledge base is around line 20 in `server.js` - just update the text and restart!
