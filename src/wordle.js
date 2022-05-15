import FuncionesWordle from "./funcionesWordle";

class Wordle{
    constructor(){
        this.palabraSecreta;
        this.tamPalabraSecreta;
        this.funcionesWordle = new FuncionesWordle();
    }

    definirPalabraSecreta(){
        this.palabraSecreta = this.funcionesWordle.definirPalabraSecretaAlAzar();
    }

    definirTamPalabraSecreta(){
        this.tamPalabraSecreta = this.funcionesWordle.definirTamanioPalabraSecreta(this.palabraSecreta);
        console.log(this.tamPalabraSecreta)
    }

    ingresarIntento(intentoPalabra){
        let intento = "";
        this.definirTamPalabraSecreta();
        if(intentoPalabra.length < this.tamPalabraSecreta){
            intento = "Palabra Incompleta.";
        }
        return intento;
    }
    
    obtenerPalabraSecreta(){
        return this.palabraSecreta;
    }

    obtenerPalabrasSeleccionables(){
        return this.funcionesWordle.obtenerListaPalabras();
    }
}
export default Wordle;