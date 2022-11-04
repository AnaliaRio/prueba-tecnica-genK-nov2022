// Mediante javascript pinta/inserta 10 botones en el body con los textos "1 botón", "2 botón", "3 botón" y así sucesivamente hasta "10 botón"

function renderBtns() {
  for (i = 1; i < 11; i++) {
    const btn = document.createElement("button");
    document.body.appendChild(btn);
    btn.innerHTML = `${[i]} botón`;
  }
}

renderBtns();
