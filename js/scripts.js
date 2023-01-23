//Botón volver arriba
const volverArriba = document.querySelector(".volver-arriba");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    volverArriba.classList.add("active");
  } else {
    volverArriba.classList.remove("active");
  }
})