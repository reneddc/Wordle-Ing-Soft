import WordleError from "./ExcepcionesWordle";

class FuncionesWordle{
    constructor(){
        this.palabrasSeleccionables = ["HOJA", "HOLA", "LOBO", "COLA", "PALO", "PICO", "COCA", "PERO", "DUKE"];
        this.tamPalabrasSeleccionables = this.palabrasSeleccionables.length;
        this.listaIntentos = ["X", "X", "X", "X", "X", "X"];
        this.nroIntentos;
    }

    definirPalabraSecretaAlAzar(){
        this.limpiarListaIntentos();
        let posicion = Math.floor(Math.random() * this.tamPalabrasSeleccionables);
        return this.palabrasSeleccionables[posicion]
    }

    limpiarListaIntentos(){
        this.listaIntentos = ["X", "X", "X", "X", "X", "X"];
        this.nroIntentos = 0;
    }

    obtenerListaPalabras(){
        return this.palabrasSeleccionables;
    }

    definirTamanioPalabraSecreta(palabraSecreta){
        return palabraSecreta.length;
    }

    esIntentoIncompleto(intento, tamPalabraSecreta){
        if(intento.length < tamPalabraSecreta){
            throw new WordleError("Palabra Incompleta.");
        }
    }

    esIntentoPermitido(intento){
        if(!this.palabrasSeleccionables.includes(intento)){
            throw new WordleError("No existe esa palabra.");
        }
    }

    agregarIntentoHistorial(intento){
        this.listaIntentos[this.nroIntentos] = intento;
        this.nroIntentos++;
    }

    definirIntento(intento, tamPalabraSecreta){
        try{
            if(this.nroIntentos < 6){
                this.esIntentoIncompleto(intento, tamPalabraSecreta);
                this.esIntentoPermitido(intento);
                this.agregarIntentoHistorial(intento);
            }
        }
        catch(err){
            intento = err.message;
        }
        return intento;
    }

    definirHistorialIntentos(){
        return this.listaIntentos;
    }

    definirNroIntentos(){
        return this.nroIntentos;
    }
    
    obtenerCadenaResultado(){
        return "";
    }
}

export default FuncionesWordle;