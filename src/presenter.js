import Wordle from "./wordle"
import {generarHtmlIngresarIntento, generarHtmlHistorialIntentos, generarHtmlPalabraSecreta} from "./generarHTML"


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
const formPerdedor = document.querySelector("#perdedor-form");
const formGanador = document.querySelector("#ganador-form");
const formPalabraSecreta = document.querySelector("#palabra-secreta-form");
const formReintentoPerRand = document.querySelector("#perdedor-form-volver-jugar-rand")
const formNuevaGanador=document.querySelector("#ganador-form-volver-jugar")
const formReintentoPerSame = document.querySelector("#perdedor-form-volver-jugar-same")


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

function ocultarVistaPerdedor(){
 vistaPerdedor.style.display = "none";
}
function ocultarVistaGanador(){
  vistaGanador.style.display = "none";
}
function mostrarIntentosRealizados(){
  let palabraIntento = wordle.obtenerIntento();
  if(intento != palabraIntento){
    intentosRealizados.innerHTML = "";
  }
  else
  {
    refrescarHistorialIntentos();
  }
}

function refrescarHistorialIntentos(){
  let listaPistas = wordle.obtenerListaPistas();
  formHistorialIntentos.innerHTML = generarHtmlHistorialIntentos(tamPalabraSecreta, listaIntentos, listaPistas);
}

function mostrarVistaPerdedor(resultadoJuego){
  let listaPistas = wordle.obtenerListaPistas();
  if(resultadoJuego == "Perdedor"){
    vistaPerdedor.style.display = "block";
    ocultarVistaCampoJuego();
    formPerdedor.innerHTML = generarHtmlHistorialIntentos(tamPalabraSecreta, listaIntentos , listaPistas);
  }
}

function mostrarVistaGanador(resultadoJuego){
  let listaPistas = wordle.obtenerListaPistas();
  if(resultadoJuego == "Ganador")
  {
    vistaGanador.style.display = "block";
    ocultarVistaCampoJuego();
    formPalabraSecreta.innerHTML = generarHtmlPalabraSecreta(tamPalabraSecreta, palabraSecreta);
    formGanador.innerHTML = generarHtmlHistorialIntentos(tamPalabraSecreta, listaIntentos , listaPistas);
  }
}

//EVENTOS
formJuegoRapido.addEventListener("submit", (event) => {
  event.preventDefault();

  wordle.definirPalabraSecreta();
  palabraSecreta = wordle.obtenerPalabraSecreta();
  tamPalabraSecreta = palabraSecreta.length;

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

  let resultadoJuego = wordle.obtenerResultadoJuego();
  mostrarVistaPerdedor(resultadoJuego);
  mostrarVistaGanador(resultadoJuego);
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

formReintentoPerRand.addEventListener("submit", (event)=>{
  event.preventDefault();
  wordle.definirPalabraSecreta();
  palabraSecreta = wordle.obtenerPalabraSecreta();
  tamPalabraSecreta = palabraSecreta.length;
  listaIntentos = wordle.obtenerHistorialIntentos();
  ocultarVistaPerdedor();
  mostrarVistaCampoJuego();
  
});
formNuevaGanador.addEventListener("submit", (event)=>{
  event.preventDefault();
  wordle.definirPalabraSecreta();
  palabraSecreta = wordle.obtenerPalabraSecreta();
  tamPalabraSecreta = palabraSecreta.length;
  listaIntentos = wordle.obtenerHistorialIntentos();
  ocultarVistaGanador();
  mostrarVistaCampoJuego();
});

formReintentoPerSame.addEventListener("submit", (event)=>{
  event.preventDefault();
  wordle.definirSecreta(wordle.obtenerPalabraSecreta());
  palabraSecreta = wordle.obtenerPalabraSecreta();
  tamPalabraSecreta = palabraSecreta.length;
  listaIntentos = wordle.obtenerHistorialIntentos();
  ocultarVistaPerdedor();
  mostrarVistaCampoJuego();
});