import WordleError from "./ExcepcionesWordle";

class FuncionesWordle{
    constructor(){
        this.palabrasSeleccionables = ["HOJA", "HOLA", "LOBO", "COLA", "PALO", "PICO", "COCA", "PERO", "DUKE"];
        this.tamPalabrasSeleccionables = this.palabrasSeleccionables.length;
    }

    definirPalabraSecretaAlAzar(){
        let posicion = Math.floor(Math.random() * this.tamPalabrasSeleccionables);
        return this.palabrasSeleccionables[posicion]
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

    definirIntento(intento, tamPalabraSecreta){
        try{
            this.esIntentoIncompleto(intento, tamPalabraSecreta);
            this.esIntentoPermitido(intento);
        }
        catch(err){
            intento = err.message;
        }
        return intento;
    }
}

export default FuncionesWordle;