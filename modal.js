const t = TrelloPowerUp.iframe();

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("function-select");
  const output = document.getElementById("output");

  select.addEventListener("change", () => {
    const task = select.value;
    output.innerHTML = `<p>Running task: <strong>${task}</strong>...</p>`;
  });
});
