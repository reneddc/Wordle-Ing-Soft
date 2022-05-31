import fs from "fs";

//____________________________________VISTAS_______________________________________

/*describe("VISTA CAMPO DE JUEGO", () => {
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

describe("VISTA TUTORIAL", () => {
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
});  

describe("VISTA MODALIDADES", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("./presenter.js");
  });

  it("Borrar la pantalla principal y que muetre la vista de modalidades", () => {
    let vistaPantallaPrincipal = document.querySelector("#vista-Principal");
    let vistaModalidades = document.querySelector("#vista-modalidades");
    let botonModalidades = document.querySelector("#boton-modalidades");
    let stateNone = vistaPantallaPrincipal.style.display;//antes del click
    let stateBlock = vistaModalidades.style.display;//antes del click

    expect(stateNone).toEqual("");
    expect(stateBlock).toEqual("none");

    botonModalidades.click();

    stateNone = vistaPantallaPrincipal.style.display;//después del click
    stateBlock = vistaModalidades.style.display;//después del click

    expect(stateBlock).toEqual("block");
    expect(stateNone).toEqual("none");
  });
});

describe("VISTA REGISTRARSE COMO ADMINISTRADOR", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("./presenter.js");
  });

  it("Borrar la pantalla principal y que muetre la vista de registrase como administrador", () => {
    let vistaPantallaPrincipal = document.querySelector("#vista-Principal");
    let vistaRegistrarseAdmin = document.querySelector("#vista-registro-admistrador");
    let botonRegistrarseAdmin = document.querySelector("#boton-registrarse-admin");
    let stateNone = vistaPantallaPrincipal.style.display;//antes del click
    let stateBlock = vistaRegistrarseAdmin.style.display;//antes del click

    expect(stateNone).toEqual("");
    expect(stateBlock).toEqual("none");

    botonRegistrarseAdmin.click();

    stateNone = vistaPantallaPrincipal.style.display;//después del click
    stateBlock = vistaRegistrarseAdmin.style.display;//después del click

    expect(stateBlock).toEqual("block");
    expect(stateNone).toEqual("none");
  });
}); 

describe("VISTA REGISTRARSE COMO ADMINISTRADOR", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("./presenter.js");
  });

  it("Borrar la vista de registrarse como admin y que muetre la vista banco de palabras", () => {
    let vistaRegistrarseAdmin = document.querySelector("#vista-registro-admistrador");
    let vistaBancoPalabras = document.querySelector("#vista-banco-palabras");
    let botonRegistrarseAdmin = document.querySelector("#boton-registrarse-admin");

    botonRegistrarseAdmin.click();

    let passwordAdmin =  document.querySelector("#password-admin");
    let botonAceptarPassword = document.querySelector("#boton-aceptar-password");

    let stateNone = vistaRegistrarseAdmin.style.display;//antes del click
    let stateBlock = vistaBancoPalabras.style.display;//antes del click

    expect(stateNone).toEqual("block");
    expect(stateBlock).toEqual("none");

    passwordAdmin.value = "123";
    botonAceptarPassword.click();

    stateNone = vistaRegistrarseAdmin.style.display;//antes del click
    stateBlock = vistaBancoPalabras.style.display;//antes del click

    expect(stateNone).toEqual("none");
    expect(stateBlock).toEqual("block");
  });
}); 

//____________________________________OTROS_______________________________________


describe("CAMPO DE JUEGO AL INICIAR", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("./presenter.js");
  });

  it("Mostrar Inputs de ingreso de intento vacíos al iniciar la partida", () => {
    let botonJuegoRapido = document.querySelector("#boton-juego-rapido");
    botonJuegoRapido.click();

    let casillasIntento = document.querySelectorAll(".ingresar-intento");
    for(let i = 0; i < casillasIntento.length; i++){
      expect(casillasIntento[i].value).toEqual("");
    }
  });
}); 
*/
describe("PRIMER INTENTO", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("./presenter.js");
  });

  it("Mostrar en la primera fila del historial el intento ingresado", () => {
    let botonJuegoRapido = document.querySelector("#boton-juego-rapido");
    botonJuegoRapido.click();

    const inputsIntento = document.querySelectorAll(".ingresar-intento");
    const botonIngresarIntento = document.querySelector(".ingresar-palabra-boton");
    const intento = "PALOS";
    inputsIntento[0].value = intento[0];
    inputsIntento[1].value = intento[1];
    inputsIntento[2].value = intento[2];
    inputsIntento[3].value = intento[3];
    if(inputsIntento.length > 4){
      inputsIntento[4].value = intento[4];
    }

    botonIngresarIntento.click();
    const historialIntentos = document.querySelectorAll(".fila-1")
    for(let i = 0; i < historialIntentos.length; i++){
      expect(historialIntentos[i].value).toEqual(intento[i]);
    }
  });
});
