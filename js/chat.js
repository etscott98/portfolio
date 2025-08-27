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
    
    // Send message on Enter key
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

    // Auto-resize input
    this.chatInput?.addEventListener('input', () => {
      this.chatInput.style.height = 'auto';
      this.chatInput.style.height = this.chatInput.scrollHeight + 'px';
    });
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
      this.addMessage("I'm sorry, I'm having trouble connecting right now. Please try again in a moment!", 'ai');
      this.updateStatus('Connection error - please try again');
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

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    return data.response;
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
        '<a href="https://linkedin.com/in/erinescott" target="_blank" rel="noopener noreferrer" style="color: var(--primary-cyan); text-decoration: underline;">LinkedIn</a>')
      .replace(/on LinkedIn/gi, 
        'on <a href="https://linkedin.com/in/erinescott" target="_blank" rel="noopener noreferrer" style="color: var(--primary-cyan); text-decoration: underline;">LinkedIn</a>')
      .replace(/via LinkedIn/gi, 
        'via <a href="https://linkedin.com/in/erinescott" target="_blank" rel="noopener noreferrer" style="color: var(--primary-cyan); text-decoration: underline;">LinkedIn</a>');

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
      this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
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