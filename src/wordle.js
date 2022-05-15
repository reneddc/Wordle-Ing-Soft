import FuncionesWordle from "./funcionesWordle";

class Wordle{
    constructor(){
        this.palabraSecreta;
        this.tamPalabraSecreta;
        this.intento;
        this.historialIntentos = [];
        this.funcionesWordle = new FuncionesWordle();
    }

    definirPalabraSecreta(){
        this.palabraSecreta = this.funcionesWordle.definirPalabraSecretaAlAzar();
        this.definirTamPalabraSecreta();
    }

    definirTamPalabraSecreta(){
        this.tamPalabraSecreta = this.funcionesWordle.definirTamanioPalabraSecreta(this.palabraSecreta);
    }

    definirIntento(intentoPalabra){
        this.intento = this.funcionesWordle.definirIntento(intentoPalabra, this.tamPalabraSecreta);
        this.historialIntentos = this.funcionesWordle.definirHistorialIntentos();
    }

    obtenerIntento(){
        return this.intento;
    }

    obtenerHistorialIntentos(){
        return this.historialIntentos;
    }
    
    obtenerPalabraSecreta(){
        return this.palabraSecreta;
    }

    obtenerPalabrasSeleccionables(){
        return this.funcionesWordle.obtenerListaPalabras();
    }
}
export default Wordle;