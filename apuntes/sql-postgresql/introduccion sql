
# SQL

 SQL (Structured Query Language o Lenguaje de Consulta Estructurado) es un lenguaje estándar de programación de propósito específico diseñado para administrar, consultar, modificar y analizar datos en bases de datos relacionales

## Características principales

• Organización: Trabaja con datos estructurados en tablas compuestas por filas y columnas.
• Estandarización: Es un estándar reconocido por ANSI (1986) e ISO (1987), lo que permite usarlo con diferentes motores de bases de datos.
• Operaciones CRUD: Permite crear, leer, actualizar y eliminar registros.

## Comandos principales por categoría

• DDL (Data Definition Language): Para definir estructuras como CREATE, ALTER, DROP.
• DML (Data Manipulation Language): Para manipular datos como INSERT, UPDATE, DELETE.
• DQL (Data Query Language): Para consultar información, destacando SELECT

## Sistemas de gestión de bases de datos (SGBDR) compatibles

• PostgreSQL
• MySQL
• Microsoft SQL Server
• Oracle Database
• MariaDB

## PostgreSQL

1. Consultas avanzadas con SELECT

PostgreSQL permite usar funciones de agregación avanzadas y manipulación directa de tipos complejos (como JSON o arrays) directamente en el SELECT.
• Alias rápido y concatenación: Puedes usar || para unir textos y AS para renombrar columnas.
• Manejo de fechas: PostgreSQL tiene un excelente motor de tiempos. Puedes usar CURRENT_DATE o extraer partes de una fecha.
• Ejemplo:sql
SELECT
    id,
    nombre || ' ' || apellido AS nombre_completo,
    AGE(fecha_nacimiento) AS edad_exacta
FROM clientes;
2. Filtrado potente con WHERE

Además de los filtros comunes, PostgreSQL brilla por su capacidad de búsqueda de texto y operadores especiales:
• ILIKE: A diferencia de LIKE, ILIKE realiza búsquedas que no distinguen entre mayúsculas y minúsculas (case-insensitive), ideal para búsquedas de usuarios.
• Búsqueda Regex: Puedes usar el operador ~* para filtrar usando expresiones regulares complejas.
• Ejemplo:sql
SELECT nombre, correo
FROM clientes
-- Busca correos que terminen en gmail.com sin importar si escriben Gmail o GMAIL
WHERE correo ILIKE '%@gmail.com'
  AND estado = 'activo';
3. Relaciones eficientes con JOIN

El optimizador de consultas de PostgreSQL es extremadamente eficiente resolviendo uniones. Cuando las columnas de enlace se llaman exactamente igual en ambas tablas, puedes usar un atajo sintáctico muy limpio:
• USING: Reemplaza a la cláusula ON cuando el campo llave se llama igual en ambas tablas (por ejemplo, id_cliente).
• Ejemplo:sql
SELECT clientes.nombre, facturas.monto, facturas.fecha
FROM clientes
INNER JOIN facturas USING (id_cliente) -- Atajo nativo de Postgres si ambos campos se llaman 'id_cliente'
WHERE facturas.fecha >= '2026-01-01';

## ¿Qué es SQL?

El lenguaje de consulta estructurada (SQL) es un lenguaje de programación para almacenar y procesar información en una base de datos relacional. Una base de datos relacional almacena información en forma de tabla, con filas y columnas que representan diferentes atributos de datos y las diversas relaciones entre los valores de datos. Puede usar las instrucciones SQL para almacenar, actualizar, eliminar, buscar y recuperar información de la base de datos. También puede usar SQL para mantener y optimizar el rendimiento de la base de datos.

## ¿Por qué es importante SQL?

El lenguaje de consulta estructurada (SQL) es un lenguaje de consulta popular que se usa con frecuencia en todos los tipos de aplicaciones. Los analistas y desarrolladores de datos aprenden y usan SQL porque se integra bien con los diferentes lenguajes de programación. Por ejemplo, pueden incrustar consultas SQL con el lenguaje de programación Java para crear aplicaciones de procesamiento de datos de alto rendimiento con los principales sistemas de bases de datos SQL, como Oracle o MS SQL Server. Además, SQL es muy fácil de aprender, ya que en sus instrucciones se utilizan palabras clave comunes en inglés.

## Historia de SQL

