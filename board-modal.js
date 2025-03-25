const t = TrelloPowerUp.iframe();

t.initialize().then(() => {
  t.render(() => {
    const output = document.getElementById("board-modal-content");
    output.innerHTML += "<p>Board modal initialized.</p>";
    return t.sizeTo(document.body);
  });
});