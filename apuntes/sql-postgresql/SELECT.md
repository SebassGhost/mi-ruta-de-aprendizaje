
# SELECT

En SQL, el comando SELECT sirve principalmente para consultar y extraer datos de una base de datos. Es la instrucción más utilizada en SQL y te permite pedirle al sistema que te muestre la información guardada en una o varias tablas.
*ejemplo del resultado de una tabla del repositorio <https://github.com/SebassGhost/sistema-gestion-biblioteca>:*

SELECT * FROM usuarios;

El asterisco (*) indica que quieres ver todas las columnas disponibles. Al ejecutar ese comando, el sistema te devolvería exactamente la lista de usuarios que compartiste:

```json
[
  {
    "id": 2,
    "nombre": "nuria",
    "correo": "nurcita@example.com",
    "rol": "lector"
  },
  {
    "id": 3,
    "nombre": "sandra",
    "correo": "sandra@example.com",
    "rol": "lector"
  },
  {
    "id": 4,
    "nombre": "emanuel",
    "correo": "emanuel@example.com",
    "rol": "lector"
  },
  {
    "id": 5,
    "nombre": "sara",
    "correo": "sara@example.com",
    "rol": "lector"
  },
  {
    "id": 1,
    "nombre": "sebastian",
    "correo": "sebastian@gmail.com",
    "rol": "administrador"
  }
]
```

## ¿Qué más puedes hacer con SELECT?

Además de traer todo, el comando SELECT es muy flexible y te permite filtrar o recortar los resultados:

- Elegir columnas específicas: Si solo te interesan los nombres y los correos, no necesitas usar el asterisco. Puedes escribir SELECT nombre, correo FROM usuarios;.
- Filtrar filas con WHERE: Si solo quisieras ver a los usuarios que tienen el rol de "lector", usarías SELECT *FROM usuarios WHERE rol = 'lector';.
- Ordenar los datos con ORDER BY: En tu ejemplo, los IDs están desordenados (2, 3, 4, 5, 1). Podrías ordenarlos de forma ascendente con SELECT* FROM usuarios ORDER BY id ASC;.

*ejemplo de el resultado de la tabla libros:*

```json
[
  {
    "id": 1,
    "titulo": "Cien años de soledad",
    "autor": "Gabriel García Márquez",
    "disponible": true,
    "cantidad_asignada_prestamo": null,
    "cantidad_asignada_venta": null,
    "cantidad_total": null,
    "cantidad_sin_asignar": null
  },
  {
    "id": 2,
    "titulo": "Don Quijote de la Mancha",
    "autor": "Miguel de Cervantes",
    "disponible": true,
    "cantidad_asignada_prestamo": null,
    "cantidad_asignada_venta": null,
    "cantidad_total": null,
    "cantidad_sin_asignar": null
  }
]
```

Este archivo JSON representa el resultado de hacer un SELECT * FROM libros; en el sistema. Así como la tabla anterior guardaba las personas de la plataforma, esta tabla sirve para gestionar el inventario de libros disponibles en la biblioteca

### *1. Datos básicos del libro*

• id: El identificador único para cada libro (la llave primaria).
• titulo y autor: Información textual obligatoria para identificar la obra.
• disponible: Un valor verdadero/falso (true/false) que sirve como un interruptor rápido para saber si el libro se puede mostrar al público o no.

### *2. Control de inventario (Campos en null)*

El hecho de que campos como cantidad_total o cantidad_asignada_prestamo aparezcan como null (vacíos) significa que el sistema está preparado para controlar stock, pero aún no se han cargado las cantidades físicas de estos títulos.

### *¿Cómo consultarías esta tabla con SELECT?*

*Para ver solo los títulos y autores:*

SELECT titulo, autor FROM libros;

*Para buscar un libro específico por su ID:*

SELECT * FROM libros WHERE id = 1;
