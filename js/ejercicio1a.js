// Escribe el código javascript necesario para pintar un botón en el body y que el botón tenga el texto **"1 botón"**

function renderBtn() {
  const btn = document.createElement("button");
  btn.innerHTML = "1 botón";
  document.body.appendChild(btn);
}

renderBtn();
