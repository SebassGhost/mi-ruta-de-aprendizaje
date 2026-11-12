# Sesión — Miércoles, 11 de noviembre de 2026

## 1. Objetivo de la sesión

Repasar JavaScript y fortalecer la lógica de programación mediante el uso de ciclos, condicionales, funciones, arrays y objetos.

Aplicar estos conocimientos a una funcionalidad relacionada con el sistema de gestión de biblioteca.

## 2. JavaScript — Repaso y práctica

### Temas trabajados

- Ciclo `for`.
- Condicionales `if` y `else`.
- Funciones y parámetros.
- Arrays y objetos.
- Acceso a propiedades de objetos.
- Variables auxiliares.
- Instrucciones `break`.
- Comparación de valores mediante `===`.

### Conceptos aprendidos

**Acceso a elementos de un array**

- `libros[1]`: permite acceder directamente al segundo elemento.
- `libros[i]`: permite acceder dinámicamente a los elementos durante un recorrido.

**Acceso a propiedades de objetos**

- `libros[i].titulo`: obtiene el título del libro actual.
- `libros[i].disponibles`: obtiene las unidades disponibles.

**Instrucción `break`**

Permite detener inmediatamente un ciclo cuando ya se ha encontrado el elemento que buscamos.

**Variable auxiliar**

Se utilizó una variable llamada `encontrado` para controlar si el libro existe dentro del array.

## 3. Ejercicio realizado — Búsqueda de libros

### Objetivo

Crear una función que permita buscar un libro dentro de un array de objetos.

### Código desarrollado

```javascript
const libros = [
    { titulo: "Cien años de soledad", disponibles: 5 },
    { titulo: "Don Quijote", disponibles: 0 },
    { titulo: "El principito", disponibles: 3 },
    { titulo: "La odisea", disponibles: 2 },
    { titulo: "Clean Code", disponibles: 7 }
];

function buscarLibro(libros, tituloBuscado) {
    let encontrado = false;

    for (let i = 0; i < libros.length; i++) {

        if (libros[i].titulo === tituloBuscado) {
            console.log(
                libros[i].titulo,
                libros[i].disponibles
            );

            encontrado = true;
            break;
        }
    }

    if (encontrado === false) {
        console.log("Libro no encontrado");
    }
}

buscarLibro(libros, "Don Quijote");
buscarLibro(libros, "Harry Potter");
```

### Resultado esperado

```text
Don Quijote 0
Libro no encontrado
```

### Funcionamiento de la solución

1. Se declara la función `buscarLibro()` con dos parámetros.
2. Se inicializa `encontrado` en `false`.
3. El ciclo `for` recorre el array.
4. El `if` compara el título de cada libro con el título buscado.
5. Si encuentra una coincidencia, muestra la información.
6. Cambia `encontrado` a `true`.
7. Utiliza `break` para detener el recorrido.
8. Al terminar el ciclo, comprueba si el libro no fue encontrado.

## 4. Errores y correcciones

### Error 1: mensaje de libro no encontrado repetido

**Problema:** el mensaje aparecía varias veces durante el recorrido.

**Causa:** la comprobación de `encontrado` estaba dentro del ciclo `for`.

**Corrección:** mover el condicional que comprueba si el libro existe fuera del ciclo.

### Aprendizaje

Las instrucciones que están dentro de un ciclo pueden ejecutarse varias veces. Las instrucciones que están después del ciclo se ejecutan cuando termina el recorrido.

## 5. Práctica pendiente — Disponibilidad de libros

Se planteó una segunda modificación de la función `buscarLibro()`.

### Objetivo

Comprobar si un libro encontrado tiene unidades disponibles.

### Condición que se debe implementar

```javascript
libros[i].disponibles > 0
```

### Lógica esperada

- Si las unidades son mayores que cero, mostrar que el libro está disponible.
- Si las unidades son iguales a cero, mostrar que el libro está agotado.
- Si el libro no existe, mostrar que no se encuentra registrado.

Se utilizará un segundo `if` y un `else` dentro de la condición que comprueba si encontramos el libro.

**Estado:** pendiente de implementación y pruebas.

## 6. Conclusiones

Durante esta sesión se practicó la construcción de funciones que trabajan con arrays de objetos.

Se reforzó la comprensión de los ciclos y las condiciones, especialmente la diferencia entre las instrucciones que se ejecutan dentro del `for` y las que se ejecutan después de terminarlo.

También se aprendió a utilizar `break` para detener un recorrido cuando ya se encontró el elemento buscado.

Se consiguió desarrollar una función de búsqueda sin copiar una solución completa, construyendo la lógica progresivamente y corrigiendo los errores encontrados.

## 7. Próxima sesión

- Terminar la funcionalidad de disponibilidad de libros.
  
- Probar los casos de libros disponibles, agotados e inexistentes.
- Relacionar la búsqueda con el sistema de gestión de biblioteca.
- Continuar practicando JavaScript de manera independiente.
