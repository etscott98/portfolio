
// Demo contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! (Demo only)');
    contactForm.reset();
  });
}

  // Scroll-triggered hero animation (if hero is not in view on load)
  const hero = document.querySelector('.hero');
  if (hero) {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hero.classList.add('in-view');
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(hero);
  }

document.addEventListener('DOMContentLoaded', () => {
  
  /* ---------------------------------------------------------------------------
     PERFORMANCE OPTIMIZATION - Cache expensive DOM queries
     --------------------------------------------------------------------------- */
  
  // Performance monitoring (development mode)
  const perfMonitor = {
    startTime: performance.now(),
    marks: {},
    mark: (name) => {
      perfMonitor.marks[name] = performance.now() - perfMonitor.startTime;
    },
    log: () => {
      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('🚀 Performance Marks:', perfMonitor.marks);
      }
    }
  };

  // Modern configuration constants for better maintainability
  const CONFIG = {
    animations: {
      typingSpeed: { min: 25, max: 85, spaceDelay: 80 },
      workCardStagger: 200,
      cursorBlink: 600,
      modalTransition: 350
    },
    performance: {
      scrollThrottle: 16,
      magneticThrottle: 8,
      ripplePoolSize: 10
    },
    thresholds: {
      mobileBreakpoint: 1024,
      scrollThreshold: 50,
      intersectionThreshold: 0.05
    },
    styles: {
      cursorColor: 'var(--primary-cyan)',
      cursorStyle: '2px solid var(--primary-cyan)',
      glassBlur: 'blur(8px) saturate(1.1)'
    }
  };
  
  perfMonitor.mark('DOM_CACHE_START');
  
  // Cache frequently accessed DOM elements to avoid repeated queries
  const cachedElements = {
    workCards: document.querySelectorAll('.work-card'),
    modernAccents: document.querySelectorAll('.modern-accent'),
    reactiveElements: document.querySelectorAll('.reactive-bg, body'),
    magneticElements: document.querySelectorAll('.toggle-btn, .tag-filter, .work-card-stat, .contact-form button'),
    tagFilters: document.querySelectorAll('.tag-filter'),
    workCardLinks: document.querySelectorAll('.work-card-link'),
    rightColumn: document.querySelector('.right-column'),
    scrollPrompt: document.querySelector('.scroll-prompt'),
    workSection: document.querySelector('.work-section'),
    reactiveBgElement: document.querySelector('.reactive-bg')
  };
  
  perfMonitor.mark('DOM_CACHE_END');
  
  // Helper function to safely iterate cached NodeLists with better performance
  const forEachCached = (nodeList, callback) => {
    const length = nodeList.length;
    for (let i = 0; i < length; i++) {
      callback(nodeList[i], i);
    }
  };
  
  // Log performance metrics after DOM setup
  setTimeout(() => {
    perfMonitor.mark('INITIALIZATION_COMPLETE');
    perfMonitor.log();
  }, 100);

  // Enhanced loading animation
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.6s ease-in-out';
  
  // Smooth reveal after load
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);

  // === MOUSE-RESPONSIVE BACKGROUND EFFECTS ===
  
  // Parallax background movement on mouse move
  let bgMouseX = 0, bgMouseY = 0;
  let targetX = 0, targetY = 0;
  
  document.addEventListener('mousemove', (e) => {
    bgMouseX = (e.clientX / window.innerWidth) * 100;
    bgMouseY = (e.clientY / window.innerHeight) * 100;
    
    // Update CSS custom properties for background positioning
    document.documentElement.style.setProperty('--mouse-x', `${bgMouseX}%`);
    document.documentElement.style.setProperty('--mouse-y', `${bgMouseY}%`);
    
    // Update star transform properties for the animated background
    const starOffsetX = (bgMouseX - 50) * 0.2;
    const starOffsetY = (bgMouseY - 50) * 0.2;
    document.documentElement.style.setProperty('--star-transform-before', `translate(${starOffsetX}px, ${starOffsetY}px)`);
    document.documentElement.style.setProperty('--star-transform-after', `translate(${-starOffsetX * 0.5}px, ${-starOffsetY * 0.5}px)`);
    
    // Smooth parallax for accent elements (using cached elements)
    forEachCached(cachedElements.modernAccents, (accent, index) => {
      const speed = 0.5 + (index * 0.2); // Different speeds for each accent
      const xOffset = (bgMouseX - 50) * speed;
      const yOffset = (bgMouseY - 50) * speed;
      accent.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
  });

  // === SCROLL-RESPONSIVE GRADIENT BACKGROUND ===
  
  let lastScrollY = 0;
  
  const updateBackgroundOnScroll = () => {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = Math.min(scrollY / maxScroll, 1);
    
    // Dynamic gradient based on scroll position
    const hue1 = 220 + (scrollProgress * 40); // Blue to purple shift
    const hue2 = 200 + (scrollProgress * 60); // Color evolution
    const saturation = 70 - (scrollProgress * 20); // Subtle saturation change
    const lightness = 15 + (scrollProgress * 5); // Slight lightness variation
    
    // Update reactive background
    forEachCached(cachedElements.reactiveElements, (element) => {
      element.style.background = `
        radial-gradient(ellipse at ${50 + scrollProgress * 20}% ${30 - scrollProgress * 10}%, 
          hsl(${hue1}, ${saturation}%, ${lightness}%) 0%, 
          hsl(${hue2}, ${saturation - 10}%, ${lightness - 5}%) 70%),
        radial-gradient(circle at ${80 - scrollProgress * 30}% ${70 + scrollProgress * 20}%, 
          hsla(${hue1 + 20}, ${saturation}%, ${lightness + 5}%, 0.3) 0%, 
          transparent 50%)
      `;
    });
    
    // Update accent elements opacity and position based on scroll
    forEachCached(cachedElements.modernAccents, (accent, index) => {
      const phase = (scrollProgress + index * 0.25) % 1;
      const opacity = 0.6 + Math.sin(phase * Math.PI * 2) * 0.4;
      accent.style.opacity = Math.max(0.1, opacity);
    });
    
    lastScrollY = scrollY;
  };
  
  // Throttled scroll listener for performance
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (scrollTimeout) {
      cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = requestAnimationFrame(updateBackgroundOnScroll);
  });
  
  // Initial background setup
  updateBackgroundOnScroll();

  // Set initial state for work cards to be animated by scroll observer (desktop only)
  forEachCached(cachedElements.workCards, (card) => {
    // Work card animations now handled entirely by CSS (_animations.css)
    // No JavaScript style conflicts - smoother animations
    // CSS handles both initial state and .in-view animations
  });
  
  // Enhanced smooth scroll for nav links with modern error handling
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      try {
        const href = link.getAttribute('href');
        if (href?.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
          
        if (target) {
          target.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
          
            // Modern highlight effect with cleanup
          target.style.animation = 'highlightFlash 2s ease-out';
            const cleanupAnimation = () => {
            target.style.animation = '';
            };
            setTimeout(cleanupAnimation, 2000);
          } else {
            console.warn(`Navigation target not found: ${href}`);
        }
        }
      } catch (error) {
        console.error('Error in navigation handler:', error);
      }
    });
  });
  
  // Add highlight flash animation
  if (!document.querySelector('#highlight-flash')) {
    const style = document.createElement('style');
    style.id = 'highlight-flash';
    style.textContent = `
      @keyframes highlightFlash {
        0% { box-shadow: 0 0 0 rgba(110, 234, 255, 0); }
        20% { box-shadow: 0 0 30px rgba(110, 234, 255, 0.6); }
        100% { box-shadow: 0 0 0 rgba(110, 234, 255, 0); }
      }
    `;
    document.head.appendChild(style);
  }

  // Work Card Tag Filtering with animations
  forEachCached(cachedElements.tagFilters, (tag) => {
    tag.addEventListener('click', () => {
      forEachCached(cachedElements.tagFilters, (t) => t.classList.remove('active'));
      tag.classList.add('active');
      const selected = tag.dataset.tag;
      
      // Reset all cards and clear any inline styles that override animations
      forEachCached(cachedElements.workCardLinks, (cardLink) => {
        const card = cardLink.querySelector('.work-card');
        
        // Clear any inline styles that override CSS animations
        cardLink.style.opacity = '';
        cardLink.style.transform = '';
        cardLink.style.display = '';
        
        // Remove in-view class to reset animation state
        card.classList.remove('in-view');
      });
      
      // After a brief delay, show/hide cards and trigger spatial animations
      setTimeout(() => {
        let visibleIndex = 0;
        forEachCached(cachedElements.workCardLinks, (cardLink) => {
          const card = cardLink.querySelector('.work-card');
          if (selected === 'all' || card.dataset.tags.includes(selected)) {
            cardLink.style.display = '';
            // Trigger spatial animation with staggering
            setTimeout(() => {
              card.classList.add('in-view');
            }, visibleIndex * 120); // Match the spatial animation stagger timing
            visibleIndex++;
          } else {
            cardLink.style.display = 'none';
          }
        });
      }, 100); // Brief delay to ensure styles are cleared
    });
  });

  // Toggle between greeting, skills, and contact in left column
  const greetingBlock = document.getElementById('greeting-block');
  const skillsBlock = document.getElementById('skills-block');
  const contactBlock = document.getElementById('contact-block');
  const toggleGreeting = document.getElementById('toggle-greeting');
  const toggleSkills = document.getElementById('toggle-skills');
  const toggleContact = document.getElementById('toggle-contact');

  toggleGreeting.addEventListener('click', () => {
    greetingBlock.style.display = '';
    skillsBlock.style.display = 'none';
    contactBlock.style.display = 'none';
    toggleGreeting.classList.add('active');
    toggleSkills.classList.remove('active');
    toggleContact.classList.remove('active');
    // Remove visible class when hiding
    skillsBlock.classList.remove('visible');
    contactBlock.classList.remove('visible');
  });
  toggleSkills.addEventListener('click', () => {
    greetingBlock.style.display = 'none';
    skillsBlock.style.display = '';
    contactBlock.style.display = 'none';
    toggleGreeting.classList.remove('active');
    toggleSkills.classList.add('active');
    toggleContact.classList.remove('active');
    // Add visible class for animation
    setTimeout(() => skillsBlock.classList.add('visible'), 10);
    contactBlock.classList.remove('visible');
  });
  toggleContact.addEventListener('click', () => {
    greetingBlock.style.display = 'none';
    skillsBlock.style.display = 'none';
    contactBlock.style.display = '';
    toggleGreeting.classList.remove('active');
    toggleSkills.classList.remove('active');
    toggleContact.classList.add('active');
    // Add visible class for animation
    skillsBlock.classList.remove('visible');
    setTimeout(() => contactBlock.classList.add('visible'), 10);
  });

  // --- Scroll-triggered entrance animations ---
  const observerOptions = {
    threshold: 0.05,
    rootMargin: '0px 0px -10% 0px'
  };
  
  let userHasScrolled = false;
  let observedElements = [];
  
  // Track when user starts scrolling (optimized for performance)
  const trackScrollStart = () => {
    if (!userHasScrolled) {
      userHasScrolled = true;
      // Re-trigger intersection checks for all observed elements (cards & containers)
      const windowHeight = window.innerHeight; // Cache window height
      const triggerIfInView = (el, index) => {
        const rect = el.getBoundingClientRect();
        const isInView = rect.top < windowHeight && rect.bottom > 0;
        if (isInView && !el.classList.contains('in-view')) {
          const delay = el.classList.contains('work-card') ? index * 80 : 0;
            setTimeout(() => {
              el.classList.add('in-view');
          }, delay);
        }
      };

      // observedElements contains both work cards & other elements
      if (observedElements && observedElements.length) {
        observedElements.forEach(triggerIfInView);
          } else {
        // Fallback in case observedElements isn't populated yet
        forEachCached(cachedElements.workCards, triggerIfInView);
          }
    }
  };
  
  // Listen for scroll on both window and right column (using cached element)
  window.addEventListener('scroll', trackScrollStart);
  if (cachedElements.rightColumn) {
    cachedElements.rightColumn.addEventListener('scroll', trackScrollStart);
  }
  
  // Also trigger on any interaction to ensure animations work
  document.addEventListener('click', trackScrollStart);
  document.addEventListener('touchstart', trackScrollStart);
  
  // Fallback: Check if we're already scrolled and allow animations immediately
  setTimeout(() => {
    if (!userHasScrolled && cachedElements.rightColumn) {
      const scrollTop = cachedElements.rightColumn.scrollTop;
      if (scrollTop > 50) { // If already scrolled, enable animations
        trackScrollStart();
      }
    }
  }, 500);
  
  const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Skip animations on mobile to prevent layout shifts
        if (window.innerWidth < 1024) {
          entry.target.classList.add('in-view');
          return;
        }
        
        // Only animate work content after user has scrolled
        const isWorkContent = entry.target.classList.contains('work-section') || 
                             entry.target.classList.contains('section-title') ||
                             entry.target.classList.contains('tag-filter-bar') ||
                             entry.target.classList.contains('work-cards-grid') ||
                             entry.target.classList.contains('work-card');
        
        if (isWorkContent && !userHasScrolled) {
          // Wait until the user scrolls before animating work content
          return;
        }
        
        // Add delay for work cards to stagger their appearance (using cached index)
        if (entry.target.classList.contains('work-card')) {
          // Elegant staggering for smooth cascading effect
          const cardIndex = Array.from(cachedElements.workCards).indexOf(entry.target);
          const staggerDelay = cardIndex * 120; // 120ms between each card
          
          setTimeout(() => {
            entry.target.classList.add('in-view'); // 🎯 TRIGGERS ANIMATION
          }, staggerDelay);
        } else {
        entry.target.classList.add('in-view');
        }
        observer.unobserve(entry.target);
      }
    });
  };
  // Optimized intersection observer setup
  const observer = new IntersectionObserver(animateOnScroll, observerOptions);
  
  // Observe work cards first (using cached elements)
  forEachCached(cachedElements.workCards, (card) => {
    observer.observe(card);
  });
  
  // Then observe other elements
  const otherObservedElements = document.querySelectorAll('.centered-section, .section-title, .tag-filter-bar, .work-cards-grid, .work-section, [data-animate]');
  otherObservedElements.forEach(el => {
    observer.observe(el);
  });

  // Keep observedElements array for other functions that might need it
  observedElements = [...cachedElements.workCards, ...otherObservedElements];

  // Optimized scroll prompt and auto-scroll with cached elements
  let hasStartedScrolling = false;
  let hasScrolledToWorks = false;
  
  if (cachedElements.scrollPrompt && cachedElements.rightColumn) {
    const hideScrollPrompt = () => {
      if (!hasStartedScrolling) {
        hasStartedScrolling = true;
        // Batch style updates
        Object.assign(cachedElements.scrollPrompt.style, {
          opacity: '0',
          transform: 'translate(-50%, -50%) translateY(20px)'
        });
        setTimeout(() => cachedElements.scrollPrompt.style.display = 'none', 500);
      }
    };
    
    cachedElements.rightColumn.addEventListener('scroll', hideScrollPrompt);
    window.addEventListener('scroll', hideScrollPrompt);
  }

  // Dynamic cursor trail effect
  // Cursor trail disabled to prevent interference with background effects
  // const cursorTrail = document.createElement('div');
  // cursorTrail.className = 'cursor-trail';
  // document.body.appendChild(cursorTrail);
  
  let trailMouseX = 0, trailMouseY = 0;
  let trailX = 0, trailY = 0;
  
  document.addEventListener('mousemove', (e) => {
    trailMouseX = e.clientX;
    trailMouseY = e.clientY;
  });
  
  // function animateTrail() {
  //   trailX += (trailMouseX - trailX) * 0.1;
  //   trailY += (trailMouseY - trailY) * 0.1;
  //   cursorTrail.style.left = trailX + 'px';
  //   cursorTrail.style.top = trailY + 'px';
  //   requestAnimationFrame(animateTrail);
  // }
  // animateTrail();

  // Sequential typing animation for hero text
  const heroName = document.querySelector('.hero-name');
  const heroTitle = document.querySelector('.hero-title');
  const heroLine1 = document.querySelector('.hero-desc-line1');
  const heroLine2 = document.querySelector('.hero-desc-line2');
  const heroLine3 = document.querySelector('.hero-desc-line3');
  const heroLocation = document.querySelector('.hero-desc-location');
  const heroShabby = document.querySelector('.hero-desc-shabby');

  const typingSequence = [
    { element: heroName, text: "i'm erin", delay: 800 },
    { element: heroTitle, text: "lead UI UX designer", delay: 500 },
    { element: heroLine1, text: "i design to feel something,", delay: 800 },
    { element: heroLine2, text: "code to feel nothing,", delay: 600 },
    { element: heroLine3, text: "and live somewhere in between.", delay: 600 },
    { element: heroLocation, text: "currently vibing in north carolina.", delay: 800 },
    { element: heroShabby, text: "working to make you feel even 1% more human", delay: 600 }
  ];

  let currentSequence = 0;

  // Initially clear all text content
  if (heroName) heroName.textContent = '';
  if (heroTitle) heroTitle.textContent = '';
  if (heroLine1) heroLine1.textContent = '';
  if (heroLine2) heroLine2.textContent = '';
  if (heroLine3) heroLine3.textContent = '';
  if (heroLocation) heroLocation.textContent = '';
  if (heroShabby) heroShabby.textContent = '';

  // Modern Promise-based typing function with optimized DOM manipulation
  const typeText = async (element, text) => {
    return new Promise((resolve, reject) => {
      try {
    if (!element) {
          resolve();
      return;
    }
    
    // Clear content and show element
    element.textContent = '';
    element.classList.add('typing');
    let charIndex = 0;
        let displayText = '';
    
        // Cache the cursor style to avoid repeated property access
        const cursorStyle = '2px solid var(--primary-cyan)';
        
        const typeChar = () => {
      if (charIndex < text.length) {
        const char = text.charAt(charIndex);
            displayText += char;
        charIndex++;
        
            // Batch DOM updates - update text and cursor in one operation
            element.textContent = displayText;
            element.style.borderRight = cursorStyle;
        
            // Variable typing speed with more natural feel
            const { min, max, spaceDelay } = CONFIG.animations.typingSpeed;
            const speed = char === ' ' ? spaceDelay : Math.random() * (max - min) + min;
        setTimeout(typeChar, speed);
      } else {
            // Remove cursor and resolve promise
        setTimeout(() => {
          element.style.borderRight = 'none';
              resolve();
        }, 300);
      }
        };
    
    typeChar();
      } catch (error) {
        console.error('Error in typeText function:', error);
        reject(error);
      }
    });
  };

  // Modern async sequence handler
  const startNextSequence = async () => {
    try {
      while (currentSequence < typingSequence.length) {
      const current = typingSequence[currentSequence];
      const isLastElement = currentSequence === typingSequence.length - 1;
      
        // Wait for delay before starting typing
        await new Promise(resolve => setTimeout(resolve, current.delay));
        
        // Type the text and wait for completion
        await typeText(current.element, current.text);
        
          currentSequence++;
        
          if (isLastElement) {
            // Keep blinking cursor on the last element
            startBlinkingCursor(current.element);
          }
    }
    } catch (error) {
      console.error('Error in typing sequence:', error);
  }
  };

  // Modern cursor blinking with cleanup capability
  const startBlinkingCursor = (element) => {
    if (!element) return null;
    
    let isVisible = true;
    const cursorStyle = '2px solid var(--primary-cyan)';
    
    const intervalId = setInterval(() => {
      element.style.borderRight = isVisible ? cursorStyle : 'none';
      isVisible = !isVisible;
    }, 600);
    
    // Return cleanup function for potential future use
    return () => clearInterval(intervalId);
  };

  // Start the typing sequence with a small delay to ensure DOM is ready
  setTimeout(() => {
    if (heroName && heroTitle && heroLine1 && heroLine2 && heroLine3 && heroLocation && heroShabby) {
      startNextSequence();
    } else {
      // Fallback: show content immediately if elements aren't found
      console.warn('Some hero elements not found, showing content immediately');
      [heroName, heroTitle, heroLine1, heroLine2, heroLine3, heroLocation, heroShabby].forEach(el => {
        if (el) {
          el.style.opacity = '1';
        }
      });
    }
  }, 300);

  // Enhanced parallax effect for work cards with 3D tilt
  forEachCached(cachedElements.workCards, (card) => {
    // Stripped - no 3D tilt effects to eliminate transform conflicts
  });

  // Enhanced dynamic color shift and star particle effects
  const reactiveBgElement = document.querySelector('.reactive-bg');
  let scrollHue = 200; // Base blue color
  let mouseX = 50, mouseY = 50; // Center position
  let targetMouseX = 50, targetMouseY = 50; // For smooth interpolation
  let lastMouseX = window.innerWidth / 2; // Track previous mouse X position
  let isMouseMovingHorizontally = false;
  let mouseStopTimeout;
  let starOffsetX = 0; // Track star layer offset
  let targetStarOffsetX = 0;
  
  if (reactiveBgElement) {
      // Use cached right-column element for better performance
    let scrollTimeout;
    
      cachedElements.rightColumn.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollProgress = cachedElements.rightColumn.scrollTop / (cachedElements.rightColumn.scrollHeight - cachedElements.rightColumn.clientHeight);
        // Enhanced 4-color progression: Blue -> Cyan -> Purple -> Pink
        if (scrollProgress < 0.33) {
          scrollHue = 200 + scrollProgress * 60; // Blue to Cyan
        } else if (scrollProgress < 0.66) {
          scrollHue = 260 + (scrollProgress - 0.33) * 60; // Cyan to Purple
        } else {
          scrollHue = 320 + (scrollProgress - 0.66) * 40; // Purple to Pink
        }
      updateBackground();
      }, 16); // ~60fps throttling
    });
    
    // Enhanced mouse tracking - only respond to horizontal movement for stars
    let mouseAnimationFrame;
    document.addEventListener('mousemove', (e) => {
      const currentMouseX = e.clientX;
      const mouseDeltaX = currentMouseX - lastMouseX;
      
      // Only update if mouse is moving horizontally with sufficient delta
      if (Math.abs(mouseDeltaX) > 2) {
        isMouseMovingHorizontally = true;
        
        // Move stars in opposite direction of mouse movement with 3D rotation
        if (mouseDeltaX > 0) {
          // Mouse moving right, stars rotate left (perspective shift)
          targetStarOffsetX += Math.abs(mouseDeltaX) * 0.4;
        } else {
          // Mouse moving left, stars rotate right (perspective shift)
          targetStarOffsetX -= Math.abs(mouseDeltaX) * 0.4;
        }
        
        // Limit star rotation range (in degrees for 3D effect) - reduced for less dizziness
        targetStarOffsetX = Math.max(-20, Math.min(20, targetStarOffsetX));
        
        // Keep mouse tracking for gradients centered
        targetMouseX = (e.clientX / window.innerWidth) * 100;
        targetMouseY = (e.clientY / window.innerHeight) * 100;
        
        // Clear any existing stop timeout
        clearTimeout(mouseStopTimeout);
        
        // Set timeout to stop movement when mouse stops - longer for smoother transition
        mouseStopTimeout = setTimeout(() => {
          isMouseMovingHorizontally = false;
          // Gradually return to center when mouse stops
          targetStarOffsetX *= 0.8;
        }, 200);
      }
      
      lastMouseX = currentMouseX;
    });
    
    // Smooth interpolation for stars and background - always smooth
    function animateMousePosition() {
      // Always animate mouse position for gradients
      mouseX += (targetMouseX - mouseX) * 0.1;
      mouseY += (targetMouseY - mouseY) * 0.1;
      
      // Always animate star offset for smooth transitions (not just when moving)
      starOffsetX += (targetStarOffsetX - starOffsetX) * 0.12;
      
      // Gradually return to center when not actively moving mouse
      if (!isMouseMovingHorizontally && Math.abs(targetStarOffsetX) > 0.5) {
        targetStarOffsetX *= 0.98; // Very gradual return to center
      }
      
      // Update star layers if there's any change (smooth in all states)
      if (Math.abs(targetStarOffsetX - starOffsetX) > 0.01) {
        updateStarLayers();
      }
      
      updateBackground();
      mouseAnimationFrame = requestAnimationFrame(animateMousePosition);
    }
    animateMousePosition();
    
    function updateStarLayers() {
      // Create 3D rotation effect for star particles
      const beforeElement = reactiveBgElement;
      const afterElement = reactiveBgElement;
      
      if (beforeElement) {
        // Apply 3D transforms with gentle movement and zoom-out effect
        const rotation = starOffsetX; // Use offset as rotation degrees
        const translateX = starOffsetX * 3; // Reduced translation for less dizziness
        const translateZ = -Math.abs(starOffsetX) * 4; // Negative Z for zoom-out effect
        const scale = 1 - (Math.abs(starOffsetX) * 0.015); // Zoom out instead of in
        const backgroundRotate = starOffsetX * 2; // Rotate background to hide repeating pattern (preserve direction)
        
        // Front star layer (::before) - gentle movement with zoom-out
        beforeElement.style.setProperty('--star-transform-before', 
          `perspective(1200px) rotateY(${rotation}deg) rotateX(${rotation * 0.15}deg) rotateZ(${backgroundRotate}deg) translateX(${translateX}px) translateZ(${translateZ}px) scale(${scale})`);
        
        // Back star layer (::after) - different gentle movement for depth
        afterElement.style.setProperty('--star-transform-after', 
          `perspective(1200px) rotateY(${rotation * 0.6}deg) rotateX(${rotation * 0.1}deg) rotateZ(${backgroundRotate * 0.7}deg) translateX(${translateX * 0.5}px) translateZ(${translateZ * 0.6}px) scale(${1 - (Math.abs(starOffsetX) * 0.01)})`);
      }
    }
    
    function updateBackground() {
      // Enhanced multi-layer background with depth
      const baseColor = `hsla(${scrollHue}, 50%, 25%, 0.4)`;
      const glowColor = `hsla(${scrollHue}, 80%, 65%, 0.3)`;
      const secondaryGlow = `hsla(${scrollHue + 40}, 70%, 60%, 0.15)`;
      
      const backgroundStyle = `
        radial-gradient(circle 1200px at ${mouseX}% ${mouseY}%, ${glowColor} 0%, ${secondaryGlow} 40%, transparent 70%),
        radial-gradient(circle 800px at ${100 - mouseX}% ${100 - mouseY}%, ${secondaryGlow} 0%, transparent 50%),
        linear-gradient(135deg, ${baseColor} 0%, #10182a 100%)
      `;
      
      // Apply the background
      reactiveBgElement.style.setProperty('background', backgroundStyle, 'important');
      
      // Dynamic color system that adapts to scroll
      const primaryCyan = `hsl(${scrollHue + 30}, 85%, 75%)`;
      const primaryBlue = `hsl(${scrollHue - 20}, 75%, 70%)`;
      const primaryCyanShadow = `hsl(${scrollHue + 30}, 85%, 75%, 0.2)`;
      const primaryCyanBg = `hsl(${scrollHue + 30}, 85%, 75%, 0.13)`;
      const accentGradient = `linear-gradient(135deg, hsl(${scrollHue + 30}, 85%, 75%) 0%, hsl(${scrollHue - 20}, 75%, 70%) 50%, hsl(${scrollHue + 60}, 70%, 65%) 100%)`;
      
      // Update CSS custom properties with higher priority
      document.documentElement.style.setProperty('--primary-cyan', primaryCyan, 'important');
      document.documentElement.style.setProperty('--primary-blue', primaryBlue, 'important');
      document.documentElement.style.setProperty('--primary-cyan-shadow', primaryCyanShadow, 'important');
      document.documentElement.style.setProperty('--primary-cyan-bg', primaryCyanBg, 'important');
      document.documentElement.style.setProperty('--accent-gradient', accentGradient, 'important');
      document.documentElement.style.setProperty('--gradient-primary', accentGradient, 'important');
    }
    
    // Initialize background
    updateBackground();
  }

  // Optimized magnetic cursor effect with cached rect calculations
  const magneticStates = new Map();
  
  forEachCached(cachedElements.magneticElements, (element) => {
    // Cache element bounds on resize and initially
    let cachedRect = null;
    let isHovering = false;
    
    const updateCachedRect = () => {
      cachedRect = element.getBoundingClientRect();
    };
    
    // Initial rect caching
    updateCachedRect();
    
    // Update cached rect on window resize (throttled)
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateCachedRect, 100);
    };
    window.addEventListener('resize', handleResize);
    
    element.addEventListener('mouseenter', (e) => {
      isHovering = true;
      updateCachedRect(); // Refresh rect on hover start
      element.style.transition = 'transform 0.3s cubic-bezier(.77,0,.18,1)';
    });
    
    // Use throttled mousemove for better performance
    let moveTimeout;
    element.addEventListener('mousemove', (e) => {
      if (!isHovering || !cachedRect) return;
      
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => {
        const x = e.clientX - cachedRect.left - cachedRect.width / 2;
        const y = e.clientY - cachedRect.top - cachedRect.height / 2;
      
      const moveX = x * 0.1;
      const moveY = y * 0.1;
      
      element.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }, 8); // ~120fps throttling
    });
    
    element.addEventListener('mouseleave', () => {
      isHovering = false;
      clearTimeout(moveTimeout);
      element.style.transform = 'translate(0px, 0px)';
      element.style.transition = 'transform 0.5s cubic-bezier(.77,0,.18,1)';
    });
    
    magneticStates.set(element, { cachedRect, isHovering });
  });

  // Enhanced stat counter animation with easing (cached query optimization)
  const statValues = document.querySelectorAll('.work-card-stat > span:first-child');
  statValues.forEach((stat, index) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const text = stat.textContent;
          const number = text.match(/\d+/);
          if (number) {
            const target = parseInt(number[0]);
            let current = 0;
            const duration = 2000; // 2 seconds
            const startTime = Date.now();
            
            // Add staggered delay for multiple stats
            setTimeout(() => {
              function animateCount() {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function for smooth animation
                const easeOut = 1 - Math.pow(1 - progress, 3);
                current = target * easeOut;
                
              stat.textContent = text.replace(/\d+/, Math.floor(current));
                
                if (progress < 1) {
                  requestAnimationFrame(animateCount);
                } else {
                  stat.textContent = text.replace(/\d+/, target);
                }
              }
              animateCount();
            }, index * 200); // Stagger by 200ms
          }
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(stat);
  });

  // Optimized dynamic toggle button ripple effect
  const rippleButtons = document.querySelectorAll('.toggle-btn, .tag-filter');
  
  // Pre-create ripple elements pool for better performance
  const ripplePool = [];
  const createRippleElement = () => {
      const ripple = document.createElement('span');
      ripple.className = 'ripple-effect';
    return ripple;
  };
  
  const getRippleElement = () => {
    return ripplePool.pop() || createRippleElement();
  };
  
  const returnRippleElement = (ripple) => {
    ripple.remove();
    if (ripplePool.length < 10) { // Limit pool size
      ripplePool.push(ripple);
    }
  };
  
  rippleButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const ripple = getRippleElement();
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      // Batch style updates
      Object.assign(ripple.style, {
        width: size + 'px',
        height: size + 'px',
        left: x + 'px',
        top: y + 'px'
      });
      
      button.appendChild(ripple);
      setTimeout(() => returnRippleElement(ripple), 600);
    });
  });

  // Enhanced card entrance animations
  forEachCached(cachedElements.workCards, (card, index) => {
    // Click animations removed per user request
    
    // Entrance animations now handled by main intersection observer system
    // No duplicate observers needed - reduces conflicts and improves performance
  });
  
  // Add shake animation to CSS dynamically
  if (!document.querySelector('#shake-animation')) {
    const style = document.createElement('style');
    style.id = 'shake-animation';
    style.textContent = `
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-2px) rotate(-0.5deg); }
        75% { transform: translateX(2px) rotate(0.5deg); }
      }
    `;
    document.head.appendChild(style);
  }

  // --- Star follows mouse on hover ---
  (function() {
    const star = document.querySelector('.hero-icon.left-star');
    if (!star) return;
    let animFrame;
    let following = false;
    let offset = { x: 0, y: 0 };
    let target = { x: 0, y: 0 };
    let maxDist = 60;
    let followTimeout = null;
    let fadeTimeout = null;
    let resetTimeout = null;
    let ease = 0.18;
    
    // Add click animation
    star.addEventListener('click', function() {
      star.classList.add('clicked');
      setTimeout(() => {
        star.classList.remove('clicked');
      }, 600);
    });

    function onMouseEnter() {
      following = true;
      star.style.opacity = '1';
      star.style.animationPlayState = 'paused';
      offset.x = 0;
      offset.y = 0;
      target.x = 0;
      target.y = 0;
      document.addEventListener('mousemove', onMouseMove);
      animFrame = requestAnimationFrame(animate);
      // After 1.5s, stop following and fade
      followTimeout = setTimeout(stopFollowingAndFade, 1500);
    }

    function onMouseLeave() {
      // If user leaves before 1.5s, still finish the effect
      if (following) {
        clearTimeout(followTimeout);
        stopFollowingAndFade();
      }
    }

    star.addEventListener('mouseenter', onMouseEnter);
    star.addEventListener('mouseleave', onMouseLeave);
  })();

  // --- Text scramble effect for hero name ---
  (function() {
    const heroName = document.querySelector('.hero-name');
    if (!heroName) return;
    
    const originalText = "i'm erin";
    const scrambleChars = "!@#$%^&*()_+-=[]{}|;:,.<>?~`";
    const glitchChars = "∃ɹïn3řîʼnǝɹᴉuєгїиερïηεrïɳεяîиєяiиeriň";
    let scrambleInterval;
    let isScrambling = false;
    
    function getRandomChar() {
      const chars = Math.random() > 0.5 ? scrambleChars : glitchChars;
      return chars[Math.floor(Math.random() * chars.length)];
    }
    
    function scrambleText() {
      let scrambled = '';
      for (let i = 0; i < originalText.length; i++) {
        if (originalText[i] === ' ' || originalText[i] === "'") {
          scrambled += originalText[i];
        } else {
          scrambled += Math.random() > 0.7 ? originalText[i] : getRandomChar();
        }
      }
      return scrambled;
    }
    
    heroName.addEventListener('mouseenter', function() {
      if (isScrambling) return;
      isScrambling = true;
      heroName.classList.add('scrambling');
      
      let iterations = 0;
      scrambleInterval = setInterval(() => {
        heroName.textContent = scrambleText();
        iterations++;
        
        if (iterations > 15) {
          heroName.textContent = originalText;
          heroName.classList.remove('scrambling');
          clearInterval(scrambleInterval);
          isScrambling = false;
        }
      }, 100);
    });
    
    heroName.addEventListener('mouseleave', function() {
      if (scrambleInterval) {
        clearInterval(scrambleInterval);
        heroName.textContent = originalText;
        heroName.classList.remove('scrambling');
        isScrambling = false;
      }
    });

    function getStarCenter() {
      const rect = star.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      };
    }

    function onMouseMove(e) {
      if (!following) return;
      const center = getStarCenter();
      let dx = e.clientX - center.x;
      let dy = e.clientY - center.y;
      // Clamp to maxDist
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist > maxDist) {
        dx = dx * maxDist / dist;
        dy = dy * maxDist / dist;
      }
      target.x = dx;
      target.y = dy;
    }

    function animate() {
      // Interpolate offset toward target for smooth following
      offset.x += (target.x - offset.x) * ease;
      offset.y += (target.y - offset.y) * ease;
      star.style.transition = 'none';
      star.style.transform = `translate(${offset.x}px, ${offset.y}px) rotate(0deg)`;
      animFrame = requestAnimationFrame(animate);
    }

    function stopFollowingAndFade() {
      following = false;
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animFrame);
      // Fade out as it returns
      star.style.transition = 'transform 0.7s cubic-bezier(.77,0,.18,1), opacity 0.5s cubic-bezier(.77,0,.18,1)';
      star.style.opacity = '0';
      star.style.transform = 'translate(0,0)';
      fadeTimeout = setTimeout(() => {
        // Instantly move back to original, then fade in
        star.style.transition = 'opacity 0.5s cubic-bezier(.77,0,.18,1)';
        star.style.opacity = '1';
        // Resume spin after fade in
        resetTimeout = setTimeout(() => {
          star.style.animationPlayState = '';
          star.style.transition = '';
          star.style.transform = '';
          offset.x = 0;
          offset.y = 0;
          target.x = 0;
          target.y = 0;
        }, 500);
      }, 700);
      offset.x = 0;
      offset.y = 0;
      target.x = 0;
      target.y = 0;
    }

  })();

  // === PROJECT CARD INTERACTION HANDLERS ===
  
  // Debug: Check if project data is loaded
  console.log('Project data available:', window.projectData ? 'Yes' : 'No');
  if (window.projectData) {
    console.log('Available project keys:', Object.keys(window.projectData));
  }
  
  // Modern project card interaction handlers with error handling
  try {
    const projectCards = document.querySelectorAll('.work-card-link[data-project]');
    console.log(`Found ${projectCards.length} project cards with data-project attributes`);
    
    // Log each card found
    projectCards.forEach((card, index) => {
      console.log(`Card ${index + 1}: data-project="${card.dataset.project}"`);
    });
    
    projectCards.forEach(card => {
      // Modern click handler with destructuring
      card.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent any default link behavior
        e.stopPropagation(); // Stop event bubbling
        console.log('Click event triggered on project card');
        
        try {
          const { dataset } = card;
          const projectKey = dataset.project;
          console.log(`Clicked project card: ${projectKey}`);
          
          if (projectKey) {
            console.log('Attempting to create modal...');
            createProjectModal(projectKey);
          } else {
            console.warn('Project card missing data-project attribute');
          }
        } catch (error) {
          console.error('Error handling project card click:', error);
        }
      });
      
      // Also try adding a test click handler to see if events work at all
      card.addEventListener('mouseenter', () => {
        console.log('Mouse entered project card:', card.dataset.project);
      });
    });
  } catch (error) {
    console.error('Error initializing project card handlers:', error);
  }

});

