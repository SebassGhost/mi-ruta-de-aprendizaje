
# estructuras de datos

Las estructuras y tipos de datos en Python se dividen principalmente en valores inmutables (primitivos) y objetos mutables.

## 1. Tipos Primitivos / Inmutables

- bool: Representa un valor lógico (True o False). (Nota: En Python van con mayúscula inicial).
- NoneType: Ausencia intencional de cualquier valor (None). Equivalente a null de JS.
- (En Python no existe undefined; si una variable no tiene valor asignado, simplemente no existe).
- int: Números enteros de precisión arbitraria (Python maneja magnitudes grandes automáticamente, por lo que int cumple la función tanto de Number como de BigInt de JS).
- float: Números de punto flotante.
- str: Cadenas de caracteres de texto.
- (Python no cuenta con un tipo Symbol nativo de la misma manera que JS).

## 2. Estructuras de Datos Nativas (Objetos y Colecciones)

En Python, casi todo es un objeto. Las estructuras integradas principales son:

- dict (Diccionario): Colección indexada de pares clave-valor. Mantiene el orden de inserción y funciona como una tabla hash.
- list (Lista): Lista ordenada e indexada (desde el índice 0) dinámica. Se pueden usar como Pilas o Colas mediante métodos como append() y pop().
- set (Conjunto): Colección no ordenada de valores únicos (sin elementos duplicados).
- frozenset: Variante inmutable de un set.
- bytes / bytearray: Diseñadas para manipular datos binarios de forma eficiente (similares a los TypedArrays de JS).

## 3. Estructuras de Datos Avanzadas (Implementación personalizada o por módulos)

Python incluye el módulo nativo collections para optimizar estructuras como colas, pero también se pueden construir de forma lógica mediante clases:

- Pila (Stack): Estructura LIFO (Last In, First Out).
- Cola (Queue): Estructura FIFO (First In, First Out).
- Lista enlazada (Linked List): Nodos secuenciales donde cada elemento apunta al siguiente.
- Árbol (Tree) y Montón (Heap): Estructuras jerárquicas. Python ofrece el módulo heapq de forma nativa para montones/colas de prioridad.
- Grafo (Graph): Redes de nodos conectados por aristas.

## La implementación en código de las tres estructuras más comunes utilizando Clases de Python

## 1. Pila (Stack) - LIFO (Last In, First Out)

Los elementos se apilan uno sobre otro. El último en entrar es el primero en salir.

class Pila:
    def __init__(self):
        self.elementos = []

    # Agregar un elemento al final
    def push(self, elemento):
        self.elementos.append(elemento)

    # Eliminar y retornar el último elemento
    def pop(self):
        if len(self.elementos) == 0:
            return "La pila está vacía"
        return self.elementos.pop()

    # Ver el último elemento sin sacarlo
    def peek(self):
        if len(self.elementos) == 0:
            return "La pila está vacía"
        return self.elementos[-1]  # En Python, [-1] accede al último elemento

    # Obtener el tamaño de la pila
    def size(self):
        return len(self.elementos)

## Ejemplo de uso

historial_navegacion = Pila()
historial_navegacion.push("google.com")
historial_navegacion.push("github.com")
print(historial_navegacion.peek())  # Resultado: "github.com"
print(historial_navegacion.pop())   # Resultado: "github.com" (se elimina)
print(historial_navegacion.peek())  # Resultado: "google.com"

## 2. Cola (Queue) - FIFO (First In, First Out)

El primer elemento en llegar es el primer en ser atendido. Nota: En Python, usar pop(0) en una lista tradicional es lento. Para una cola real en producción se usa collections.deque, pero aquí se traduce la lógica exacta usando listas básicas tal como el ejemplo original de JS:

class Cola:
    def __init__(self):
        self.elementos = []

    # Agregar un elemento al final de la fila
    def enqueue(self, elemento):
        self.elementos.append(elemento)

    # Eliminar y retornar el primer elemento de la fila
    def dequeue(self):
        if len(self.elementos) == 0:
            return "La cola está vacía"
        return self.elementos.pop(0)  # pop(0) elimina y devuelve el primer índice [0]

    # Ver el primer elemento en la fila
    def front(self):
        if len(self.elementos) == 0:
            return "La cola está vacía"
        return self.elementos[0]

    # Verificar si está vacía
    def is_empty(self):
        return len(self.elementos) == 0

### Ejemplo

fila_impresion = Cola()
fila_impresion.enqueue("Documento_1.pdf")
fila_impresion.enqueue("Foto.png")
print(fila_impresion.front())    # Resultado: "Documento_1.pdf"
print(fila_impresion.dequeue())  # Resultado: "Documento_1.pdf" (se imprime y elimina)
print(fila_impresion.front())    # Resultado: "Foto.png"

## 3. Lista Enlazada Simple (Linked List)

Cada nodo contiene un valor y una referencia (puntero) al siguiente nodo.

## Estructura de un Nodo individual

class Nodo:
    def __init__(self, valor):
        self.valor = valor
        self.siguiente = None  # Puntero al siguiente elemento

## Estructura de la Lista

class ListaEnlazada:
    def __init__(self):
        self.cabeza = None  # Primer elemento de la lista

    # Agregar un elemento al final
    def agregar(self, valor):
        nuevo_nodo = Nodo(valor)

        # Si la lista está vacía, el nuevo nodo es la cabeza
        if not self.cabeza:
            self.cabeza = nuevo_nodo
            return

        # Si no, recorremos la lista hasta llegar al último nodo
        actual = self.cabeza
        while actual.siguiente:
            actual = actual.siguiente
        actual.siguiente = nuevo_nodo

    # Imprimir todos los valores de la lista en consola
    def mostrar_lista(self):
        actual = self.cabeza
        resultado = ""
        while actual:
            resultado += f"{actual.valor} -> "
            actual = actual.siguiente
        print(resultado + "None")

### forma de uso

lista_contactos = ListaEnlazada()
lista_contactos.agregar("Ana")
lista_contactos.agregar("Carlos")
lista_contactos.agregar("Diana")
lista_contactos.mostrar_lista()  # Resultado: Ana -> Carlos -> Diana -> None
