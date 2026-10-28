
# estructura de datos

Las estructuras y tipos de datos en JavaScript se dividen principalmente en valores primitivos y objetos

## 1. Tipos Primitivos (Inmutables)

- Boolean: Representa un valor lógico (true o false).
- Null: Ausencia intencional de cualquier valor (null).
- Undefined: Variable declarada a la que aún no se le asigna un valor (undefined).
- Number: Números enteros o de punto flotante.
- BigInt: Números enteros de magnitudes arbitrariamente grandes.
- String: Cadenas de caracteres de texto.
- Symbol: Identificadores únicos e inmutables.

## 2. Estructuras de Datos Nativas (Objetos y Colecciones)

En JavaScript, los objetos son colecciones de pares clave-valor. A partir de ellos y del motor del lenguaje, se utilizan las siguientes estructuras integradas:

- Object (Objeto): Colección no ordenada de propiedades (clave-valor). Funciona como un diccionario o tabla hash básica.
- Array (Arreglo): Lista ordenada e indexada (desde el índice 0) que puede almacenar elementos de cualquier tipo. También se pueden usar como Pilas (Stacks) o Colas (Queues) mediante métodos como push(), pop(), shift() y unshift().
- Map: Colección de pares clave-valor donde cualquier tipo de dato (incluso objetos) puede ser una clave, manteniendo el orden de inserción.
- Set: Colección de valores únicos (sin elementos duplicados) de cualquier tipo.
- WeakMap / WeakSet: Variantes de Map y Set con referencias débiles, lo que permite que el recolector de basura (garbage collector) limpie los elementos si dejan de usarse en otro lado.
- TypedArrays (Arreglos tipados): Estructuras como Int8Array, Uint8Array, o Float64Array diseñadas para manipular datos binarios de forma eficiente (útiles en WebGL o procesamiento de archivos).

## 3. Estructuras de Datos Avanzadas (Implementación personalizada o por librerías)

JavaScript no incluye de forma nativa algunas estructuras clásicas de Ciencias de la Computación, pero se pueden construir mediante clases o utilizar librerías especializadas como datastructures-js:

- Pila (Stack): Estructura LIFO (Last In, First Out - Último en entrar, primero en salir).
- Cola (Queue): Estructura FIFO (First In, First Out - Primero en entrar, primero en salir).
- Lista enlazada (Linked List): Nodos secuenciales donde cada elemento apunta al siguiente.
- Árbol (Tree) y Montón (Heap): Estructuras jerárquicas o binarias para búsquedas rápidas o colas de prioridad.
- Grafo (Graph): Redes de nodos (vértices) conectados por aristas.

## la implementación en código de las tres estructuras más comunes utilizando Clases de JavaScript (ES6+)

### 1. Pila (Stack) - LIFO (Last In, First Out)

Los elementos se apilan uno sobre otro. El último en entrar es el primero en salir (como un fajo de platos).
javascript

class Pila {
  constructor() {
    this.elementos = [];
  }

  // Agregar un elemento al final
  push(elemento) {
    this.elementos.push(elemento);
  }

  // Eliminar y retornar el último elemento
  pop() {
    if (this.elementos.length === 0) return "La pila está vacía";
    return this.elementos.pop();
  }

  // Ver el último elemento sin sacarlo
  peek() {
    return this.elementos[this.elementos.length - 1];
  }

  // Obtener el tamaño de la pila
  size() {
    return this.elementos.length;
  }
}

// Ejemplo de uso:
const historialNavegacion = new Pila();
historialNavegacion.push("google.com");
historialNavegacion.push("github.com");
console.log(historialNavegacion.peek()); // Resultado: "github.com"
console.log(historialNavegacion.pop());  // Resultado: "github.com" (se elimina)
console.log(historialNavegacion.peek()); // Resultado: "google.com"
Usa el código con precaución.

### 2. Cola (Queue) - FIFO (First In, First Out)

El primer elemento en llegar es el primero en ser atendido (como la fila del banco).
javascript

class Cola {
  constructor() {
    this.elementos = [];
  }

  // Agregar un elemento al final de la fila
  enqueue(elemento) {
    this.elementos.push(elemento);
  }

  // Eliminar y retornar el primer elemento de la fila
  dequeue() {
    if (this.elementos.length === 0) return "La cola está vacía";
    return this.elementos.shift(); // .shift() elimina el primer índice [0]
  }

  // Ver el primer elemento en la fila
  front() {
    return this.elementos[0];
  }

  // Verificar si está vacía
  isEmpty() {
    return this.elementos.length === 0;
  }
}

// Ejemplo de uso:
const filaImpresion = new Cola();
filaImpresion.enqueue("Documento_1.pdf");
filaImpresion.enqueue("Foto.png");
console.log(filaImpresion.front());   // Resultado: "Documento_1.pdf"
console.log(filaImpresion.dequeue()); // Resultado: "Documento_1.pdf" (se imprime y elimina)
console.log(filaImpresion.front());   // Resultado: "Foto.png"
Usa el código con precaución.

### 3. Lista Enlazada Simple (Linked List)

A diferencia de los arreglos tradicionales, los elementos (nodos) no están juntos en memoria. Cada nodo contiene un valor y una referencia (puntero) al siguiente nodo.
javascript

// Estructura de un Nodo individual
class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.siguiente = null; // Puntero al siguiente elemento
  }
}

// Estructura de la Lista
class ListaEnlazada {
  constructor() {
    this.cabeza = null; // Primer elemento de la lista
  }

  // Agregar un elemento al final
  agregar(valor) {
    const nuevoNodo = new Nodo(valor);

    // Si la lista está vacía, el nuevo nodo es la cabeza
    if (!this.cabeza) {
      this.cabeza = nuevoNodo;
      return;
    }

    // Si no, recorremos la lista hasta llegar al último nodo
    let actual = this.cabeza;
    while (actual.siguiente) {
      actual = actual.siguiente;
    }
    actual.siguiente = nuevoNodo;
  }

  // Imprimir todos los valores de la lista en consola
  mostrarLista() {
    let actual = this.cabeza;
    let resultado = "";
    while (actual) {
      resultado += `${actual.valor} -> `;
      actual = actual.siguiente;
    }
    console.log(resultado + "null");
  }
}

// Ejemplo de uso:
const listaContactos = new ListaEnlazada();
listaContactos.agregar("Ana");
listaContactos.agregar("Carlos");
listaContactos.agregar("Diana");
listaContactos.mostrarLista(); // Resultado: Ana -> Carlos -> Diana -> null
