/* global TrelloPowerUp */

console.log("Simple AI Button: modal.js loaded.");

// Wrap initialization in a function to handle potential errors
const initializeModal = () => {
    const contextInfoElement = document.getElementById('context-info');
    const errorDisplayElement = document.getElementById('error-display');
    const contentElement = document.getElementById('content');
    const closeButton = document.getElementById('close-button');
    let t; // Define t here

    const showError = (message, errorDetails = '') => {
        console.error("Simple AI Button Modal Error:", message, errorDetails);
        if (contextInfoElement) {
            contextInfoElement.textContent = 'Failed to load context.';
        }
        if (errorDisplayElement) {
            errorDisplayElement.textContent = `Error: ${message}${errorDetails ? ` (${errorDetails})` : ''}`;
            errorDisplayElement.style.display = 'block';
        }
        // Attempt to resize even on error, only if t is initialized
        if (t && t.sizeTo) {
            t.sizeTo('body').catch(e => console.warn("Resize failed on error:", e));
        }
    };

    try {
        // Initialize TrelloPowerUp.iframe() here
        t = TrelloPowerUp.iframe({
            // appKey: 'YOUR_TRELLO_APP_KEY', // Ensure this matches client.js if used
            // appName: 'Simple AI Button'
        });

        // Check if 't' is valid
        if (!t || !t.arg || !t.render || !t.getContext || !t.sizeTo) {
            throw new Error("TrelloPowerUp.iframe() failed to initialize properly. Check console for secret/hash errors.");
        }

        const scopeArg = t.arg('scope'); // Get the 'scope' arg passed from client.js
        console.log("Simple AI Button Modal: Scope received:", scopeArg);

        if (!scopeArg || (scopeArg !== 'card' && scopeArg !== 'board')) {
           throw new Error(`Initialization scope argument is missing or invalid (received: ${scopeArg})`);
        }

        t.render(function() {
            // This function runs once the iframe is ready
            console.log("Simple AI Button Modal: t.render() called.");

            // Set title dynamically based on scope from args
            const titleElement = contentElement ? contentElement.querySelector('h2') : null;
            if (titleElement) {
                titleElement.textContent = scopeArg === 'board' ? 'Board Helper' : 'Card Helper';
            } else {
                 console.warn("Simple AI Button Modal: Title element not found.");
            }

            return t.getContext()
                .then(context => {
                    console.log("Simple AI Button Modal: Context received:", context);
                    if (!contextInfoElement) {
                         console.error("Simple AI Button Modal: context-info element not found.");
                         return; // Exit if element missing
                    }

                    let info = `Scope: ${scopeArg}<br><hr>`;
                    if (context) {
                        info += `Board ID: ${context.board || 'N/A'}<br>`;
                        if (context.card) {
                            info += `Card ID: ${context.card || 'N/A'}<br>`;
                        }
                        if (context.list) {
                            info += `List ID: ${context.list || 'N/A'}<br>`;
                        }
                         if (context.member) {
                            info += `Member ID: ${context.member || 'N/A'}<br>`;
                        }
                        // Add more context properties as needed
                        // if (context.organization) info += `Org ID: ${context.organization}<br>`;
                        // if (context.enterprise) info += `Ent ID: ${context.enterprise}<br>`;
                    } else {
                        info += "No context object could be retrieved.";
                    }
                    contextInfoElement.innerHTML = info; // Use innerHTML because of <br>

                    // Resize the modal to fit the content
                    return t.sizeTo('body');
                })
                .catch(err => {
                     // Use the showError function
                     showError(`Failed to get context`, err.message || err);
                });
        });

        // --- Close Button ---
        if (closeButton) {
          closeButton.addEventListener('click', () => {
            console.log("Simple AI Button Modal: Close button clicked.");
            if (t && t.closeModal) {
                t.closeModal();
            } else {
                 console.error("Cannot close modal - Trello instance (t) not available.");
            }
          });
        } else {
          console.warn("Simple AI Button Modal: Close button not found.");
        }

    } catch (err) {
        // Use the showError function for initialization errors
        showError(`Modal initialization failed`, err.message || err);
    }
};

// Run the initialization function once the DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeModal);
} else {
    // DOMContentLoaded already fired
    initializeModal();
}