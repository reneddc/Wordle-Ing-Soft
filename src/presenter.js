import Wordle from "./wordle"
import {generarHtmlIngresarIntento, generarHtmlHistorialIntentos} from "./generarHTML"


//Clases
let wordle = new Wordle();


//Variables
let palabraSecreta;
let tamPalabraSecreta;
let intento;
let listaIntentos = [];
let nroIntentos;


//VISTAS
const vistaModalidades = document.querySelector("#vista-modalidades");
const vistaCampoJuego = document.querySelector("#vista-campo-juego");
const intentosRealizados = document.querySelector("#intentos-realizados");


//FORMULARIOS
const formJuegoRapido = document.querySelector("#juego-rapido-form");
const formIntento = document.querySelector("#ingresar-intento-form");
const formHistorialIntentos = document.querySelector("#historial-intentos-form");


//GenerarVistas
function mostrarVistaCampoJuego(){
  formIntento.innerHTML = generarHtmlIngresarIntento(tamPalabraSecreta);
  refrescarHistorialIntentos();
  vistaCampoJuego.style.display = "block";
}

function ocultarVistaModalidades(){
  vistaModalidades.style.display = "none";
}

function mostrarIntentosRealizados(){
  let palabraIntento = wordle.obtenerIntento();
  if(intento != palabraIntento){
    alert(palabraIntento);
    intentosRealizados.innerHTML = "";
  }
  else{
    refrescarHistorialIntentos();
  }
}

function refrescarHistorialIntentos(){
  formHistorialIntentos.innerHTML = generarHtmlHistorialIntentos(tamPalabraSecreta, listaIntentos);
}


//EVENTOS
formJuegoRapido.addEventListener("submit", (event) => {
  event.preventDefault();

  wordle.definirPalabraSecreta();
  palabraSecreta = wordle.obtenerPalabraSecreta();
  tamPalabraSecreta = palabraSecreta.length;
  alert("Palabra Secreta: " + palabraSecreta);

  listaIntentos = wordle.obtenerHistorialIntentos();
  ocultarVistaModalidades();
  mostrarVistaCampoJuego();
});


formIntento.addEventListener("submit", (event) => {
  event.preventDefault();

  let listaCaracteresIntento = document.querySelectorAll(".ingresar-intento");
  intento = "";
  for(let i = 0; i < tamPalabraSecreta; i++){
      intento = intento + listaCaracteresIntento[i].value;
  }
  wordle.definirIntento(intento);
  listaIntentos = wordle.obtenerHistorialIntentos();
  nroIntentos = wordle.obtenerNroIntentos();
  mostrarIntentosRealizados();

});
