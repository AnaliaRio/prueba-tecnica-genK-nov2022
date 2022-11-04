/* Mediante javascript haz que al pasar el ratón por encima del botón cambie el texto **"1 botón"** por **"1 botóN"** y al quitar el ratón de encima que vuelva a poner **"1 botón"** */

function renderBtnN() {
  const btn = document.createElement("button");
  btn.innerHTML = "1 botón";
  document.body.appendChild(btn);

  btn.onmouseover = function () {
    btn.innerHTML = "1 botóN";
  };

  btn.onmouseout = function () {
    btn.innerHTML = "1 botón";
  };
}

renderBtnN();
