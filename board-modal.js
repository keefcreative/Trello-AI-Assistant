const t = TrelloPowerUp.iframe();

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("board-function-select");
  const output = document.getElementById("board-output");

  select.addEventListener("change", () => {
    const task = select.value;
    output.innerHTML = `<p>Running board task: <strong>${task}</strong>...</p>`;
    
    // Here you would typically add logic to process the selected board task
    // For now, it's just a placeholder
    switch(task) {
      case 'boardOverview':
        // Add board overview logic
        break;
      case 'projectHealthcheck':
        // Add project healthcheck logic
        break;
      // Add other cases as needed
    }
  });
});