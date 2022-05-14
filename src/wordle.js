
class Wordle{
    constructor(){
        this.palabrasSeleccionables = ["HOJA", "HOLA", "LOBO", "COLA", "PALO", "CINCO", "CIRCO", "PERRO", "DUKE"];
    }

    obtenerPalabrasSeleccionables(){
        return this.palabrasSeleccionables;
    }
    
    obtenerPalabraSecreta(){
        return this.palabrasSeleccionables[0];
    }
}
export default Wordle;