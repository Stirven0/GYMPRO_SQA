# Conceptos de Pruebas de Software (Fuente de Conocimiento)

Este documento contiene la transcripción estructurada de la presentación: `Unidad 02 Pruebas de software - Conceptos.pptx`.

---

## Diapositiva 1
### UNIDAD 01
- PRUEBAS DE SOFTWARE

---

## Diapositiva 2
### ¿QUE SON LAS PRUEBAS DEL SOFTWARE ?
- Es un proceso para verificar y validar la funcionalidad de un programa o una aplicación de software con el objetivo de garantizar que el producto de software esté libre de defectos. La intención final es que coincida con los requisitos esperados para entregar un  producto de calidad. Implica la ejecución de componentes de software o sistema utilizando herramientas manuales o automatizadas para evaluar una o más propiedades de interés.
- Una estrategia de prueba de software proporciona una guía que describe los pasos que deben realizarse como parte de la prueba.
- Esta estrategia debe planear las pruebas, el diseño de los casos de prueba, la ejecución de las pruebas y la recolección y evaluación de los resultados.
- La estrategia debe ser FLEXIBLE (para promover un uso personalizado de la prueba) pero a las vez RIGIDA (en su planificación y el seguimiento de la gestión a lo largo del proyecto.

---

## Diapositiva 3
### OBJETIVOS DE LAS PRUEBAS DE SOFTWARE
- Detectar y corregir errores.
- Proporcionar calidad y confiabilidad del software.
- Asegurar la correcta funcionalidad del producto.
- Evitar futuros errores.
- Facilitar  la toma de decisiones para pasar a producción los desarrollos que no contengan errores.
- Cumplir con los requisitos del negocio y satisfacción del usuario.
- Evitar la aparición de nuevos defectos en el futuro que puedan afectar al software.

---

## Diapositiva 4
### VERIFICACIÓN Y VALIDACIÓN
- Verificación: Conjunto de tareas que garantizan que el software implementa correctamente  una función especifica ¿Construimos el producto correctamente?.
- Validación: Conjunto diferente de tareas que aseguran que el software que se construye sigue los requerimientos del cliente. ¿Construimos el producto correcto?
- Estas dos actividades incluyen actividades de SQA: revisiones técnicas, auditoria de calidad y configuración, monitoreo de rendimiento, simulación, estudio de factibilidad, revisiones de documentación, revisión de BD, análisis de algoritmos, pruebas de desarrollo, de usabilidad, de calificación, de aceptación e instalación.

---

## Diapositiva 5
### ¿POR QUE LAS PRUEBAS DE SOFTWARE SON IMPORTANTES?
- Poco se puede argumentar en contra de la necesidad de control de calidad al desarrollar software. La entrega tardía o los defectos del software pueden dañar la reputación de una marca, y generar frustración en los clientes (o, inclusive, perderlos). En casos extremos, un error o defecto puede degradar los sistemas interconectados o causar fallas de funcionamiento graves.
- Aunque las pruebas en sí mismas cuestan dinero, las empresas pueden ahorrar millones por año en desarrollo y soporte si cuentan con una buena técnica de prueba y procesos de control de calidad. Las primeras pruebas de software descubren problemas antes de que un producto salga al mercado.

---

## Diapositiva 6
### ¿POR QUE LAS PRUEBAS DE SOFTWARE SON IMPORTANTES?
- Cuanto antes los equipos de desarrollo reciban comentarios sobre las pruebas, más anticipadamente podrán abordar problemas como:
- Defectos arquitectónicos - Decisiones de diseño deficientes - Funcionalidad no válida o incorrecta - Vulnerabilidades de seguridad - Problemas de escalabilidad
- Cuando el desarrollo deja un amplio espacio para las pruebas, mejora la confiabilidad del software y las aplicaciones de alta calidad se entregan con pocos errores. Un sistema que cumple o incluso supera las expectativas del cliente conduce a potencialmente más ventas y una mayor participación de mercado.

---

## Diapositiva 7
### ORGANIZACIÓN DE LAS PRUEBAS
- Estrategias de pruebas
- Pasos de las pruebas de Software

---

## Diapositiva 8
### TIPO DE PRUEBAS
- Verifican cada función de una aplicación o software, su funcionalidad con un conjunto específico de requisitos.
- O pruebas de rendimiento: Consideran parámetros como la confiabilidad, la usabilidad y el rendimiento.

---

## Diapositiva 9
### PRUEBAS FUNCIONALES
- Pruebas unitarias (Unit testing): Es una forma de probar una unidad o fragmento de código más pequeño que se puede aislar lógicamente en un sistema.
- Pruebas de integración (Integration testing): Prueban la integración o interfaces entre componentes, interacciones con diferentes partes del sistema, como sistema de archivos y hardware, sistema operativo,o interfaces entre sistemas.
- Pruebas de sistema (System testing): Se evalúa cómo los diferentes componentes de una aplicación interactúan juntos en el sistema o aplicación completa e integrada.
- Pruebas de sanidad (Sanity testing): Se trata de una prueba rápida y básica para determinar si se comporta correctamente una aplicación o componente en particular.
- Pruebas de humo (Smoke testing): Es el proceso de prueba inicial que verifica la funcionalidad principal de un programa para garantizar que esté listo para más pruebas.

---

## Diapositiva 10
### PRUEBAS FUNCIONALES
- Pruebas de interfaz (Interface testing): Verifica la comunicación entre dos sistemas de software diferentes comprobando la autenticación de la conexión establecida.
- Pruebas de regresión (Regression testing): Garantiza que una aplicación siga funcionando según lo esperado después de producirse alguna actualización, cambio o mejora de código.
- Pruebas de aceptación (Beta/acceptance testing): se realiza en un producto o prototipo antes de su comercialización o entrega, para decidir si se han cumplido las especificaciones o el contrato. Se asegura de que la calidad y el diseño del producto cumplan con los requisitos en términos de funcionalidad, usabilidad, durabilidad y seguridad.

---

## Diapositiva 11
### PRUEBAS NO FUNCIONALES
- Prueba de rendimiento (Permormance testing): Evalúa el rendimiento, la velocidad o capacidad de respuesta de la aplicación que se prueba bajo la carga de trabajo requerida.
- Prueba de carga (Load testing): Prueba el comportamiento de una aplicación bajo una gran carga de trabajo.
- Pruebas de estrés (Stress Testing): Las pruebas de estrés determinan la solidez del software al evaluar el funcionamiento normal en condiciones de carga extremadamente pesada, garantizando así que el software no se bloquea en situaciones críticas.
- Pruebas de volumen (Volume Testing): Prueba el rendimiento del software cargando cuando procesa grandes volúmenes de datos.
- Pruebas de seguridad (Security Testing): Verifican si el sistema está protegido contra ataques repentinos o deliberados de fuentes internas y externas.

---

## Diapositiva 12
### PRUEBAS NO FUNCIONALES
- Pruebas de compatibilidad (Compatibility Testing): Comprueban si la aplicación es compatible con diferentes entornos.
- Pruebas de instalación (Install Testing): Verifica si un software funciona según las expectativas después de la instalación.
- Pruebas de recuperación (Recovery Testing): Determina si un sistema puede recuperarse de fallas o no.
- Pruebas de confiabilidad (Reliability Testing): Garantiza que el software funciona de manera consistente realizando una tarea sin fallar dentro un período específico.
- Pruebas de usabilidad (Usability Testing): Testean la facilidad de uso del usuario en términos de operación, aprendizaje y preparación de entradas y salidas.
- Pruebas de conformidad (Compliance Testing): Determina si un programa o sistema de software cumple con un conjunto definido de estándares internos o externos antes de su lanzamiento a producción.
- Pruebas de localización (Localization Testing): Verifican el comportamiento de un producto de acuerdo con los entornos locales o culturales específicos.

---

## Diapositiva 13
### MEJORES PRÁCTICAS DE PRUEBA DE SOFTWARE
- Las pruebas de software siguen un proceso en común. Las tareas o pasos incluyen definir el entorno de prueba, desarrollar casos de prueba, desarrollar scripts, analizar los resultados de las pruebas y enviar los informes de los defectos.
- Las pruebas pueden llevar mucho tiempo. Las pruebas manuales o las pruebas ad-hoc pueden ser suficientes para compilaciones pequeñas. Sin embargo, para sistemas más grandes, se utilizan con frecuencia herramientas para automatizar las tareas. Las pruebas automatizadas ayudan a los equipos a implementar diferentes escenarios, probar diferenciadores (como mover componentes a un entorno de nube) y obtener rápidamente comentarios sobre lo que funciona y lo que no.

---

## Diapositiva 14
### MEJORES PRÁCTICAS DE PRUEBA DE SOFTWARE
- Un buen enfoque de prueba abarca la interfaz de programación de aplicaciones (API), la interfaz de usuario y los niveles del sistema. Además, cuantas más pruebas se automaticen y se ejecuten antes, mejor. Algunos equipos crean herramientas de automatización de pruebas internas. Sin embargo, las soluciones de los proveedores ofrecen características que pueden agilizar las tareas clave de administración de pruebas, tales como:
- Prueba continua: Los equipos de proyecto prueban cada compilación a medida que está disponible. Este tipo de prueba de software se basa en la automatización de pruebas que se integra con el proceso de implementación. Permite que el software se valide en entornos de prueba realistas al principio del proceso, lo que mejora el diseño y reduce los riesgos.
- Gestión de la configuración: Las organizaciones mantienen de forma centralizada los activos de prueba y realizan un seguimiento de las compilaciones de software para probarse. Los equipos obtienen acceso a activos como código, requisitos, documentos de diseño, modelos, scripts de prueba y resultados. Los buenos sistemas incluyen autenticación de usuarios y rastros de auditoría para ayudar a los equipos a cumplir con los requisitos de cumplimiento con un esfuerzo administrativo mínimo.

---

## Diapositiva 15
### MEJORES PRÁCTICAS DE PRUEBA DE SOFTWARE
- Virtualización de servicios: Es posible que los entornos de prueba no estén disponibles, especialmente en las primeras etapas del desarrollo del código. La virtualización de servicios simula los servicios y sistemas que faltan o aún no se completaron, lo que permite a los equipos reducir las dependencias y realizar pruebas antes. Pueden reutilizar, implementar y cambiar una configuración para probar diferentes escenarios sin tener que modificar el entorno original.
- Defecto o seguimiento de errores: El seguimiento de los defectos es importante tanto para los equipos de pruebas como para los de desarrollo, con el fin de medir y mejorar la calidad. Las herramientas automatizadas permiten a los equipos rastrear defectos, medir su alcance e impacto y descubrir otros problemas relacionados.
- Métricas e informes: Los informes y los análisis permiten a los miembros del equipo compartir el estado, los objetivos y los resultados de las pruebas. Las herramientas avanzadas integran las métricas del proyecto y presentan los resultados en un tablero. Los equipos ven rápidamente el estado general de un proyecto y pueden monitorear las relaciones entre la prueba, el desarrollo y otros elementos del proyecto.

---

## Diapositiva 16
### Video
- https://youtu.be/mf_cdpOLBcA

---