SQL se inventó en la década de 1970 con base en el modelo de datos relacional. AL inicio se conocía como el lenguaje de consultas estructuradas en inglés (SEQUEL). Mas tarde, el término se abrevió a SQL. Oracle, antes conocido como Relational Software, se convirtió en el primer proveedor en ofrecer un sistema comercial de administración de bases de datos relacionales SQL.

## ¿Cuáles son los componentes de un sistema SQL?

Los sistemas de administración de bases de datos relacionales utilizan un lenguaje de consulta estructurada (SQL) para almacenar y administrar datos. El sistema almacena varias tablas de bases de datos que se relacionan entre sí. MS SQL Server, MySQL o MS Access son ejemplos de sistemas de administración de bases de datos relacionales. Los siguientes son los componentes de un sistema de este tipo.

## Tabla SQL

Una tabla SQL es el elemento básico de una base de datos relacional. La tabla de la base de datos SQL se compone de filas y columnas. Los ingenieros de bases de datos crean relaciones entre varias tablas de bases de datos para optimizar el espacio de almacenamiento de datos.

## Instrucciones SQL

Las instrucciones SQL, o consultas SQL, son instrucciones válidas que los sistemas de administración de bases de datos relacionales entienden. Los desarrolladores de software crean instrucciones SQL a partir de diferentes elementos del lenguaje SQL. Los elementos del lenguaje SQL son componentes como identificadores, variables y condiciones de búsqueda que forman una instrucción SQL correcta.

Por ejemplo, la siguiente instrucción SQL utiliza un comando SQL INSERT para almacenar la Marca del colchón A, con un precio de 499 USD, en una tabla llamada Mattress_table, (Tabla_colchón) con los nombres de columna brand_name (nombre_marca) y cost (costo):

INSERT INTO Mattress_table (brand_name, cost)

VALUES(‘A’,’499’);

## Procedimientos almacenados

Los procedimientos almacenados son una colección de una o más instrucciones SQL almacenadas en la base de datos relacional. Los desarrolladores de software utilizan los procedimientos almacenados para mejorar la eficiencia y el rendimiento. Por ejemplo, pueden crear un procedimiento almacenado para actualizar las tablas de ventas en vez de escribir la misma instrucción SQL en diferentes aplicaciones.

## ¿Cómo funciona SQL?

La implementación del lenguaje de consulta estructurada (SQL) implica una máquina servidor que procese las consultas de la base de datos y devuelva los resultados. El proceso SQL pasa por varios componentes de software, incluidos los siguientes.

### Analizador

El analizador comienza por tokenizar o reemplazar algunas de las palabras de la instrucción SQL con símbolos especiales. A continuación, comprueba si la instrucción tiene lo siguiente:

### Corrección

El analizador verifica que la instrucción SQL se ajuste a la semántica o reglas de SQL que garantizan la corrección de la instrucción de la consulta. Por ejemplo, el analizador comprueba si el comando SQL termina con punto y coma. Si falta el punto y coma, el analizador devuelve un error.

### Autorización

El analizador también valida que el usuario que ejecuta la consulta tenga la autorización necesaria para manipular los datos correspondientes. Por ejemplo, solo los usuarios administradores podrían tener derecho a eliminar datos.

### Motor relacional

El motor relacional, o procesador de consultas, crea un plan para recuperar, escribir o actualizar los datos correspondientes de la manera más eficaz. Por ejemplo, busca consultas similares, vuelve a utilizar métodos de manipulación de datos anteriores o crea uno nuevo. Escribe el plan en una representación de nivel intermedio de la instrucción SQL llamada código de bytes. Las bases de datos relacionales utilizan el código de bytes para hacer búsquedas y modificaciones en ellas.

### Motor de almacenamiento

El motor de almacenamiento, o motor de base de datos, es el componente de software que procesa el código de bytes y ejecuta la instrucción SQL deseada. Lee y almacena los datos en los archivos de la base de datos del almacenamiento en disco físico. Al finalizar, el motor de almacenamiento devuelve el resultado a la aplicación que lo solicita.

## ¿Qué son los comandos SQL?

Los comandos de lenguaje de consulta estructurada (SQL) son palabras clave o instrucciones SQL específicas que los desarrolladores utilizan para manipular los datos almacenados en una base de datos relacional. Puede clasificar los comandos SQL de la siguiente manera.

### Lenguaje de definición de datos

El lenguaje de definición de datos (DDL) se refiere a comandos SQL que diseñan la estructura de la base de datos. Los ingenieros de bases de datos utilizan DDL para crear y modificar objetos de bases de datos en función de las necesidades empresariales. Por ejemplo, el ingeniero de bases de datos utiliza el comando CREATE para crear objetos de base de datos, como tablas, vistas e índices.

