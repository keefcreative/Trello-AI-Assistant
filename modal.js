const t = TrelloPowerUp.iframe();

document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("modal-content");
  output.innerHTML += "<p>Modal initialized with Trello context.</p>";
});