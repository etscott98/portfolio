// =============================================================================
//   AI CHAT FUNCTIONALITY - SECURE VERSION
// =============================================================================

class ErinAIChat {
  constructor() {
    this.apiUrl = '/api/chat'; // Use secure backend endpoint
    this.isProcessing = false;
    
    this.init();
  }

  init() {
    this.chatMessages = document.getElementById('chat-messages');
    this.chatInput = document.getElementById('chat-input');
    this.chatSend = document.getElementById('chat-send');
    this.chatStatus = document.getElementById('chat-status');
    this.suggestions = document.getElementById('chat-suggestions');

    this.setupEventListeners();
    this.hideSuggestionsAfterDelay();
  }

  setupEventListeners() {
    // Send message on button click
    this.chatSend?.addEventListener('click', () => this.sendMessage());
    
    // Send message on Enter key (but allow Shift+Enter for new lines on mobile)
    this.chatInput?.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        this.sendMessage();
      }
    });

    // Suggestion buttons
    document.querySelectorAll('.suggestion-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const question = btn.dataset.question;
        this.chatInput.value = question;
        this.sendMessage();
        this.hideSuggestions();
      });
    });

    // Auto-resize input with mobile optimization
    this.chatInput?.addEventListener('input', () => {
      this.autoResizeInput();
    });

    // Mobile-specific optimizations
    if (this.isMobileDevice()) {
      this.setupMobileOptimizations();
      this.setupMobileTapColors();
    }
  }

  isMobileDevice() {
    return window.innerWidth <= 767 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  setupMobileOptimizations() {
    // Prevent zoom on input focus on iOS
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      this.chatInput?.addEventListener('focus', () => {
        document.querySelector('meta[name=viewport]')?.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
      });
      
      this.chatInput?.addEventListener('blur', () => {
        document.querySelector('meta[name=viewport]')?.setAttribute('content', 'width=device-width, initial-scale=1.0');
      });
    }

    // Better scrolling behavior on mobile
    this.chatMessages?.addEventListener('touchstart', () => {
      this.chatMessages.style.overflowY = 'auto';
    });

    // Hide suggestions after first interaction on mobile
    let hasInteracted = false;
    this.chatInput?.addEventListener('focus', () => {
      if (!hasInteracted) {
        hasInteracted = true;
        setTimeout(() => this.hideSuggestions(), 3000);
      }
    });
  }

  setupMobileTapColors() {
    // Initialize mobile color cycling system to match desktop
    this.currentColorIndex = 0;
    this.mobileHueValues = [
      200, // Blue (initial)
      230, // Blue-Cyan  
      260, // Purple
      320, // Pink-Orange
      360  // Orange-Red
    ];

    // Add tap listeners to chat-specific elements
    this.addMobileColorTrigger(this.chatSend);
    
    // Add tap listeners to suggestion buttons
    document.querySelectorAll('.suggestion-btn').forEach(btn => {
      this.addMobileColorTrigger(btn);
    });

    // Add tap listener to chat container for easy access
    const chatContainer = document.querySelector('.chat-container');
    if (chatContainer) {
      this.addMobileColorTrigger(chatContainer);
    }

    // Add tap listener to chat header
    const chatHeader = document.querySelector('.chat-header');
    if (chatHeader) {
      this.addMobileColorTrigger(chatHeader);
    }

    // Add global tap listeners to main areas outside chat
    this.setupGlobalMobileTapColors();
  }

  setupGlobalMobileTapColors() {
    // Add tap listeners to main navigation areas
    const leftColumn = document.querySelector('.left-column-container');
    if (leftColumn) {
      this.addMobileColorTrigger(leftColumn);
    }

    // Add tap listeners to toggle buttons
    document.querySelectorAll('.toggle-btn').forEach(btn => {
      this.addMobileColorTrigger(btn);
    });

    // Add tap listeners to work cards
    document.querySelectorAll('.work-card').forEach(card => {
      this.addMobileColorTrigger(card);
    });

    // Add tap listener to empty areas of main columns
    const mainColumns = document.querySelector('.main-columns');
    if (mainColumns) {
      mainColumns.addEventListener('touchstart', (e) => {
        // Only trigger if tapping background areas, not interactive elements
        if (e.target === mainColumns || 
            e.target.classList.contains('left-column') ||
            e.target.classList.contains('right-column') ||
            e.target.classList.contains('work-section')) {
          this.cycleMobileBackgroundColor();
        }
      });
    }
  }

  addMobileColorTrigger(element) {
    if (!element) return;
    
    // Add touch-based color cycling
    element.addEventListener('touchstart', (e) => {
      this.cycleMobileBackgroundColor();
    });
  }

  cycleMobileBackgroundColor() {
    if (!this.isMobileDevice()) return;

    const reactiveBg = document.querySelector('.reactive-bg');
    if (!reactiveBg) return;

    // Move to next color in sequence
    this.currentColorIndex = (this.currentColorIndex + 1) % this.mobileHueValues.length;
    const currentHue = this.mobileHueValues[this.currentColorIndex];
    
    // Apply the same HSL color system as desktop
    const baseColor = `hsla(${currentHue}, 50%, 25%, 0.4)`;
    const glowColor = `hsla(${currentHue}, 80%, 65%, 0.3)`;
    const secondaryGlow = `hsla(${currentHue + 40}, 70%, 60%, 0.15)`;
    
    const backgroundStyle = `
      radial-gradient(circle 1200px at 50% 50%, ${glowColor} 0%, ${secondaryGlow} 40%, transparent 70%),
      radial-gradient(circle 800px at 50% 50%, ${secondaryGlow} 0%, transparent 50%),
      linear-gradient(135deg, ${baseColor} 0%, #10182a 100%)
    `;
    
    // Apply the background with same system as desktop
    reactiveBg.style.setProperty('background', backgroundStyle, 'important');
    
    // Update CSS custom properties to match the color
    const primaryCyan = `hsl(${currentHue + 30}, 85%, 75%)`;
    const primaryBlue = `hsl(${currentHue - 20}, 75%, 70%)`;
    const primaryCyanShadow = `hsl(${currentHue + 30}, 85%, 75%, 0.2)`;
    const primaryCyanBg = `hsl(${currentHue + 30}, 85%, 75%, 0.13)`;
    const accentGradient = `linear-gradient(135deg, hsl(${currentHue + 30}, 85%, 75%) 0%, hsl(${currentHue - 20}, 75%, 70%) 50%, hsl(${currentHue + 60}, 70%, 65%) 100%)`;
    
    document.documentElement.style.setProperty('--primary-cyan', primaryCyan, 'important');
    document.documentElement.style.setProperty('--primary-blue', primaryBlue, 'important');
    document.documentElement.style.setProperty('--primary-cyan-shadow', primaryCyanShadow, 'important');
    document.documentElement.style.setProperty('--primary-cyan-bg', primaryCyanBg, 'important');
    document.documentElement.style.setProperty('--accent-gradient', accentGradient, 'important');
    document.documentElement.style.setProperty('--gradient-primary', accentGradient, 'important');
    
    // Update work card specific properties
    const workCardImageGradient = `linear-gradient(135deg, hsla(${currentHue}, 80%, 65%, 0.1), hsla(${currentHue - 20}, 70%, 60%, 0.05))`;
    document.documentElement.style.setProperty('--work-card-image-gradient', workCardImageGradient, 'important');

    // Add subtle visual feedback
    this.showColorChangeIndicator();
  }

  showColorChangeIndicator() {
    // Create a subtle pulse effect to show color change
    const indicator = document.createElement('div');
    indicator.style.cssText = `
      position: fixed;
      top: 20%;
      left: 50%;
      transform: translateX(-50%);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgba(110, 234, 255, 0.15);
      border: 1px solid rgba(110, 234, 255, 0.3);
      pointer-events: none;
      z-index: 1000;
      animation: colorChangePulse 0.5s ease-out forwards;
    `;
    
    document.body.appendChild(indicator);
    
    // Remove after animation
    setTimeout(() => {
      indicator.remove();
    }, 500);
  }

  autoResizeInput() {
    if (this.chatInput) {
      this.chatInput.style.height = 'auto';
      const maxHeight = this.isMobileDevice() ? 100 : 120;
      const newHeight = Math.min(this.chatInput.scrollHeight, maxHeight);
      this.chatInput.style.height = newHeight + 'px';
    }
  }

  async sendMessage() {
    const message = this.chatInput?.value.trim();
    if (!message || this.isProcessing) return;

    // Clear input and hide suggestions
    this.chatInput.value = '';
    this.hideSuggestions();

    // Add user message
    this.addMessage(message, 'user');

    // Show typing indicator
    this.showTypingIndicator();

    try {
      this.isProcessing = true;
      this.updateSendButton(true);
      
      const response = await this.callBackendAPI(message);
      
      // Remove typing indicator
      this.hideTypingIndicator();
      
      // Stream the AI response with typing effect
      await this.streamAIResponse(response);
      
    } catch (error) {
      console.error('Chat error:', error);
      this.hideTypingIndicator();
      
      // Handle rate limiting errors specifically
      if (error.message.includes('429') || error.message.includes('Too many')) {
        this.addMessage("I'm receiving a lot of requests right now. Please wait a few minutes before sending another message. Thanks for your patience!", 'ai');
        this.updateStatus('Rate limit reached - please wait before sending another message');
      } else {
        this.addMessage("I'm sorry, I'm having trouble connecting right now. Please try again in a moment!", 'ai');
        this.updateStatus('Connection error - please try again');
      }
    } finally {
      this.isProcessing = false;
      this.updateSendButton(false);
    }
  }

  async callBackendAPI(userMessage) {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: userMessage
      })
    });

    // Check rate limit headers and show warnings
    this.checkRateLimitHeaders(response);

    if (!response.ok) {
      // Handle rate limiting specifically
      if (response.status === 429) {
        const errorData = await response.json().catch(() => ({}));
        const retryAfter = errorData.retryAfter || 1200; // Default to 20 minutes
        throw new Error(`Rate limit exceeded. Please wait ${Math.round(retryAfter / 60)} minutes before trying again.`);
      }
      
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    return data.response;
  }

  checkRateLimitHeaders(response) {
    const remaining = response.headers.get('RateLimit-Remaining');
    const limit = response.headers.get('RateLimit-Limit');
    
    if (remaining !== null && limit !== null) {
      const remainingCount = parseInt(remaining);
      const limitCount = parseInt(limit);
      
      // Show warning when user has used 80% of their rate limit
      if (remainingCount <= limitCount * 0.2 && remainingCount > 0) {
        this.updateStatus(`${remainingCount} messages remaining in current window`);
      }
      
      // Log rate limit info for debugging
      console.log(`Rate limit: ${remainingCount}/${limitCount} remaining`);
    }
  }

  addMessage(content, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${type}-message`;
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = type === 'user' ? '👤' : '🤖';
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    
    if (type === 'ai') {
      // Format AI responses with proper paragraphs and spacing
      messageContent.innerHTML = this.formatAIResponse(content);
    } else {
      // User messages remain as simple text
      const messageText = document.createElement('p');
      messageText.textContent = content;
      messageContent.appendChild(messageText);
    }
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(messageContent);
    
    this.chatMessages?.appendChild(messageDiv);
    this.scrollToBottom();
  }

  formatAIResponse(content) {
    // Clean and format the AI response for better readability
    let formatted = content
      // Format headers FIRST (before other processing)
      .replace(/^###?\s+(.+)$/gm, '<h3>$1</h3>')
      // Format bullet points with * - • 
      .replace(/^[\*\-•]\s+(.+)$/gm, '<li>$1</li>')
      // Format numbered lists
      .replace(/^\d+\.\s+(.+)$/gm, '<li>$1</li>')
      // Format bold text (markdown-style)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      // Convert double line breaks to paragraph breaks
      .replace(/\n\n+/g, '</p><p>')
      // Convert single line breaks to line breaks within paragraphs
      .replace(/\n/g, '<br>')
      // Add spacing around headers
      .replace(/<h3>/g, '<h3 style="margin: 16px 0 8px 0; font-size: 1rem; color: var(--primary-cyan);">')
      // Clean up extra spaces
      .trim();

    // Wrap in paragraphs if not already wrapped
    if (!formatted.startsWith('<')) {
      formatted = '<p>' + formatted + '</p>';
    }

    // Handle lists properly - group consecutive <li> elements
    formatted = formatted.replace(/(<li>.*?<\/li>)/gs, (match) => {
      return `<ul style="margin: 8px 0; padding-left: 16px;">${match}</ul>`;
    });

    // Fix nested list issues
    formatted = formatted.replace(/<\/ul>\s*<ul[^>]*>/g, '');

    // Clean up any remaining markdown artifacts
    formatted = formatted
      .replace(/^\*\s+/gm, '') // Remove remaining bullet points at start of lines
      .replace(/^##+\s*/gm, '') // Remove remaining headers
      .replace(/<br>\s*<li>/g, '<li>') // Clean up line breaks before list items
      .replace(/<\/li>\s*<br>/g, '</li>'); // Clean up line breaks after list items

    // Convert email addresses to mailto links
    formatted = formatted.replace(
      /lunarspired@gmail\.com/g, 
      '<a href="mailto:lunarspired@gmail.com" style="color: var(--primary-cyan); text-decoration: underline;">lunarspired@gmail.com</a>'
    );

    // Convert LinkedIn mentions to clickable links
    formatted = formatted
      .replace(/LinkedIn(?:\s+profile)?/gi, 
        '<a href="https://www.linkedin.com/in/erin-s-6369071b2/" target="_blank" rel="noopener noreferrer" style="color: var(--primary-cyan); text-decoration: underline;">LinkedIn</a>')
      .replace(/on LinkedIn/gi, 
        'on <a href="https://www.linkedin.com/in/erin-s-6369071b2/" target="_blank" rel="noopener noreferrer" style="color: var(--primary-cyan); text-decoration: underline;">LinkedIn</a>')
      .replace(/via LinkedIn/gi, 
        'via <a href="https://www.linkedin.com/in/erin-s-6369071b2/" target="_blank" rel="noopener noreferrer" style="color: var(--primary-cyan); text-decoration: underline;">LinkedIn</a>');

    return formatted;
  }

  async streamAIResponse(text) {
    // Create the AI message container
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message ai-message';
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = '🤖';
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(messageContent);
    this.chatMessages?.appendChild(messageDiv);
    
    // Stream the response with typing effect
    await this.typeWriterEffect(messageContent, text);
  }

  async typeWriterEffect(container, text) {
    const words = text.split(' ');
    let currentText = '';
    
    for (let i = 0; i < words.length; i++) {
      currentText += (i > 0 ? ' ' : '') + words[i];
      
      // Format and display the current text
      container.innerHTML = this.formatAIResponse(currentText);
      
      // Scroll to bottom
      this.scrollToBottom();
      
      // Add a small delay between words for streaming effect
      await new Promise(resolve => setTimeout(resolve, 60));
    }
  }

  showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-message ai-message typing-message';
    typingDiv.innerHTML = `
      <div class="message-avatar">🤖</div>
      <div class="message-content">
        <div class="typing-indicator">
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
        </div>
      </div>
    `;
    
    this.chatMessages?.appendChild(typingDiv);
    this.scrollToBottom();
  }

  hideTypingIndicator() {
    const typingMessage = this.chatMessages?.querySelector('.typing-message');
    typingMessage?.remove();
  }

  hideSuggestions() {
    if (this.suggestions) {
      this.suggestions.style.display = 'none';
    }
  }

  hideSuggestionsAfterDelay() {
    setTimeout(() => {
      this.hideSuggestions();
    }, 10000); // Hide after 10 seconds
  }

  updateSendButton(disabled) {
    if (this.chatSend) {
      this.chatSend.disabled = disabled;
      this.chatSend.style.opacity = disabled ? '0.5' : '1';
    }
  }

  updateStatus(message) {
    if (this.chatStatus) {
      this.chatStatus.textContent = message;
      setTimeout(() => {
        this.chatStatus.textContent = '';
      }, 3000);
    }
  }

  scrollToBottom() {
    if (this.chatMessages) {
      // Smooth scrolling with mobile optimization
      if (this.isMobileDevice()) {
        // Use requestAnimationFrame for smoother mobile scrolling
        requestAnimationFrame(() => {
          this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
        });
      } else {
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
      }
    }
  }

  // Enhanced mobile scroll behavior for new messages
  scrollToBottomSmooth() {
    if (this.chatMessages) {
      if (this.isMobileDevice()) {
        // For mobile, use smooth scrolling with better performance
        this.chatMessages.scrollTo({
          top: this.chatMessages.scrollHeight,
          behavior: 'smooth'
        });
      } else {
        this.scrollToBottom();
      }
    }
  }
}

// Initialize chat when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Only initialize if chat elements exist
  if (document.getElementById('chat-messages')) {
    window.erinAIChat = new ErinAIChat();
  }
});