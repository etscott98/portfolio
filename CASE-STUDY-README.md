# Case Study System Documentation

## Overview

A professional-grade case study page system built from the ground up for portfolio presentation. Features cinematic storytelling, smooth animations, and a modern minimal aesthetic.

## Features

### 1. **Hero Section**
- Immersive banner with parallax background
- Dynamic fade-in animations
- Project metadata (role, timeline, tools)
- Scroll indicator for UX guidance

### 2. **7-Section Narrative Structure**
1. **Introduction** - Context and motivation
2. **Problem & Insight** - Structured problem visualization
3. **Process** - Timeline-based process display
4. **Solution** - Large visuals with scroll animations
5. **Impact** - Animated metrics and outcomes
6. **Reflection** - Growth and lessons learned
7. **Next Project** - Seamless navigation to next case study

### 3. **Design System**
- **8px Grid System** - All spacing follows 8px base unit
- **Fluid Typography** - Responsive text sizing with clamp()
- **Design Tokens** - Consistent colors, shadows, and transitions
- **Responsive Breakpoints**:
  - Desktop: > 1024px
  - Tablet: 768px - 1024px
  - Mobile: < 768px

### 4. **Animations & Interactions**
- **Scroll-triggered reveals** - Intersection Observer API
- **Parallax effects** - Hero background zoom
- **Animated counters** - Impact metrics count up
- **Progress bar** - Shows reading progress
- **Micro-interactions** - Hover states and transitions
- **Smooth scrolling** - Native smooth scroll behavior

### 5. **Navigation**
- **Back to portfolio** - Returns to main page
- **Progress bar** - Visual scroll indicator
- **Hide on scroll down** - Nav hides when scrolling
- **Keyboard support** - ESC key to return home
- **Next project** - Circular navigation between case studies

## File Structure

```
portfolio-website/
├── case-study.html          # Main case study template
├── css/
│   ├── case-study.css       # Case study styles
│   └── _variables.css       # Design tokens
├── js/
│   ├── case-study.js        # Case study logic
│   └── project-data.js      # Project content
└── assets/
    └── images/
        └── projects/        # Project images
```

## Usage

### Accessing Case Studies

Navigate to case studies via:
```
case-study.html?project={projectId}
```

Available project IDs:
- `flologic` - FloLogic Mobile App Redesign
- `circadia` - Circadia AI Bedtime App
- `loneliness` - Solving the Loneliness Epidemic
- `provisioning` - End-to-End Provisioning
- `dashboard` - FloLogic Dashboard MVP
- `project6` - Embedded Systems Website

### Adding New Case Studies

1. **Add project data to `js/project-data.js`**:

```javascript
projectData.yourProject = {
  title: 'Your Project Title',
  subtitle: 'Project subtitle',
  images: ['path/to/image.png'],
  overviewTags: ['Tag 1', 'Tag 2'],
  tools: ['Tool 1', 'Tool 2'],
  contentBlocks: [
    {
      type: 'hero',
      image: 'path/to/hero.png',
      title: 'Hero Title',
      description: 'Description'
    },
    // ... more blocks
  ],
  impacts: [
    { value: '50%', label: 'Metric', desc: 'Description' }
  ]
};
```

2. **Add to project order in `js/case-study.js`**:

```javascript
const projectOrder = ['flologic', 'circadia', ..., 'yourProject'];
```

3. **Add work card to `index.html`**:

```html
<div class="work-card-link" data-project="yourProject">
  <div class="work-card" data-tags="tag1,tag2">
    <!-- Card content -->
  </div>
</div>
```

### Content Block Types

#### Text Block
```javascript
{
  type: 'text',
  heading: 'Section Title',
  content: '<p>HTML content</p>'
}
```

#### Full Image
```javascript
{
  type: 'full-image',
  image: 'path/to/image.png',
  alt: 'Alt text',
  caption: 'Optional caption'
}
```

#### Gallery
```javascript
{
  type: 'gallery',
  heading: 'Optional heading',
  images: [
    { src: 'path/to/img1.png', alt: 'Alt 1' },
    { src: 'path/to/img2.png', alt: 'Alt 2' }
  ]
}
```

#### Stats/Impact
```javascript
{
  type: 'stats',
  heading: 'Impact & Results',
  stats: [
    { value: '50%', label: 'Label', desc: 'Description' }
  ]
}
```

#### Quote
```javascript
{
  type: 'quote',
  content: 'Quote text here'
}
```

## Design Principles

### 1. Storytelling First
- Each section builds narrative tension
- Content flows logically from problem to solution
- Visual hierarchy guides the reader

### 2. Professional Aesthetic
- Generous whitespace (8px grid)
- Minimal color palette (primary, secondary, accent)
- Restrained motion (no excessive animation)
- High-quality imagery

### 3. Performance
- Lazy loading images
- Optimized animations (transform/opacity only)
- Throttled scroll listeners
- Intersection Observer for visibility

### 4. Accessibility
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Proper heading hierarchy
- High contrast text

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Metrics

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Cumulative Layout Shift**: < 0.1
- **Smooth animations**: 60fps on desktop, 30fps on mobile

## Customization

### Changing Colors

Edit `css/_variables.css`:

```css
--color-primary: #6eeaff;
--color-secondary: #4e8cff;
--color-accent: #7c3aed;
```

### Adjusting Animation Speed

Edit `css/case-study.css`:

```css
--transition-fast: 0.15s ease;
--transition-base: 0.3s ease;
--transition-slow: 0.5s ease;
```

### Modifying Grid System

All spacing uses 8px base:

```css
--space-xs: 0.25rem;  /* 4px */
--space-sm: 0.5rem;   /* 8px */
--space-md: 1rem;     /* 16px */
--space-lg: 1.5rem;   /* 24px */
--space-xl: 2rem;     /* 32px */
```

## Troubleshooting

### Issue: Images not loading
- Check image paths in `project-data.js`
- Ensure images exist in `assets/images/projects/`
- Verify image file extensions match exactly

### Issue: Animations not triggering
- Check browser console for JavaScript errors
- Ensure `case-study.js` is loaded after `project-data.js`
- Verify Intersection Observer is supported (polyfill for IE11)

### Issue: Case study not found
- Verify project ID in URL matches `project-data.js`
- Check project is in `projectOrder` array
- Ensure `projectData` object is properly structured

## Future Enhancements

- [ ] Add video support in content blocks
- [ ] Implement dark/light mode toggle
- [ ] Add sharing functionality (Twitter, LinkedIn)
- [ ] Create print-optimized styles
- [ ] Add reading time estimate
- [ ] Implement table of contents navigation
- [ ] Add case study comparison view

## Credits

Designed and developed by Erin Scott
Built with vanilla JavaScript, HTML5, and CSS3
No frameworks or dependencies required

