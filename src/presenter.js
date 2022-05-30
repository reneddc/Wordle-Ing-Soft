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
let passwordAdministrador = "uordel8000";


//VISTAS
const vistaModalidades = document.querySelector("#vista-modalidades");
const vistaCampoJuego = document.querySelector("#vista-campo-juego");
const vistaTutorial = document.querySelector("#vista-tutorial");
const vistaPantallaPrincipal = document.querySelector("#vista-Principal");
const vistaPerdedor = document.querySelector("#vista-perdedor");
const vistaGanador = document.querySelector("#vista-ganador");
const vistaRegistrarseAdmin = document.querySelector("#vista-registro-admistrador");
const vistaBancoPalabras = document.querySelector("#vista-banco-palabras");


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
const formAdministrador = document.querySelector("#administrador-form")
const formRegistroAdmin = document.querySelector("#registro-admin-form");
const formNuevaPalabra = document.querySelector("#nueva-palabra-form");
const formSalirBancoPalabras = document.querySelector("#salir-banco-palabras-form");

//INPUTS

const passwordAdmin = document.querySelector("#password-admin");
const nuevaPalabra = document.querySelector("#nueva-palabra");
const categoriaDeporte = document.querySelector("#categoria-deporte");
const categoriaUCB = document.querySelector("#categoria-ucb");
const categoriaSistemas = document.querySelector("#categoria-sistemas");

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

function mostrarVistaBancoPalabras(){
  vistaBancoPalabras.style.display = "block";
}

function ocultarVistaRegistrarseAdmin(){
  vistaRegistrarseAdmin.style.display = "none";
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

function ocultarVistaBancoPalabras(){
  vistaBancoPalabras.style.display = "none";
}

function mostraVistaPrincipal(){
  vistaPantallaPrincipal.style.display = "block";
}

function mostrarVistaRegistrarseAdmin(){ //mostrar vista de registrarse como admin
  vistaRegistrarseAdmin.style.display = "block";
}

function mostrarIntentosRealizados(){
  let palabraIntento = wordle.obtenerIntento();
  if(intento != palabraIntento){
    alert(palabraIntento);
  }
  else
  {
    refrescarHistorialIntentos();
  }
  formIntento.innerHTML = generarHtmlIngresarIntento(tamPalabraSecreta);
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
  if(resultadoJuego == "Ganador"){
    vistaGanador.style.display = "block";
    ocultarVistaCampoJuego();
    formPalabraSecreta.innerHTML = generarHtmlPalabraSecreta(tamPalabraSecreta, palabraSecreta);
    formGanador.innerHTML = generarHtmlHistorialIntentos(tamPalabraSecreta, listaIntentos , listaPistas);
  }
}

function ingresarCategorias(){
  let listaCategorias = ["General"];
  if(categoriaDeporte.checked){
    listaCategorias.push("Deporte");
  }
  if(categoriaUCB.checked){
    listaCategorias.push("UCB");
  }
  if(categoriaSistemas.checked){
    listaCategorias.push("Sistemas");
  }
  return listaCategorias;
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


formAdministrador.addEventListener("submit", (event) => {
  event.preventDefault();
  ocultarVistaPrincipal();
  mostrarVistaRegistrarseAdmin();
});

formRegistroAdmin.addEventListener("submit", (event) => {
  event.preventDefault();
  let password = passwordAdmin.value;
  if(password == passwordAdministrador){
    ocultarVistaRegistrarseAdmin();
    mostrarVistaBancoPalabras();
  }else{
    alert("Contraseña incorrecta. Intente de nuevo.");
  }
  passwordAdmin.value = "";
});

formNuevaPalabra.addEventListener("submit", (event) => {
  event.preventDefault();
  let listaCategorias = [];
  wordle.definirNuevaPalabra(nuevaPalabra.value);
  let nuevaPalabraResp = wordle.obtenerNuevaPalabra();
  if(nuevaPalabraResp == nuevaPalabra.value){
    listaCategorias = ingresarCategorias();
    wordle.definirCategorias(listaCategorias);
    alert(wordle.obtenerPalabrasSeleccionables());
    alert(wordle.obtenerCategoriaDeporte());
    alert(wordle.obtenerCategoriaUCB());
    alert(wordle.obtenerCategoriaSistemas());
  }
  else{
    alert(nuevaPalabraResp);
  }
  nuevaPalabra.value = "";
  categoriaDeporte.checked = false;
  categoriaUCB.checked = false;
  categoriaSistemas.checked = false;
});

formSalirBancoPalabras.addEventListener("submit", (event) => {
  event.preventDefault();
  ocultarVistaBancoPalabras();
  mostraVistaPrincipal();
});