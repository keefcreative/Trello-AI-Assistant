const t = TrelloPowerUp.iframe();

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("function-select");
  const output = document.getElementById("output");

  select.addEventListener("change", () => {
    const task = select.value;
    output.innerHTML = `<p>Running card task: <strong>${task}</strong>...</p>`;
    
    // Placeholder for task processing logic
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