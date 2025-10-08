/**
 * CASE STUDY PAGE LOGIC
 * Handles dynamic content loading, scroll animations, and interactions
 */

// Get project ID from URL
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('project');

// Project order for "next project" navigation
const projectOrder = ['flologic', 'circadia', 'loneliness', 'dashboard'];

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
  if (!projectId || !projectData[projectId]) {
    window.location.href = 'index.html';
    return;
  }

  const project = projectData[projectId];
  
  // Populate content
  populateHero(project);
  populateContent(project);
  populateImpact(project);
  populateNextProject(projectId);
  
  // Initialize animations
  initScrollAnimations();
  initProgressBar();
  initCounters();
  initImageLightbox();
  
  // Update page title
  document.title = `${project.title} | Case Study | erin scott`;
});

/**
 * HERO SECTION
 */
function populateHero(project) {
  const mainImage = project.images?.[0] || 'assets/images/placeholder.png';
  const role = project.overviewTags?.[0] || 'Designer';
  const timeline = extractTimeline(project);
  
  // Populate MOBILE hero (below 1280px)
  const heroImage = document.querySelector('.cs-hero-image');
  if (heroImage) {
    heroImage.style.backgroundImage = `url('${mainImage}')`;
  }
  
  const heroRole = document.querySelector('.cs-hero-role');
  if (heroRole) {
    heroRole.textContent = role;
  }
  
  const heroTimeline = document.querySelector('.cs-hero-timeline');
  if (heroTimeline) {
    heroTimeline.textContent = timeline;
  }
  
  const heroTitle = document.querySelector('.cs-hero-title');
  if (heroTitle) {
    heroTitle.textContent = project.title;
  }
  
  const heroSubtitle = document.querySelector('.cs-hero-subtitle');
  if (heroSubtitle) {
    heroSubtitle.textContent = project.subtitle;
  }
  
  // Set tools for mobile hero
  const toolsContainer = document.querySelector('.cs-hero-tools');
  if (toolsContainer && project.tools && project.tools.length > 0) {
    project.tools.forEach(tool => {
      const toolEl = document.createElement('span');
      toolEl.className = 'cs-hero-tool';
      toolEl.textContent = tool;
      toolsContainer.appendChild(toolEl);
    });
  }
  
  // Populate SIDEBAR (large screens 1280px+)
  // No background image needed - using glassmorphism instead
  
  const sidebarRole = document.querySelector('.cs-sidebar-role');
  if (sidebarRole) {
    sidebarRole.textContent = role;
  }
  
  const sidebarTimeline = document.querySelector('.cs-sidebar-timeline');
  if (sidebarTimeline) {
    sidebarTimeline.textContent = timeline;
  }
  
  const sidebarTitle = document.querySelector('.cs-sidebar-title');
  if (sidebarTitle) {
    sidebarTitle.textContent = project.title;
  }
  
  const sidebarSubtitle = document.querySelector('.cs-sidebar-subtitle');
  if (sidebarSubtitle) {
    sidebarSubtitle.textContent = project.subtitle;
  }
  
  // Set tools for sidebar
  const sidebarToolsContainer = document.querySelector('.cs-sidebar-tools');
  if (sidebarToolsContainer && project.tools && project.tools.length > 0) {
    project.tools.forEach(tool => {
      const toolEl = document.createElement('span');
      toolEl.className = 'cs-sidebar-tool';
      toolEl.textContent = tool;
      sidebarToolsContainer.appendChild(toolEl);
    });
  }
}

/**
 * MAIN CONTENT
 */
function populateContent(project) {
  // Use contentBlocks if available, otherwise use sections
  if (project.contentBlocks && project.contentBlocks.length > 0) {
    populateFromContentBlocks(project.contentBlocks);
  } else if (project.sections && project.sections.length > 0) {
    populateFromSections(project.sections);
  }
}

