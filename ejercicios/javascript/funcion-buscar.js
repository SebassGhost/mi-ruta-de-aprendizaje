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

console.log("========== PRIMERA BUSQUEDA ==========");

buscarLibro(libros, "Don Quijote");
buscarLibro(libros, "Harry Potter");


function buscarLibroFind(libros, tituloBuscado) {               // se agrego esta funcion en la cual se usa find() para buscar un libro
const resultado = libros.find(libro => libro.titulo === tituloBuscado);
return resultado;
}
console.log("========== SEGUNDA BUSQUEDA ==========");

console.log(buscarLibroFind(libros, "Don Quijote"));
console.log(buscarLibroFind(libros, "Harry Potter"));