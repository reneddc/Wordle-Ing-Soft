import WordleError from "./ExcepcionesWordle";

class FuncionesWordle{
    constructor(){
        this.palabrasSeleccionables = ["HOJA", "HOLA", "LOBO", "COLA", "PALO", "PICO", "COCA", "PERO", "DUKE"];
        this.tamPalabrasSeleccionables = this.palabrasSeleccionables.length;
        this.listaIntentos = ["X", "X", "X", "X", "X", "X"];
        this.nroIntentos;
        this.cadenaResultado;
    }

    generarResultadoVacio(tamPalabraSecreta){
        this.cadenaResultado = [];
        for(var i = 0; i < tamPalabraSecreta; i++){
            this.cadenaResultado.push("o");
        }
    }

    definirPalabraSecretaAlAzar(){
        this.limpiarListaIntentos();
        let posicion = Math.floor(Math.random() * this.tamPalabrasSeleccionables);
        return this.palabrasSeleccionables[posicion]
    }
    
    definirPalabraSecreta(palabra){
        this.limpiarListaIntentos();
        if(!this.palabrasSeleccionables.includes(palabra)){
            this.palabrasSeleccionables.push(palabra);
            this.tamPalabrasSeleccionables++;
        }
        return palabra;
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
                this.generarResultadoVacio(tamPalabraSecreta);
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

    definirAzules(palabraSecreta, intento){
        for(let i = 0; i < palabraSecreta.length; i++){
            if(intento[i] == palabraSecreta[i]){
                this.cadenaResultado[i] = "z";
            }
        }
    }

    definirAmarillas(palabraSecreta, intento){
        for(let i = 0; i < palabraSecreta.length; i++){
            if(this.cadenaResultado[i] != "z" && palabraSecreta.search(intento[i]) != -1){
                this.cadenaResultado[i] = "a";
            }
        }
    }

    concatenarResultado(){
        this.cadenaResultado = this.cadenaResultado.join("");
    }
    
    definirCadenaResultado(palabraSecreta, intento){
        if(this.nroIntentos < 6){
            this.definirAzules(palabraSecreta, intento);
            this.definirAmarillas(palabraSecreta,intento);
            this.concatenarResultado();
        }
    }
    
    obtenerCadenaResultado(){
        return this.cadenaResultado;
    }
}

export default FuncionesWordle;