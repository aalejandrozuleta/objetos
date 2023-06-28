const citas = {
    12345678: {
        nombres: "Juan Pérez",
        fecha: "2023-06-30",
        hora: "10:00 AM",
    },
    98765432: {
        nombres: "María Gómez",
        fecha: "2023-07-05",
        hora: "02:30 PM",
    },
    45678912: {
        nombres: "Carlos Rodríguez",
        fecha: "2023-07-02",
        hora: "09:15 AM",
    },
};

let documento = prompt("Ingrese su número de documento:");

if (citas[documento] !== undefined) {
    let usuario = citas[documento];
    console.log("Nombres: " + usuario.nombres);
    console.log("Fecha de cita: " + usuario.fecha);
    console.log("Hora de cita: " + usuario.hora);

    let cambiarCita = confirm("¿Desea cambiar el día o fecha de su cita?");

    if (cambiarCita) {
        let nuevaFecha = prompt("Ingrese la nueva fecha de cita (formato: AAAA-MM-DD):");
        let nuevaHora = prompt("Ingrese la nueva hora de cita (formato: HH:MM AM/PM):");

        citas[documento].fecha = nuevaFecha;
        citas[documento].hora = nuevaHora;

        console.log("¡El cambio de cita ha sido exitoso!");
        console.log("Nueva fecha de cita: " + nuevaFecha);
        console.log("Nueva hora de cita: " + nuevaHora);
    }
} else {
    console.log("No se encontró una cita para el número de documento ingresado.");
}
