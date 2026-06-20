# Plan de Pruebas y Aseguramiento de Calidad (SQA Test Plan) — GymPro

Este documento define el plan estratégico y técnico para el Aseguramiento de la Calidad (QA/SQA) de la plataforma **GymPro**, estructurado bajo las directrices metodológicas de **Roger Pressman (Capítulos 16, 17, 18 y 20)** y el estándar internacional de calidad de producto **ISO/IEC 25010**.

---

## 1. Propósito y Alcance del Plan

### Propósito
Establecer un proceso planificado y sistemático para verificar y validar que el sistema de gestión de gimnasios **GymPro** esté libre de defectos críticos, cumpla con los requerimientos funcionales del cliente, garantice una experiencia de usuario (UX) óptima, sea seguro frente a vulnerabilidades comunes y mantenga un rendimiento estable en producción.

### Alcance
El plan abarca la evaluación del portal principal del proyecto:
1.  **Portal Principal (Landing & Login):** `https://gestion-gympro.up.railway.app` (Desplegado en Railway - Stack: Python Flask + SQLite + HTML/JS).

Se evaluarán los 10 módulos funcionales descritos en la documentación del sistema: *Inicio, Usuarios, Entrenadores, Valoración Física, Rutinas, Asistencia, Membresías, Horarios, Plan Nutricional y Reportes*.

---

## 2. Dimensiones de Calidad a Evaluar (ISO/IEC 25010)

El plan de pruebas se estructurará evaluando las siguientes características del estándar:

| Dimensión de Calidad | Objetivo en GymPro | Tipo de Prueba Aplicada |
| :--- | :--- | :--- |
| **Idoneidad Funcional** | Verificar que los 10 módulos cumplan su función lógica (registro de datos, cálculo de membresías, asignación de rutinas). | Pruebas Funcionales (Unitarias, Sistema/E2E). |
| **Usabilidad** | Garantizar un flujo intuitivo, legibilidad tipográfica y que la interfaz sea responsiva (sidebar ocultable en resoluciones <700px). | Pruebas de Interfaz de Usuario (UI) y Usabilidad. |
| **Seguridad** | Validar la protección de rutas de API, caducidad de tokens JWT, sanitización de datos (SQLi/XSS) y robustez del CAPTCHA. | Pruebas de Seguridad (Penetración, OWASP Top 10). |
| **Eficiencia de Desempeño** | Medir los tiempos de respuesta del servidor en Railway ante cargas de usuarios normales y críticas. | Pruebas de Rendimiento, Carga y Estrés. |
| **Compatibilidad** | Asegurar el despliegue óptimo en múltiples navegadores (Chrome, Firefox, Safari) y plataformas (Móvil, Desktop). | Pruebas de Despliegue / Configuración en el Cliente. |
| **Fiabilidad** | Garantizar la estabilidad del sistema y el comportamiento del pool de conexiones a la base de datos (SQLite). | Pruebas de Sanidad y Confiabilidad. |
| **Mantenibilidad** | Validar la limpieza, modularidad y legibilidad del código de Flask para facilitar futuros cambios. | Revisiones Técnicas Formales (RTF). |
| **Portabilidad** | Verificar que el sistema se despliega correctamente en Railway y funciona en múltiples navegadores. | Pruebas de Despliegue / Configuración. |

---

## 3. Estrategia de Pruebas (Enfoque en Espiral de Pressman)

Seguiremos un enfoque incremental "de adentro hacia afuera" estructurado en cuatro fases secuenciales:

```
[Prueba de Unidad] $\rightarrow$ [Prueba de Integración] $\rightarrow$ [Prueba de Validación] $\rightarrow$ [Prueba de Sistema]
```

### Fase 1: Pruebas Unitarias (Bajo Nivel)
*   **Foco:** Validar unidades individuales de código de forma aislada.
*   **Nota:** Requiere acceso al código fuente del backend Flask. Sin él, esta fase no puede ejecutarse contra la URL desplegada. Si se obtiene el repositorio, aplicar:
    *   *Backend Flask:* Lógica de cálculo de membresías y vigencias.
    *   *Módulo CAPTCHA:* Algoritmo de generación y validación de la suma matemática aleatoria.
    *   **Herramientas:** `pytest` (Python).

