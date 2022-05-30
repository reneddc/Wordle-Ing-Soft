import Wordle from "./wordle"

describe("B. VER PANTALLA PRINCIPAL (JUGADOR)", () => {
  //HDU 1
  it("1. Presionar el botón de “Juego Rápido” y enviar a la vista “Campo de Juego”", ()=> {});

  //HDU 2
  it("2. Presionar el botón de “Tutorial” y enviar a la vista “Tutorial”", ()=> {});
})

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
    expect(wordleF.obtenerPalabrasSeleccionables()).toEqual(["HOJA", "HOLA", "LOBO", "COLA", "PALO", "PICO", "COCA", "PERO", "DUKE", "RAYOS", "MESSI", "PALOS", "LIBRO", "LLAVE", "BALON", "CINCO"]);
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
    wordleG.definirSecreta("BOLA");
    wordleG.definirIntento("");
    let intento = wordleG.obtenerIntento();
    expect(intento).toEqual("Palabra Incompleta.");
  });

  it("2. Si la palabra secreta es <HOLA> y se ingresa como intento la palabra <ho>, debería mostrar el mensaje “Palabra incompleta”" , () => {
    wordleG.definirSecreta("BOLA");
    wordleG.definirIntento("HO");
    let intento = wordleG.obtenerIntento();
    expect(intento).toEqual("Palabra Incompleta.");
  });

  it("3. Si la palabra secreta es <HOLA> y se ingresa como intento la palabra <bola>, se debería mostrar el intento <BOLA>" , () => {
    wordleG.definirSecreta("BOLA");
    wordleG.definirIntento("HOLA");
    let intento = wordleG.obtenerIntento();
    expect(intento).toEqual("HOLA");
  });

  //HDU 2
  it("1. Si la lista de palabras seleccionables es <BOLA, HOLA, DUKE> y se ingresa el intento <BOLA>, debería mostrarse la palabra <BOLA> como un intento válido" , () => {
    wordleG.definirSecreta("BOLA");
    wordleG.definirIntento("HOLA");
    let intento = wordleG.obtenerIntento();
    expect(intento).toEqual("HOLA");
  });

  it("2. Si la lista de palabras seleccionables es <BOLA, HOLA, DUKE> y se ingresa el intento <BOLA>, debería devolver “No existe esa palabra”" , () => {
    wordleG.definirSecreta("HOLA");
    wordleG.definirIntento("LOLA");
    let intento = wordleG.obtenerIntento();
    expect(intento).toEqual("No existe esa palabra.");
  });

  //HDU 3
  it("1. Si la lista de palabras seleccionables es <BOLA, HOLA, DUKE> y se ingresa el intento <BOLA>, después la palabra <HOLA>, debería mostrarse los intentos <BOLA, HOLA>" , () => {
    wordleG.definirSecreta("BOLA");
    wordleG.definirIntento("HOLA");
    wordleG.definirIntento("COLA");
    let listaIntentos = wordleG.obtenerHistorialIntentos();
    expect(listaIntentos[0]).toEqual("HOLA");
    expect(listaIntentos[1]).toEqual("COLA");
  });

  it("2. Si la lista de palabras seleccionables es <BOLA, HOLA, DUKE> y se ingresa el intento <COLA>, debería devolver “No existe esa palabra” y volver a intentar ingresar otra palabra" , () => {
    wordleG.definirSecreta("BOLA");
    wordleG.definirIntento("HOLA");
    wordleG.definirIntento("SOLA");
    wordleG.definirIntento("COLA");
    let listaIntentos = wordleG.obtenerHistorialIntentos();
    expect(listaIntentos[0]).toEqual("HOLA");
    expect(listaIntentos[1]).toEqual("COLA");
  });

  //HDU 4
  it("1. Si la lista de palabras seleccionables es <BOLA, HOLA, DUKE> y se ingresa el intento <COLA>, debería devolver “No existe esa palabra”, el contador de intentos igual a 0 y la lista de intentos como <””, “”, “”, “”, “”, “”>" , () => {
    wordleG.definirSecreta("BOLA");
    wordleG.definirIntento("SOLA");
    let listaIntentos = wordleG.obtenerHistorialIntentos();
    let nroIntentos = wordleG.obtenerNroIntentos();
    expect(listaIntentos).toEqual(["X", "X", "X", "X", "X", "X"]);
    expect(nroIntentos).toEqual(0);
  });

  it("2. Si se ingresó otro intento <HOLA>, debería mostrarse la lista de intentos como <HOLA, “”, “”, “”, “”, “”> y el contador de intentos igual a 1" , () => {
    wordleG.definirSecreta("BOLA");
    wordleG.definirIntento("HOLA");
    let listaIntentos = wordleG.obtenerHistorialIntentos();
    let nroIntentos = wordleG.obtenerNroIntentos();
    expect(listaIntentos).toEqual(["HOLA", "X", "X", "X", "X", "X"]);
    expect(nroIntentos).toEqual(1);
  });

  it("3. Si la lista de palabras seleccionables es <BOLA, HOLA, DUKE> y se ingresa el intento <BOLA>, <COLA>, <HOLA>, debería devolver el contador de intentos en 2 y la lista de intentos como <BOLA, HOLA, “”, “”, “”, “”>" , () => {
    wordleG.definirSecreta("BOLA");
    wordleG.definirIntento("HOLA");
    wordleG.definirIntento("SOJA");
    wordleG.definirIntento("COLA");
    let listaIntentos = wordleG.obtenerHistorialIntentos();
    let nroIntentos = wordleG.obtenerNroIntentos();
    expect(listaIntentos).toEqual(["HOLA", "COLA", "X", "X", "X", "X"]);
    expect(nroIntentos).toEqual(2);
  });

  it("4. Si el contador de intentos es igual a 6, debería bloquearse la opción de ingresar más intentos" , () => {
    wordleG.definirSecreta("BOLA");
    wordleG.definirIntento("HOLA");
    wordleG.definirIntento("HOJA");
    wordleG.definirIntento("COLA");
    wordleG.definirIntento("COLA");
    wordleG.definirIntento("COCA");
    wordleG.definirIntento("PERO");
    wordleG.definirIntento("DUKE");
    let listaIntentos = wordleG.obtenerHistorialIntentos();
    let nroIntentos = wordleG.obtenerNroIntentos();
    expect(listaIntentos).toEqual(["HOLA", "HOJA", "COLA", "COLA", "COCA", "PERO"]);
    expect(nroIntentos).toEqual(6);
  });
});

