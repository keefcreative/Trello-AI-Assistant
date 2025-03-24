// Initialize the Trello Power-Up iframe context
const t = TrelloPowerUp.iframe();

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("function-select");
  const output = document.getElementById("output");

  select.addEventListener("change", () => {
    const task = select.value;
    output.innerHTML = `<p>Running task: <strong>${task}</strong>...</p>`;
    
    // Example interaction with Trello context if needed later
    // t.get('card', 'shared', 'someKey').then(data => {
    //   console.log('Data from card context:', data);
    // });

    // Placeholder for backend fetch to OpenAI
  });
});