class ModalUtils {
    static initialize(t) {
      return new Promise((resolve, reject) => {
        if (!window.TrelloPowerUp) {
          reject(new Error('Trello PowerUp not loaded'));
          return;
        }
  
        if (!t || typeof t.initialize !== 'function') {
          reject(new Error('Invalid Trello PowerUp instance'));
          return;
        }
  
        // Initialize with all required capabilities
        t.initialize({
          'card-buttons': true,
          'board-buttons': true,
          'attachment-sections': false,
          'card-back-section': false
        })
          .then(() => t.getContext())
          .then(context => {
            // Store context in window for debugging
            window.trelloContext = context;
            resolve(context);
          })
          .catch(err => {
            console.error('Power-Up initialization failed:', err);
            reject(err);
          });
      });
    }
  
    static setupModal(t, containerId) {
      return new Promise((resolve, reject) => {
        this.initialize(t)
          .then(context => {
            const container = document.getElementById(containerId);
            if (!container) {
              throw new Error(`Container ${containerId} not found`);
            }
            
            // Ensure we have a valid DOM element to size to
            const sizingElement = container.querySelector('.content-wrapper') || container;
            return t.sizeTo(sizingElement)
              .then(() => resolve(context))
              .catch(sizeErr => {
                console.warn('SizeTo failed, using fallback:', sizeErr);
                return t.sizeTo(document.body).then(() => resolve(context));
              });
          })
          .catch(err => {
            console.error('Modal setup failed:', err);
            reject(err);
          });
      });
    }
  
    static showError(message) {
      try {
        const errorEl = document.createElement('div');
        errorEl.className = 'error-message';
        errorEl.innerHTML = `
          <strong>Error:</strong> ${message}
          <br><small>Check console for details</small>
        `;
        
        const container = document.querySelector('.modal-content') || document.body;
        container.prepend(errorEl);
        
        return errorEl;
      } catch (err) {
        console.error('Failed to show error:', err);
        return null;
      }
    }
  }