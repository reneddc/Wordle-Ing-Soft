import fs from "fs";

//____________________________________VISTAS_______________________________________

describe("VISTAS", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("./presenter.js");
  });

  it("Borrar la pantalla principal y que muetre el campo de juego", () => {
    const vistaPantallaPrincipal = document.querySelector("#vista-Principal");
    const vistaCampoJuego = document.querySelector("#vista-campo-juego");
    const botonJuegoRapido = document.querySelector("#boton-juego-rapido");

    botonJuegoRapido.click();

    const stateNone = vistaPantallaPrincipal.style.display;
    const stateBlock = vistaCampoJuego.style.display;

    expect(stateNone).toEqual("none");
    expect(stateBlock).toEqual("block");
  });

});  




//____________________________________ _______________________________________


