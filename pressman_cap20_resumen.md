# Resumen de Prueba de Aplicaciones Web (Pressman - Cap. 20)

Este documento resume el capítulo 20 del texto guía *"Ingeniería del Software - Un enfoque práctico"* de Roger Pressman (páginas 453-477). Detalla las siete etapas específicas y dimensiones de calidad para el testing de WebApps, aplicables directamente al portal **GymPro**.

---

## 1. Conceptos y Dimensiones de Calidad en WebApps
La calidad en una WebApp se evalúa a través de revisiones técnicas y pruebas ejecutables en nueve dimensiones clave:
* **Contenido:** Precisión, consistencia y falta de ambigüedad en el texto y la información presentada.
* **Función:** Conformidad con los requerimientos técnicos y funcionales del cliente.
* **Estructura:** Capacidad de la arquitectura de soportar y entregar correctamente el contenido y funciones.
* **Usabilidad:** Facilidad de uso y aprendizaje para cada perfil de usuario.
* **Navegabilidad:** Operatividad de los flujos de navegación y ausencia de enlaces rotos o huérfanos.
* **Rendimiento:** Tiempos de respuesta óptimos bajo condiciones extremas y concurrencia.
* **Compatibilidad:** Correcto funcionamiento en diversas combinaciones de navegadores y sistemas operativos.
* **Interoperabilidad:** Integración adecuada con bases de datos y otros servicios externos.
* **Seguridad:** Resistencia ante intentos de penetración y protección de datos sensibles.

---

## 2. Peculiaridades de los Errores en WebApps
Identificar fallos en WebApps es más complejo que en software tradicional debido a:
1. **Síntomas en el Cliente:** Los errores se manifiestan en el navegador (lado cliente), pero la causa raíz suele estar en el servidor o la base de datos.
2. **Dificultad de Reproducción:** Los fallos dependen de configuraciones específicas del cliente (navegador, OS, velocidad de red).
3. **Capas Arquitectónicas:** Los datos fluyen por múltiples capas (Cliente $\leftrightarrow$ Servidor Web $\leftrightarrow$ Base de Datos), dificultando el rastreo.
4. **Entorno Dinámico:** Los fallos pueden surgir bajo cargas de tráfico instantáneas y asincronía.

---

## 3. Las Siete Etapas de la Estrategia de Prueba para WebApps (Figura 20.1)

El proceso sigue una secuencia lógica que va desde lo visible por el usuario hasta la infraestructura técnica (tecnología):

```
[Prueba de Contenido] $\rightarrow$ [Prueba de Interfaz] $\rightarrow$ [Prueba de Navegación] $\rightarrow$ [Prueba de Componentes] $\rightarrow$ [Configuración, Rendimiento y Seguridad]
```

### 1. Prueba de Contenido
* **Objetivo:** Descubrir errores sintácticos (tipográficos, gramaticales) y semánticos (precisión e integridad de la información presentada).
* **Base de Datos:** Evalúa la interacción dinámica del contenido con los datos (extracción de datos en consultas, formateo correcto y visualización).

### 2. Prueba de Interfaz de Usuario (UI)
* **Objetivo:** Verificar la estética visual (fuentes, colores, tablas) y los mecanismos de interacción (formularios, botones, scripts del lado cliente, cookies).
* **Mecanismos clave:**
  * *Formularios:* Validar que las etiquetas sean correctas, que el servidor reciba los datos sin pérdidas y que funcionen los validadores de campos (ej. longitud de texto, campos obligatorios).
  * *Cookies:* Probar su correcta creación (datos cifrados), persistencia (fecha de expiración) y envío adecuado en peticiones HTTP.
  * *Usabilidad:* Pruebas conducidas por usuarios representativos para calificar la interactividad, accesibilidad y legibilidad.
  * *Compatibilidad:* Probar la interfaz en diferentes navegadores (Chrome, Firefox, Safari) y dispositivos.

### 3. Prueba de Navegación
* **Sintaxis de navegación:** Comprobar la validez técnica de enlaces (internos y externos), redireccionamientos ante URL inexistentes, favoritos (bookmarks) y mapas de sitio.
* **Semántica de navegación (USN):** Validar que el usuario pueda completar con éxito los casos de uso definidos a través de las rutas lógicas establecidas, incluyendo escenarios de cancelación de flujo o recuperación ante rutas erróneas.

### 4. Prueba a Nivel de Componente (Funcionalidad)
* **Objetivo:** Probar las funciones del backend asociadas a los formularios y lógica del negocio.
* **Métodos:** Partición de equivalencia, análisis de valores límite y pruebas de caminos estructurados (Caja Blanca en Flask).

### 5. Prueba de Configuración
* **Lado Servidor:** Validar la compatibilidad de la WebApp con el sistema operativo servidor, firewalls, y dependencias con bases de datos remotas.
* **Lado Cliente:** Evaluar el comportamiento físico reduciendo las variables de hardware, sistemas operativos, navegadores y velocidad de red a un conjunto acotado basado en participación de mercado.

### 6. Prueba de Seguridad
* **Objetivo:** Descubrir huecos de seguridad e inyecciones de código.
* **Elementos clave:** Probar el comportamiento de firewalls, encriptación HTTPS, control de autorización (tokens JWT) y autenticación, y fortaleza ante vulnerabilidades comunes (Buffer Overflow, Spoofing, SQLi y XSS).

### 7. Prueba de Rendimiento
* **Prueba de Carga:** Medir tiempos de respuesta ($P = N \times T \times D$, donde $N$ es usuarios, $T$ es transacciones y $D$ es volumen de datos) para asegurar que el servidor responde bajo carga normal prevista.
* **Prueba de Esfuerzo (Stress):** Sobrecargar el sistema superando los límites operativos para identificar cómo falla y medir el tiempo necesario para regresar en línea. Incluye pruebas de rebote/pico (Spike Testing).