function populateFromContentBlocks(blocks) {
  const introContainer = document.querySelector('.cs-intro-content');
  const problemContainer = document.querySelector('.cs-problem-content');
  const processContainer = document.querySelector('.cs-process-content');
  const solutionContainer = document.querySelector('.cs-solution-content');
  const reflectionContainer = document.querySelector('.cs-reflection-content');
  
  let introContent = '';
  let problemContent = '';
  let processContent = '';
  let solutionContent = '';
  let reflectionContent = '';
  
  blocks.forEach((block, index) => {
    switch(block.type) {
      case 'hero':
        // Hero blocks are handled by populateHero, skip here
        break;
        
      case 'text':
        // Determine which section this block belongs to
        const heading = block.heading.toLowerCase();
        let targetSection = 'solution'; // default
        let cardClass = 'cs-problem-card';
        
        if (heading.includes('lesson') || heading.includes('reflect') || 
            heading.includes('continuous') || heading.includes('evolution')) {
          targetSection = 'reflection';
          cardClass = 'cs-reflection-lesson';
        } else if (heading.includes('role') || heading.includes('responsibilities') || 
                   heading.includes('process') || heading.includes('objective')) {
          targetSection = 'process';
          cardClass = 'cs-process-step';
        } else if (heading.includes('problem') || heading.includes('challenge') || 
                   heading.includes('broke down') || heading.includes('attempt') ||
                   heading.includes('band-aid') || heading.includes('discovery') ||
                   heading.includes('findings') || heading.includes('key finding')) {
          targetSection = 'problem';
          cardClass = 'cs-problem-card';
        } else if (heading.includes('solution') || heading.includes('breakthrough') || 
                   heading.includes('implementation') || heading.includes('change') ||
                   heading.includes('modernization') || heading.includes('improvement') ||
                   heading.includes('building') || heading.includes('architecture') ||
                   heading.includes('settings') || heading.includes('motion')) {
          targetSection = 'solution';
          cardClass = 'cs-solution-feature';
        } else if (index < 3) {
          targetSection = 'intro';
          cardClass = 'cs-intro-block';
        } else {
          targetSection = 'solution';
          cardClass = 'cs-solution-feature';
        }
        
        const content = `
          <div class="${cardClass}" style="transition-delay: ${index * 0.1}s">
            <h3 class="cs-problem-title">${block.heading}</h3>
            <div class="cs-problem-desc">${block.content}</div>
          </div>
        `;
        
        // Add to appropriate section
        if (targetSection === 'reflection') {
          reflectionContent += content;
        } else if (targetSection === 'process') {
          processContent += content;
        } else if (targetSection === 'problem') {
          problemContent += content;
        } else if (targetSection === 'solution') {
          solutionContent += content;
        } else if (targetSection === 'intro') {
          introContent += content;
        }
        break;
        
      case 'full-image':
        const imageContent = `
          <figure class="cs-full-image" style="transition-delay: ${index * 0.1}s">
            <img src="${block.image || 'assets/images/placeholder-wide.jpg'}" alt="${block.alt || 'Full width image'}" loading="lazy">
            ${block.caption ? `<figcaption>${block.caption}</figcaption>` : ''}
          </figure>
        `;
        solutionContent += imageContent;
        break;
        
      case 'video':
        const videoContent = `
          <figure class="cs-full-video" style="transition-delay: ${index * 0.1}s">
            <video controls loop muted playsinline>
              <source src="${block.video}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
            ${block.caption ? `<figcaption>${block.caption}</figcaption>` : ''}
          </figure>
        `;
        solutionContent += videoContent;
        break;
        
      case 'gallery':
        let galleryHTML = block.heading ? `<h3 class="cs-section-title">${block.heading}</h3>` : '';
        galleryHTML += '<div class="cs-gallery">';
        block.images.forEach((img, imgIndex) => {
          galleryHTML += `
            <figure class="cs-gallery-item" style="transition-delay: ${imgIndex * 0.1}s">
              <img src="${img.src}" alt="${img.alt}" loading="lazy">
            </figure>
          `;
        });
        galleryHTML += '</div>';
        solutionContent += galleryHTML;
        break;
        
      case 'quote':
        const quoteHTML = `
          <blockquote class="cs-quote" style="transition-delay: ${index * 0.1}s">
            ${block.content}
          </blockquote>
        `;
        reflectionContent += quoteHTML;
        break;
        
      case 'stats':
        // Stats blocks are handled by populateImpact, skip here
        // But we can add them to solution as a fallback
        if (block.heading) {
          solutionContent += `<h3 class="cs-section-title">${block.heading}</h3>`;
        }
        break;
    }
  });
  
  // Inject content
  if (introContent) {
    introContainer.innerHTML = `<div class="cs-intro-text">${introContent}</div>`;
  }
  if (problemContent) {
    problemContainer.innerHTML = problemContent;
  }
  if (processContent) {
    // Create timeline for process
    const processHTML = `
      <div class="cs-process-timeline">
        ${extractProcessSteps(processContent)}
      </div>
    `;
    processContainer.innerHTML = processHTML;
  }
  if (solutionContent) {
    solutionContainer.innerHTML = solutionContent;
  }
  if (reflectionContent) {
    const lessonsHTML = `
      <div class="cs-reflection-text">
        Looking back on this project, several key insights emerged that will shape my future work.
      </div>
      <div class="cs-reflection-lessons">
        ${reflectionContent}
      </div>
    `;
    reflectionContainer.innerHTML = lessonsHTML;
  }
  
  // If any section is empty, hide it
  if (!introContent) document.getElementById('introduction').style.display = 'none';
  if (!problemContent) document.getElementById('problem').style.display = 'none';
  if (!processContent) document.getElementById('process').style.display = 'none';
  if (!solutionContent) document.getElementById('solution').style.display = 'none';
  if (!reflectionContent) document.getElementById('reflection').style.display = 'none';
}

