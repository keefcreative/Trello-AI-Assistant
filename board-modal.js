const t = TrelloPowerUp.iframe();

document.addEventListener('DOMContentLoaded', () => {
  const closeButton = document.querySelector('.close-button');
  closeButton.addEventListener('click', () => t.closeModal());
  
  ModalUtils.setupModal(t, 'board-modal-content')
    .then(context => {
      const content = `
        <div class="board-info">
          <h3>Board: ${context.board}</h3>
          <p>This is where the board-level AI assistant will appear.</p>
          <div class="placeholder-ui">
            <p>Future board features will include:</p>
            <ul>
              <li>Board analysis</li>
              <li>Workflow suggestions</li>
              <li>Team productivity insights</li>
            </ul>
          </div>
        </div>
      `;
      
      document.getElementById('board-modal-content').innerHTML = content;
      document.querySelector('.context-info').textContent = `Board ID: ${context.board}`;
    })
    .catch(error => {
      ModalUtils.showError(`Failed to load board data: ${error.message}`);
    });
});