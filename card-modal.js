// Wait for both DOM and Trello to be ready
document.addEventListener('DOMContentLoaded', () => {
    // Verify Trello PowerUp is loaded
    if (!window.TrelloPowerUp) {
      console.error('Trello PowerUp not loaded');
      ModalUtils.showError('Trello PowerUp not loaded');
      return;
    }
  
    const t = TrelloPowerUp.iframe();
    
    // Verify we got a valid instance
    if (!t || typeof t.initialize !== 'function') {
      console.error('Invalid Trello instance');
      ModalUtils.showError('Invalid Trello connection');
      return;
    }
  
    // Create content wrapper
    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'content-wrapper';
    document.body.appendChild(contentWrapper);
    
    // Move existing content into wrapper
    const existingContent = document.querySelector('.modal-container');
    if (existingContent) {
      contentWrapper.appendChild(existingContent);
    }
  
    // Close button handler
    const closeButton = document.querySelector('.close-button');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        t.closeModal().catch(err => console.error('Close failed:', err));
      });
    }
  
    // Main initialization
    ModalUtils.setupModal(t, 'card-modal-content')
      .then(context => {
        console.log('Trello context:', context);
        
        const content = `
          <div class="card-info">
            <h3>Card Assistant</h3>
            <p>Card: ${context.card || 'unknown'}</p>
            <div class="ai-placeholder">
              <p>AI features coming soon:</p>
              <ul>
                <li>Task analysis</li>
                <li>Content suggestions</li>
                <li>Automations</li>
              </ul>
            </div>
          </div>
        `;
        
        const container = document.getElementById('card-modal-content');
        if (container) {
          container.innerHTML = content;
        }
        
        // Final sizing with fallback
        return t.sizeTo('.content-wrapper')
          .catch(() => t.sizeTo(document.body))
          .catch(err => console.warn('Final sizing failed:', err));
      })
      .catch(error => {
        console.error('Card modal error:', error);
        ModalUtils.showError(error.message);
        
        // Fallback sizing even in error state
        return t.sizeTo('.content-wrapper')
          .catch(() => t.sizeTo(document.body))
          .catch(err => console.warn('Error state sizing failed:', err));
      });
  });