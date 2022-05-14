import obtenerPalabrasSeleccionables from "./wordle"


//VISTAS

const vistaModalidades = document.querySelector("#vista-modalidades");
const vistaCampoJuego = document.querySelector("#vista-campo-juego");


//FORMULARIOS
const formJuegoRapido = document.querySelector("#juego-rapido-form");


//EVENTOS
formJuegoRapido.addEventListener("submit", (event) => {
  event.preventDefault();

  let listaPalabrasSeleccionables = obtenerPalabrasSeleccionables();
  alert(listaPalabrasSeleccionables);

  vistaModalidades.style.display = "none";
  vistaCampoJuego.style.display = "block";

});
