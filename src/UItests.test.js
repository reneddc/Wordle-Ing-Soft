/*import fs from "fs";

describe("Adivinar Palabra", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("./presenter.js");
  });

  it("Los colores del historial de intentos sea blanco al iniciar el juego", () => {
    
    const botonJuegoRapido = document.querySelector("#boton-juego-rapido");
    botonJuegoRapido.click();

    const historialIntentos1 =document.querySelectorAll(".fila-1");
    //si la primera fila es blanco el resto también, es para evitar un test demasiado largo

    let resultado = [];
    for(let i = 0; i < 4; i++){
      resultado[i] = historialIntentos1[i].style.background;
    }
    
    expect(resultado).toEqual(["rgb(255, 255, 255)", "rgb(255, 255, 255)","rgb(255, 255, 255)", "rgb(255, 255, 255)"]);
  });

  it("No se muestra ningun color si el intento no coincide con ninguna letra de la palabra secreta", () => {
    
    const botonJuegoRapido = document.querySelector("#boton-juego-rapido");
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
    expect(resultado).toEqual("rgb(194, 192, 192)");
  });

  /*afterEach(() => {
    const resultado = document.querySelector("#resultado-div");
    resultado.innerHTML = "";
  });
});*/