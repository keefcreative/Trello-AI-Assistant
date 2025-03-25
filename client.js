const Promise = window.TrelloPowerUp.Promise;

window.TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/512/4712/4712104.png',
      text: 'AI Assistant',
      callback: function(t) {
        return t.modal({
          url: './index.html',
          accentColor: '#0079BF',
          height: 400,
          fullscreen: false,
          title: 'AI Assistant'
        });
      }
    }];
  },
  'board-buttons': function(t, options) {
    return [{
      text: 'Board Assistant',
      callback: function(t) {
        return t.modal({
          url: './board-modal.html',
          accentColor: '#0079BF',
          height: 300,
          fullscreen: false,
          title: 'Board-Level Assistant'
        });
      }
    }];
  }
});