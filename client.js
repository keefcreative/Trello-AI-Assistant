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

  // Sign URL with all required parameters
  const signedUrl = t.signUrl('./index.html', {
    optional: true,
    expiration: '1hour'
  });

  return t.modal({
    ...modalDefaults,
    url: signedUrl,
    height: 500,
    args: { _tc: t.getContext() } // Pass context explicitly
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

  const signedUrl = t.signUrl('./board.html', {
    optional: true,
    expiration: '1hour'
  });

  return t.modal({
    ...modalDefaults,
    url: signedUrl,
    height: 400,
    title: 'Board-Level Assistant',
    args: { _tc: t.getContext() }
  }).catch(err => {
    console.error('Failed to open board modal:', err);
    throw err;
  });
}

// Enhanced initialization
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
  appKey: '6699e21b6e848872c92aa711ce9b6de4', // MUST REPLACE
  appName: 'AI Assistant',
  initializationTimeout: 60000,
  optionalPermissions: ['iframe'],
  allowAttachments: true,
  requiredPermissions: ['read']
});