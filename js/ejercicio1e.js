// Una vez tienes pintados 1000 botones añade mediante javascript el código necesario para que al pasar el ratón por encima de cada botón se cambie la letra n de botón por N mayúscula y al quitar el ratón de encima que vuelva a poner la letra n en minúscula.

function renderBtnsN() {
  for (i = 1; i < 1001; i++) {
    const body = document.querySelector("body");
    const btn = document.createElement("button");
    body.appendChild(btn);

    const innerHTML = i + " botón";
    const arrInnerHTML = innerHTML.split(" ");
    console.log(arrInnerHTML[1]);

    btn.innerHTML = innerHTML;

    btn.addEventListener("mouseover", function (ev) {
      ev.target.innerHTML = arrInnerHTML[0] + " botóN";
    });

    btn.addEventListener("mouseout", function (ev) {
      ev.target.innerHTML = arrInnerHTML[0] + " botón";
    });
  }
}

renderBtnsN();
