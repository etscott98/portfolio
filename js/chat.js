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
      
      // Add AI response
      this.addMessage(response, 'ai');
      
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
    
    const messageText = document.createElement('p');
    messageText.textContent = content;
    
    messageContent.appendChild(messageText);
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(messageContent);
    
    this.chatMessages?.appendChild(messageDiv);
    this.scrollToBottom();
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