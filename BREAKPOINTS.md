# Case Study Page Breakpoints

## 📐 Scalable Breakpoint System

The case study pages now use a comprehensive, scalable breakpoint system that adapts gracefully from mobile to ultra-wide displays.

---

## 🖥️ Breakpoint Overview

### **Ultra-Wide Screens** (2560px+)
- **Container max-width**: 2000px
- **Hero content max-width**: 1800px
- **Section padding**: 5rem vertical
- **Title size**: 5.5rem
- **Subtitle size**: 2.25rem
- **Impact grid**: minmax(400px, 1fr) with 3rem gap
- **Gallery**: minmax(500px, 1fr)
- **Perfect for**: 4K monitors, ultra-wide displays, large presentations

### **Extra Large Screens** (1920px+)
- **Container max-width**: 1600px
- **Hero content max-width**: 1600px
- **Section padding**: var(--space-3xl) + 4rem
- **Title size**: clamp(3.5rem, 5vw, 5rem)
- **Subtitle size**: clamp(1.5rem, 2vw, 2rem)
- **Impact grid**: minmax(320px, 1fr) with 2xl gap
- **Gallery**: minmax(400px, 1fr)
- **Perfect for**: 1080p/1440p large monitors, designer workstations

### **Large Desktop** (1440px - 1919px)
- **Container max-width**: 1400px
- **Hero content max-width**: 1400px
- **Impact grid**: minmax(300px, 1fr)
- **Gallery**: minmax(350px, 1fr)
- **Perfect for**: 1440p monitors, MacBook Pro 16"

### **Standard Desktop** (1025px - 1439px)
- **Container max-width**: clamp(1000px, 90vw, 1400px)
- **Hero content max-width**: clamp(1000px, 85vw, 1400px)
- **Fluid scaling** between min and max values
- **Perfect for**: Most laptops and desktop monitors

### **Tablet / Small Laptop** (768px - 1024px)
- **Container max-width**: 900px
- **Solution features**: Stack to single column
- **Direction**: Reset to LTR
- **Perfect for**: iPad Pro, Surface Pro, small laptops

### **Mobile** (481px - 768px)
- **Navigation padding**: Reduced
- **Progress bar**: max-width 100px
- **Container padding**: var(--space-lg)
- **Section padding**: var(--space-2xl)
- **Process timeline**: Reduced left padding
- **Impact/Gallery**: Single column
- **Perfect for**: Most smartphones in landscape, small tablets

### **Small Mobile** (≤ 480px)
- **Hero meta**: Stacks vertically
- **Divider**: Hidden
- **Tool badges**: Smaller font, tighter padding
- **Section min-height**: Removed for natural flow
- **Perfect for**: Smartphones in portrait mode

---

## 🎨 Fluid Scaling Features

### Container Widths
```css
/* Base container uses clamp for fluid scaling */
max-width: clamp(1000px, 90vw, 1400px);

/* Scales automatically between breakpoints */
- At 1111px viewport → 1000px container
- At 1500px viewport → 1350px container
- At 1920px viewport → 1400px container
- At 2560px viewport → 2000px container
```

### Typography Scaling
```css
/* Hero title */
font-size: clamp(2.5rem, 6vw, 4rem);
/* Automatically adjusts between 40px and 64px */

/* At 1920px+ */
font-size: clamp(3.5rem, 5vw, 5rem);
/* Scales up to 80px */

/* At 2560px+ */
font-size: 5.5rem;
/* Fixed at 88px for consistency */
```

### Grid Systems
```css
/* Impact grid auto-adjusts columns */
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

/* Scales at different breakpoints */
- Standard: minmax(280px, 1fr)
- 1440px+: minmax(300px, 1fr)
- 1920px+: minmax(320px, 1fr)
- 2560px+: minmax(400px, 1fr)
```

---

## 📱 Key Responsive Behaviors