// Test if we can access project cards immediately (outside DOMContentLoaded)
console.log('Testing immediate access to project cards...');
setTimeout(() => {
  const testCards = document.querySelectorAll('.work-card-link[data-project]');
  console.log(`Test: Found ${testCards.length} project cards after 1 second`);
  
  testCards.forEach(card => {
    console.log(`Test card: ${card.dataset.project}`);
  });
}, 1000);

// --- Project Modal Overlay System ---
// Project data is now loaded from external file for better maintainability

// Test function for debugging (can be called from console)
window.testModal = function(projectKey = 'flologic') {
  console.log('Testing modal creation manually...');
  createProjectModal(projectKey);
};

// Modal overlay creation with modern error handling
const createProjectModal = (projectKey) => {
  console.log(`createProjectModal called with key: ${projectKey}`);
  
  try {
    // Access project data from global scope (loaded from external file)
    const data = window.projectData?.[projectKey];
    console.log('Project data found:', data ? 'Yes' : 'No');
    
    if (!data) {
      console.warn(`Project data not found for key: ${projectKey}`);
      console.log('Available keys:', window.projectData ? Object.keys(window.projectData) : 'No projectData');
      return;
    }
    
    // Remove any existing modal with safe cleanup
    const oldModal = document.getElementById('project-modal-overlay');
    oldModal?.remove();

    // Close handler function defined first
    const closeModal = () => {
      overlay.classList.remove('open');
      setTimeout(() => overlay.remove(), 400);
    };

    // Modal structure with updated layout
    const overlay = document.createElement('div');
    overlay.id = 'project-modal-overlay';
    overlay.innerHTML = `
      <div class="project-modal-backdrop"></div>
      <div class="project-modal-content">
        <button class="project-modal-close" aria-label="Close">&times;</button>
        <div class="project-modal-header">
          <h1 class="project-modal-title">${data.title}</h1>
          <h2 class="project-modal-subtitle">${data.subtitle}</h2>
          <div class="project-modal-tags">
            ${data.overviewTags.map(tag => `<span class="project-modal-tag">${tag}</span>`).join('')}
          </div>
        </div>
        <div class="project-modal-body">
          <div class="project-modal-overview">
            <div class="project-modal-gallery">
              <div class="project-modal-images">
                ${data.images.map(src => `<img src="${src}" class="project-modal-img" alt="${data.title} image">`).join('')}
              </div>
            </div>
            <div class="project-modal-impacts">
              <h3>Key Metrics</h3>
              <div class="project-modal-impacts-stats">
                ${data.impacts.map(imp => `
                  <div class="project-modal-impact-stat">
                    <div class="impact-stat-value">${imp.value}</div>
                    <div class="impact-stat-label">${imp.label}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
          <div class="project-modal-details">
            <div class="project-modal-sections">
              ${data.sections.map(sec => `
                <div class="project-modal-section">
                  <h3>${sec.heading}</h3>
                  <div>${sec.body}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
    
    document.body.appendChild(overlay);

    // Animate in
    setTimeout(() => {
      overlay.classList.add('open');
    }, 10);

    // Close logic
    overlay.querySelector('.project-modal-close').onclick = closeModal;
    overlay.querySelector('.project-modal-backdrop').onclick = closeModal;
    
    // ESC key to close
    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        closeModal();
        document.removeEventListener('keydown', handleEscKey);
      }
    };
    document.addEventListener('keydown', handleEscKey);
    
  } catch (error) {
    console.error(`Error creating project modal for ${projectKey}:`, error);
  }
};
