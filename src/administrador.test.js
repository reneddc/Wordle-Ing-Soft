import Wordle from "./wordle"

describe("E. DEFINIR BANCO DE PALABRAS", () => {
    let wordleE = new Wordle();
 
    //HDU 1

    it("1. Si se ingresa la palabra <MESSI> y la palabra ya existe en el banco de palabras debería mostrar el mensaje <Palabra MESSI ya existe>." , () => {
        let palabra = "MESSI";
        wordleE.definirNuevaPalabra(palabra);
        let nuevaPalabra = wordleE.obtenerNuevaPalabra();
        expect(nuevaPalabra).toEqual("Ya existe esa palabra.");
    });

    it("2. Si se ingresa la palabra <MOUSE> y la palabra no existe en el banco de palabras debería mostrar la palabra <MOUSE>." , () => {
        let palabra = "MOUSE";
        wordleE.definirNuevaPalabra(palabra);
        let nuevaPalabra = wordleE.obtenerNuevaPalabra();
        expect(nuevaPalabra).toEqual("MOUSE");
    });

    //HDU 2

    it("1. Si se ingresa la palabra <RATON> y la palabra no existe en el banco de palabras debería mostrar la palabra <RATON> y ser agregada al banco de palabras." , () => {
        let palabra = "RATON";
        wordleE.definirNuevaPalabra(palabra);
        let listaPalabras = wordleE.obtenerPalabrasSeleccionables();
        expect(listaPalabras[listaPalabras.length - 1]).toEqual("RATON");
    });

    it("2. Si se ingresa la palabra <RATON> y la palabra ya existe en el banco de palabras debería mostrar el mensaje <Palabra MESSI ya existe> y no se agrega al banco de palabras." , () => {
        let palabra = "RATON";
        wordleE.definirNuevaPalabra(palabra);
        let nuevaPalabra = wordleE.obtenerNuevaPalabra();
        expect(nuevaPalabra).toEqual("Ya existe esa palabra.");
    });

    //HDU 3

    it("1. Si se ingresa la palabra <FUTBOL> y se elige la categoría <Deporte>, la palabra se debería añadir a la lista de palabras correspondiente a deportes y al banco de palabras general." , () => {
        let palabra = "FUTBOL";
        wordleE.definirNuevaPalabra(palabra);
        wordleE.definirCategorias(["Deporte"]);
        let listaPalabrasDeporte = wordleE.obtenerCategoriaDeporte();
        expect(listaPalabrasDeporte[listaPalabrasDeporte.length - 1]).toEqual("FUTBOL");
    });

    //HDU 4

    it("1. Si se ingresa la palabra <WIFI> y se elige la categoría <UCB> y <SISTEMAS>, la palabra se debería añadir a la lista de palabras correspondiente a UCB, sistemas y al banco de palabras general." , () => {
        let palabra = "WIFI";
        wordleE.definirNuevaPalabra(palabra);
        wordleE.definirCategorias(["UCB", "Sistemas"]);
        let listaPalabrasSistemas = wordleE.obtenerCategoriaSistemas();
        let listaPalabrasUCB = wordleE.obtenerCategoriaUCB();
        expect(listaPalabrasUCB[listaPalabrasUCB.length - 1]).toEqual("WIFI");
        expect(listaPalabrasSistemas[listaPalabrasSistemas.length - 1]).toEqual("WIFI");
    });
});


describe("F. DEFINIR MODALIDADES DE JUEGO", () => {
    let wordleF = new Wordle();
    wordleF.definirNuevaPalabra("BENZEMA");
    wordleF.definirCategorias(["Deporte"]);
    wordleF.definirNuevaPalabra("RONALDO");
    wordleF.definirCategorias(["Deporte"]);
    wordleF.definirNuevaPalabra("KOBE");
    wordleF.definirCategorias(["Deporte"]);
    wordleF.definirNuevaPalabra("NEYMAR");
    wordleF.definirCategorias(["Deporte"]);
    
    //HDU 2

    it("1. Si se presiona el botón de la categoría <DEPORTES> debería elegir una palabra secreta entre su lista de palabras como <MESSI, RONALDO, KOBE, NEYMAR>" , () => {
        wordleF.definirPalabraSecreta("Deporte");
        let palabraSecreta = wordleF.obtenerPalabraSecreta();
        let listaDeportes = wordleF.obtenerCategoriaDeporte();
        expect(listaDeportes).toContain(palabraSecreta);
    });

});