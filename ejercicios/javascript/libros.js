
const libros = [
    { titulo: "Cien años de soledad", disponibles: 5 },
    { titulo: "Don Quijote", disponibles: 0 },
    { titulo: "El principito", disponibles: 3 },
    { titulo: "La odisea", disponibles: 0 },
    { titulo: "Clean Code", disponibles: 7 }
];


// Contadores y acumulador
let agotados = 0;
let  librosDisponibles = 0;
let totalUnidades = 0;

for (let i = 0; i < libros.length; i++) {        // Comprueba si el libro tiene unidades disponibles.
    if(libros[i].disponibles > 0){
    console.log(libros[i].titulo,":", libros[i].disponibles)           // Muestra el título y la cantidad de unidades disponibles.
    librosDisponibles = librosDisponibles + 1
    }
    if(libros[i].disponibles === 0){         // Comprueba si el libro está agotado.
        agotados = agotados + 1
    }
totalUnidades = totalUnidades + libros[i].disponibles          // Suma las unidades del libro actual al acumulador.
}
// Muestra los resultados finales después de recorrer todos los libros.
console.log("unidades agotadas:",agotados)
console.log("libros disponibles:",librosDisponibles)
console.log("total de unidades disponibles:",totalUnidades)