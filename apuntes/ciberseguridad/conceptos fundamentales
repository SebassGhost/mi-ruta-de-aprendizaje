# Investigación — Fundamentos de ciberseguridad

**Fecha:** Viernes, 13 de noviembre de 2026  
**Área:** Ciberseguridad  
**Nivel:** Principiante

## 1. Objetivo

Comprender los conceptos fundamentales de la ciberseguridad e identificar cómo se pueden aplicar medidas de protección en una aplicación de software, tomando como ejemplo el sistema de gestión de biblioteca.

## 2. Conceptos fundamentales

### 2.1. Vulnerabilidad

Una vulnerabilidad es una debilidad o fallo en un sistema, aplicación o configuración que podría ser aprovechado para comprometer su seguridad.

**Ejemplo:** Si una aplicación permite utilizar contraseñas demasiado sencillas, aumenta la posibilidad de que una cuenta sea comprometida.

### 2.2. Amenaza

Una amenaza es cualquier circunstancia, evento o actor que tiene la capacidad de causar daño a un sistema o a su información.

**Ejemplo:** Una persona que intenta acceder sin autorización a las cuentas de los usuarios representa una amenaza.

### 2.3. Riesgo

El riesgo representa la posibilidad de que una amenaza aproveche una vulnerabilidad y produzca consecuencias negativas.

Para evaluarlo se consideran principalmente dos aspectos:

- **Probabilidad:** qué tan posible es que ocurra el incidente.
- **Impacto:** qué tan graves serían sus consecuencias.

**Ejemplo:** Si las cuentas de administrador tienen contraseñas débiles, existe el riesgo de que alguien obtenga acceso a información y funciones importantes de la biblioteca.

### 2.4. Autenticación

La autenticación es el proceso mediante el cual un sistema verifica la identidad de una persona antes de permitirle acceder.

**Ejemplo:** Un usuario introduce su correo electrónico y contraseña para iniciar sesión en la biblioteca.

### 2.5. Autorización

La autorización determina qué acciones puede realizar un usuario después de haber sido autenticado.

**Ejemplo:** Un lector puede consultar el catálogo y gestionar sus solicitudes, mientras que un administrador puede gestionar usuarios y configuraciones del sistema.

## 3. Análisis de seguridad aplicado al sistema de biblioteca

| Situación | Problema de seguridad | Medida preventiva |
|---|---|---|
| Contraseñas débiles | Las cuentas pueden quedar expuestas. | Establecer requisitos adecuados y almacenar contraseñas mediante hashing seguro. |
| Un lector accede a funciones de administrador. | Existe un fallo en el control de autorización. | Implementar permisos según los roles de usuario. |
| Se filtran correos de usuarios. | Se expone información personal. | Limitar el acceso a los datos y proteger su almacenamiento y transmisión. |
| Se pierden los datos de la biblioteca. | Se afecta la disponibilidad y continuidad del sistema. | Realizar copias de seguridad y comprobar que puedan restaurarse. |

## 4. Medidas de seguridad

### 4.1. Hashing de contraseñas

Es un procedimiento que transforma una contraseña en un resultado mediante una función criptográfica diseñada para almacenar contraseñas de forma segura.

No debe confundirse con el cifrado: el hashing de contraseñas no está pensado para recuperar la contraseña original.

**Aplicación:** Utilizar algoritmos especializados como Argon2id para almacenar las contraseñas de los usuarios.

### 4.2. Copias de seguridad

Consisten en guardar copias de información importante para poder recuperarla cuando se pierde, se daña o deja de estar disponible.

**Aplicación:** Crear copias periódicas de la base de datos PostgreSQL de la biblioteca y verificar que puedan restaurarse correctamente.

### 4.3. Control de acceso basado en roles (RBAC)

Es un modelo que asigna permisos a los usuarios según el rol que desempeñan dentro de un sistema.

**Aplicación:** Definir los roles de lector, bibliotecario y administrador, asignando a cada uno únicamente los permisos necesarios.

### 4.4. Actualizaciones de seguridad

Son modificaciones que corrigen vulnerabilidades, errores y otros problemas de seguridad en programas y sistemas operativos.

**Aplicación:** Mantener actualizados Godot, PostgreSQL, las dependencias y las herramientas utilizadas durante el desarrollo, según las necesidades de cada proyecto.

## 5. Conclusiones

- La ciberseguridad permite identificar y reducir los riesgos que pueden afectar a los sistemas y a la información.
- Las vulnerabilidades pueden surgir por errores de programación, configuraciones incorrectas o medidas de protección insuficientes.
- La autenticación y la autorización cumplen funciones diferentes y ambas son necesarias para controlar el acceso.
- Las copias de seguridad, el almacenamiento seguro de contraseñas y la asignación adecuada de permisos son medidas importantes para proteger una aplicación.
- La seguridad debe considerarse desde las primeras etapas del desarrollo de software, no solamente cuando el sistema ya está terminado.

## 6. Fuentes de consulta

- [OWASP — Foundation](https://owasp.org/)
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
- [NIST — Computer Security Resource Center](https://csrc.nist.gov/)
- [PostgreSQL — Documentación oficial](https://www.postgresql.org/docs/)


