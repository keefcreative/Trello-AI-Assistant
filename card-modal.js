document.addEventListener('DOMContentLoaded', () => {
    try {
      const t = TrelloPowerUp.iframe();
      
      // Create a content wrapper for reliable sizing
      const contentWrapper = document.createElement('div');
      contentWrapper.id = 'content-wrapper';
      contentWrapper.style.minHeight = '100px';
      document.body.appendChild(contentWrapper);
      
      // Move existing content into wrapper
      const existingContent = document.querySelector('.modal-container');
      if (existingContent) {
        contentWrapper.appendChild(existingContent);
      }
  
      // Safe element handling
      const closeButton = document.querySelector('.close-button');
      if (closeButton) {
        closeButton.addEventListener('click', () => {
          t.closeModal().catch(console.error);
        });
      }
  
      ModalUtils.setupModal(t, 'card-modal-content')
        .then(context => {
          const content = `
            <div class="card-info">
              <h3>Card Assistant</h3>
              <p>Card ID: ${context.card || 'unknown'}</p>
              <div class="placeholder-ui">
                <p>AI features will appear here:</p>
                <ul>
                  <li>Task analysis</li>
                  <li>Automation suggestions</li>
                  <li>Content generation</li>
                </ul>
              </div>
            </div>
          `;
          
          const container = document.getElementById('card-modal-content');
          if (container) {
            container.innerHTML = content;
          }
          
          return t.sizeTo('#content-wrapper').catch(() => t.sizeTo(document.body));
        })
        .catch(error => {
          console.error('Card modal error:', error);
          ModalUtils.showError(`Failed to load: ${error.message}`);
          return t.sizeTo('#content-wrapper').catch(() => t.sizeTo(document.body));
        });
    } catch (error) {
      console.error('Initialization error:', error);
      ModalUtils.showError('Failed to initialize: ' + error.message);
    }
  });