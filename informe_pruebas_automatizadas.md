# Informe de Pruebas Automatizadas (Fuente de Conocimiento)

Este documento resume el archivo `/home/stirven/Descargas/informe_pruebas_automatizadas.pdf`. Se trata de un reporte técnico de aseguramiento de calidad (QA Testing Report) elaborado por Jorge Luis Mejía, Elias Cuadrado, Julio Amaya y Jonathan Iguaran con fecha del 4 de mayo de 2026.

---

## 1. Contexto del Informe
* **Sistema Evaluado:** Plataforma de e-commerce con arquitectura de microservicios, frontend web, APIs REST y base de datos relacional MySQL.
* **Clasificación del Testing:** 5 Pruebas Funcionales + 5 Pruebas No Funcionales.
* **Herramientas Utilizadas:** JUnit 5, Selenium WebDriver 4, Postman (con Newman CLI), Apache JMeter 5.6 (con Grafana e InfluxDB), SoapUI Pro 5.7 (con OWASP ZAP 2.14) y TestLink.

---

## 2. Desarrollo de Pruebas Funcionales

### F1. Prueba Unitaria (JUnit 5 + Maven)
* **Objetivo:** Validar la lógica del método `calcularDescuento()` en la clase `UserService`.
* **Resultado:** exitosa (PASSED). Cobertura de código del 94% en dicha clase.

### F2. Prueba de Integración (Postman v11 + Newman CLI)
* **Objetivo:** Validar la integración del endpoint `POST /api/orders/create` con los módulos de inventario, órdenes y facturación.
* **Resultado:** exitosa (PASSED). Tiempo de respuesta de 243ms (dentro del SLA < 500ms).

### F3. Prueba de Sistema (Selenium WebDriver 4 + Python)
* **Objetivo:** Validar el flujo de compra completo (búsqueda de producto 'laptop', adición al carrito, checkout y confirmación).
* **Resultado:** exitosa (PASSED) en 4.23s. Se detectó lentitud de carga de resultados en la búsqueda (2.1s) que requiere optimización.

### F4. Prueba de Sanidad (Postman)
* **Objetivo:** Comprobar la operatividad post-despliegue de los servicios críticos (`/api/health`, login, listado de productos y estado de órdenes).
* **Resultado:** exitosa (PASSED). 5/5 pruebas pasadas; todos los tiempos de respuesta por debajo de 300ms.

### F5. Prueba de Humo (Selenium WebDriver 4)
* **Objetivo:** Confirmar operatividad básica rápida (carga de home, visibilidad de login y navegación).
* **Resultado:** exitosa (PASSED) en 3.3s. Apto para integrarse como gate en pipelines de CI/CD.

---

## 3. Desarrollo de Pruebas No Funcionales

### NF1. Prueba de Rendimiento (JMeter 5.6 + Grafana)
* **Objetivo:** Medir tiempos de respuesta y rendimiento con carga normal sostenida de 50 hilos/usuarios.
* **Resultado:** exitosa (PASSED). Tiempo promedio de respuesta de 187ms, tasa de errores de 0.2% y throughput de 8.3 req/s.

### NF2. Prueba de Carga (JMeter + InfluxDB)
* **Objetivo:** Verificar comportamiento con carga esperada de producción de hasta 500 usuarios simultáneos en `POST /api/checkout`.
* **Resultado:** exitosa (PASSED). Tiempo promedio de 312ms y tasa de errores de 0.5% (umbral 1%). Se detectó un uso elevado del pool de conexiones de base de datos (87%).

### NF3. Prueba de Estrés (JMeter)
* **Objetivo:** Incrementar la carga escalonadamente (hasta 1200 usuarios) para hallar el punto de quiebre.
* **Resultado:** **Punto de quiebre identificado en ~950 usuarios simultáneos**. A los 1200 usuarios el tiempo de respuesta subió a 2100ms y la tasa de errores a 18.4%. Tiempo de recuperación: 18 segundos tras cesar la carga.

### NF4. Prueba de Volumen (Script Python + MySQL 8.0)
* **Objetivo:** Validar integridad y rendimiento de consultas al almacenar y operar 1,000,000 de registros en la tabla de órdenes.
* **Resultado:** exitosa (PASSED). Inserción masiva en 4m 32s (3676 registros/s), consulta de conteo en 1.2s usando índice activo, espacio utilizado de 2.3 GB.

### NF5. Prueba de Seguridad (SoapUI Pro 5.7 + OWASP ZAP 2.14)
* **Objetivo:** Detectar vulnerabilidades críticas (SQL Injection, XSS, tokens expirados y Rate Limiting).
* **Resultado:** exitosa (PASSED) 4/4 pruebas. Entradas sanitizadas (SQLi e XSS bloqueadas), token expirado devolvió 401 Unauthorized y se activó rate-limiting (429 Too Many Requests) bajo bombardeo.

---

## 4. Conclusiones y Recomendaciones de QA
* **Escalabilidad:** Implementar escalado automático horizontal en producción para evitar el punto de quiebre de ~950 usuarios concurrentes.
* **Base de Datos:** Optimizar el pool de conexiones de la base de datos (reduciendo el pico del 87%) e implementar particionamiento de tablas para el volumen de datos a futuro.
* **Seguridad:** Ampliar el alcance de análisis dinámico usando Burp Suite para cubrir vectores adicionales de OWASP Top 10.
* **Automatización continua:** Incorporar las suites de humo y sanidad de Selenium/Postman directamente en el pipeline de CI/CD.