function populateFromSections(sections) {
  const introContainer = document.querySelector('.cs-intro-content');
  const problemContainer = document.querySelector('.cs-problem-content');
  const processContainer = document.querySelector('.cs-process-content');
  const solutionContainer = document.querySelector('.cs-solution-content');
  const reflectionContainer = document.querySelector('.cs-reflection-content');
  
  sections.forEach((section, index) => {
    const content = `
      <div class="cs-problem-card" style="transition-delay: ${index * 0.1}s">
        <h3 class="cs-problem-title">${section.heading}</h3>
        <div class="cs-problem-desc">${section.body}</div>
      </div>
    `;
    
    // Distribute based on heading
    if (section.heading.toLowerCase().includes('problem') || 
        section.heading.toLowerCase().includes('challenge')) {
      problemContainer.innerHTML += content;
    } else if (section.heading.toLowerCase().includes('role') || 
               section.heading.toLowerCase().includes('objective') ||
               section.heading.toLowerCase().includes('research')) {
      processContainer.innerHTML += content;
    } else if (section.heading.toLowerCase().includes('solution') || 
               section.heading.toLowerCase().includes('feature') ||
               section.heading.toLowerCase().includes('key')) {
      solutionContainer.innerHTML += content;
    } else if (section.heading.toLowerCase().includes('lesson') || 
               section.heading.toLowerCase().includes('result')) {
      reflectionContainer.innerHTML += content;
    } else if (index === 0) {
      introContainer.innerHTML += content;
    } else {
      solutionContainer.innerHTML += content;
    }
  });
}

/**
 * IMPACT SECTION
 */
function populateImpact(project) {
  const impactGrid = document.querySelector('.cs-impact-grid');
  let statsToDisplay = [];
  
  // First, check if there are stats in contentBlocks
  if (project.contentBlocks && project.contentBlocks.length > 0) {
    project.contentBlocks.forEach(block => {
      if (block.type === 'stats' && block.stats && block.stats.length > 0) {
        statsToDisplay = block.stats;
        // Update the section title if there's a heading
        if (block.heading) {
          const sectionTitle = document.querySelector('#impact .cs-section-title');
          if (sectionTitle) {
            sectionTitle.textContent = block.heading;
          }
        }
      }
    });
  }
  
  // Fallback to impacts array if no stats blocks found
  if (statsToDisplay.length === 0 && project.impacts && project.impacts.length > 0) {
    statsToDisplay = project.impacts;
  }
  
  // Display the stats/impacts
  if (statsToDisplay.length > 0) {
    statsToDisplay.forEach((impact, index) => {
      const card = document.createElement('div');
      card.className = 'cs-impact-card';
      card.style.transitionDelay = `${index * 0.15}s`;
      card.innerHTML = `
        <div class="cs-impact-value" data-count="${impact.value}">${impact.value}</div>
        <div class="cs-impact-label">${impact.label}</div>
        <div class="cs-impact-desc">${impact.desc}</div>
      `;
      impactGrid.appendChild(card);
    });
  } else {
    document.getElementById('impact').style.display = 'none';
  }
}

/**
 * NEXT PROJECT
 */
function populateNextProject(currentProjectId) {
  const currentIndex = projectOrder.indexOf(currentProjectId);
  const nextIndex = (currentIndex + 1) % projectOrder.length;
  const nextProjectId = projectOrder[nextIndex];
  const nextProject = projectData[nextProjectId];
  
  const nextContainer = document.querySelector('.cs-next-project');
  nextContainer.innerHTML = `
    <h3 class="cs-next-title">${nextProject.title}</h3>
    <p class="cs-next-subtitle">${nextProject.subtitle}</p>
    <span class="cs-next-arrow">
      View Case Study
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </span>
  `;
  
  nextContainer.addEventListener('click', () => {
    window.location.href = `case-study.html?project=${nextProjectId}`;
  });
}

