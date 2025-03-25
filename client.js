const t = window.TrelloPowerUp.iframe();

window.TrelloPowerUp.initialize({
  'card-buttons': function(t) {
    return [{
      icon: {
        dark: 'https://cdn-icons-png.flaticon.com/512/4712/4712104.png',
        light: 'https://cdn-icons-png.flaticon.com/512/4712/4712104.png'
      },
      text: 'AI Assistant',
      callback: function(t) {
        return t.modal({
          url: './index.html',
          height: 400,
          fullscreen: false,
          title: 'AI Assistant'
        });
      }
    }];
  },
  'board-buttons': function(t) {
    return [{
      icon: {
        dark: 'https://cdn-icons-png.flaticon.com/512/4712/4712104.png',
        light: 'https://cdn-icons-png.flaticon.com/512/4712/4712104.png'
      },
      text: 'AI Assistant',
      callback: function(t) {
        return t.modal({
          url: './board-modal.html',
          height: 500,
          fullscreen: false,
          title: 'AI Assistant Board Tools'
        });
      }
    }];
  }
});