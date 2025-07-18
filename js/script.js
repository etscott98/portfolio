
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
  // Enhanced loading animation
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.6s ease-in-out';
  
  // Smooth reveal after load
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);

  // Set initial state for work cards to be animated by scroll observer
  const workCardsToAnimate = document.querySelectorAll('.work-card');
  workCardsToAnimate.forEach((card) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(40px)';
    card.style.transition = 'opacity 0.7s cubic-bezier(.77,0,.18,1), transform 0.7s cubic-bezier(.77,0,.18,1)';
  });
  
  // Enhanced smooth scroll for nav links with easing
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
          
          // Add highlight effect to target
          target.style.animation = 'highlightFlash 2s ease-out';
          setTimeout(() => {
            target.style.animation = '';
          }, 2000);
        }
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

  // Work Card Tag Filtering
  const tagFilters = document.querySelectorAll('.tag-filter');
  const workCards = document.querySelectorAll('.work-card');

  tagFilters.forEach(tag => {
    tag.addEventListener('click', () => {
      tagFilters.forEach(t => t.classList.remove('active'));
      tag.classList.add('active');
      const selected = tag.dataset.tag;
      workCards.forEach(card => {
        if (selected === 'all' || card.dataset.tags.includes(selected)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
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
  });
  toggleSkills.addEventListener('click', () => {
    greetingBlock.style.display = 'none';
    skillsBlock.style.display = '';
    contactBlock.style.display = 'none';
    toggleGreeting.classList.remove('active');
    toggleSkills.classList.add('active');
    toggleContact.classList.remove('active');
  });
  toggleContact.addEventListener('click', () => {
    greetingBlock.style.display = 'none';
    skillsBlock.style.display = 'none';
    contactBlock.style.display = '';
    toggleGreeting.classList.remove('active');
    toggleSkills.classList.remove('active');
    toggleContact.classList.add('active');
  });

  // --- Scroll-triggered entrance animations ---
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px'
  };
  
  let userHasScrolled = false;
  let observedElements = [];
  
  // Track when user starts scrolling
  const trackScrollStart = () => {
    if (!userHasScrolled) {
      userHasScrolled = true;
      // Re-trigger intersection checks for all work elements
      observedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInView && !el.classList.contains('in-view')) {
          // Add delay for work cards to stagger their appearance
          if (el.classList.contains('work-card')) {
            const cards = document.querySelectorAll('.work-card');
            const cardIndex = Array.from(cards).indexOf(el);
            setTimeout(() => {
              el.classList.add('in-view');
            }, cardIndex * 80);
          } else {
            el.classList.add('in-view');
          }
        }
      });
    }
  };
  
  // Listen for scroll on both window and right column
  window.addEventListener('scroll', trackScrollStart);
  const rightColumnEl = document.querySelector('.right-column');
  if (rightColumnEl) {
    rightColumnEl.addEventListener('scroll', trackScrollStart);
  }
  
  const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Only animate work content after user has scrolled
        const isWorkContent = entry.target.classList.contains('work-section') || 
                             entry.target.classList.contains('section-title') ||
                             entry.target.classList.contains('tag-filter-bar') ||
                             entry.target.classList.contains('work-cards-grid') ||
                             entry.target.classList.contains('work-card');
        
        if (isWorkContent && !userHasScrolled) {
          return; // Don't animate work content until user scrolls
        }
        
        // Add delay for work cards to stagger their appearance
        if (entry.target.classList.contains('work-card')) {
          const cards = document.querySelectorAll('.work-card');
          const cardIndex = Array.from(cards).indexOf(entry.target);
          setTimeout(() => {
            entry.target.classList.add('in-view');
          }, cardIndex * 80); // 80ms delay between each card
        } else {
        entry.target.classList.add('in-view');
        }
        observer.unobserve(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(animateOnScroll, observerOptions);
  observedElements = document.querySelectorAll('.work-card, .centered-section, .section-title, .tag-filter-bar, .work-cards-grid, .work-section, [data-animate]');
  observedElements.forEach(el => {
    observer.observe(el);
  });

  // Hide scroll prompt when user starts scrolling
  const scrollPrompt = document.querySelector('.scroll-prompt');
  const rightColumnForPrompt = document.querySelector('.right-column');
  let hasStartedScrolling = false;
  
  if (scrollPrompt && rightColumnForPrompt) {
    const hideScrollPrompt = () => {
      if (!hasStartedScrolling) {
        hasStartedScrolling = true;
          scrollPrompt.style.opacity = '0';
        scrollPrompt.style.transform = 'translate(-50%, -50%) translateY(20px)';
          setTimeout(() => scrollPrompt.style.display = 'none', 500);
        }
    };
    
    rightColumnForPrompt.addEventListener('scroll', hideScrollPrompt);
    window.addEventListener('scroll', hideScrollPrompt);
  }

  // Auto-scroll to works section on scroll threshold
  let hasScrolledToWorks = false;
  const rightColumn = document.querySelector('.right-column');
  const workSection = document.querySelector('.work-section');
  
  if (rightColumn && workSection) {
    rightColumn.addEventListener('scroll', () => {
      if (hasScrolledToWorks) return;
      
      const scrollTop = rightColumn.scrollTop;
      const threshold = 50; // pixels from top
      
      // When user scrolls past threshold, scroll to works section
      if (scrollTop > threshold) {
        hasScrolledToWorks = true;
        workSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
    
    // Reset on page load
    window.addEventListener('load', () => {
      hasScrolledToWorks = false;
    });
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
  const heroIntro = document.querySelector('.hero-desc-intro');
  const heroLocation = document.querySelector('.hero-desc-location');
  const heroShabby = document.querySelector('.hero-desc-shabby');

  const typingSequence = [
    { element: heroName, text: "hi, i'm erin", delay: 800 },
    { element: heroTitle, text: "lead UI UX designer", delay: 500 },
    { element: heroIntro, text: "i design to feel something, code to feel nothing, and live somewhere in between.", delay: 800 },
    { element: heroLocation, text: "currently vibing in north carolina.", delay: 600 },
    { element: heroShabby, text: "working to make you feel even 1% more human", delay: 600 }
  ];

  let currentSequence = 0;

  // Initially clear all text content
  if (heroName) heroName.textContent = '';
  if (heroTitle) heroTitle.textContent = '';
  if (heroIntro) heroIntro.textContent = '';
  if (heroLocation) heroLocation.textContent = '';
  if (heroShabby) heroShabby.textContent = '';

  function typeText(element, text, callback) {
    if (!element) {
      if (callback) callback();
      return;
    }
    
    // Clear content and show element
    element.textContent = '';
    element.classList.add('typing');
    let charIndex = 0;
    
    function typeChar() {
      if (charIndex < text.length) {
        const char = text.charAt(charIndex);
        element.textContent += char;
        charIndex++;
        
        // Add cursor effect
        element.style.borderRight = '2px solid var(--primary-cyan)';
        
        // Variable typing speed
        const speed = char === ' ' ? 80 : Math.random() * 60 + 25;
        setTimeout(typeChar, speed);
      } else {
        // Remove cursor and call callback (except for the last element)
        setTimeout(() => {
          element.style.borderRight = 'none';
          if (callback) callback();
        }, 300);
      }
    }
    
    typeChar();
  }

  function startNextSequence() {
    if (currentSequence < typingSequence.length) {
      const current = typingSequence[currentSequence];
      const isLastElement = currentSequence === typingSequence.length - 1;
      
      setTimeout(() => {
        typeText(current.element, current.text, () => {
          currentSequence++;
          if (isLastElement) {
            // Keep blinking cursor on the last element
            startBlinkingCursor(current.element);
          }
          startNextSequence();
        });
      }, current.delay);
    }
  }

  function startBlinkingCursor(element) {
    let isVisible = true;
    setInterval(() => {
      if (isVisible) {
        element.style.borderRight = '2px solid var(--primary-cyan)';
      } else {
        element.style.borderRight = 'none';
      }
      isVisible = !isVisible;
    }, 600);
  }

  // Start the typing sequence with a small delay to ensure DOM is ready
  setTimeout(() => {
    if (heroName && heroTitle && heroIntro && heroLocation && heroShabby) {
      startNextSequence();
    } else {
      // Fallback: show content immediately if elements aren't found
      console.warn('Some hero elements not found, showing content immediately');
      [heroName, heroTitle, heroIntro, heroLocation, heroShabby].forEach(el => {
        if (el) {
          el.style.opacity = '1';
        }
      });
    }
  }, 300);

  // Enhanced parallax effect for work cards with 3D tilt
  const workCardsParallax = document.querySelectorAll('.work-card');
  workCardsParallax.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform 0.4s cubic-bezier(.77,0,.18,1)';
    });
    
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      card.style.transform = `
        translateY(-12px) 
        scale(1.02) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg)
        perspective(1000px)
      `;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1) rotateX(0deg) rotateY(0deg)';
      card.style.transition = 'transform 0.6s cubic-bezier(.77,0,.18,1)';
    });
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
    // Use right-column scroll since main page doesn't scroll
    const rightColumnScroll = document.querySelector('.right-column');
    let scrollTimeout;
    
    rightColumnScroll.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
      const scrollProgress = rightColumnScroll.scrollTop / (rightColumnScroll.scrollHeight - rightColumnScroll.clientHeight);
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
      
      // Update CSS custom properties
      document.documentElement.style.setProperty('--primary-cyan', primaryCyan);
      document.documentElement.style.setProperty('--primary-blue', primaryBlue);
      document.documentElement.style.setProperty('--primary-cyan-shadow', primaryCyanShadow);
      document.documentElement.style.setProperty('--primary-cyan-bg', primaryCyanBg);
      document.documentElement.style.setProperty('--accent-gradient', accentGradient);
    }
    
    // Initialize background
    updateBackground();
  }

  // Magnetic cursor effect for interactive elements
  const magneticElements = document.querySelectorAll('.toggle-btn, .tag-filter, .work-card-stat, .contact-form button');
  
  magneticElements.forEach(element => {
    element.addEventListener('mouseenter', (e) => {
      element.style.transition = 'transform 0.3s cubic-bezier(.77,0,.18,1)';
    });
    
    element.addEventListener('mousemove', (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const moveX = x * 0.1;
      const moveY = y * 0.1;
      
      element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
    
    element.addEventListener('mouseleave', () => {
      element.style.transform = 'translate(0px, 0px)';
      element.style.transition = 'transform 0.5s cubic-bezier(.77,0,.18,1)';
    });
  });

  // Enhanced stat counter animation with easing
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

  // Dynamic toggle button ripple effect
  document.querySelectorAll('.toggle-btn, .tag-filter').forEach(button => {
    button.addEventListener('click', (e) => {
      const ripple = document.createElement('span');
      ripple.className = 'ripple-effect';
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      
      button.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Enhanced card entrance animations
  document.querySelectorAll('.work-card').forEach((card, index) => {
    // Click animations removed per user request
    
    // Add entrance animation with stagger
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.animation = 'bounceInUp 0.8s cubic-bezier(.77,0,.18,1) forwards';
          }, index * 150); // Stagger entrance
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(card);
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

    function onMouseEnter(e) {
      // If already following, reset everything
      clearTimeout(followTimeout);
      clearTimeout(fadeTimeout);
      clearTimeout(resetTimeout);
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
});

// --- Project Modal Overlay System ---
const projectData = {
  flologic: {
    title: 'FloLogic Mobile App Redesign',
    subtitle: 'Smart Leak Detection & Device Management',
    images: [
      'assets/images/projects/flologic.png'
    ],
    overviewTags: [
      'UX Focus', 'Mobile', 'Website',
      'Role: Lead UI/UX Designer, Beta Program Lead',
      'Tools: Figma', 'Tools: Miro', 'Timeline: Q1 2024 – Q2 2025'
    ],
    sections: [
      { heading: 'Problem', body: `The original FloLogic app wasn’t designed to support both legacy and next-gen devices. To move forward with next-gen development, the app had to be restructured to visually reflect the new device system hierarchy while still functioning in a way that felt familiar to existing users.` },
      { heading: 'Objectives', body: `<ul><li>Redesign the interface to seamlessly support both next-gen and legacy devices.</li><li>Enhance real-time monitoring capabilities with clear navigation and status indicators.</li><li>Simplify the device management process for quicker user access and troubleshooting.</li><li>Ensure the app maintains brand consistency while introducing modern design principles.</li></ul>` },
      { heading: 'Summary', body: `FloLogic is a smart leak detection system that monitors a home’s main water line and automatically shuts off water when it detects abnormal flow. The brand introduced cloud IoT developments and a new system of thread-based devices, offering reliable, long-term protection for homes and properties.` },
      { heading: 'Key Responsibilities', body: `<ul><li>Conducted user research to identify pain points in device management and app navigation.</li><li>Created wireframes and high-fidelity prototypes to iterate design solutions.</li><li>Collaborated with engineering to sync front-end changes with device communication protocols.</li><li>Led a beta testing program to gather user feedback and fine-tune the user experience.</li></ul>` },
      { heading: 'Heuristic Evaluation & Key Findings', body: `<ul><li><b>Navigation Structure:</b> The app’s navigation was highly linear, limiting flexibility as more device types were added.</li><li><b>Overly Novel:</b> Unfamiliar language and design choices made the experience harder to navigate.</li><li><b>Recognition Over Recall:</b> Important settings and notifications were buried, making them hard to find.</li><li><b>Error Prevention and Help:</b> Limited support for preventing user errors or guiding users through in-app assistance.</li></ul>` },
      { heading: 'Beta Program', body: `Managed a 20-person beta program with a mix of long-time customers, plumbers, and homeowners. Gathered real-world feedback to inform decisions on navigation clarity, language simplification, and system feedback.` },
      { heading: 'Solutions & Improvements', body: `<ul><li><b>Visibility and Clarity:</b> Added clear indicators for device issues and centralized notifications.</li><li><b>Simplified Navigation Settings:</b> Surfaced the most relevant information upfront.</li><li><b>Consolidated Device Status:</b> Introduced a System Activity page for reviewing alerts.</li><li><b>Streamlined Language:</b> Removed confusing terms and aligned device names with user expectations.</li><li><b>Visual Hierarchy Enhancements:</b> Grouped related devices visually for clarity.</li></ul>` },
      { heading: 'Stakeholder Feedback', body: `Ongoing input from engineering and customer service helped validate beta feedback and prioritize usability issues.` },
      { heading: 'Design System', body: `Established a design system to unify visuals across the app, website, and devices, especially as the app transitions from Xamarin to MAUI.` },
      { heading: 'Professional Takeaways', body: `<ul><li>Users often adapt to bad design without complaining—interviews and observation are essential.</li><li>Silence from users or stakeholders is not approval.</li><li>Most problems can be solved once they’re actually noticed.</li></ul>` }
    ],
    impacts: [
      { value: '30+', label: 'Unique brand-catered screens', desc: 'Mapped & prototyped' },
      { value: '40+', label: 'Token design system', desc: 'Components created' },
      { value: '12', label: 'Custom animations', desc: 'Built for the app' }
    ]
  },
  circadia: {
    title: 'Circadia',
    subtitle: 'A bedtime app that helps you wind down with astrology, dream journaling, and manifestation rituals',
    images: [
      'assets/images/projects/circadia.png'
    ],
    overviewTags: [
      'Role: Founding Designer',
      'Type: Mobile UI', 'Type: Animation',
      'Tools: Miro', 'Tools: Figma',
      'Timeline: 2025 - Ongoing'
    ],
    sections: [
      { heading: 'Problem', body: `In an age of constant stimulation and fragmented attention, many individuals struggle to wind down, process their emotions, and align with their inner goals before sleep. While wellness apps offer generic solutions like meditation or journaling, few provide an immersive, personalized nighttime experience that honors the cyclical nature of both the cosmos and the self.` },
      { heading: 'Objectives', body: `<ol><li><strong>Fast Launch Strategy:</strong> The initial release focused on delivering a core product quickly. Feature prioritizations were deferred to post-launch user interviews, allowing real feedback to shape future iterations after providing a physical product for users to engage with.</li><li><strong>Dark-Mode-First Experience:</strong> Create a dark-mode-first experience with soft gradients, subtle animations, and minimal distractions to support a peaceful, end-of-day ritual.</li><li><strong>Lightweight Onboarding:</strong> Use lightweight onboarding and modular navigation to align rituals with each user's chart, offering structure without friction.</li><li><strong>Accessible Mystical Content:</strong> Make complex astrological and subconscious information feel accessible through visual tools like moon wheels, dream cards, and guided prompt modals.</li></ol>` },
      { heading: 'Summary', body: `<strong>Circadia</strong> is a bedtime app that helps you wind down with astrology, dream journaling, and manifestation rituals, all synced to the moon. It mixes personalized prompts, a Rorschach-style unconscious test, and gentle guidance to help you reflect, set intentions, and tap into your intuitive side. The vibe is mystical but grounded, with a calming design that makes everything feel easy, not like another self-help app. Circadia brings together astrology, psychology, and nightly rituals to create a more meaningful way to end your day.` },
      { heading: 'Key Responsibilities', body: `<ul><li>Developed the core concept and vision for the app, combining astrology, manifestation, and subconscious exploration</li><li>Defined key features such as dream journaling, zodiac-based guidance, and Rorschach-inspired prompts</li><li>Designed intuitive user flows that support a reflective, nighttime experience</li><li>Created custom icons and visual assets to align with the app's mystical theme</li><li>Currently building Rive animations to enhance micro interactions and reinforce calming user engagement</li><li>Prioritized a dark-mode-first UI for immersive nighttime use</li><li>Integrated symbolic and astrological data into clear, accessible visual components</li></ul>` },
      { heading: 'User Flow', body: `This user flow journey map helped shape <em>Circadia's</em> UI by clarifying the app's core interactions before any mockups were made. It allowed the founders to visualize the sequence of user actions, identify key decision points, and ensure the experience felt cohesive and intentional from the start.<br><br><ul><li><strong>Manifestation Guide Flow:</strong> Users receive astrology-based guidance tailored to the moon phase and their birth chart to support intentional manifestation before sleep.</li><li><strong>Unconscious Test Flow:</strong> Users are prompted to explore their unconscious by responding to a Rorschach-style inkblot image, submitting their interpretation for later analysis.</li><li><strong>Unconscious Report Flow:</strong> After a delay, users receive a detailed report analyzing their inkblot interpretation through psychological and astrological lenses, including alignment with their manifestation goal.</li><li><strong>Notification & Re-engagement Flow:</strong> Users are notified when their unconscious report is ready, leading them back into the app to revisit and reflect on their test results and personalized insights.</li></ul>` },
      { heading: 'Design System', body: `A lightweight design system was created after aligning on branding direction with the founders. It was kept intentionally flexible, with minimal constraints, knowing that the visual language and components would continue to evolve post-launch.` },
      { heading: 'Current Status', body: `Circadia is currently in development and expected to launch on the App Store in the coming months. I'm continuing to support the team with Rive animations and design assistance. Once the app is deployed, I'll begin the next phase of UX research to guide future iterations.` },
      { heading: 'Professional Takeaways', body: `<strong>Design can be flexible.</strong> A fast launch was a business requirement, and I used it to shape a focused design strategy. I kept the solution minimal and easy to build so we could launch quickly and learn directly from users. Prioritizing feedback on features instead of over-designing in isolation.` }
    ],
    impacts: [
      { value: 'Ongoing', label: 'Development Status', desc: 'Expected App Store launch in coming months' },
      { value: 'Custom', label: 'Rive Animations', desc: 'Built for micro-interactions' },
      { value: 'Flexible', label: 'Design System', desc: 'Created for post-launch evolution' }
         ]
   },
   teamu: {
     title: 'Teamu',
     subtitle: 'AI social media platform solving the loneliness epidemic',
    images: [
       'assets/images/projects/teamu.png'
    ],
    overviewTags: [
       'Role: UX Researcher & Designer',
       'Type: Mobile', 'Type: Social Platform',
       'Tools: Figma', 'Tools: Miro',
       'Timeline: Q2 2024 - Q4 2024'
    ],
    sections: [
       { heading: 'Problem', body: `In our increasingly digital world, social isolation and loneliness have reached epidemic levels. Traditional social media platforms often exacerbate these issues by promoting superficial connections and comparison-driven interactions rather than meaningful relationships.` },
       { heading: 'Objectives', body: `<ul><li>Conduct comprehensive UX research to understand user pain points around loneliness and social connection</li><li>Perform competitive analysis of existing social platforms to identify gaps in meaningful connection features</li><li>Design an AI-powered platform that facilitates authentic relationships and community building</li><li>Create features that prioritize mental health and genuine human connection over engagement metrics</li></ul>` },
       { heading: 'Research & Analysis', body: `Conducted extensive user interviews and surveys to understand the root causes of digital loneliness. Performed competitive analysis of 15+ social platforms to identify opportunities for more meaningful connection tools. Research revealed that users craved deeper, more authentic interactions rather than surface-level engagement.` },
       { heading: 'Key Features Designed', body: `<ul><li>AI-powered matching system based on shared interests and values rather than proximity</li><li>Structured conversation starters and activity suggestions to facilitate meaningful interactions</li><li>Community building tools focused on small, intimate groups rather than large follower counts</li><li>Mental health-first design principles with built-in wellness check-ins and support resources</li></ul>` }
    ],
    impacts: [
       { value: '8k+', label: 'Active Members', desc: 'Engaged in beta testing' },
       { value: '24/7', label: 'Moderation', desc: 'AI-powered safety systems' },
       { value: '73%', label: 'User Satisfaction', desc: 'Reported feeling less lonely' }
     ]
   },
   provisioning: {
     title: 'End-to-End Provisioning Reimagined',
     subtitle: 'Device provisioning process overhaul focusing on reliability, speed, and user clarity',
     images: [
       'assets/images/projects/flologic.png'
     ],
     overviewTags: [
       'Role: Lead UX Designer',
       'Type: IoT Setup Process', 'Type: Mobile & Web',
       'Tools: Figma', 'Tools: Miro',
       'Timeline: Q3 2024 - Q1 2025'
     ],
     sections: [
       { heading: 'Problem', body: `The existing device provisioning process was a major source of customer frustration and support tickets. Users struggled with complex connection steps, unclear error messages, and lengthy setup times, leading to high abandonment rates and negative first impressions.` },
       { heading: 'Objectives', body: `<ul><li>Redesign the entire provisioning flow to be more intuitive and error-resistant</li><li>Reduce customer confusion through clearer communication and visual feedback</li><li>Streamline backend communication to improve connection reliability</li><li>Future-proof the system to easily accommodate new hardware integrations</li></ul>` },
       { heading: 'Research & Discovery', body: `Analyzed support ticket data to identify the most common failure points. Conducted user interviews with customers who had experienced provisioning issues. Collaborated with engineering to understand technical constraints and opportunities for improvement.` },
       { heading: 'Design Solutions', body: `<ul><li>Created a step-by-step wizard with clear progress indicators and visual feedback</li><li>Implemented proactive error prevention with real-time validation and helpful error messages</li><li>Designed a unified flow that works consistently across different device types</li><li>Added diagnostic tools to help users troubleshoot connection issues independently</li></ul>` },
       { heading: 'Results & Impact', body: `The redesigned provisioning process significantly improved the user experience and reduced support burden. Customer satisfaction increased dramatically, and the streamlined process enabled faster rollout of new device types.` }
     ],
     impacts: [
       { value: '63%', label: 'Support Ticket Reduction', desc: 'Cut provisioning-related tickets within first month' },
       { value: '42%', label: 'Connection Success Rate', desc: 'Improved first-time device connections' },
       { value: '3.1min', label: 'Setup Time Reduction', desc: 'Reduced average time to full system setup' }
     ]
   },
   dashboard: {
     title: 'A Unified UI for Complex Systems',
     subtitle: 'Scalable dashboard for real-time control and monitoring of connected devices',
     images: [
       'assets/images/projects/teamu.png'
     ],
     overviewTags: [
       'Role: Lead UI/UX Designer',
       'Type: Dashboard Design', 'Type: Web Application',
       'Tools: Figma', 'Tools: Design System',
       'Timeline: Q1 2024 - Q3 2024'
     ],
     sections: [
       { heading: 'Problem', body: `Technicians and end-users needed a comprehensive view of multiple connected devices across properties or zones, but existing tools were fragmented and difficult to navigate. Critical information was buried, and remote actions were cumbersome to perform.` },
       { heading: 'Objectives', body: `<ul><li>Create a scalable, intuitive dashboard for real-time device monitoring</li><li>Enable quick assessment of network health and device states</li><li>Streamline remote actions and troubleshooting workflows</li><li>Design for both technical users (installers/technicians) and end-users (homeowners)</li></ul>` },
       { heading: 'Design Approach', body: `Conducted extensive user research with both technician and homeowner user groups to understand their different needs and workflows. Created information architecture that prioritizes the most critical data while keeping advanced features accessible.` },
       { heading: 'Key Features', body: `<ul><li>Real-time status overview with color-coded health indicators</li><li>Hierarchical device organization by location and system type</li><li>Quick action buttons for common remote operations</li><li>Detailed diagnostic views with historical data and trends</li><li>Responsive design that works across desktop, tablet, and mobile devices</li></ul>` },
       { heading: 'Technical Considerations', body: `Worked closely with engineering to ensure the dashboard could handle real-time data updates efficiently. Designed with scalability in mind to accommodate growing numbers of connected devices and new device types.` }
     ],
     impacts: [
       { value: '88%', label: 'System Visibility', desc: 'Increased visibility across units' },
       { value: '41%', label: 'Troubleshooting Time', desc: 'Cut average troubleshooting time per site' },
       { value: '76%', label: 'User Satisfaction', desc: 'Boosted dashboard usability (beta feedback)' }
     ]
   },
   
     project6: {
     title: 'A Clean Digital Presence for Embedded Systems',
     subtitle: 'Lightweight, fast-loading static marketing site for firmware-focused company',
     images: [
       'assets/images/projects/circadia.png'
     ],
     overviewTags: [
       'Role: Web Designer & Developer',
       'Type: Marketing Website', 'Type: Static Site',
       'Tools: HTML/CSS', 'Tools: JavaScript',
       'Timeline: Q2 2024 - Q3 2024'
     ],
     sections: [
       { heading: 'Problem', body: `A firmware-focused embedded systems company needed a professional web presence that could effectively communicate their technical expertise while being accessible to both developers and decision-makers. Their existing site was slow, outdated, and not optimized for search engines or lead generation.` },
       { heading: 'Objectives', body: `<ul><li>Create a lightweight, fast-loading static site optimized for performance</li><li>Highlight real-time solutions and technical capabilities in an accessible way</li><li>Provide easy access to documentation and service offerings</li><li>Optimize for SEO to improve organic discovery</li><li>Design with developer-first usability principles</li></ul>` },
       { heading: 'Design Approach', body: `Focused on clean, minimal design that lets the technical content shine. Prioritized page speed and accessibility, using modern web standards and optimized assets. Created clear information architecture that guides both technical and business users to relevant content quickly.` },
       { heading: 'Key Features', body: `<ul><li>Ultra-fast loading times through optimized static site generation</li><li>Clean, developer-friendly documentation navigation</li><li>Clear service offering presentations with technical depth</li><li>Mobile-responsive design optimized for all device types</li><li>SEO-optimized content structure and metadata</li><li>Streamlined contact and lead capture forms</li></ul>` },
       { heading: 'Technical Implementation', body: `Built as a static site for maximum performance and reliability. Implemented modern CSS and JavaScript best practices, optimized images and assets, and structured content for search engine visibility. Used performance budgets to ensure sub-1.2 second load times globally.` },
       { heading: 'Results & Impact', body: `The new site significantly improved user engagement and lead generation. The combination of better performance, clearer messaging, and improved SEO resulted in substantial business impact within the first 60 days of launch.` }
     ],
     impacts: [
       { value: '39%', label: 'Bounce Rate Reduction', desc: 'Decreased bounce rate after launch' },
       { value: '1.2s', label: 'Page Load Time', desc: 'Improved average load time globally' },
       { value: '2.3x', label: 'Lead Generation', desc: 'More inbound leads within 60 days post-launch' }
     ]
   },
  
};

// Modal overlay creation
function createProjectModal(projectKey) {
  const data = projectData[projectKey];
  if (!data) return;
  // Remove any existing modal
  const oldModal = document.getElementById('project-modal-overlay');
  if (oldModal) oldModal.remove();

  // Modal structure
  const overlay = document.createElement('div');
  overlay.id = 'project-modal-overlay';
  overlay.innerHTML = `
    <div class="project-modal-backdrop"></div>
    <div class="project-modal-content">
      <button class="project-modal-close" aria-label="Close">&times;</button>
      <div class="project-modal-header">
        <h1 class="project-modal-title">${data.title}</h1>
        <h2 class="project-modal-subtitle">${data.subtitle}</h2>
      </div>
      <div class="project-modal-images">
        ${data.images.map(src => `<img src="${src}" class="project-modal-img" alt="${data.title} image">`).join('')}
      </div>
      <div class="project-modal-tags">
        ${data.overviewTags.map(tag => `<span class="project-modal-tag">${tag}</span>`).join('')}
      </div>
      <div class="project-modal-sections">
        ${data.sections.map(sec => `<section><h3>${sec.heading}</h3><div>${sec.body}</div></section>`).join('')}
      </div>
      <div class="project-modal-impacts">
        <h3>Impacts</h3>
        <div class="project-modal-impacts-stats">
          ${data.impacts.map(imp => `
            <div class="project-modal-impact-stat">
              <div class="impact-stat-value">${imp.value}</div>
              <div class="impact-stat-label">${imp.label}<br><span class="impact-stat-desc">${imp.desc}</span></div>
            </div>
          `).join('')}
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
  function closeModal() {
    overlay.classList.remove('open');
    setTimeout(() => overlay.remove(), 350);
  }
}

// Attach click listeners to project cards and add hover borders
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.work-card-link[data-project]').forEach(card => {
    // Add click listener
    card.addEventListener('click', () => {
      const key = card.getAttribute('data-project');
      createProjectModal(key);
    });
    
    // Remove hover border for mature, minimal design
    // No hover effects needed
  });
});

// --- Modal overlay styles (injected for demo, move to CSS file for production) ---
const modalStyles = document.createElement('style');
modalStyles.innerHTML = `
#project-modal-overlay {
  position: fixed; z-index: 9999; inset: 0; display: flex; align-items: center; justify-content: center;
  pointer-events: none; opacity: 0; transition: opacity 0.35s cubic-bezier(.77,0,.18,1);
}
#project-modal-overlay.open { opacity: 1; pointer-events: auto; }
.project-modal-backdrop {
  position: absolute; inset: 0; background: rgba(16,24,42,0.72); backdrop-filter: blur(8px);
}
.project-modal-content {
  position: relative; background: rgba(255,255,255,0.18); backdrop-filter: blur(18px) saturate(1.4); -webkit-backdrop-filter: blur(18px) saturate(1.4);
  border-radius: 28px; box-shadow: 0 2px 16px #0007, 0 1.5px 8px #fff2 inset;
  padding: 48px 36px 36px 36px; max-width: 820px; width: 96vw; max-height: 90vh; overflow-y: auto;
  display: flex; flex-direction: column; align-items: center; animation: modalIn 0.5s cubic-bezier(.77,0,.18,1);
}
@keyframes modalIn {
  from { transform: translateY(60px) scale(0.97); opacity: 0; }
  to { transform: none; opacity: 1; }
}
.project-modal-close {
  position: absolute; top: 18px; right: 24px; background: none; border: none; color: #fff; font-size: 2.2rem; cursor: pointer; opacity: 0.7; transition: opacity 0.2s; z-index: 2;
}
.project-modal-close:hover { opacity: 1; }
.project-modal-header { text-align: center; margin-bottom: 18px; }
.project-modal-title { font-size: 2.1rem; font-weight: 700; color: #eaf6fb; margin: 0; }
.project-modal-subtitle { font-size: 1.2rem; color: #b0c4d4; margin: 0 0 18px 0; }
.project-modal-images { display: flex; gap: 24px; justify-content: center; align-items: flex-end; margin-bottom: 24px; flex-wrap: wrap; }
.project-modal-img { width: 160px; height: 320px; object-fit: cover; border-radius: 16px; box-shadow: 0 4px 24px #6eeaff22; background: #eaeaea; border: 1.5px solid #ececec; }
.project-modal-tags { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 18px; }
.project-modal-tag { background: #f0f0f7; color: #5a4edc; font-size: 0.98rem; font-weight: 600; border-radius: 8px; padding: 5px 14px; display: inline-block; letter-spacing: 0.01em; }
.project-modal-sections { width: 100%; margin-bottom: 24px; }
.project-modal-sections section { margin-bottom: 18px; }
.project-modal-sections h3 { font-size: 1.13rem; color: #4e8cff; font-weight: 700; margin: 0 0 8px 0; }
.project-modal-sections ul { margin: 0 0 0 18px; }
.project-modal-impacts { width: 100%; margin-top: 18px; }
.project-modal-impacts-stats { display: flex; gap: 32px; flex-wrap: wrap; }
.project-modal-impact-stat { background: rgba(255,255,255,0.18); border-radius: 16px; box-shadow: 0 1.5px 4px #fff2 inset, 0 2px 8px #0007, 0 1px 4px #2a3a5e22; border: 1px solid rgba(255,255,255,0.38); outline: 1.5px solid rgba(255,255,255,0.12); outline-offset: -2px; color: #4e8cff; min-width: 120px; padding: 18px 18px 14px 18px; text-align: center; margin-bottom: 0; transition: background 0.2s, box-shadow 0.2s, transform 0.2s; flex: 1 1 0; display: flex; flex-direction: column; align-items: center; }
.impact-stat-value { display: block; font-size: 2.1rem; font-weight: 800; color: #6eeaff; margin-bottom: 6px; letter-spacing: 0.01em; }
.impact-stat-label { font-size: 0.95rem; color: #b0c4d4; font-weight: 400; margin-top: 2px; }
.impact-stat-desc { font-size: 0.92rem; color: #888; font-weight: 400; }
`;
document.head.appendChild(modalStyles); 
document.head.appendChild(modalStyles); 