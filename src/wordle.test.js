import definirPalabrasSeleccionables from "./wordle"


describe("F. DEFINIR MODALIDADES DE JUEGO", () => {
  //HDU 1
  it("1. En la vista “Modalidades de Juego” debería mostrar la descripción de la modalidad “Juego Rápido”: Adivinar una palabra cualquiera elegida al azar" , () => {});

  //HDU 2
  it("1. Si se presiona el botón “Juego Rápido” se debería borrar la vista “Modalidades” y mostrar la vista “Campo de Juego”" , () => {});

  //HDU 3
  it("1. Crear y mostrar una palabra seleccionable para jugar" , () => {
    expect(definirPalabrasSeleccionables()).toEqual("HOJA");
  });

});



