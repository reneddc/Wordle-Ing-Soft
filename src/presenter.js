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
const vistaTutorial = document.querySelector("#vista-tutorial");
const vistaPantallaPrincipal = document.querySelector("#vista-Principal");
const vistaPerdedor = document.querySelector("#vista-perdedor");
const vistaGanador = document.querySelector("#vista-ganador");


//FORMULARIOS
const formJuegoRapido = document.querySelector("#juego-rapido-form");
const formIntento = document.querySelector("#ingresar-intento-form");
const formHistorialIntentos = document.querySelector("#historial-intentos-form");
const formTutorial = document.querySelector("#tutorial-form");
const formModalidades = document.querySelector("#modalidades-form");
const formJuegoRapidoPrincipal = document.querySelector("#juego-rapido-form-principal");


//GenerarVistas
function mostrarVistaModalidades(){
  vistaModalidades.style.display = "block";
}

function mostrarVistaCampoJuego(){
  formIntento.innerHTML = generarHtmlIngresarIntento(tamPalabraSecreta);
  refrescarHistorialIntentos();
  vistaCampoJuego.style.display = "block";
}

function mostrarVistaTutorial(){
  vistaTutorial.style.display = "block";
}

function ocultarVistaModalidades(){
  vistaModalidades.style.display = "none";
}

function ocultarVistaPrincipal(){
  vistaPantallaPrincipal.style.display = "none";
}

function ocultarVistaCampoJuego(){
  vistaCampoJuego.style.display = "none";
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
  let listaPistas = wordle.obtenerListaPistas();
  formHistorialIntentos.innerHTML = generarHtmlHistorialIntentos(tamPalabraSecreta, listaIntentos, listaPistas);
}

function mostrarVistaPerdedor(){
  nroIntentos = wordle.obtenerNroIntentos();
  if(nroIntentos == 6 && intento != palabraSecreta){
    vistaPerdedor.style.display = "block";
    ocultarVistaCampoJuego();
  }
}


//EVENTOS
formJuegoRapido.addEventListener("submit", (event) => {
  event.preventDefault();

  wordle.definirPalabraSecreta();
  palabraSecreta = wordle.obtenerPalabraSecreta();
  tamPalabraSecreta = palabraSecreta.length;
  alert("Palabra Secreta: " + palabraSecreta);

  listaIntentos = wordle.obtenerHistorialIntentos();
  ocultarVistaPrincipal();
  ocultarVistaModalidades();
  mostrarVistaCampoJuego();
});

formJuegoRapidoPrincipal.addEventListener("submit", (event) => {
  event.preventDefault();

  wordle.definirPalabraSecreta();
  palabraSecreta = wordle.obtenerPalabraSecreta();
  tamPalabraSecreta = palabraSecreta.length;
  alert("Palabra Secreta: " + palabraSecreta);

  listaIntentos = wordle.obtenerHistorialIntentos();
  ocultarVistaPrincipal();
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

  mostrarVistaPerdedor();
});

formTutorial.addEventListener("submit", (event) => {
  event.preventDefault();
  ocultarVistaPrincipal();
  mostrarVistaTutorial();
});

formModalidades.addEventListener("submit", (event) => {
  event.preventDefault();
  ocultarVistaPrincipal();
  mostrarVistaModalidades();
});