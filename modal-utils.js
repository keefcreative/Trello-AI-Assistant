class ModalUtils {
    static initialize(t) {
      return t.initialize()
        .then(() => {
          console.log('Trello Power-Up initialized successfully');
          return t.getContext();
        })
        .catch(error => {
          console.error('Initialization failed:', error);
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
      document.body.appendChild(errorEl);
    }
  }