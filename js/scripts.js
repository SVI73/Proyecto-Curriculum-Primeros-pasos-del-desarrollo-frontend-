//BOTÓN VOLVER ARRIBA
const volverArriba = document.querySelector(".volver-arriba");

//Hace aparecer el botón pasados 100 píxeles en el eje-Y,
//o bien lo remueve si no pasa de 100 píxeles
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    volverArriba.classList.add("active");
  } else {
    volverArriba.classList.remove("active");
  }
})

//NAVBAR
menu = document.querySelector(".menu");
navbar = document.querySelector(".navbar");

//Despliega o cierra el menú cuando el usuario clickea en el botón menú
menu.onclick = function() {
  navbar.classList.toggle("activo");
}

//Cierra el menú cuando el usuario clickea un elemento del menú
function cerrarMenu() {
  navbar.classList.remove("activo");
}