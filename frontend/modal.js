document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("function-select");
  const output = document.getElementById("output");

  select.addEventListener("change", () => {
    const task = select.value;
    output.innerHTML = `<p>Running task: <strong>${task}</strong>...</p>`;
    // Placeholder: Replace with actual fetch request to backend
  });
});