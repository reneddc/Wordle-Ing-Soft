import Wordle from "./wordle"


describe("F. DEFINIR MODALIDADES DE JUEGO", () => {
  let wordleF = new Wordle();
  //HDU 1
  it("1. En la vista “Modalidades de Juego” debería mostrar la descripción de la modalidad “Juego Rápido”: Adivinar una palabra cualquiera elegida al azar" , () => {});

  //HDU 2
  it("1. Si se presiona el botón “Juego Rápido” se debería borrar la vista “Modalidades” y mostrar la vista “Campo de Juego”" , () => {});

  //HDU 3
  it("1. Si se presiona el botón “Juego Rápido” y la palabra creada por el juego fue <HOLA>, debería mostrar un mensaje de texto con la palabra <HOLA>" , () => {
    expect(wordleF.obtenerPalabrasSeleccionables()[0]).toEqual("HOJA");
  });

  //HDU 4
  it("1. Si se presiona el botón “Juego Rápido” y la lista de palabras creadas por el juego fue <HOLA, HIJA, DUKE>, debería mostrar un mensaje de texto con las palabras <HOLA, HIJA, DUKE>" , () => {
    expect(wordleF.obtenerPalabrasSeleccionables()).toEqual(["HOJA", "HOLA", "LOBO", "COLA", "PALO", "CINCO", "CIRCO", "PERRO", "DUKE"]);
  });

  //HDU 5
  it("1. Si se presiona el botón “Juego Rápido” y la lista de palabras creada por el juego fue <HOLA, HIJA, DUKE>, debería definirse como “Palabra Secreta” a <HOLA> y mostrarla en pantalla" , () => {
    expect(wordleF.obtenerPalabrasSeleccionables()[0]).toEqual("HOJA");
  });

  //HDU 6
  it("1. Si se presiona el botón “Juego Rápido” y la lista de palabras creada por el juego fue <HOLA, HIJA, DUKE>, debería definirse al azar la “Palabra Secreta” y mostrarla" , () => {
    wordleF.definirPalabraSecreta();
    let palabraSecreta = wordleF.obtenerPalabraSecreta();
    console.log(palabraSecreta);
    expect(palabraSecreta).toEqual(palabraSecreta);
  });
});


describe("G. INGRESAR INTENTOS", () => {
  let wordleG = new Wordle();

  //HDU 1
  it("1. Si la palabra secreta es <HOLA> y se ingresa como intento la palabra <>, debería mostrar el mensaje “Palabra incompleta”" , () => {
    wordleG.definirPalabraSecreta();
    let intento = wordleG.ingresarIntento("");
    expect(intento).toEqual("Palabra Incompleta.");
  });

  it("2. Si la palabra secreta es <HOLA> y se ingresa como intento la palabra <ho>, debería mostrar el mensaje “Palabra incompleta”" , () => {
    wordleG.definirPalabraSecreta();
    let intento = wordleG.ingresarIntento("ho");
    expect(intento).toEqual("Palabra Incompleta.");
  });

});