### Fase 2: Pruebas de Integración (Capa de Comunicación)
*   **Foco:** Verificar la comunicación y flujo de datos entre la interfaz del cliente, las APIs de Flask y la base de datos SQLite.
*   **Enfoque:** Integración incremental combinada (Sándwich). Se evaluará el comportamiento del pool de conexiones para evitar bloqueos.
*   **Prueba de Regresión:** Ante cualquier cambio en la base de datos o lógica de Flask, se ejecutará la suite de integración para mitigar efectos colaterales.
*   **Herramientas:** Postman + Newman CLI.

### Fase 3: Pruebas de Validación (Criterios del Negocio)
*   **Foco:** Garantizar que el sistema cumpla estrictamente con los casos de uso definidos y las expectativas del usuario final (Caja Negra).
*   **Métodos de Diseño:**
    *   *Partición de Equivalencia:* Para campos de entrada (ej. registrar correos válidos y formatos incorrectos).
    *   *Análisis de Valores Límite (BVA):* Validar valores límite en campos numéricos (ej. límites en la edad para valoraciones físicas o duración de planes de membresías).
*   **Pruebas Alfa/Beta:**
    *   *Prueba Alfa:* Pruebas guiadas en un ambiente local/staging controlado.
    *   *Prueba Beta:* Despliegue en vivo en Railway para que usuarios reales interactúen de forma independiente y reporten discrepancias.

### Fase 4: Pruebas del Sistema (Infraestructura y Robustez)
*   **Prueba de Humo (Smoke Testing):** Validación rápida diaria de la carga de la landing page, visibilidad de los inputs de login y correcto direccionamiento de enlaces básicos.
*   **Prueba de Sanidad (Sanity Testing):** Verificación rápida post-despliegue de endpoints clave (`/api/auth/login`, consulta de membresías, registro de asistencia).
*   **Pruebas de Carga y Estrés:** Simulación de usuarios concurrentes mediante hilos para buscar el punto de quiebre del servidor.
*   **Pruebas de Seguridad:** Penetración y escaneo dinámico para verificar la protección de endpoints `/api/*` y la sanitización de inputs.
*   **Pruebas de Despliegue/Configuración:** Validar el comportamiento estético e interactivo en Chrome (Desktop y Móvil), Firefox y Safari.

---

## 4. Tácticas Específicas para WebApps (Capítulo 20)

Aplicaremos los pasos de Pressman para el entorno web de GymPro:

### A. Prueba de Interfaz de Usuario (UI) y Usabilidad
*   Validar la visualización del menú y la adaptabilidad responsiva (diseño móvil).
*   Verificar que las etiquetas de los formularios identifiquen correctamente los campos y marquen los obligatorios.
*   Comprobar el funcionamiento del teclado (tecla *Tab* para cambiar de input) y bloqueo de entradas excesivamente largas en los formularios.

### B. Prueba de Cookies
*   Verificar la correcta creación y encriptado de las cookies de sesión del usuario.
*   Validar la persistencia y la fecha de expiración de las cookies tras cerrar sesión (`/api/auth/logout`).

### C. Prueba de Navegación
*   *Sintaxis:* Ejecución de scripts automáticos para detectar enlaces rotos, vínculos huérfanos y redireccionamientos correctos ante accesos a URL inexistentes (retornar 404 personalizado o redirigir a `/login`).
*   *Semántica (USN):* Comprobar que el usuario pueda completar flujos semánticos (ej. Login $\rightarrow$ Inicio $\rightarrow$ Menú Rutinas $\rightarrow$ Ver Ejercicios del Día) sin desorientación en la arquitectura de la información.

### D. Prueba de Base de Datos SQLite
*   Validar que las transacciones y consultas de datos dinámicos (ej. cargar la rutina del miembro autenticado) pasen correctamente a través de las capas de interacción (Interfaz $\leftrightarrow$ Flask $\leftrightarrow$ SQLite) sin pérdida de información ni SQLi.

