# Erin Scott Portfolio Website

A modern, interactive portfolio website featuring glassmorphism design, responsive layouts, and AI-powered chat functionality.

## 🌟 Features

### Portfolio Showcase
- **Work cards** with categorized filtering (UX Focus, Website, WIP)
- **Case study pages** with immersive storytelling and magazine-style layouts
- **Responsive design** optimized for all devices (320px to 4K+)
- **Smooth animations** and parallax effects

### Interactive Elements
- **AI Chat Assistant** - Ask questions about Erin's work and experience
- **Dynamic filtering** - Filter projects by category
- **Tag-based navigation** - Quick access to different project types

### Design System
- **Glassmorphism UI** - Modern frosted glass effects throughout
- **Fluid typography** - Responsive text scaling with clamp()
- **8px grid system** - Consistent spacing and alignment
- **Custom animations** - Scroll-triggered reveals and micro-interactions

## 📁 Project Structure

```
portfolio-website/
├── index.html              # Main portfolio page
├── case-study.html        # Case study template
├── server.js              # Backend server for AI chat
├── package.json           # Node.js dependencies
├── css/                   # Stylesheets
│   ├── styles.css         # Main styles
│   ├── case-study.css     # Case study specific styles
│   ├── _overrides.css     # Custom overrides
│   └── _chat.css          # Chat interface styles
├── js/                    # JavaScript files
│   ├── script.js          # Main portfolio logic
│   ├── case-study.js      # Case study functionality
│   ├── project-data.js    # All project content/data
│   └── chat.js            # AI chat interface
├── assets/                # Static assets
│   └── images/           
│       ├── profile/       # Profile images
│       └── projects/      # Project images
└── docs/                  # Documentation
    ├── CASE-STUDY-README.md
    ├── TWO-COLUMN-LAYOUT.md
    ├── GLASSMORPHISM-SIDEBAR.md
    ├── BREAKPOINTS.md
    └── RESPONSIVE-IMPROVEMENTS.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16.0.0 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository
```bash
git clone [repository-url]
cd portfolio-website
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables for AI chat (optional)
```bash
# Create a .env file
cp env.example .env

# Add your OpenAI API key
OPENAI_API_KEY=your-api-key-here
```

4. Start the server
```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

5. Open your browser
```
http://localhost:3000
```

## 📝 Adding New Projects

### 1. Add Project Data
Edit `js/project-data.js` and add your project:

```javascript
yourProjectId: {
  title: 'Project Title',
  subtitle: 'Brief description',
  images: ['assets/images/projects/yourproject/hero.png'],
  overviewTags: ['Role', 'Type', 'Focus'],
  tools: ['Tool1', 'Tool2'],
  wip: false, // Set to true for work-in-progress
  contentBlocks: [
    // Add content blocks (see docs/CASE-STUDY-README.md)
  ],
  impacts: [
    { value: '50%', label: 'Metric', desc: 'Description' }
  ]
}
```

### 2. Add Project Card
Add to `index.html` in the work cards section:

```html
<div class="work-card-link" data-project="yourProjectId">
  <div class="work-card" data-tags="ux focus,website">
    <!-- Card content -->
  </div>
</div>
```

## 🎨 Customization

### Colors
Edit CSS variables in your stylesheets:
```css
--color-primary: #6eeaff;
--color-secondary: #4e8cff;
--color-accent: #7c3aed;
```

### Typography
Adjust font sizes and families in CSS:
```css
--font-heading: 'Inter', sans-serif;
--font-body: 'Inter', sans-serif;
```

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Small Mobile**: ≤ 480px
- **Mobile**: 481px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1025px - 1439px
- **Large Desktop**: 1440px+
- **Ultra-wide**: 2560px+

## 🛠️ Technologies

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Backend**: Node.js, Express.js
- **AI Integration**: OpenAI API / Google Generative AI
- **Design**: Glassmorphism, CSS Grid, Flexbox
- **Performance**: Intersection Observer, Lazy Loading

## 📚 Documentation

Detailed documentation for specific features:
- [Case Study System](docs/CASE-STUDY-README.md)
- [Two-Column Layout](docs/TWO-COLUMN-LAYOUT.md)
- [Glassmorphism Design](docs/GLASSMORPHISM-SIDEBAR.md)
- [Responsive Breakpoints](docs/BREAKPOINTS.md)
- [Recent Improvements](docs/RESPONSIVE-IMPROVEMENTS.md)
- [AI Chat Setup](docs/AI-CHAT-SETUP.md)

## 🚦 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Lighthouse Score: 90+ across all metrics
- Optimized images and lazy loading

## 📄 License

© 2025 Erin Scott. All rights reserved.

---

Built with ❤️ by Erin Scott | [lunarspired](https://lunarspired.com)
