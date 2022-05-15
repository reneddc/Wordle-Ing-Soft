import FuncionesWordle from "./funcionesWordle";

class Wordle{
    constructor(){
        this.palabraSecreta;
        this.tamPalabraSecreta;
        this.intento;
        this.historialIntentos = [];
        this.listaPistas = [];
        this.nroIntentos;
        this.funcionesWordle = new FuncionesWordle();
        this.cadenaResultado;
    }

    definirPalabraSecreta(){
        this.palabraSecreta = this.funcionesWordle.definirPalabraSecretaAlAzar();
        this.definirTamPalabraSecreta();
        this.historialIntentos = this.funcionesWordle.definirHistorialIntentos();
        this.listaPistas = this.funcionesWordle.definirListaPistas();
        this.nroIntentos = this.funcionesWordle.definirNroIntentos();
    }

    definirSecreta(palabra){
        this.palabraSecreta = this.funcionesWordle.definirPalabraSecreta(palabra);
        this.definirTamPalabraSecreta();
        this.historialIntentos = this.funcionesWordle.definirHistorialIntentos();
        this.listaPistas = this.funcionesWordle.definirListaPistas();
        this.nroIntentos = this.funcionesWordle.definirNroIntentos();
    }

    definirTamPalabraSecreta(){
        this.tamPalabraSecreta = this.funcionesWordle.definirTamanioPalabraSecreta(this.palabraSecreta);
    }

    definirIntento(intentoPalabra){
        this.intento = this.funcionesWordle.definirIntento(intentoPalabra, this.tamPalabraSecreta);
        this.historialIntentos = this.funcionesWordle.definirHistorialIntentos();
        this.nroIntentos = this.funcionesWordle.definirNroIntentos();
        this.funcionesWordle.definirCadenaResultado(this.palabraSecreta,this.intento);
    }

    obtenerIntento(){
        return this.intento;
    }

    obtenerHistorialIntentos(){
        return this.historialIntentos;
    }

    obtenerNroIntentos(){
        return this.nroIntentos;
    }
    
    obtenerPalabraSecreta(){
        return this.palabraSecreta;
    }

    obtenerPalabrasSeleccionables(){
        return this.funcionesWordle.obtenerListaPalabras();
    }
    
    obtenerCadenaResultado(){
        return this.funcionesWordle.obtenerCadenaResultado();
    }

    obtenerListaPistas(){
        return this.listaPistas;
    }
    
    obtenerResultadoJuego(){
        return this.funcionesWordle.definirResultadoJuego();
    }
}
export default Wordle;