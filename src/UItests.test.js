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
    
    const botonJuegoRapido = document.querySelector("#boton-juego-rapido");
    botonJuegoRapido.click();

    const casillasIntento = document.querySelectorAll(".ingresar-intento");
    for(let i=0; i<casillasIntento.length; i++){
      expect(casillasIntento[i].value).toEqual("");
    }
  });
});  


//<TEST UI> <Borrar la pantalla principal y que muetre el campo de juego>