describe("H. MOSTRAR PISTAS", () => {
  let wordleH = new Wordle();
  
  //HDU 1
  it("1. Ingresar un intento y que muestre una “Cadena Resultado” de caracteres del tamaño del intento con el símbolo <o>.", ()=> {
    wordleH.definirSecreta("GRIP");
    wordleH.definirIntento("COLA");
    let cadena_resultado = wordleH.obtenerCadenaResultado();
    expect(cadena_resultado).toEqual("oooo");
  });

  //HDU 2
  it("1. Ingresar un intento y mostrar una “Cadena Resultado” con la misma cantidad de caracteres, con la primera posición igual a <z>, si la primera letra de la palabra secreta es igual a la primera letra del intento y el resto de caracteres iguales a <o>.", ()=> {
    wordleH.definirSecreta("CRIP");
    wordleH.definirIntento("COLA");
    let cadena_resultado = wordleH.obtenerCadenaResultado();
    expect(cadena_resultado).toEqual("zooo");
  });

  //HDU 3
  it("1. Ingresar un intento y mostrar una “Cadena Resultado” con las posiciones iguales a <z>, si las letras y sus posiciones de la palabra secreta son iguales a las letras y sus posiciones del intento,  el resto de caracteres iguales a <o>.", ()=> {
    wordleH.definirSecreta("CRIA");
    wordleH.definirIntento("COLA");
    let cadena_resultado = wordleH.obtenerCadenaResultado();
    expect(cadena_resultado).toEqual("zooz");
  });

  it("2. Ingresar un intento y mostrar una “Cadena Resultado” con las posiciones iguales a <z>, si las letras y sus posiciones de la palabra secreta son iguales a las letras y sus posiciones del intento,  el resto de caracteres iguales a <o>.", ()=> {
    wordleH.definirSecreta("COLA");
    wordleH.definirIntento("COLA");
    let cadena_resultado = wordleH.obtenerCadenaResultado();
    expect(cadena_resultado).toEqual("zzzz");
  });

  //HDU 5
  it("1. Ingresar un intento y mostrar una “Cadena Resultado” con las posiciones iguales a <a>, si alguna de las letras de la palabra secreta es igual a una de las letras del intento y su posición es distinta, el resto de caracteres iguales a <o>.", ()=> {
    wordleH.definirSecreta("YCYY");
    wordleH.definirIntento("COLA");
    let cadena_resultado = wordleH.obtenerCadenaResultado();
    expect(cadena_resultado).toEqual("aooo");
  });

  //HDU 6
  it("1. Si la “Palabra Secreta” es <aloc> y se ingresa como intento el código <cola>, debería mostrar la “Cadena Respuesta” como <aaaa>.", ()=> {
    wordleH.definirSecreta("ALOC");
    wordleH.definirIntento("COLA");
    let cadena_resultado = wordleH.obtenerCadenaResultado();
    expect(cadena_resultado).toEqual("aaaa");
  });

  it("2. Si la “Palabra Secreta” es <alob> y se ingresa como intento el código <lobo>, debería mostrar la “Cadena Respuesta” como <aaao>.", ()=> {
    wordleH.definirSecreta("ALOB");
    wordleH.definirIntento("LOBO");
    let cadena_resultado = wordleH.obtenerCadenaResultado();
    expect(cadena_resultado).toEqual("aaao");
  });

  //8
  it("1. Si la “Palabra Secreta” es <casa> y se ingresa como intento el código <caos>, debería mostrar la “Cadena Respuesta” como <zzoa>", ()=> {
    wordleH.definirSecreta("AOAA");
    wordleH.definirSecreta("AAOU");
    wordleH.definirIntento("AOAA");
    let cadena_resultado = wordleH.obtenerCadenaResultado();
    expect(cadena_resultado).toEqual("zaao");
  });

  it("1. Si la “Palabra Secreta” es <casa> y se ingresa como intento el código <caos>, debería mostrar la “Cadena Respuesta” como <zzoa>", ()=> {
    wordleH.definirSecreta("AOAA");
    wordleH.definirSecreta("AAOU");
    wordleH.definirIntento("AOAA");
    wordleH.definirIntento("LOBO");

    let cadena_resultado = wordleH.obtenerListaPistas();
    expect(cadena_resultado).toEqual(["zaao", "oaoo", "X", "X", "X", "X"]);
  });
});

  
describe("I. PERDER", () => {
    let wordleI = new Wordle();
    
    //HDU 1
    it("1. Si ninguna da como “Cadena Resultado” <zzzz> o tiene todas las letras con fondo azul, debería mostrar el mensaje “Perdedor”", ()=> {
      wordleI.definirSecreta("AOAA");
      wordleI.definirIntento("HOLA");
      wordleI.definirIntento("HOJA");
      wordleI.definirIntento("COLA");
      wordleI.definirIntento("COLA");
      wordleI.definirIntento("COCA");
      wordleI.definirIntento("PERO");
      let resultado = wordleI.obtenerResultadoJuego();
      expect(resultado).toEqual("Perdedor");
    });
});


