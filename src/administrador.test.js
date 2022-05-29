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
});