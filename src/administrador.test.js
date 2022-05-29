import Wordle from "./wordle"

describe("E. DEFINIR BANCO DE PALABRAS", () => {
    let wordleE = new Wordle();
 
    //HDU 1

    it("1. Si se ingresa la palabra <MESSI> y la palabra ya existe en el banco de palabras debería mostrar el mensaje <Palabra MESSI ya existe>." , () => {
        let palabra = "MESSI";
        let nuevaPalabra = wordleF.definirNuevaPlabra(palabra);
        expect(nuevaPalabra).toEqual("La palabra ya existe");
    });
});