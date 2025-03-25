const Promise = window.TrelloPowerUp.Promise;

const modalDefaults = {
  accentColor: '#0079BF',
  fullscreen: false,
  title: 'AI Assistant'
};

function showCardModal(t) {
  try {
    return t.modal({
      ...modalDefaults,
      url: t.signUrl('./index.html'),
      height: 500
    });
  } catch (error) {
    console.error('Error opening card modal:', error);
    return Promise.reject(error);
  }
}

function showBoardModal(t) {
  try {
    return t.modal({
      ...modalDefaults,
      url: t.signUrl('./board.html'),
      height: 400,
      title: 'Board-Level Assistant'
    });
  } catch (error) {
    console.error('Error opening board modal:', error);
    return Promise.reject(error);
  }
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
  appKey: '6699e21b6e848872c92aa711ce9b6de4', // REPLACE WITH YOUR ACTUAL KEY
  appName: 'AI Assistant',
  initializationTimeout: 45000
});