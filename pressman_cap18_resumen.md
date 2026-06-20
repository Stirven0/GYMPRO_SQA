# Resumen de Prueba de Aplicaciones Convencionales (Pressman - Cap. 18)

Este documento resume el capítulo 18 del texto guía *"Ingeniería del Software - Un enfoque práctico"* de Roger Pressman (páginas 411-436). Detalla las técnicas y fundamentos de diseño de casos de prueba de Caja Blanca y Caja Negra.

---

## 1. Fundamentos de las Pruebas y Comprobabilidad
El diseño de casos de prueba debe buscar maximizar la probabilidad de encontrar errores con el mínimo esfuerzo. Para ello, el sistema debe diseñarse pensando en la **comprobabilidad**, que se compone de siete características:
* **Operatividad:** Cuanto mejor funcione el sistema, más eficientemente se probará (pocos errores bloqueantes).
* **Observabilidad:** Lo que se ve es lo que se prueba (los estados y variables son visibles; las salidas incorrectas se identifican fácil).
* **Controlabilidad:** Capacidad de controlar el estado del software/hardware para automatizar y reproducir pruebas.
* **Descomponibilidad:** Arquitectura basada en módulos independientes que se pueden aislar y probar por separado.
* **Simplicidad:** Mantener el código y la arquitectura lo más simples posibles (menos cosas que probar).
* **Estabilidad:** Cambios mínimos y controlados en el software para evitar invalidar pruebas existentes.
* **Comprensibilidad:** Disponibilidad de documentación técnica clara y organizada.

---

## 2. Caja Blanca vs. Caja Negra

* **Prueba de Caja Blanca (Glass-box / Estructural):** Se basa en el conocimiento detallado del código fuente y la estructura interna. Diseña casos para garantizar cobertura de rutas lógicas, condiciones y bucles.
  * *Limitación:* Probar **todas** las rutas posibles (prueba exhaustiva) es matemáticamente imposible debido a la explosión combinatoria.
* **Prueba de Caja Negra (De comportamiento / Funcional):** Se centra en la interfaz y los requerimientos funcionales, ignorando el diseño interno del código. Busca hallar: funciones incorrectas/faltantes, errores de interfaz, fallos en bases de datos y problemas de rendimiento/inicialización.

---

## 3. Técnicas de Caja Blanca (Pruebas Estructurales)

### A. Prueba de Ruta Básica (Método de McCabe)
Permite obtener una medida cuantitativa de la complejidad lógica (Complejidad Ciclomática) para definir las rutas lineales independientes necesarias para garantizar que cada línea de código se ejecute al menos una vez.
* **Grafo de Flujo:** Mapea el código a nodos (bloques de enunciados) y aristas/enlaces (flujos de control). Las bifurcaciones condicionales complejas (AND/OR) se desglosan en nodos predicado individuales.
* **Complejidad Ciclomática $V(G)$:** Determina el número de rutas independientes básicas. Se calcula de tres formas equivalentes:
  1. $V(G) = \text{Número de Regiones}$ del grafo de flujo.
  2. $V(G) = E - N + 2$ *(donde E es Aristas y N es Nodos)*.
  3. $V(G) = P + 1$ *(donde P es el número de Nodos Predicado)*.

### B. Pruebas de Estructura de Control
* **Prueba de Condición:** Diseña casos para probar exhaustivamente las condiciones lógicas simples y compuestas (operadores lógicos relacionales y booleanos).
* **Prueba de Flujo de Datos:** Selecciona rutas basadas en la definición y el uso de las variables en el código (cadenas Definición-Uso).
* **Prueba de Bucles:** Diseña casos enfocados en constructos cíclicos divididos en cuatro tipos:
  * *Simples ($n$ pasadas):* Probar saltar el bucle, 1 pasada, 2 pasadas, $m$ pasadas ($m < n$), y los límites: $n-1$, $n$, y $n+1$ pasadas.
  * *Anidados:* Iniciar en el bucle más interno a valores frontera mientras los externos se fijan al mínimo. Trabajar hacia afuera.
  * *Concatenados:* Si son independientes, tratarlos como bucles simples; si dependen entre sí, aplicar estrategia de anidados.
  * *No estructurados:* Deben rediseñarse utilizando programación estructurada.

---

## 4. Técnicas de Caja Negra (Pruebas de Comportamiento)

* **Métodos basados en Gráficos:** Modelar el software como objetos y relaciones (nodos y enlaces) para derivar casos de prueba que cubran dicho grafo. Ejemplos: modelado de flujo de transacciones y diagramas de estado finito.
* **Partición de Equivalencia:** Divide el dominio de entrada de datos en clases equivalentes válidas e inválidas. Un caso representativo prueba toda la clase.
  * *Rango de entrada:* Crea 1 clase válida y 2 inválidas.
  * *Valor específico:* Crea 1 clase válida y 2 inválidas.
  * *Miembro de un conjunto:* Crea 1 clase válida y 1 inválida.
  * *Booleano:* Crea 1 clase válida y 1 inválida.
* **Análisis de Valores Límite (BVA):** Diseña pruebas en los extremos o bordes de las clases de entrada y salida (justo en, arriba y abajo de los límites). Es la técnica más efectiva para detectar fallas comunes.
* **Prueba de Arreglo Ortogonal:** Método estadístico (como la matriz L9) para probar combinaciones de múltiples variables de entrada con valores discretos, reduciendo drásticamente el número de ejecuciones necesarias y logrando cobertura balanceada (detecta fallos de modo individual y de modo doble).

---

## 5. Entornos Especializados y Documentación
* **Interfaces Gráficas (GUI):** Requiere automatización debido al gran número de permutaciones de interacción.
* **Arquitecturas Cliente-Servidor:** Testing en tres niveles (Cliente aislado, Cliente-Servidor sin red, y Sistema Completo con red y transacciones en BD).
* **Documentación y Ayuda:** Los manuales y ayudas en línea se deben probar en vivo con usuarios reales usando técnicas de caja negra.
* **Sistemas de Tiempo Real:** Pruebas complejas debido a la asincronía y dependencias temporales. Requiere probar: tareas aisladas, comportamiento de estados, comunicación intertarea (colas de mensajes) y pruebas completas del sistema ante interrupciones.

---

## 6. Patrones de Prueba de Software
Soluciones probadas para problemas comunes de testing. Ejemplos:
* **PairTesting:** Dos testers trabajando juntos (análogo a programación por parejas).
* **SeparateTestInterface:** Interfaz específica para acceder y probar componentes internos de clases.
* **ScenarioTesting:** Diseñar pruebas recreando escenarios reales desde la perspectiva del usuario final.
