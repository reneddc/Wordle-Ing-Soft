
class Wordle{
    constructor(){
        this.palabrasSeleccionables = ["HOJA", "HOLA", "LOBO", "COLA", "PALO", "CINCO", "CIRCO", "PERRO", "DUKE"];
    }

    obtenerPalabrasSeleccionables(){
        return this.palabrasSeleccionables;
    }
    
    obtenerPalabraSecreta(){
        let posicion = Math.floor(Math.random() * this.palabrasSeleccionables.length);
        return this.palabrasSeleccionables[posicion];
    }
}
export default Wordle;