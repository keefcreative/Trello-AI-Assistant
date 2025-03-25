document.addEventListener('DOMContentLoaded', () => {
    const t = TrelloPowerUp.iframe();
    
    const closeButton = document.querySelector('.close-button');
    if (closeButton) {
      closeButton.addEventListener('click', () => t.closeModal().catch(console.error));
    }
  
    ModalUtils.setupModal(t, 'board-modal-content')
      .then(context => {
        const content = `
          <div class="board-info">
            <h3>Board Assistant</h3>
            <p>Board ID: ${context.board || 'unknown'}</p>
            <div class="placeholder-ui">
              <p>AI features will appear here:</p>
              <ul>
                <li>Board analytics</li>
                <li>Workflow optimization</li>
                <li>Team insights</li>
              </ul>
            </div>
          </div>
        `;
        
        document.getElementById('board-modal-content').innerHTML = content;
        return t.sizeTo(document.body);
      })
      .catch(error => {
        console.error('Board modal error:', error);
        ModalUtils.showError(`Failed to load: ${error.message}`);
        return t.sizeTo(document.body);
      });
  });