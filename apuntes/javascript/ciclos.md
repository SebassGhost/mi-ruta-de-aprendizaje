
# Bucles JavaScript Explicados: For Loop, While Loop, Do...while Loop, y más

En JavaScript los bucles (loops) son utilizados para realizar tareas repetitivas con base en una condición. Las condiciones típicamente devuelven true (verdadero) o false(falso) al ser evaluados. El bucle continuará ejecutándose hasta que la condición devuelva  false.

Los tres tipos más comunes de bucles son:

- for
- while
- do while

Puedes escribir js for, js while o js do while para obtener más información acerca de cualquiera de estos bucles. Démosles ahora un vistazo más detallado y también veamos algunas variaciones:

for loop

```javascript
Sintaxis
for ([initializacion]); [condicion]; [expresion-final]) {
   // sentencias
}
```

La sentencia for en javascript consiste de tres expresiones y una declaración:

## Descripción

- inicialización: Sucede antes de la primera ejecución del bucle. Esta expresión es comúnmente utilizada para crear contadores. Las variables creadas tienen un alcance (scope) limitado al cuerpo del bucle. Una vez que el bucle ha terminado su ejecución las variables son destruidas.

- condición: Expresión que es evaluada antes de la ejecución de cada iteración. Si se omite, esta expresión es evaluada como verdadera. Si devuelve true, la sentencia del cuerpo del bucle se ejecuta. Si devuelve false, el bucle se detiene.

- expresión final:  Expresión que se ejecuta luego de cada iteración. Usualmente es utilizada para incrementar un contador. Pero también puede ser utilizada para decrementar el contador.

- sentencia o declaración:  Código que será ejecutado repetidamente por el bucle.

Cualquiera de estas tres expresiones o la sentencia del cuerpo del bucle pueden ser omitidas. Los bucles For son comúnmente utilizados para contar un cierto número de iteraciones para repetir una sentencia. Puedes utilizar una sentencia break para salir del bucle antes que la expresión de condición devuelva false.

## *Complicaciones comunes*

*Exceder los límites del array.*

Cuando recorremos un array utilizando los índices es fácil exceder los límites (ej. intentar referenciar el 4º elemento de un array de 3 elementos).

```javascript
 // Esto ocasionará un error.
    // Los límites del array serán excedidos.
    var arr = [ 1, 2, 3 ];
    for (var i = 0; i <= arr.length; i++) {
       console.log(arr[i]);
    }

    resultado:
    1
    2
    3
    undefined
```

Hay dos maneras de arreglar este código. Que la condición sea i < arr.length o i <= arr.length - 1.

Ejemplos
Iterar a través de los enteros del 0-8

```javascript
for (var i = 0; i < 9; i++) {
   console.log(i);
}

resultado:
0
1
2
3
4
5
6
7
8
```

Sal de un bucle antes que la condición evalúe a false

```javascript
for (var elefante = 1; elefante < 10; elefante+=2) {
    if (elefante === 7) {
        break;
    }
    console.info('elefante es ' + elefante);
}

resultado:
elefante es 1
elefante es 3
elefante es 5
```

## for...in loop

La declaración for...in itera sobre las propiedades enumerables de un objeto, en orden arbitrario. Para cada propiedad distinta, se pueden ejecutar sentencias.

```javascript
for (variable in object) {
...
}
```

Descripción

variable: Un nombre distinto es asignado a la variable en cada iteración.

objeto: Objeto cuyas propiedades enumerables (no de tipo symbol) son iteradas.

Ejemplos

```javascript
// Inicializar objecto.
a = { "a": "Athens", "b": "Belgrade", "c": "Cairo" }

// Iterar sobre las propiedades.
var s = ""
for (var key in a) {
    s += key + ": " + a[key];
    s += "<br />";
    }
document.write (s);

// Resultado:
// a: Athens
// b: Belgrade
// c: Cairo

// Inicializar el array (arreglo).
var arr = new Array("cero", "uno", "dos");

// Agregar algunas propiedades expando al array.
arr["naranja"] = "fruta";
arr["zanahoria"] = "vegetal";

// Iterar sobre las propiedades y elementos.
var s = "";
for (var key in arr) {
    s += key + ": " + arr[key];
    s += "<br />";
}

document.write (s);

// Output:
//   0: cero
//   1: uno
//   2: dos
//   naranja: fruta
//   zanahoria: vegetal

// Forma eficiente de obtener los índices (keys) de un objeto usando la expresión dentro de las condiciones del bucle for-in

var myObj = {a: 1, b: 2, c:3}, myKeys = [], i=0;
for (myKeys[i++] in myObj);

document.write(myKeys);

//Resultado:
//   a
//   b
//   c
```

## while loop

El bucle while empieza por evaluar la condición. Si la condición es verdadera (devuelve true), entonces las sentencias son ejecutadas. Si la condición es falsa (devuelve false), entonces las sentencias no son ejecutadas. Luego el bucle finaliza.

Aquí la sintaxis del bucle while:

```javascript
Sintaxis:
while (condicion)

{

  sentencia(s);

}
```

sentencia(s): Una sentencia es código que se ejecuta si la condición devuelve verdadero ( true ).

condición: Es una expresión booleana (Boolean) que es evaluada antes de cada paso (iteración) por el bucle. Si esta condición evalúa a verdadero ( true ), las sentencias son ejecutadas. Cuando la condición evalúa a falso ( false ), la ejecución continúa con la siguiente sentencia luego del bucle while.

Ejemplo:

```javascript
    var i = 1;
    while (i < 10) 
    {
      console.log(i);
       i++; // i=i+1 esto sería lo mismo 
    }

    Resultado:
    1 
    2 
    3 
    4
    5
    6
    7
    8
    9
```