---

### Estado de Instalación en el Entorno Actual

| Herramienta | Estado | Acción requerida |
|---|---|---|
| `curl` | ✅ Listo | Ninguna |
| Python `requests` | ✅ Listo | Ninguna |
| Python `pytest` | ❌ No instalado | `pip install pytest` |
| Python `selenium` | ❌ No instalado | `pip install selenium` |
| Newman | ❌ No instalado | `npm install -g newman` |
| JMeter | ❌ No instalado | Descargar e instalar |
| OWASP ZAP | ❌ No instalado | Descargar e instalar |

**Nota:** `curl` y Python `requests` están listos para usar de inmediato sin instalación adicional.

## 5. Herramientas y Ambiente de QA

| Propósito | Herramienta Seleccionada | Entorno / Scripting |
| :--- | :--- | :--- |
| **Pruebas de API rápidas / exploratorias** | `curl` + Python `requests` | Terminal / scripts ligeros sin instalación adicional. |
| **Pruebas Unitarias** | `pytest` (Python) | Solo si se obtiene acceso al código fuente. |
| **Pruebas de API e Integración** | Postman / Newman | Colecciones de peticiones HTTP automatizadas (instalar via npm). |
| **Pruebas de UI, Navegación y E2E**| Selenium WebDriver | Scripts en Python con capturas automáticas. |
| **Pruebas de Rendimiento y Carga** | Apache JMeter | Simulación de hilos concurrentes (Java requerido). |
| **Pruebas de Seguridad** | OWASP ZAP | Escaneo dinámico y análisis de vulnerabilidades (Java requerido). |
| **Gestión de Incidencias / Defectos**| GitHub Issues / Markdown | Registro formal en `~/QA/reporte_defectos.md`. |

---

## 6. Procedimiento para Captura y Registro de Evidencias

Para garantizar que el informe final de pruebas cuente con el respaldo visual exigido, se implementará la siguiente política de evidencias:

1.  **Directorio de Destino:** Todas las capturas se guardarán automáticamente en la ruta `/home/stirven/QA/evidencias/`.
2.  **Captura Automática (Selenium):** Los scripts de Selenium incorporarán la directiva `driver.save_screenshot('evidencias/nombre_del_caso.png')` en puntos de control críticos:
    *   *Control 1:* Carga correcta del formulario de Login (`login_cargado.png`).
    *   *Control 2:* Resolución de la suma del CAPTCHA matemático (`captcha_resuelto.png`).
    *   *Control 3:* Entrada exitosa a la página `/inicio` tras autenticación (`login_exitoso.png`).
    *   *Control 4:* Captura de fallos en caso de que alguna aserción no se cumpla (`fallo_[nombre_de_prueba].png`).
3.  **Captura de Pruebas de API/Rendimiento:** Capturas de pantalla de la interfaz de Postman y de los reportes gráficos de JMeter (Response Time Graph) se guardarán manualmente en el mismo directorio.
4.  **Integración en el Reporte:** Las imágenes se enlazarán en el reporte final en Markdown para su fácil visualización.

---

## 7. Roles y Responsabilidades

*   **Equipo de Desarrollo (Programadores):**
    *   Responsables de realizar las revisiones técnicas de código iniciales.
    *   Ejecutar las Pruebas Unitarias preliminares y resolver los defectos detectados y reportados por QA.
*   **Especialista de QA / Grupo de Prueba Independiente (GPI):**
    *   Responsable del diseño de casos de prueba detallados (Caja Negra/Caja Blanca).
    *   Desarrollar y ejecutar los scripts automatizados de integración (Postman) y E2E (Selenium).
    *   Ejecutar las pruebas de carga, rendimiento y seguridad.
    *   Registrar, clasificar y dar seguimiento a los defectos en el sistema de reporte.
*   **Usuarios Finales (Clientes de prueba):**
    *   Realizar las pruebas de validación final (Pruebas de Aceptación Alfa/Beta) para corroborar que la aplicación satisface sus necesidades reales del día a día en el gimnasio.
