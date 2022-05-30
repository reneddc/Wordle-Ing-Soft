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
let categoria = "General";


//VISTAS
const vistaModalidades = document.querySelector("#vista-modalidades");
const vistaCampoJuego = document.querySelector("#vista-campo-juego");
const vistaTutorial = document.querySelector("#vista-tutorial");
const vistaPantallaPrincipal = document.querySelector("#vista-Principal");
const vistaPerdedor = document.querySelector("#vista-perdedor");
const vistaGanador = document.querySelector("#vista-ganador");
const vistaRegistrarseAdmin = document.querySelector("#vista-registro-admistrador");
const vistaBancoPalabras = document.querySelector("#vista-banco-palabras");
const navigator = document.querySelector("#navigator");


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
const formReintentarPerdedorNuevaPalabra = document.querySelector("#perdedor-form-volver-jugar-rand")
const formReintentarGanadorNuevaPalabra = document.querySelector("#ganador-form-volver-jugar")
const formReintentarMismaPalabra = document.querySelector("#perdedor-form-volver-jugar-same")
const formAdministrador = document.querySelector("#administrador-form")
const formRegistroAdmin = document.querySelector("#registro-admin-form");
const formNuevaPalabra = document.querySelector("#nueva-palabra-form");
const formSalirBancoPalabras = document.querySelector("#salir-banco-palabras-form");
const formCategoriaDeportes = document.querySelector("#juego-categoria-deporte");
const formCategoriaUCB = document.querySelector("#juego-categoria-ucb");
const formCategoriaSistemas = document.querySelector("#juego-categoria-sistemas");

//INPUTS

const passwordAdmin = document.querySelector("#password-admin");
const nuevaPalabra = document.querySelector("#nueva-palabra");
const categoriaDeporte = document.querySelector("#categoria-deporte");
const categoriaUCB = document.querySelector("#categoria-ucb");
const categoriaSistemas = document.querySelector("#categoria-sistemas");

//GenerarVistas

function ocultarVista(vista){
  vista.style.display = "none";
}

function mostrarVista(vista){
  vista.style.display = "block";
}

function mostrarVistaCampoJuego(){
  formIntento.innerHTML = generarHtmlIngresarIntento(tamPalabraSecreta);
  refrescarHistorialIntentos();
  vistaCampoJuego.style.display = "block";
  navigator.style.display = "block";
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
    navigator.style.display = "block";
    ocultarVista(vistaCampoJuego);
    formPerdedor.innerHTML = generarHtmlHistorialIntentos(tamPalabraSecreta, listaIntentos , listaPistas);
  }
}

function mostrarVistaGanador(resultadoJuego){
  let listaPistas = wordle.obtenerListaPistas();
  if(resultadoJuego == "Ganador"){
    vistaGanador.style.display = "block";
    navigator.style.display = "block";
    ocultarVista(vistaCampoJuego);
    formPalabraSecreta.innerHTML = generarHtmlPalabraSecreta(tamPalabraSecreta, palabraSecreta);
    formGanador.innerHTML = generarHtmlHistorialIntentos(tamPalabraSecreta, listaIntentos , listaPistas);
  }
}

//Funciones Auxiliares

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

function jugarCategoria(categoriaJuego){
  wordle.definirPalabraSecreta(categoriaJuego);
  categoria = categoriaJuego;
  palabraSecreta = wordle.obtenerPalabraSecreta();
  alert(palabraSecreta);
  tamPalabraSecreta = palabraSecreta.length;
  listaIntentos = wordle.obtenerHistorialIntentos();
  ocultarVista(vistaModalidades);
  mostrarVistaCampoJuego();
}


//EVENTOS
formJuegoRapido.addEventListener("submit", (event) => {
  event.preventDefault();
  jugarCategoria("General");
});

formJuegoRapidoPrincipal.addEventListener("submit", (event) => {
  event.preventDefault();

  wordle.definirPalabraSecreta();
  palabraSecreta = wordle.obtenerPalabraSecreta();
  tamPalabraSecreta = palabraSecreta.length;

  listaIntentos = wordle.obtenerHistorialIntentos();
  ocultarVista(vistaPantallaPrincipal);
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
  ocultarVista(vistaPantallaPrincipal);
  mostrarVista(vistaTutorial);
  navigator.style.display = "block";
});

formModalidades.addEventListener("submit", (event) => {
  event.preventDefault();
  ocultarVista(vistaPantallaPrincipal);
  mostrarVista(vistaModalidades);
  navigator.style.display = "block";
});

formReintentarPerdedorNuevaPalabra.addEventListener("submit", (event)=>{
  event.preventDefault();
  wordle.definirPalabraSecreta(categoria);
  palabraSecreta = wordle.obtenerPalabraSecreta();
  alert(palabraSecreta);
  tamPalabraSecreta = palabraSecreta.length;
  listaIntentos = wordle.obtenerHistorialIntentos();
  ocultarVista(vistaPerdedor);
  mostrarVistaCampoJuego();
});

formReintentarGanadorNuevaPalabra.addEventListener("submit", (event)=>{
  event.preventDefault();
  wordle.definirPalabraSecreta(categoria);
  palabraSecreta = wordle.obtenerPalabraSecreta();
  alert(palabraSecreta);
  tamPalabraSecreta = palabraSecreta.length;
  listaIntentos = wordle.obtenerHistorialIntentos();
  ocultarVista(vistaGanador);
  mostrarVistaCampoJuego();
});

formReintentarMismaPalabra.addEventListener("submit", (event)=>{
  event.preventDefault();
  wordle.definirSecreta(wordle.obtenerPalabraSecreta());
  palabraSecreta = wordle.obtenerPalabraSecreta();
  tamPalabraSecreta = palabraSecreta.length;
  listaIntentos = wordle.obtenerHistorialIntentos();
  ocultarVista(vistaPerdedor);
  mostrarVistaCampoJuego();
});


formAdministrador.addEventListener("submit", (event) => {
  event.preventDefault();
  ocultarVista(vistaPantallaPrincipal);
  mostrarVista(vistaRegistrarseAdmin);
  navigator.style.display = "block";
});

formRegistroAdmin.addEventListener("submit", (event) => {
  event.preventDefault();
  let password = passwordAdmin.value;
  if(password == passwordAdministrador){
    ocultarVista(vistaRegistrarseAdmin);
    mostrarVista(vistaBancoPalabras);
    navigator.style.display = "block";
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
  ocultarVista(vistaBancoPalabras);
  navigator.style.display = "none";
  mostrarVista(vistaPantallaPrincipal);
});

formCategoriaDeportes.addEventListener("submit", (event) => {
  event.preventDefault();
  jugarCategoria("Deporte");
});

formCategoriaUCB.addEventListener("submit", (event) => {
  event.preventDefault();
  jugarCategoria("UCB");
});

formCategoriaSistemas.addEventListener("submit", (event) => {
  event.preventDefault();
  jugarCategoria("Sistemas");
});