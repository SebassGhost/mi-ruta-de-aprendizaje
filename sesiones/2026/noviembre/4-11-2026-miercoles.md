# Sesión — Miércoles, 4 de noviembre de 2026

**Horario real de actividad:** 8:00 a. m. – 10:00 a. m.  
**Actividad complementaria:** Estudio de animaciones en Godot.

## 1. Objetivos del día

- [x] Crear un terreno de prueba en Godot.
- [x] Incorporar el personaje al escenario.
- [x] Programar los movimientos del personaje.
- [x] Investigar y solucionar un problema relacionado con `Disable Mode`.
- [x] Programar una animación de respiración.
- [ ] Corregir la animación de caminar.
- [x] Investigar sobre animaciones en Godot.

## 2. Investigación

**Tema principal:** Desarrollo de videojuegos con Godot.

**Temas trabajados:**

- Creación de escenarios 2D.
- Movimiento de personajes.
- Configuración de `CollisionObject2D`.
- Propiedad `Disable Mode`.
- Animaciones de personajes.

**Preguntas que quiero resolver:**

1. ¿Cómo funcionan los diferentes modos de desactivación de `CollisionObject2D`?
2. ¿Cómo se organizan las animaciones de un personaje?
3. ¿Por qué la animación de caminar se reproduce, pero los pies permanecen estáticos?
4. ¿Cómo se sincronizan los movimientos del personaje con sus animaciones?

**Recursos consultados:**

- Documentación y herramientas de Godot.
- [Video sobre animaciones en Godot](https://www.youtube.com/watch?v=RjYkt_IQtGQ).

## 3. Práctica

**Ejercicio realizado:**

Diseño y programación de un escenario de prueba en Godot, incorporación de un personaje, programación de movimientos y creación de animaciones.

**Mi razonamiento:**

Comencé creando un terreno de prueba donde pudiera incorporar al personaje y programar sus movimientos.

Durante el desarrollo encontré un problema relacionado con la desactivación de un objeto de colisión. Después de investigar y analizar el comportamiento, identifiqué que la propiedad `Disable Mode` de `CollisionObject2D` estaba configurada en `Remove`.

Decidí cambiarla a `Keep Active`, con lo que solucioné el problema.

Posteriormente programé la animación de respiración y comencé a trabajar en la animación de caminar.

**Resultado obtenido:**

Conseguí crear un escenario funcional de prueba, incorporar el personaje, programar sus movimientos y desarrollar una animación de respiración.

También logré activar la animación de caminar, aunque todavía presenta un problema: los pies permanecen estáticos.

## 4. Errores y correcciones

**Error:**

El problema estaba relacionado con el modo de desactivación (`Disable Mode`) de `CollisionObject2D`.

**Causa:**

La propiedad estaba configurada en `Remove`, lo que provocaba el comportamiento no deseado durante la ejecución.

**Solución y aprendizaje:**

Después de investigar y analizar el problema, cambié la configuración a `Keep Active` y conseguí solucionarlo.

**Problema pendiente:**

La animación de caminar se reproduce, pero los pies del personaje permanecen estáticos.

**Próxima investigación:**

Revisar la configuración de los fotogramas, los sprites y la reproducción de la animación para identificar por qué los pies no se animan correctamente.

## 5. Otros bloques

- **JavaScript:** No trabajado durante esta sesión.
- **SQL / PostgreSQL:** No trabajado durante esta sesión.
- **Python:** No trabajado durante esta sesión.
- **Inglés:** No registrado durante esta sesión.
- **Desarrollo de videojuegos (Godot):** Actividad principal del día. Creación de escenario, programación de movimiento y animaciones.

## 6. Cierre del día

**Lo que aprendí:**

Aprendí a crear un escenario de prueba en Godot, incorporar un personaje y programar sus movimientos.

También aprendí a identificar y solucionar un problema relacionado con la propiedad `Disable Mode` de `CollisionObject2D`.

Conseguí desarrollar una animación de respiración y avancé en la animación de caminar.

**Lo que todavía necesito practicar:**

- Animaciones de personajes en Godot.
- Sincronización de movimientos y animaciones.
- Configuración de fotogramas y sprites.
- Diagnóstico de errores durante el desarrollo de videojuegos.

**Qué pude hacer sin ayuda:**

Conseguí identificar la causa de un problema de configuración, investigar una posible solución y corregirlo. También desarrollé el escenario, los movimientos y la animación de respiración.

**Objetivo para la siguiente sesión de Godot:**

Investigar y corregir el problema de la animación de caminar, especialmente el movimiento de los pies.

## 7. Estado

- [x] Actividad registrada.
- [x] Aprendizajes documentados.
- [ ] Problema de animación de caminar solucionado.
- [ ] Próxima actividad preparada.

## 8. Preguntas pendientes para la revisión del sábado

- [ ] ¿Qué diferencia existe entre `Remove` y `Keep Active`?
- [ ] ¿Cómo funcionan los fotogramas de una animación en Godot?
- [ ] ¿Por qué puede reproducirse una animación sin que todos los elementos del personaje se muevan?