describe("J. GANAR", () => {
  let wordleJ = new Wordle();
  
  //HDU 1
  it("1. Si da como “Cadena Resultado” <zzzz> o tiene todas las letras con fondo azul, debería mostrar el mensaje “Ganador” y bloquear la opción de ingresar más intentos.", ()=> {
    wordleJ.definirSecreta("HOLA");
    wordleJ.definirIntento("HOJA");
    wordleJ.definirIntento("HOLA");
    let resultado = wordleJ.obtenerResultadoJuego();
    expect(resultado).toEqual("Ganador");
  });
});



//ITERACIÓN 2


describe("H. INGRESAR INTENTOS", () => {
  let wordleH = new Wordle();
  
  //HDU 1
  it("1. Si la palabra secreta es <HOLA> y se presiona el botón <PISTA> debería mostrar la letra al azar de la palabra secreta como <L>", ()=> {
    wordleH.definirPalabraSecreta();
    let palabraSecreta = wordleH.obtenerPalabraSecreta();
    let letra = wordleH.obtenerPista();
    expect(palabraSecreta[0]).toEqual(letra);
  });

  //HDU 2

  it("2. Si la palabra secreta es <HOLA> y se presiona el botón <PISTA> debería mostrar la letra al azar de la palabra secreta como <L> y la posición 3", ()=> {
    wordleH.definirPalabraSecreta();
    let palabraSecreta = wordleH.obtenerPalabraSecreta();
    let posicion = wordleH.obtenerPosicionPista();
    let letra = wordleH.obtenerPista();
    expect(palabraSecreta[posicion]).toEqual(letra);
  });

});

