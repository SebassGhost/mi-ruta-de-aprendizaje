
let numeros = [1, 2, 3, 4, 5]       //array

function contarNumeros(numeros) {           //funcion que llama a el array
    contador = 0;                       // sirve para registrar la cantidad de veces que ocurre un evento
    for (let i = 0; i < numeros.length; i++) {          //ciclo for
        if(numeros[i] >= 0)
        contador = contador + 1             // el contador aunmenta en 1 si la condicion se cumple
    }
    return contador                  // Al terminar el bucle, usamos return para "entregar" el resultado final
}

//guardar los resultados en una constante y imprimir el resultado en la consola
const resultado = contarNumeros(numeros)
console.log("total de numeros:", resultado)