### Idioma de consulta de datos

El lenguaje de consulta de datos (DQL) consiste en instrucciones para recuperar datos almacenados en bases de datos relacionales. Las aplicaciones de software usan el comando SELECT para filtrar y devolver resultados específicos de una tabla SQL.

### Lenguaje de manipulación de datos

Las instrucciones del lenguaje de manipulación de datos (DML) escriben información nueva o modifican los registros existentes en una base de datos relacional. Por ejemplo, una aplicación usa el comando INSERT para almacenar un nuevo registro en la base de datos.

### Idioma de control de datos

Los administradores de bases de datos usan el lenguaje de control de datos (DCL) para administrar o autorizar el acceso a la base de datos. Por ejemplo, pueden usar el comando GRANT para permitir que ciertas aplicaciones manipulen una o más tablas.

### Idioma de control de transacciones

El motor relacional utiliza el lenguaje de control de transacciones (TCL) para hacer cambios en la base de datos de manera automática. Por ejemplo, la base de datos usa el comando ROLLBACK para deshacer una transacción errónea.

## ¿Qué son los estándares de SQL?

Los estándares SQL son un conjunto de pautas definidas formalmente del lenguaje de consulta estructurada (SQL). El Instituto Nacional Estadounidense de Estándares (ANSI) y la Organización Internacional de Normalización (ISO) adoptaron las normas SQL en 1986. Los proveedores de software usan los estándares ANSI de SQL con el fin de crear software de base de datos SQL para los desarrolladores.

## ¿Qué es la inyección de código SQL?

La inyección de código SQL es un ataque cibernético que implica engañar a la base de datos con consultas SQL. Los piratas informáticos usan la inyección de código SQL para recuperar, modificar o dañar los datos de una base de datos SQL. Por ejemplo, pueden rellenar una consulta SQL en vez del nombre de una persona en un formulario de envío para llevar a cabo un ataque de inyección de código SQL.

## ¿Qué es MySQL?

MySQL es un sistema de administración de bases de datos relacionales de código abierto ofrecido por Oracle. Los desarrolladores pueden descargar y usar MySQL sin pagar tarifas de licencia. Pueden instalar MySQL en diferentes sistemas operativos o servidores en la nube. MySQL es un sistema de base de datos popular para aplicaciones web.

## Diferencias entre SQL y MySQL

El lenguaje de consulta estructurada (SQL) es un lenguaje estándar para la creación y manipulación de bases de datos. MySQL es un programa de base de datos relacional que utiliza consultas SQL. Si bien los comandos SQL están definidos por estándares internacionales, el software MySQL se somete a actualizaciones y mejoras continuas.

## ¿Qué es NoSQL?

NoSQL hace referencia a bases de datos no relacionales que no utilizan tablas para almacenar datos. Los desarrolladores almacenan información en diferentes tipos de bases de datos NoSQL, incluidos gráficos, documentos y valores clave. Las bases de datos NoSQL son populares para las aplicaciones modernas porque son escalables horizontalmente. El escalado horizontal consiste en aumentar la potencia de procesamiento al agregar más computadoras que ejecuten el software NoSQL.

## Diferencias entre SQL y NoSQL

El lenguaje de consulta estructurada (SQL) proporciona un lenguaje de manipulación de datos uniforme, pero la implementación de NoSQL depende de diferentes tecnologías. Los desarrolladores usan SQL para aplicaciones transaccionales y analíticas, mientras que NoSQL es adecuado para aplicaciones con capacidad de respuesta y uso intensivo.

## ¿Qué es un servidor SQL?

SQL Server es el nombre oficial del sistema de administración de bases de datos relacionales de Microsoft que manipula los datos con SQL. MS SQL Server tiene varias ediciones y cada una está diseñada para cargas de trabajo y requisitos específicos.

## conclusion

SQL (Structured Query Language) es el estándar universal e indispensable para la gestión de bases de datos relacionales, consolidándose como un lenguaje accesible y altamente eficiente para almacenar, manipular y recuperar información organizada en tablas. Su relevancia en la industria tecnológica radica en su capacidad para integrarse con múltiples lenguajes de programación y en su estructura lógica basada en comandos específicos (como DDL, DQL o DML), lo que permite desde consultar un dato simple hasta automatizar procesos complejos o migrar bases de datos masivas en entornos de computación en la nube
