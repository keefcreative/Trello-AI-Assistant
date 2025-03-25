window.TrelloPowerUp.initialize({
  'card-buttons': function(t, options){
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/512/4712/4712104.png',
      text: 'AI Assistant',
      callback: function(t){
        return t.modal({
          url: './index.html',
          height: 500,
          title: 'AI Assistant'
        });
      }
    }];
  },
  'board-buttons': function(t, options){
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/512/4712/4712104.png',
      text: 'AI Assistant',
      callback: function(t){
        return t.modal({
          url: './board-modal.html',
          height: 500,
          title: 'AI Assistant Board Tools'
        });
      }
    }];
  }
});