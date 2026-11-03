
let numeros = [1, 2, 3, 4, 5]

function contarNumeros(numeros) {
    contador = 0;
    for (let i = 0; i < numeros.length; i++) {
        if(numeros[i] >= 0)
        contador = contador + 1
    }
    return contador
}

const resultado = contarNumeros(numeros)
console.log("total de numeros:", resultado)