/**
 * SCROLL ANIMATIONS
 */
function initScrollAnimations() {
  // Check if we're using two-column layout (large screens)
  const isLargeScreen = window.innerWidth >= 1280;
  const contentColumn = document.querySelector('.cs-content-column');
  
  // Select all animatable elements
  const animatedElements = document.querySelectorAll(`
    .cs-section,
    .cs-intro-block,
    .cs-problem-card,
    .cs-process-step,
    .cs-solution-feature,
    .cs-impact-card,
    .cs-reflection-lesson,
    .cs-full-image,
    .cs-full-video,
    .cs-gallery-item,
    .cs-quote
  `);
  
  // Function to check if element is in viewport
  const isInViewport = (el, container) => {
    const rect = el.getBoundingClientRect();
    if (container && isLargeScreen) {
      const containerRect = container.getBoundingClientRect();
      return (
        rect.top >= containerRect.top &&
        rect.bottom <= containerRect.bottom + 200 // Add buffer
      );
    } else {
      return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 200
      );
    }
  };
  
  // Mark already-visible elements immediately
  animatedElements.forEach(el => {
    if (isInViewport(el, contentColumn)) {
      el.classList.add('visible');
    }
  });
  
  // Set up observer for remaining elements
  const observerOptions = {
    threshold: 0.05, // Trigger as soon as 5% is visible
    rootMargin: '0px 0px 200px 0px' // Start animation 200px before element enters viewport
  };
  
  // For large screens, use content column as root
  if (isLargeScreen && contentColumn) {
    observerOptions.root = contentColumn;
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  // Observe all elements
  animatedElements.forEach(el => observer.observe(el));
}

/**
 * PROGRESS BAR
 */
function initProgressBar() {
  const progressBar = document.querySelector('.nav-progress-bar');
  const sidebarProgressBar = document.querySelector('.cs-sidebar-progress-bar');
  const nav = document.querySelector('.case-study-nav');
  const contentColumn = document.querySelector('.cs-content-column');
  let lastScroll = 0;
  
  // Function to update progress
  const updateProgress = (scrollTop, scrollHeight, clientHeight) => {
    const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    
    if (progressBar) {
      progressBar.style.width = `${scrollPercent}%`;
    }
    if (sidebarProgressBar) {
      sidebarProgressBar.style.width = `${scrollPercent}%`;
    }
  };
  
  // Check if we're using two-column layout (large screens)
  const isLargeScreen = window.innerWidth >= 1280;
  
  if (isLargeScreen && contentColumn) {
    // For large screens, listen to content column scroll
    contentColumn.addEventListener('scroll', () => {
      const scrollTop = contentColumn.scrollTop;
      const scrollHeight = contentColumn.scrollHeight;
      const clientHeight = contentColumn.clientHeight;
      updateProgress(scrollTop, scrollHeight, clientHeight);
    });
  } else {
    // For small screens, listen to window scroll
    window.addEventListener('scroll', () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      updateProgress(scrollTop, documentHeight, windowHeight);
      
      // Hide/show nav on scroll (mobile only)
      if (nav) {
        if (scrollTop > lastScroll && scrollTop > 100) {
          nav.classList.add('hidden');
        } else {
          nav.classList.remove('hidden');
        }
        lastScroll = scrollTop;
      }
    });
  }
  
  // Update on resize
  window.addEventListener('resize', () => {
    const nowLargeScreen = window.innerWidth >= 1280;
    if (nowLargeScreen !== isLargeScreen) {
      location.reload(); // Reload to reinitialize scroll listeners
    }
  });
}

/**
 * ANIMATED COUNTERS
 */
function initCounters() {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        animateCounter(counter);
        counterObserver.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });
  
  document.querySelectorAll('.cs-impact-value[data-count]').forEach(counter => {
    counterObserver.observe(counter);
  });
}

