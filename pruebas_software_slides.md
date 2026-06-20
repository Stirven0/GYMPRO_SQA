# Calidad del Software - Unidad 01 (Fuente de Conocimiento)

Este documento contiene la transcripción estructurada de la presentación: `Pruebas del software (1).pptx`.

---

## Diapositiva 1
### Pruebas del Software

---

## Diapositiva 2
### Pruebas del Software
- Pruebas Funcionales
- Se centran en los resultados del procesamiento y no en la mecánica del mismo, y determinan si la aplicación satisface las expectativas básicas mínimas del usuario.
- Pruebas No Funcionales
- Investigan la calidad, la seguridad o el rendimiento del código fuente subyacente de la aplicación. Mide la velocidad, la escalabilidad, la fiabilidad, entre otros.
- Ambas son cruciales para la calidad del software: las funcionales aseguran que las características operan correctamente, y las no funcionales refinan la experiencia del usuario al garantizar que el sistema sea rápido, confiable y seguro bajo diversas condiciones.

---

## Diapositiva 3
### Pruebas del Software

---

## Diapositiva 4
### Pasos típicos de las pruebas funcionales
- Crear un plan de pruebas que incluya:
- 1. Identificar los objetivos de las pruebas
- 2. Crear escenarios de prueba
- 3. Crear datos de prueba
- 4. Diseñar casos de prueba
- 5. Ejecutar los casos de prueba
- 6. Deliberar sobre los defectos, seguirlos y resolverlos

---

## Diapositiva 5
### Pasos típicos de las pruebas funcionales
- Plan de Pruebas
- Son las características que se espera que tenga el software en función de los requisitos del proyecto. Incluye validar que la aplicación funciona como estaba previsto y que gestiona los errores y las situaciones inesperadas con elegancia.
- 1. Identificar Objetivos
- Los escenarios de prueba describen las diferentes formas en que se utilizará la función. Por ejemplo, en el caso de un módulo de pago, los escenarios de prueba pueden incluir varias divisas, la gestión de números de tarjeta no válidos o caducados y la generación de una notificación al finalizar la transacción
- 2. Crear escenarios de prueba
- Cree datos de prueba que simulen las condiciones normales de uso en función de los escenarios de prueba que haya identificado. Puede introducir los datos de prueba manualmente (por ejemplo, a partir de una hoja de cálculo MS-Excel o una impresión) o automáticamente mediante un script o una herramienta de prueba que lea e introduzca los datos desde una base de datos, un archivo plano, XML o una hoja de cálculo. Cada conjunto de datos de entrada debe tener también datos asociados que describan el resultado esperado que deben generar los datos de entrada.
- 3. Crear datos de prueba

---

## Diapositiva 6
### Pasos típicos de las pruebas funcionales
- Plan de Pruebas
- Cree casos de prueba basados en los diferentes resultados deseados para las entradas de prueba. Por ejemplo, si se introduce un número de tarjeta de crédito no válido, la aplicación debe mostrar un mensaje de error significativo.
- 4. Diseñar casos de prueba
- Ejecute los casos de prueba a través de la aplicación y compare los resultados reales con los esperados. Si los resultados reales y esperados son diferentes, la función no ha superado la prueba y debe registrarse un defecto.
- 5. Ejecutar los casos de prueba
- Una vez identificado un defecto, debe registrarse en un sistema de seguimiento formal al que tenga acceso todo el equipo del proyecto. Antes de marcar el defecto como cerrado, hay que introducir los cambios necesarios en la aplicación y volver a ejecutar el caso de prueba para confirmar su resolución.
- 6. Deliberar sobre los defectos, seguirlos y resolverlos

---

## Diapositiva 7
### Herramientas de pruebas funcionales automatizadas
- Son capaces de interactuar con la interfaz de usuario de la aplicación que se está probando.
- Pueden identificar objetos en la pantalla, como cuadros de lista, cuadros de texto y botones, y pueden hacer selecciones, introducir datos y pulsarlos.
- Muchas herramientas de automatización de pruebas funcionales incluyen un grabador, que "observa" al usuario mientras interactúa con una aplicación y sus objetos en la pantalla, registra los datos que introduce en el sistema y las acciones que realiza, como pulsar botones o seleccionar menús. Estas acciones pueden reproducirse a continuación, utilizando los objetos, datos y acciones capturados durante la grabación, para reproducir las actividades del usuario. La herramienta de pruebas anota los resultados de estas acciones y los compara con los resultados esperados definidos por el ingeniero de automatización para determinar si la prueba se ha superado o no.
- Los ingenieros de automatización de pruebas funcionales pueden construir sus pruebas paso a paso utilizando los objetos reconocidos por la herramienta, o pueden empezar con una grabación, personalizando los pasos y parametrizando los datos para generalizarlos y permitir que las pruebas se ejecuten en distintos entornos, incluidos varios navegadores y dispositivos móviles.

---

## Diapositiva 8
### Plantillas para diseñar Casos de Pruebas
- https://es.smartsheet.com/test-case-templates-examples
- https://www.pmoinformatica.com/2014/06/plantilla-de-casos-de-prueba.html
- https://www.slideteam.net/blog/las-7-mejores-plantillas-de-casos-de-prueba-con-ejemplos-y-muestras?lang=Spanish
- https://www.guru99.com/es/download-sample-test-case-template-with-explanation-of-important-fields.html
- https://es.parasoft.com/blog/how-to-write-test-cases-for-software-examples-tutorial/
- Algunas herramientas como JUnit, Selenium, Postman, JMeter, SoapUI, TestLink se pueden aplicar según el tipo de prueba.

---

## Diapositiva 9

---

## Diapositiva 10
### Pruebas de Sistemas
- Realiza comprobaciones del sistema en su conjunto.
- Consiste en integrar todos los módulos y componentes individuales del software que has desarrollado, para comprobar si el sistema funciona conjuntamente como se esperaba.
- Las pruebas del sistema son un paso esencial de las pruebas de software que permitirá a los equipos de pruebas verificar la calidad de la creación antes de que se ponga a disposición de los usuarios finales.

---

## Diapositiva 11
### Pruebas de Sistemas
- Las pruebas de sistemas son un tipo de pruebas de software que siempre se realizan en un sistema completo. Comprueba si el sistema cumple sus requisitos, sean cuales sean.
- Los probadores realizan pruebas de sistemas para evaluar los requisitos funcionales y no funcionales del sistema una vez que se han integrado los módulos y componentes individuales.
- Las pruebas del sistema son una categoría de las pruebas de caja negra, lo que significa que sólo comprueban las características externas de funcionamiento del software, en lugar de probar el diseño interno de la aplicación.
- Los encargados de las pruebas no necesitan conocer la programación ni la estructura del código del software para evaluar por completo una compilación de software durante las pruebas del sistema. En cambio, los probadores se limitan a evaluar el rendimiento del software desde la perspectiva de un usuario.
- https://www.zaptest.com/es/que-es-la-comprobacion-de-sistemas-una-inmersion-en-profundidad-en-enfoques-tipos-herramientas-consejos-y-trucos-y-mucho-mas

---