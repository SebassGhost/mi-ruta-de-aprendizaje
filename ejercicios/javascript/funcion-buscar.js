const libros = [
    { titulo: "Cien años de soledad", disponibles: 5 },
    { titulo: "Don Quijote", disponibles: 0 },
    { titulo: "El principito", disponibles: 3 },
    { titulo: "La odisea", disponibles: 2 },
    { titulo: "Clean Code", disponibles: 7 }
];




function buscarLibro(libros, tituloBuscado){
let encontrado = false;
    for (let i = 0; i < libros.length; i++) {
        if(libros[i].titulo === tituloBuscado){
        console.log(libros[i].titulo, libros[i].disponibles)
        encontrado = true
        break
    }
    }
    if(encontrado === false){
        console.log("libro no encontrado")
    }
}

buscarLibro(libros, "Don Quijote");
buscarLibro(libros, "Harry Potter");