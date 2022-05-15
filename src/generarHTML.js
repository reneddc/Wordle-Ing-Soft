
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

export default generarHtmlIngresarIntento;