const t = TrelloPowerUp.iframe();

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("function-select");
  const output = document.getElementById("output");

  select.addEventListener("change", () => {
    const task = select.value;
    output.innerHTML = `<p>Running card task: <strong>${task}</strong>...</p>`;
    
    // Here you would typically add logic to process the selected task
    // For now, it's just a placeholder
    switch(task) {
      case 'enhanceBrief':
        // Add enhancement logic
        break;
      case 'summarizeComments':
        // Add comment summarization logic
        break;
      // Add other cases as needed
    }
  });
});