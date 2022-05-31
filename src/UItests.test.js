import fs from "fs";

//____________________________________VISTAS_______________________________________

/*describe("VISTAS", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("./presenter.js");
  });

  it("Borrar la pantalla principal y que muetre el campo de juego", () => {
    let vistaPantallaPrincipal = document.querySelector("#vista-Principal");
    let vistaCampoJuego = document.querySelector("#vista-campo-juego");
    let botonJuegoRapido = document.querySelector("#boton-juego-rapido");
    let stateNone = vistaPantallaPrincipal.style.display;//antes del click
    let stateBlock = vistaCampoJuego.style.display;//antes del click

    expect(stateNone).toEqual("");
    expect(stateBlock).toEqual("none");

    botonJuegoRapido.click();

    stateNone = vistaPantallaPrincipal.style.display;//después del click
    stateBlock = vistaCampoJuego.style.display;//después del click

    expect(stateBlock).toEqual("block");
    expect(stateNone).toEqual("none");
  });
});  

describe("VIST", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("./presenter.js");
  });

  it("Borrar la pantalla menu principal y que muestre tutorial", () => {

    let vistaPantallaPrincipal = document.querySelector("#vista-Principal");
    let vistaTutorial = document.querySelector("#vista-tutorial");
    let botonTutorial = document.querySelector("#tutorial-form .submit");

    let stateNone = vistaPantallaPrincipal.style.display;//antes del click
    let stateBlock = vistaTutorial.style.display;//antes del click

    expect(stateNone).toEqual("");
    expect(stateBlock).toEqual("none");

    botonTutorial.click();

    stateNone = vistaPantallaPrincipal.style.display;//antes del click
    stateBlock = vistaTutorial.style.display;//antes del click

    expect(stateNone).toEqual("none");
    expect(stateBlock).toEqual("block");
  });
});  */


//____________________________________OTROS_______________________________________


describe("VIST", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("./presenter.js");
  });

  it("No se muestra ningun color si no se hizo un intento", () => {
    let botonJuegoRapido = document.querySelector("#boton-juego-rapido");
    botonJuegoRapido.click();

    let casillasIntento = document.querySelectorAll(".ingresar-intento");
    for(let i = 0; i < casillasIntento.length; i++){
      expect(casillasIntento[i].value).toEqual("");
    }
  });
}); 


//<TEST UI> <Borrar la pantalla principal y que muetre el campo de juego>