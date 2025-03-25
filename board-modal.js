const t = TrelloPowerUp.iframe();

document.addEventListener('DOMContentLoaded', () => {
  t.render(() => {
    return Promise.all([
      t.get('board', 'private', 'authToken'),
      t.sizeTo('#board-modal-content')
    ]).then(() => {
      const output = document.getElementById('board-modal-content');
      output.innerHTML += '<p>Board modal initialized with Trecko context.</p>';
    });
  });
});