function animateCounter(element) {
  const target = element.getAttribute('data-count');
  const isNumeric = /^\d+/.test(target);
  
  if (!isNumeric) {
    // For non-numeric values, just fade in
    element.classList.add('counting');
    return;
  }
  
  // Extract numeric value
  const match = target.match(/(\d+\.?\d*)/);
  if (!match) {
    element.classList.add('counting');
    return;
  }
  
  const numericValue = parseFloat(match[1]);
  const prefix = target.substring(0, match.index);
  const suffix = target.substring(match.index + match[0].length);
  
  element.classList.add('counting');
  
  const duration = 2000;
  const steps = 60;
  const stepValue = numericValue / steps;
  const stepDuration = duration / steps;
  
  let current = 0;
  const timer = setInterval(() => {
    current += stepValue;
    if (current >= numericValue) {
      current = numericValue;
      clearInterval(timer);
    }
    
    const displayValue = current % 1 !== 0 ? current.toFixed(1) : Math.floor(current);
    element.textContent = `${prefix}${displayValue}${suffix}`;
  }, stepDuration);
}

/**
 * UTILITY FUNCTIONS
 */
function extractTimeline(project) {
  // Try to extract timeline from content
  const timelinePatterns = [
    /\d{4}/,  // Year
    /\d+\s*(months?|weeks?)/i,
    /(Q[1-4]\s*\d{4})/i
  ];
  
  // Check in title or subtitle
  const searchText = `${project.title} ${project.subtitle}`;
  for (const pattern of timelinePatterns) {
    const match = searchText.match(pattern);
    if (match) return match[0];
  }
  
  return '2024';
}

function extractProcessSteps(content) {
  // Create generic process steps if detailed content blocks aren't available
  const steps = [
    { number: '01', title: 'Research & Discovery', desc: 'Understanding user needs and business goals' },
    { number: '02', title: 'Ideation & Wireframes', desc: 'Exploring solutions and creating initial concepts' },
    { number: '03', title: 'Design & Prototyping', desc: 'Building high-fidelity designs and interactive prototypes' },
    { number: '04', title: 'Testing & Iteration', desc: 'Validating with users and refining the experience' },
    { number: '05', title: 'Development & Launch', desc: 'Collaborating with engineering to ship the product' }
  ];
  
  return steps.map((step, index) => `
    <div class="cs-process-step" style="transition-delay: ${index * 0.1}s">
      <div class="cs-process-number">Step ${step.number}</div>
      <h3 class="cs-process-title">${step.title}</h3>
      <p class="cs-process-desc">${step.desc}</p>
    </div>
  `).join('');
}

/**
 * IMAGE LIGHTBOX
 */
function initImageLightbox() {
  const lightbox = document.getElementById('imageLightbox');
  if (!lightbox) return;
  
  const lightboxContent = lightbox.querySelector('.lightbox-content');
  const lightboxImage = lightbox.querySelector('.lightbox-image');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const overlay = lightbox.querySelector('.lightbox-overlay');
  
  // Function to open lightbox
  const openLightbox = (imgSrc, imgAlt, caption) => {
    lightboxImage.src = imgSrc;
    lightboxImage.alt = imgAlt || '';
    lightboxCaption.textContent = caption || imgAlt || '';
    if (!caption && !imgAlt) {
      lightboxCaption.style.display = 'none';
    } else {
      lightboxCaption.style.display = 'block';
    }
    lightbox.classList.add('active');
    lightboxContent.classList.add('zoom-in');
    document.body.classList.add('lightbox-open');
    document.body.style.overflow = 'hidden';
  };
  
  // Function to close lightbox
  const closeLightbox = () => {
    lightbox.classList.remove('active');
    lightboxContent.classList.remove('zoom-in');
    document.body.classList.remove('lightbox-open');
    document.body.style.overflow = '';
    setTimeout(() => {
      lightboxImage.src = '';
    }, 300);
  };
  
  // Add click listeners to all images
  const addImageClickListeners = () => {
    // Case study images
    const images = document.querySelectorAll('.cs-full-image img, .cs-gallery-item img, .deliverable-card img');
    images.forEach(img => {
      img.addEventListener('click', () => {
        const figure = img.closest('figure');
        const caption = figure?.querySelector('figcaption')?.textContent || img.alt;
        openLightbox(img.src, img.alt, caption);
      });
    });
  };
  
  // Close button
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  
  // Click overlay to close
  if (overlay) overlay.addEventListener('click', closeLightbox);
  
  // ESC key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
  
  // Initialize after a short delay to ensure content is loaded
  setTimeout(addImageClickListeners, 500);
}

/**
 * KEYBOARD NAVIGATION
 */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    // Don't go back if lightbox is open (it handles its own ESC key)
    const lightbox = document.getElementById('imageLightbox');
    if (!lightbox || !lightbox.classList.contains('active')) {
      window.location.href = 'index.html';
    }
  }
});

