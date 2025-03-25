document.addEventListener('DOMContentLoaded', () => {
    const t = TrelloPowerUp.iframe();
    
    // Safe element handling
    const closeButton = document.querySelector('.close-button');
    if (closeButton) {
      closeButton.addEventListener('click', () => t.closeModal().catch(console.error));
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
        
        document.getElementById('card-modal-content').innerHTML = content;
        return t.sizeTo(document.body);
      })
      .catch(error => {
        console.error('Card modal error:', error);
        ModalUtils.showError(`Failed to load: ${error.message}`);
        return t.sizeTo(document.body);
      });
  });