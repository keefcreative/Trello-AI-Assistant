const Promise = window.TrelloPowerUp.Promise;

function openModal(t) {
  return t.modal({
    url: './index.html',
    accentColor: '#0079BF',
    height: 400,
    fullscreen: false,
    title: 'AI Assistant'
  });
}

window.TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/512/4712/4712104.png',
      text: 'AI Assistant',
      callback: openModal
    }];
  }
});
