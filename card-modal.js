const t = TrelloPowerUp.iframe();

document.addEventListener('DOMContentLoaded', () => {
  const closeButton = document.querySelector('.close-button');
  closeButton.addEventListener('click', () => t.closeModal());
  
  ModalUtils.setupModal(t, 'card-modal-content')
    .then(context => {
      const content = `
        <div class="card-info">
          <h3>Card: ${context.card}</h3>
          <p>This is where the AI assistant for cards will appear.</p>
          <div class="placeholder-ui">
            <p>Future AI features will include:</p>
            <ul>
              <li>Task analysis</li>
              <li>Suggestions</li>
              <li>Automations</li>
            </ul>
          </div>
        </div>
      `;
      
      document.getElementById('card-modal-content').innerHTML = content;
      document.querySelector('.context-info').textContent = `Card ID: ${context.card}`;
    })
    .catch(error => {
      ModalUtils.showError(`Failed to load card data: ${error.message}`);
    });
});