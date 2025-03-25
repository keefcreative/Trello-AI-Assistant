const Promise = window.TrelloPowerUp.Promise;

const modalDefaults = {
  accentColor: '#0079BF',
  fullscreen: false,
  title: 'AI Assistant'
};

function showCardModal(t) {
  if (!t || typeof t.signUrl !== 'function') {
    console.error('Invalid Trello Power-Up instance');
    return Promise.reject(new Error('Invalid Trello instance'));
  }

  return t.modal({
    ...modalDefaults,
    url: t.signUrl('./index.html', { optional: true }),
    height: 500
  }).catch(err => {
    console.error('Failed to open card modal:', err);
    throw err;
  });
}

function showBoardModal(t) {
  if (!t || typeof t.signUrl !== 'function') {
    console.error('Invalid Trello Power-Up instance');
    return Promise.reject(new Error('Invalid Trello instance'));
  }

  return t.modal({
    ...modalDefaults,
    url: t.signUrl('./board.html', { optional: true }),
    height: 400,
    title: 'Board-Level Assistant'
  }).catch(err => {
    console.error('Failed to open board modal:', err);
    throw err;
  });
}

window.TrelloPowerUp.initialize({
  'card-buttons': function(t) {
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/512/4712/4712104.png',
      text: 'AI Assistant',
      callback: showCardModal
    }];
  },
  'board-buttons': function(t) {
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/512/4712/4712104.png',
      text: 'Board Assistant',
      callback: showBoardModal
    }];
  }
}, {
  appKey: '6699e21b6e848872c92aa711ce9b6de4', // Replace with actual key
  appName: 'AI Assistant',
  initializationTimeout: 45000,
  optionalPermissions: ['iframe']
});