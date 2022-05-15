
function generarHtmlIngresarIntento(tamPalabraSecreta){
    let codigoFormulario = "";
    let codigoInputs = `<input type="text" class="ingresar-intento" size="1" maxlength="1">`;
    let codigoSubmit = `<input type="submit" value="Aceptar"/>`;
    for(let i = 0; i < tamPalabraSecreta; i++){
        codigoFormulario = codigoFormulario + codigoInputs;
    }
    codigoFormulario = codigoFormulario + codigoSubmit;

    return codigoFormulario;
}

function generarHtmlHistorialIntentos(tamPalabraSecreta, historialIntentos){
    let codigoFormulario = "";
    let codigoInputs;
    let intento = "";
    for(let fila = 0; fila < 6; fila++){
        intento = historialIntentos[fila];
        for(let col = 0; col < tamPalabraSecreta; col++){

            if (intento != "X"){
                codigoInputs = `<input type="text" class="historial-intento fila-${fila+1}" size="1" maxlength="1" disabled value="${intento[col]}">`;
            }
            else{
                codigoInputs = `<input type="text" class="historial-intento fila-${fila+1}" size="1" maxlength="1" disabled>`;
            }
            codigoFormulario = codigoFormulario + codigoInputs;
        }
        codigoFormulario = codigoFormulario + "<br>";
    }
    return codigoFormulario;
}


export {generarHtmlIngresarIntento, generarHtmlHistorialIntentos};