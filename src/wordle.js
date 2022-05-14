
const palabrasSeleccionables = ["HOJA", "HOLA", "LOBO", "COLA", "PALO", "CINCO", "CIRCO", "PERRO", "DUKE"];

function obtenerPalabrasSeleccionables(){
    return palabrasSeleccionables;
}

function obtenerPalabraSecreta(){
    return palabrasSeleccionables[0];
}

export {obtenerPalabrasSeleccionables, obtenerPalabraSecreta}