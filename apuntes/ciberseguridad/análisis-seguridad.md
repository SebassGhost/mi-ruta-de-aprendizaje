# 1. Análisis de seguridad aplicado al sistema de biblioteca

En esta sección se identifican cuatro situaciones que podrían comprometer la seguridad del sistema de gestión de biblioteca. Para cada una se analiza el problema y se proponen medidas preventivas.

### 1.1. Contraseñas débiles

**Problema identificado:**

El uso de contraseñas débiles puede facilitar que personas no autorizadas accedan a las cuentas de los usuarios, comprometiendo su información personal.

**Medidas preventivas:**

- Establecer una longitud mínima adecuada para las contraseñas.
- Evitar contraseñas comunes o comprometidas.
- Almacenar las contraseñas utilizando algoritmos de hashing seguros, como Argon2id.
- Limitar los intentos de inicio de sesión para reducir los intentos automatizados de acceso.

### 1.2. Acceso no autorizado

**Problema identificado:**

Un usuario con rol de lector puede acceder a funciones administrativas para las cuales no tiene permisos. Esto representa un fallo en el sistema de autorización.

**Medidas preventivas:**

- Implementar un sistema de control de acceso basado en roles (RBAC).
- Definir correctamente los permisos de lectores, bibliotecarios y administradores.
- Verificar los permisos en el servidor antes de ejecutar operaciones protegidas.
- Aplicar el principio de mínimo privilegio.

### 1.3. Filtración de información

**Problema identificado:**

La exposición de información personal de los usuarios, como sus correos electrónicos, puede comprometer su privacidad y permitir que personas no autorizadas utilicen esos datos.

**Medidas preventivas:**

- Restringir el acceso a la base de datos mediante usuarios y permisos específicos.
- Utilizar contraseñas seguras para las cuentas de conexión.
- Aplicar el principio de mínimo privilegio.
- Utilizar cifrado para proteger la información durante su transmisión y, cuando corresponda, durante su almacenamiento.
- Implementar consultas parametrizadas para prevenir ataques de inyección SQL.

### 1.4. Pérdida de información

**Problema identificado:**

La pérdida de información de usuarios, libros y préstamos puede afectar la disponibilidad del sistema e interrumpir el funcionamiento de la biblioteca.

**Medidas preventivas:**

- Realizar copias de seguridad periódicas de la base de datos.
- Almacenar las copias en ubicaciones separadas del equipo principal.
- Proteger las copias de seguridad mediante controles de acceso.
- Comprobar periódicamente que las copias puedan restaurarse correctamente.

### 1.5. Resultado del análisis

El análisis permitió identificar problemas relacionados con la confidencialidad, integridad y disponibilidad de la información.

Las medidas propuestas buscan reducir los riesgos mediante controles de acceso, protección de contraseñas, seguridad en las consultas a la base de datos y mecanismos de recuperación de información.

Estas medidas deben considerarse durante el desarrollo del sistema para evitar que las vulnerabilidades se conviertan en incidentes de seguridad.
