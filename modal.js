const t = TrelloPowerUp.iframe();

// Initialize FIRST before any Trello operations
t.initialize().then(() => {
  t.render(() => {
    const output = document.getElementById("modal-content");
    output.innerHTML += "<p>Modal initialized with Trello context.</p>";
    return t.sizeTo(document.body); // Auto-resize iframe
  });
});