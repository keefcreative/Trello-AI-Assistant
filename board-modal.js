document.addEventListener('DOMContentLoaded', () => {
    if (!window.TrelloPowerUp) {
      console.error('Trello PowerUp not loaded');
      ModalUtils.showError('Trello PowerUp not loaded');
      return;
    }
  
    const t = TrelloPowerUp.iframe();
    
    if (!t || typeof t.initialize !== 'function') {
      console.error('Invalid Trello instance');
      ModalUtils.showError('Invalid Trello connection');
      return;
    }
  
    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'content-wrapper';
    document.body.appendChild(contentWrapper);
    
    const existingContent = document.querySelector('.modal-container');
    if (existingContent) {
      contentWrapper.appendChild(existingContent);
    }
  
    const closeButton = document.querySelector('.close-button');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        t.closeModal().catch(err => console.error('Close failed:', err));
      });
    }
  
    ModalUtils.setupModal(t, 'board-modal-content')
      .then(context => {
        console.log('Board context:', context);
        
        const content = `
          <div class="board-info">
            <h3>Board Assistant</h3>
            <p>Board: ${context.board || 'unknown'}</p>
            <div class="ai-placeholder">
              <p>Board AI features coming soon:</p>
              <ul>
                <li>Workflow analysis</li>
                <li>Team productivity</li>
                <li>Board optimization</li>
              </ul>
            </div>
          </div>
        `;
        
        const container = document.getElementById('board-modal-content');
        if (container) {
          container.innerHTML = content;
        }
        
        return t.sizeTo('.content-wrapper')
          .catch(() => t.sizeTo(document.body))
          .catch(err => console.warn('Final sizing failed:', err));
      })
      .catch(error => {
        console.error('Board modal error:', error);
        ModalUtils.showError(error.message);
        
        return t.sizeTo('.content-wrapper')
          .catch(() => t.sizeTo(document.body))
          .catch(err => console.warn('Error state sizing failed:', err));
      });
  });