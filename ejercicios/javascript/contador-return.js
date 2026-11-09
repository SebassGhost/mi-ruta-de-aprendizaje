let numeros = [10, 20, 30, 40, 50, 60 ,70 , 80, 90, 100]

function contarNumeros(numeros){
contador = 0;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] >= 0)
    contador = contador + 1
    }
    return contador
}

const resultado = contarNumeros(numeros)

console.log("numero: " +  numeros)