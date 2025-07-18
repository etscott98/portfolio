// Mobile navigation menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// Demo contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! (Demo only)');
    contactForm.reset();
  });
}

// Staggered fade-in for project cards
window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach((card, i) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(40px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.7s cubic-bezier(.77,0,.18,1), transform 0.7s cubic-bezier(.77,0,.18,1)';
      card.style.opacity = 1;
      card.style.transform = 'none';
    }, 400 + i * 200);
  });

  // Filter bar animation (demo only)
  const filterItems = document.querySelectorAll('.filter-list li');
  filterItems.forEach(item => {
    item.addEventListener('click', () => {
      filterItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      // Optionally, filter projects here
    });
  });

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
});

document.addEventListener('DOMContentLoaded', () => {
  // Enhanced loading animation
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.6s ease-in-out';
  
  // Smooth reveal after load
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
  
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

  // Enhanced dynamic typing effect for hero text
  const heroIntro = document.querySelector('.hero-desc-intro');
  if (heroIntro) {
    const originalText = heroIntro.textContent;
    heroIntro.textContent = '';
    let charIndex = 0;
    
    function typeWriter() {
      if (charIndex < originalText.length) {
        const char = originalText.charAt(charIndex);
        heroIntro.textContent += char;
        charIndex++;
        
        // Add cursor blink effect
        heroIntro.style.borderRight = '2px solid var(--primary-cyan)';
        
        // Variable typing speed for more natural feel
        const speed = char === ' ' ? 100 : Math.random() * 100 + 30;
        setTimeout(typeWriter, speed);
      } else {
        // Remove cursor after typing is complete
        setTimeout(() => {
          heroIntro.style.borderRight = 'none';
        }, 1000);
      }
    }
    
    // Start typing after a short delay
    setTimeout(typeWriter, 800);
  }

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

  // Enhanced dynamic color shift and magnetic effects
  const reactiveBgElement = document.querySelector('.reactive-bg');
  let scrollHue = 200; // Base blue color
  let mouseX = 50, mouseY = 50; // Center position
  let targetMouseX = 50, targetMouseY = 50; // For smooth interpolation
  
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
    
    // Smooth mouse tracking with interpolation
    let mouseAnimationFrame;
    document.addEventListener('mousemove', (e) => {
      targetMouseX = (e.clientX / window.innerWidth) * 100;
      targetMouseY = (e.clientY / window.innerHeight) * 100;
    });
    
    // Smooth interpolation for fluid mouse following
    function animateMousePosition() {
      mouseX += (targetMouseX - mouseX) * 0.1;
      mouseY += (targetMouseY - mouseY) * 0.1;
      updateBackground();
      mouseAnimationFrame = requestAnimationFrame(animateMousePosition);
    }
    animateMousePosition();
    
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
      'assets/images/projects/flologic/team3.png',
      'assets/images/projects/flologic/all-three-device-tree.png',
      'assets/images/projects/flologic/1DNt8SRwauBEATFCRtjQ1Lvmjw.png'
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
  project4: {
    title: 'Project Title Placeholder',
    subtitle: 'Project Subtitle Placeholder',
    images: [
      'assets/images/projects/flologic/team3.png',
      'assets/images/projects/flologic/all-three-device-tree.png',
      'assets/images/projects/flologic/1DNt8SRwauBEATFCRtjQ1Lvmjw.png'
    ],
    overviewTags: [
      'Role: Designer', 'Type: Mobile', 'Type: Design System', 'Tools: Figma', 'Tools: Illustrator', 'Timeline: Q1 2025 - Q2 2025'
    ],
    sections: [
      { heading: 'What I did', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.' },
      { heading: 'Fast go-to-market', body: 'Aliquam erat volutpat. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.' }
    ],
    impacts: [
      { value: '30', label: 'Mapped & Prototyped', desc: 'Unique brand-catered screens.' },
      { value: '40+', label: 'Created a', desc: 'Token design system.' },
      { value: '12', label: 'Built', desc: 'Custom animations.' }
    ]
  },
  project5: {
    title: 'Project Title Placeholder',
    subtitle: 'Project Subtitle Placeholder',
    images: [
      'assets/images/projects/flologic/team3.png',
      'assets/images/projects/flologic/all-three-device-tree.png',
      'assets/images/projects/flologic/1DNt8SRwauBEATFCRtjQ1Lvmjw.png'
    ],
    overviewTags: [
      'Role: Designer', 'Type: Mobile', 'Type: Design System', 'Tools: Figma', 'Tools: Illustrator', 'Timeline: Q1 2025 - Q2 2025'
    ],
    sections: [
      { heading: 'What I did', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.' },
      { heading: 'Fast go-to-market', body: 'Aliquam erat volutpat. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.' }
    ],
    impacts: [
      { value: '30', label: 'Mapped & Prototyped', desc: 'Unique brand-catered screens.' },
      { value: '40+', label: 'Created a', desc: 'Token design system.' },
      { value: '12', label: 'Built', desc: 'Custom animations.' }
    ]
  }
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

// Attach click listeners to project cards
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.work-card-link[data-project]').forEach(card => {
    card.addEventListener('click', () => {
      const key = card.getAttribute('data-project');
      createProjectModal(key);
    });
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