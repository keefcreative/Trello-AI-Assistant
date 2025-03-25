class ModalUtils {
    static initialize(t) {
      if (!t || typeof t.initialize !== 'function') {
        return Promise.reject(new Error('Trello PowerUp instance not properly provided'));
      }
  
      return t.initialize({
        'card-buttons': true,
        'board-buttons': true
      })
        .then(() => t.getContext())
        .catch(error => {
          console.error('Power-Up initialization failed:', error);
          throw error;
        });
    }
  
    static setupModal(t, containerId, initialContent = '') {
      return this.initialize(t)
        .then(context => {
          const container = document.getElementById(containerId);
          if (!container) {
            throw new Error(`Container element #${containerId} not found`);
          }
  
          container.innerHTML = initialContent;
          return t.sizeTo(document.body).then(() => context);
        });
    }
  
    static showError(message) {
      const errorEl = document.createElement('div');
      errorEl.className = 'error-message';
      errorEl.textContent = message;
      document.body.prepend(errorEl);
      return errorEl;
    }
  }