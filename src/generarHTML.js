
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

function generarHtmlHistorialIntentos(tamPalabraSecreta, historialIntentos, listaPistas){
    let codigoFormulario = "";
    let codigoInputs;
    let intento = "";
    let pista = "";
    for(let fila = 0; fila < 6; fila++){
        intento = historialIntentos[fila];
        pista = listaPistas[fila];
        for(let col = 0; col < tamPalabraSecreta; col++){
            if (intento != "X"){
                if(pista[col] == "z"){
                    codigoInputs = `<input style="background-color: rgb(18, 156, 235); type="text" class="historial-intento fila-${fila+1}" size="1" maxlength="1" value="${intento[col]}" disabled>`;
                }
                else{
                    codigoInputs = `<input type="text" class="historial-intento fila-${fila+1}" size="1" maxlength="1" value="${intento[col]}" disabled>`; 
                }           
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