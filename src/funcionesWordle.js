import WordleError from "./ExcepcionesWordle";

class FuncionesWordle{
    constructor(){
        this.palabrasSeleccionables = ["HOJA", "HOLA", "LOBO", "COLA", "PALO", "PICO", "COCA", "PERO", "DUKE"];
        this.tamPalabrasSeleccionables = this.palabrasSeleccionables.length;
        this.listaIntentos = [];
    }

    definirPalabraSecretaAlAzar(){
        let posicion = Math.floor(Math.random() * this.tamPalabrasSeleccionables);
        this.limpiarListaIntentos();
        return this.palabrasSeleccionables[posicion]
    }

    limpiarListaIntentos(){
        this.listaIntentos = [];
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
        this.listaIntentos.push(intento);
    }

    definirIntento(intento, tamPalabraSecreta){
        try{
            this.esIntentoIncompleto(intento, tamPalabraSecreta);
            this.esIntentoPermitido(intento);
            this.agregarIntentoHistorial(intento);
        }
        catch(err){
            intento = err.message;
        }
        return intento;
    }

    definirHistorialIntentos(){
        return this.listaIntentos;
    }
}

export default FuncionesWordle;