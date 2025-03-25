class ModalUtils {
    static initialize(t) {
      if (!t || typeof t.initialize !== 'function') {
        return Promise.reject(new Error('Trello PowerUp instance not properly provided'));
      }
  
      return Promise.resolve()
        .then(() => t.initialize({
          'card-buttons': true,
          'board-buttons': true
        }))
        .then(() => t.getContext())
        .catch(error => {
          console.error('Power-Up initialization failed:', error);
          throw error;
        });
    }
  
    static setupModal(t, containerId) {
      if (!t || typeof t.sizeTo !== 'function') {
        return Promise.reject(new Error('Invalid Trello instance'));
      }
  
      return this.initialize(t)
        .then(context => {
          const container = document.getElementById(containerId);
          if (!container) {
            throw new Error(`Container element #${containerId} not found`);
          }
          return t.sizeTo('#content-wrapper').catch(() => t.sizeTo(document.body));
        })
        .catch(error => {
          console.error('Modal setup failed:', error);
          throw error;
        });
    }
  
    static showError(message) {
      try {
        const errorEl = document.createElement('div');
        errorEl.className = 'error-message';
        errorEl.textContent = message;
        
        const container = document.querySelector('.modal-content') || document.body;
        container.prepend(errorEl);
        
        return errorEl;
      } catch (err) {
        console.error('Failed to show error:', err);
        return null;
      }
    }
  }