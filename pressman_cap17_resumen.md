# Resumen de Estrategias de Prueba de Software (Pressman - Cap. 17)

Este documento resume el capítulo 17 del texto guía *"Ingeniería del Software - Un enfoque práctico"* de Roger Pressman (páginas 383-410). Detalla la base estratégica del testing de software aplicable al proyecto **GymPro**.

---

## 1. Un Enfoque Estratégico

La prueba es una serie de pasos planificados y sistemáticos. Toda estrategia comparte características genéricas:
* **Filtro previo:** Las revisiones técnicas efectivas (SQA) deben realizarse antes de comenzar a probar para eliminar errores tempranos.
* **Dirección del test ("de adentro hacia afuera"):** Las pruebas inician en los componentes individuales (bajo nivel) y avanzan hacia la integración de todo el sistema (alto nivel).
* **Independencia (GPI):** Las pruebas unitarias e iniciales de integración las hace el desarrollador. Las pruebas del sistema de orden superior las debe realizar un Grupo de Prueba Independiente (GPI) para evitar conflictos de interés psicológicos (el desarrollador tiende a demostrar que su código funciona, en vez de buscar romperlo).
* **Depuración:** La depuración (debugging) es consecuencia de una prueba exitosa (aquella que encuentra un error). Es el proceso de asociar un síntoma a una causa y corregir el error.

---

## 2. Verificación vs. Validación (V&V)
* **Verificación:** ¿Construimos el producto correctamente? (Asegura que el software implementa bien las especificaciones técnicas).
* **Validación:** ¿Construimos el producto correcto? (Asegura que el software cumple con las necesidades y expectativas reales del cliente).

---

## 3. Pasos de la Estrategia de Pruebas (La Espiral)

1. **Prueba de Unidad:** Se enfoca en la unidad más pequeña del diseño (módulo o componente). Evalúa:
   * Interfaces (flujo de datos de entrada/salida).
   * Estructuras de datos locales (integridad del algoritmo).
   * Condiciones de frontera (límites lógicos de bucles y arreglos).
   * Rutas independientes en la estructura de control.
   * Rutas de manejo de errores (antierrores / robustez).
   * *Entorno:* Requiere crear *controladores* (programas principales de prueba) y *representantes (stubs / subprogramas tontos)* para simular llamadas a módulos subordinados.
2. **Prueba de Integración:** Técnica sistemática para construir la arquitectura del software mientras se prueban las interfaces de comunicación entre componentes.
   * **Enfoque No Incremental (Big Bang):** Juntar todos los módulos a la vez y probar. *Pressman lo define como un caos ineficiente que debe evitarse.*
   * **Enfoque Incremental:** Construir y probar en pequeños pasos:
     * *Integración Descendente (Top-Down):* Empieza en el módulo de control principal hacia abajo. Requiere stubs. Puede ser primero en profundidad o primero en anchura.
     * *Integración Ascendente (Bottom-Up):* Empieza con módulos atómicos (bajo nivel) hacia arriba. Requiere controladores de prueba. Elimina la necesidad de stubs.
     * *Prueba de Regresión:* Re-ejecución de un subconjunto de pruebas ya realizadas para asegurar que los cambios de integración no propagaron efectos colaterales.
     * *Prueba de Humo (Smoke Testing):* Enfoque de integración diaria constante para proyectos de tiempo crítico. Integra la construcción (build) actual de software y le corre pruebas rápidas E2E no exhaustivas para asegurar estabilidad básica antes de pruebas más profundas.
3. **Prueba de Validación:** Culminación de la integración. Confronta el sistema con los requerimientos acordados (criterios de validación). Incluye la revisión de la configuración (auditoría de entregables) y pruebas de aceptación:
   * *Pruebas Alfa:* Conducidas por el usuario en el sitio del desarrollador bajo un entorno controlado.
   * *Pruebas Beta:* Conducidas por el usuario en su propio entorno "en vivo" sin presencia del desarrollador.
4. **Prueba del Sistema:** Evaluación del software integrado con otros elementos del sistema (hardware, bases de datos, redes). Evita el "dedo acusador" de fallas mediante registros e interfaces robustas. Tipos:
   * *Recuperación:* Forza al software a fallar para evaluar la reanudación y tiempo de reparación (TMR).
   * *Seguridad:* Simula ataques deliberados (frontales, laterales y traseros) para vulnerar el sistema.
   * *Esfuerzo (Stress):* Demanda recursos anormales (memoria, interrupciones, tasa de entrada) para encontrar el punto de quiebre.
   * *Rendimiento (Performance):* Mide velocidad y uso de recursos en tiempo de corrida.
   * *Despliegue (Configuración):* Prueba el software en todas las combinaciones de sistemas operativos y plataformas en las que debe operar.

---

## 4. Tácticas de Depuración (Debugging)
La depuración es un proceso complejo debido a factores psicológicos y a que los síntomas pueden estar geográficamente alejados de la causa. Enfoques:
1. **Fuerza Bruta:** Copias de memoria, prints y rastreos desorganizados (ineficiente, usar solo como último recurso).
2. **Vuelta Atrás (Backtracking):** Rastrear el código hacia atrás desde donde se detectó el síntoma (útil en programas pequeños).
3. **Eliminación de Causas:** Usar inducción/deducción para proponer hipótesis, organizar datos y descartar causas mediante pruebas dirigidas.

> [!TIP]
> Al corregir un error, Pressman recomienda preguntarse: ¿El error se repite en otra parte?, ¿qué "siguiente error" podría introducir esta corrección?, y ¿cómo se pudo evitar desde el inicio?
