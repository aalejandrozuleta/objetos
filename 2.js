const usuarios = {
    123456789: "Juan Pérez",
    987654321: "María Rodríguez",
    456789123: "Pedro Gómez",
    321654987: "Laura García",
    789123456: "Carlos López",
    654987321: "Ana Martínez",
    987123456: "Sofía Ramírez",
    321456789: "Miguel Torres",
    654321987: "Lucía Sánchez",
    789456123: "David Vargas",
};

for (let documento in usuarios) {
    let nombre = usuarios[documento];
    console.log("Nombre: " + nombre);
}
