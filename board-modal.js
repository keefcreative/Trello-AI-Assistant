const t = TrelloPowerUp.iframe();

document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("board-modal-content");
  output.innerHTML += "<p>Board modal initialized with Trello context.</p>";
});