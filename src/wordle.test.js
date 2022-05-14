import obtenerPalabrasSeleccionables from "./wordle"


describe("F. DEFINIR MODALIDADES DE JUEGO", () => {
  //HDU 1
  it("1. En la vista “Modalidades de Juego” debería mostrar la descripción de la modalidad “Juego Rápido”: Adivinar una palabra cualquiera elegida al azar" , () => {});

  //HDU 2
  it("1. Si se presiona el botón “Juego Rápido” se debería borrar la vista “Modalidades” y mostrar la vista “Campo de Juego”" , () => {});

  //HDU 3
  it("1. Si se presiona el botón “Juego Rápido” y la palabra creada por el juego fue <HOLA>, debería mostrar un mensaje de texto con la palabra <HOLA>" , () => {
    expect(obtenerPalabrasSeleccionables()[0]).toEqual("HOJA");
  });

  //HDU 4
  it("1. Si se presiona el botón “Juego Rápido” y la lista de palabras creadas por el juego fue <HOLA, HIJA, DUKE>, debería mostrar un mensaje de texto con las palabras <HOLA, HIJA, DUKE>" , () => {
    expect(obtenerPalabrasSeleccionables()).toEqual(["HOJA", "HOLA", "LOBO", "COLA", "PALO", "CINCO", "CIRCO", "PERRO", "DUKE"]);
  });

  //HDU 5
  it("1. Si se presiona el botón “Juego Rápido” y la lista de palabras creada por el juego fue <HOLA, HIJA, DUKE>, debería definirse como “Palabra Secreta” a <HOLA> y mostrarla en pantalla" , () => {
    expect(obtenerPalabraSecreta()).toEqual("HOJA");
  });
});



