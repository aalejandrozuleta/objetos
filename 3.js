const paisesPorContinente = {
    america: ["Estados Unidos", "Canadá", "Brasil", "Argentina", "México"],
    europa: ["España", "Francia", "Italia", "Alemania", "Reino Unido"],
    africa: ["Nigeria", "Egipto", "Sudáfrica", "Kenia", "Marruecos"],
    asia: ["China", "India", "Japón", "Corea del Sur", "Rusia"],
    oceania: ["Australia","Nueva Zelanda","Fiyi","Papúa Nueva Guinea","Samoa"],
};

let continente = prompt("Ingrese el nombre de un continente (america, europa, africa, asia, oceania):").toLowerCase();

if (paisesPorContinente[continente]?.length) {
    let paises = paisesPorContinente[continente];

    console.log("Países en el continente " + continente + ":");
    for (let i = 0; i < 5; i++) {
        console.log(paises[i]);
    }
} else {
    console.log("El continente ingresado no es válido.");
}
