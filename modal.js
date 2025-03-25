const t = TrelloPowerUp.iframe();

document.addEventListener('DOMContentLoaded', () => {
  t.render(() => {
    return Promise.all([
      t.get('board', 'private', 'authToken'),
      t.sizeTo('#modal-content')
    ]).then(() => {
      const output = document.getElementById('modal-content');
      output.innerHTML += '<p>Card modal initialized with Trello context.</p>';
    });
  });
});