### Navigation
- **Desktop**: Full width, auto-hide on scroll down
- **Tablet**: Reduced padding, shorter progress bar
- **Mobile**: Compact layout, minimal spacing

### Hero Section
- **Ultra-wide**: Massive titles (88px), expansive spacing
- **Desktop**: Fluid titles (40-64px), balanced layout
- **Tablet**: Optimized for touch, reduced parallax
- **Mobile**: Stacked meta, hidden divider, compact tools

### Content Sections
- **Large screens**: Side-by-side layouts, wide galleries
- **Medium screens**: Flexible grids that reflow
- **Small screens**: Single column, vertical flow

### Impact Cards
- **Ultra-wide**: 4+ columns with 3rem gaps
- **Desktop**: 3 columns with 2xl gaps
- **Tablet**: 2 columns with xl gaps
- **Mobile**: 1 column, full width

---

## 🔧 Customization Guide

### Adding a New Breakpoint

```css
/* Example: 5K Display (5120px+) */
@media (min-width: 5120px) {
  .cs-container {
    max-width: 2400px;
  }
  
  .cs-hero-title {
    font-size: 6rem;
  }
  
  .cs-impact-grid {
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  }
}
```

### Adjusting Container Width

```css
/* Make container narrower/wider at any breakpoint */
.cs-container {
  max-width: clamp(900px, 85vw, 1200px); /* Narrower */
  max-width: clamp(1100px, 95vw, 1600px); /* Wider */
}
```

### Changing Typography Scales

```css
/* More aggressive scaling */
.cs-hero-title {
  font-size: clamp(2rem, 8vw, 6rem);
}

/* More conservative scaling */
.cs-hero-title {
  font-size: clamp(2.5rem, 4vw, 3.5rem);
}
```

---

## ✅ Testing Checklist

- [ ] **320px** - iPhone SE portrait
- [ ] **375px** - iPhone 12/13 portrait
- [ ] **768px** - iPad portrait
- [ ] **1024px** - iPad landscape
- [ ] **1280px** - Standard laptop
- [ ] **1440px** - MacBook Pro 16"
- [ ] **1920px** - 1080p desktop
- [ ] **2560px** - 1440p / 4K desktop
- [ ] **3840px** - 4K ultra-wide

---

## 🎯 Design Philosophy

### Fluid First
- Uses `clamp()` for automatic scaling between breakpoints
- No awkward jumps or layout shifts
- Content always feels appropriately sized

### Content-Driven
- Breakpoints based on where content naturally breaks
- Not device-specific (no "iPhone" breakpoint)
- Prioritizes readability over pixel-perfect layouts

### Performance-Minded
- Minimal number of breakpoints (7 total)
- Mobile-first approach for critical styles
- Progressive enhancement for large screens

### Future-Proof
- Scalable to any screen size
- Works on devices that don't exist yet
- Easy to add new breakpoints as needed

---

## 📊 Breakpoint Priority Order

1. **Mobile** (≤ 768px) - Highest priority, most users
2. **Desktop** (1025px - 1439px) - Standard workstation
3. **Large Desktop** (1440px+) - Growing segment
4. **Tablet** (768px - 1024px) - Hybrid use cases
5. **Ultra-wide** (2560px+) - Premium displays
6. **Small Mobile** (≤ 480px) - Edge cases

---

## 💡 Pro Tips

### For Designers
- Design at 1440px as the "ideal" viewport
- Test responsiveness at 1920px and 768px minimum
- Use fluid spacing (clamp, %, vw) over fixed pixels

### For Developers
- Test in browser DevTools with custom dimensions
- Use `clamp()` instead of multiple media queries when possible
- Remember: `min-width` = desktop-first, `max-width` = mobile-first

### For Users
- Best experience on 1440px+ displays
- Fully functional on any screen size
- Print-friendly layouts included

---

This breakpoint system ensures your case studies look professional and polished on any device, from the smallest phone to the largest ultra-wide monitor. 🎨✨

