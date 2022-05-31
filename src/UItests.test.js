import fs from "fs";

//____________________________________VISTAS_______________________________________

describe("VISTAS", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("./presenter.js");
  });

  it("Borrar la pantalla principal y que muetre el campo de juego", () => {
    let vistaPantallaPrincipal = document.querySelector("#vista-Principal");
    let vistaCampoJuego = document.querySelector("#vista-campo-juego");
    let botonJuegoRapido = document.querySelector("#boton-juego-rapido");

    botonJuegoRapido.click();

    let stateNone = vistaPantallaPrincipal.style.display;
    let stateBlock = vistaCampoJuego.style.display;

    expect(stateNone).toEqual("none");
    expect(stateBlock).toEqual("block");
  });

  it("Borrar la pantalla menu principal y que muestre tutorial", () => {
    let vistaPantallaPrincipal = document.querySelector("#vista-Principal");
    let vistaTutorial = document.querySelector("#vista-tutorial");
    let botonTutorial = document.querySelector("#boton-tutorial");

    botonTutorial.click();

    let stateNone = vistaPantallaPrincipal.style.display;
    let stateBlock = vistaTutorial.style.display;

    expect(stateNone).toEqual("none");
    expect(stateBlock).toEqual("block");
  });
});  


//____________________________________OTROS_______________________________________

describe("OBTENER VALORES", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("./presenter.js");
  });

  it("No se muestra ningun color si no se hizo un intento", () => {
    let botonJuegoRapido = document.querySelector("#boton-juego-rapido");
    botonJuegoRapido.click();

    let botonIngresarIntento = document.querySelector(".ingresar-palabra-boton");
    expect(botonIngresarIntento.value).toEqual("Hola");
    //let casillaIntento = document.querySelectorAll("#input-0");
    let casillasIntento = document.querySelectorAll(".ingresar-intento");
    //casillaIntento.value = "H";
    
    //for(let i=0; i<casillasIntento.length; i++){
      //expect(casillasIntento.length).toEqual(4);
      //const historialIntentos =document.querySelectorAll(".fila-1")
      //expect(historialIntentos.length).toEqual(4);
      //expect(casillasIntento[i].value).toEqual("");
    //}
  });

  it("Se muestra el primer intento ingresado", () => {
    /*let botonJuegoRapido = document.querySelector("#boton-juego-rapido");
    botonJuegoRapido.click();

    let botonIngresarIntento = document.querySelector(".ingresar-palabra-boton");
    let palabraAdivinar = document.querySelectorAll(".ingresar-intento");
    
    let tam = palabraAdivinar.length;
    /*palabraAdivinar[0].value = "P";
    palabraAdivinar[1].value = "A";
    palabraAdivinar[2].value = "L";
    palabraAdivinar[3].value = "O";
    if(palabraAdivinar.length > 4){
      palabraAdivinar[4].value = "S";
    }

    botonIngresarIntento.click();

    const casillasIntento = document.querySelectorAll(".ingresar-intento");
    const historialIntentos =document.querySelectorAll(".fila-1")

    for(let i=0; i<casillasIntento.length; i++){
      expect(historialIntentos[i].value).toEqual(palabraAdivinar[i].value);
    }
    expect(tam).toEqual(4);*/
    /*const botonJuegoRapido = document.querySelector("#boton-juego-rapido");
    botonJuegoRapido.click();

    const palabraAdivinar = document.querySelectorAll(".ingresar-intento");
    const botonIngresarIntento = document.querySelector(".ingresar-palabra-boton");
    palabraAdivinar[0].value = "C";
    palabraAdivinar[1].value = "O";
    palabraAdivinar[2].value = "L";
    palabraAdivinar[3].value = "A";

    botonIngresarIntento.click();

    const historialIntentos =document.querySelectorAll(".fila-1")
    const resultado = historialIntentos[0].style.background;
    expect(resultado).toEqual("rgb(194, 192, 192)");*/
  });

});  

//<TEST UI> <Borrar la pantalla principal y que muetre el campo de juego>