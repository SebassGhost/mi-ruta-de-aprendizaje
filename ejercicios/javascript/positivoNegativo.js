let numeros = [4, -2, 7, -5, -8, 3];

function contarPositivos(numeros) {
    contador = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i]  > 0){
            contador = contador + 1;
            console.log(numeros[i] + ": es un numero positivo")}
        else {
            console.log(numeros[i], ": no es un numero positivo")
        }
    
    }
    return contador + ": total de numeros positivos"
}

let resultado = contarPositivos(numeros)
console.log(resultado)