# Resumen de Aseguramiento de la Calidad del Software (Pressman - Cap. 16)

Este documento resume el capítulo 16 del texto guía *"Ingeniería del Software - Un enfoque práctico"* de Roger Pressman (páginas 368-382). Funciona como el marco metodológico sobre el cual se estructurará el plan de desarrollo de pruebas para el proyecto **GymPro**.

---

## 1. Definición del Aseguramiento de la Calidad del Software (ACS)

El ACS (o SQA, por sus siglas en inglés) es una **actividad sombrilla** que se aplica a lo largo de todo el proceso de ingeniería de software. Se define como un *"patrón planeado y sistemático de acciones"* requeridas para garantizar la alta calidad del producto final. 

---

## 2. Elementos del ACS (SQA)

El ACS abarca un conjunto amplio de actividades y elementos de control:

1. **Estándares:** Asegurar que los estándares adoptados (ISO, IEEE, etc.) se sigan en todos los entregables.
2. **Revisiones y Auditorías:** Revisiones técnicas formales para detectar errores y auditorías para garantizar el cumplimiento de los procesos de calidad.
3. **Pruebas (Testing):** Actividad enfocada en la detección de errores. El rol de ACS aquí es garantizar que las pruebas estén planificadas apropiadamente y se ejecuten eficientemente.
4. **Colección y análisis de errores:** Reunir y analizar datos sobre defectos para entender sus causas y eliminarlas.
5. **Administración del cambio (Gestión de Configuración):** Evitar la confusión y pérdida de calidad debido a cambios descontrolados.
6. **Educación:** Capacitación continua del equipo de desarrollo.
7. **Administración de proveedores y seguridad:** Garantizar la calidad de componentes de terceros y la seguridad/privacidad de los datos.
8. **Administración de riesgos:** Asegurar planes de contingencia para mitigar fallos.

---

## 3. Tareas del Grupo de ACS (Sección 16.3.1)

El grupo de ACS actúa como representante del cliente y tiene las siguientes tareas principales en el proyecto:

1. **Prepara el Plan de ACS para el proyecto (Plan de Pruebas y Calidad):** Detalla las evaluaciones, estándares, auditorías y métricas.
2. **Participa en el desarrollo de la descripción del proceso:** Valida el cumplimiento de las políticas organizacionales y estándares externos (como ISO-9001).
3. **Revisa las actividades de ingeniería:** Verifica el apego al proceso definido e identifica/sigue desviaciones.
4. **Audita los productos de trabajo designados:** Verifica que los entregables cumplan con los criterios establecidos.
5. **Asegura la documentación y manejo de desviaciones** según procedimientos registrados.
6. **Registra los incumplimientos** y los reporta a la alta dirección.

---

## 4. Metas, Atributos y Métricas de Calidad (Figura 16.1)

* **Calidad de Requerimientos:** Medida a través de la ambigüedad, completitud, trazabilidad y volatilidad.
* **Calidad de Diseño:** Evaluada por la integridad arquitectónica, completitud de componentes y complejidad de interfaces.
* **Calidad de Código:** Analizada por la complejidad ciclomática, facilidad de mantenimiento, legibilidad y reusabilidad.
* **Eficacia del Control de Calidad:** Evaluada mediante métricas de asignación de recursos, tasa de finalización y eficacia de revisiones/pruebas (número de errores críticos detectados).

---

## 5. Aseguramiento Estadístico de la Calidad (Pareto y Six Sigma)

* **Principio de Pareto (Regla 80/20):** El 80% de los defectos en producción se debe al 20% de las causas raíz. 
* **Causas típicas de defectos:**
  * Especificaciones erróneas o incompletas (EEI).
  * Mala interpretación de la comunicación con el cliente (MCC).
  * Errores en la representación de datos (ERD).
  * Lógica de diseño errónea (EDL).
* **Six Sigma (DMAIC):** Metodología rigurosa para reducir fallos a menos de 3.4 por millón de oportunidades, dividida en: *Definir, Medir, Analizar, Mejorar y Controlar*.

---

## 6. Confiabilidad y Disponibilidad del Software

* **Confiabilidad:** Probabilidad de que un programa opere libre de fallas en un entorno y tiempo específicos.
* **Tiempo Medio Entre Fallas (TMEF / MTBF):**
  $$\text{TMEF} = \text{TMPF} + \text{TMPR}$$
  *(donde TMPF es Tiempo Medio Para la Falla y TMPR es Tiempo Medio Para la Reparación)*.
* **Disponibilidad:** Probabilidad de que el sistema esté operativo bajo los requerimientos en un instante dado:
  $$\text{Disponibilidad} = \left( \frac{\text{TMPF}}{\text{TMPF} + \text{TMPR}} \right) \times 100\%$$

---

## 7. Estructura Recomendada del Plan de ACS (Estándar IEEE)

Según la norma IEEE recomendada en el texto, el plan para GymPro debe contemplar:
1. **Propósito y alcance del plan.**
2. **Descripción de los productos del trabajo de software** (código, BD, interfaces).
3. **Normas y prácticas aplicables** (ISO/IEC 25010, estándares de código).
4. **Acciones y tareas de ACS** (revisiones, pruebas unitarias, E2E, seguridad).
5. **Herramientas y métodos de apoyo** (Selenium, Postman, JMeter).
6. **Procedimientos de control de configuración** (Git, ramas).
7. **Salvaguardas e informes de calidad.**
8. **Roles y responsabilidades de los participantes.**
