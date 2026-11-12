# Métodos `find()` y `filter()` en JavaScript

Los métodos `find()` y `filter()` permiten buscar elementos dentro de un array utilizando una condición.

## 1. Método `find()`

El método `find()` busca el primer elemento que cumple una condición y devuelve ese elemento. Cuando encuentra una coincidencia, detiene la búsqueda.

**Ejemplo:**

```javascript
const numeros = [4, 8, 12, 15, 20];

const resultado = numeros.find(numero => numero > 10);

console.log(resultado); // 12
```

## 2. Método `filter()`

El método `filter()` busca todos los elementos que cumplen una condición y devuelve un nuevo array con las coincidencias.

**Ejemplo:**

```javascript
const numeros = [4, 8, 12, 15, 20];

const resultado = numeros.filter(numero => numero > 10);

console.log(resultado); // [12, 15, 20]
```

## 3. Diferencias principales

| `find()` | `filter()` |
|---|---|
| Devuelve un elemento. | Devuelve un array. |
| Encuentra la primera coincidencia. | Encuentra todas las coincidencias. |
| Detiene la búsqueda al encontrarlo. | Revisa todos los elementos. |
| Devuelve `undefined` si no encuentra nada. | Devuelve un array vacío `[]`. |

## 4. Funciones flecha (`=>`)

Las funciones flecha permiten escribir funciones de manera más corta.

Ejemplo:

```javascript
numero => numero > 10
```

- `numero`: parámetro que recibe cada elemento.
- `=>`: indica una función flecha.
- `numero > 10`: condición que devuelve `true` o `false`.

## 5. Aplicación en una biblioteca

Podemos utilizar estos métodos para buscar libros por su título o filtrar aquellos que tienen unidades disponibles.

```javascript
// Buscar un libro por su título
const resultado = libros.find(
    libro => libro.titulo === "Don Quijote"
);

// Obtener todos los libros disponibles
const disponibles = libros.filter(
    libro => libro.disponibles > 0
);
```

**Conclusión:** `find()` es útil cuando necesitamos encontrar un elemento específico, mientras que `filter()` sirve cuando necesitamos obtener varios elementos que cumplen una condición.
