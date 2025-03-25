const Promise = window.TrelloPowerUp.Promise;

const modalDefaults = {
  accentColor: '#0079BF',
  fullscreen: false,
  title: 'AI Assistant'
};

function showCardModal(t) {
  return t.modal({
    ...modalDefaults,
    url: t.signUrl('./index.html'),
    height: 500
  });
}

function showBoardModal(t) {
  return t.modal({
    ...modalDefaults,
    url: t.signUrl('./board.html'),
    height: 400,
    title: 'Board-Level Assistant'
  });
}

window.TrelloPowerUp.initialize({
  'card-buttons': () => [{
    icon: 'https://cdn-icons-png.flaticon.com/512/4712/4712104.png',
    text: 'AI Assistant',
    callback: showCardModal
  }],
  'board-buttons': () => [{
    icon: 'https://cdn-icons-png.flaticon.com/512/4712/4712104.png',
    text: 'Board Assistant',
    callback: showBoardModal
  }]
}, {
  appKey: '6699e21b6e848872c92aa711ce9b6de4',
  appName: 'AI Assistant'
});