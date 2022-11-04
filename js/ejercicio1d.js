// Mediante javscript pinta/inserta 1000 botones en el body siguiendo el mismo patrón que en el apartado c para los nombres de los botones.

function renderBts() {
  for (i = 1; i < 1001; i++) {
    const btn = document.createElement("button");
    document.body.appendChild(btn);
    btn.innerHTML = i + " botón";
  }
}

renderBts();
