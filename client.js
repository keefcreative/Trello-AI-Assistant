/* global TrelloPowerUp */

const Promise = TrelloPowerUp.Promise;
console.log("Simple AI Button: client.js loaded.");

// --- Constants ---
const MODAL_URL = './modal.html';
const ICON_URL = 'https://cdn.glitch.global/a1f9797f-5f51-490a-9696-d418058f77b1/bot.png?v=1708601256299';
const APP_KEY = '6699e21b6e848872c92aa711ce9b6de4'; // <-- REPLACE THIS!

if (APP_KEY === '6699e21b6e848872c92aa711ce9b6de4') {
  console.error("Simple AI Button: Please replace YOUR_TRELLO_APP_KEY in client.js with your actual Trello App Key.");
}

// --- Modal Function ---

/**
 * Shows the basic modal, passing context type as an argument.
 * @param {object} t - The Trello Power-Up instance.
 * @param {object} options - Options containing the context (board or card).
 * @param {string} scope - 'board' or 'card'.
 */
const showBasicModal = (t, options, scope) => {
  console.log(`Simple AI Button: ${scope} button clicked. Opening modal.`);

  const modalTitle = scope === 'board' ? 'Board AI Helper' : 'Card AI Helper';

  // Use t.signUrl for the modal URL
  const signedUrl = t.signUrl(MODAL_URL);
  console.log("Simple AI Button: Signed Modal URL:", signedUrl); // Log the signed URL

  return t.modal({
    url: signedUrl, // Use the signed URL
    accentColor: '#0079BF',
    height: 250,
    fullscreen: false,
    title: modalTitle,
    args: { scope: scope } // Pass the scope to the modal iframe
  })
  .catch(err => {
    console.error("Simple AI Button: Failed to open modal:", err);
    // Optionally show an alert or notification to the user
    // t.alert({ message: 'Error opening AI Assistant modal.', duration: 6 });
  });
};

// --- Initialize Power-Up ---

TrelloPowerUp.initialize({
  // Card Button Capability
  'card-buttons': function (t, options) {
    console.log("Simple AI Button: Initializing card-buttons.");
    return [{
      icon: ICON_URL,
      text: 'AI Button',
      callback: (tCallback) => showBasicModal(tCallback, options, 'card') // Pass scope
    }];
  },

  // Board Button Capability
  'board-buttons': function (t, options) {
    console.log("Simple AI Button: Initializing board-buttons.");
    return [{
      icon: ICON_URL,
      text: 'AI Board Button',
      callback: (tCallback) => showBasicModal(tCallback, options, 'board') // Pass scope
    }];
  }
}, {
  // --- Power-Up Options ---
  appKey: APP_KEY,
  appName: 'Simple AI Button',
  // We recommend passing the locale for later localization
  // locale: options && options.locale || 'en'
});

console.log("Simple AI Button: Initialization sequence complete.");