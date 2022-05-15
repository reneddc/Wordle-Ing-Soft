import FuncionesWordle from "./funcionesWordle";

class Wordle{
    constructor(){
        this.palabraSecreta;
        this.funionesWordle = new FuncionesWordle();
    }

    definirPalabraSecreta(){
        this.palabraSecreta = this.funionesWordle.definirPalabraSecretaAlAzar();
    }

    ingresarIntento(intentoPalabra){
        let intento = "";
        if(intentoPalabra.length < this.palabraSecreta.length){
            intento = "Palabra Incompleta.";
        }
        return intento;
    }
    
    obtenerPalabraSecreta(){
        return this.palabraSecreta;
    }

    obtenerPalabrasSeleccionables(){
        return this.funionesWordle.obtenerListaPalabras();
    }
}
export default Wordle;