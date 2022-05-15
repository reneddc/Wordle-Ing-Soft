import Wordle from "./wordle"

//Clases

let wordle = new Wordle();

//VISTAS

const vistaModalidades = document.querySelector("#vista-modalidades");
const vistaCampoJuego = document.querySelector("#vista-campo-juego");


//FORMULARIOS
const formJuegoRapido = document.querySelector("#juego-rapido-form");


//EVENTOS
formJuegoRapido.addEventListener("submit", (event) => {
  event.preventDefault();

  wordle.definirPalabraSecreta();
  let palabraSecreta = wordle.obtenerPalabraSecreta();
  alert("Palabra Secreta: " + palabraSecreta);

  vistaModalidades.style.display = "none";
  vistaCampoJuego.style.display = "block";

});
