# QA — Aseguramiento de Calidad de Software

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Tests: 119/119 PASS](https://img.shields.io/badge/Tests-119%2F119%20PASS-emerald.svg)](informe/index.html)
[![ISO 25010: 73.30/100](https://img.shields.io/badge/ISO%2025010-73.30%2F100-amber.svg)](informe/index.html)

Repositorio de aseguramiento de calidad para el sistema **GymPro** — aplicación web de gestión de gimnasios desplegada en [`https://gestion-gympro.up.railway.app`](https://gestion-gympro.up.railway.app).

---

## Informe de Evaluación

El informe completo y ejecutable con resultados, gráficas interactivas y galería de evidencias está disponible en:

> **[`informe/index.html`](informe/index.html)** — Abrir directamente en el navegador

Incluye:
- Resumen ejecutivo con métricas globales
- Metodología detallada de pruebas (funcional, API, carga, seguridad)
- 119 pruebas funcionales automatizadas (Selenium) cubriendo 3 roles
- Evaluación de calidad ISO/IEC 25010 con radar de puntajes
- Galería interactiva de 43 capturas de evidencia
- Pruebas de API REST en vivo (con fetch directo al sistema)
- Registro de 4 defectos encontrados

---

## Estructura del Repositorio

| Área | Archivos |
|------|----------|
| **Informe principal** | `informe/index.html` |
| **Pruebas funcionales** | `test_funcional_roles.py`, `test_humo_sanidad.py` |
| **Exploración de roles** | `test_exploracion_entrenador.py`, `test_flujo_roles.py`, `test_funcional_admin.py` |
| **Mapas de URL por rol** | `mapa_urls_admin.md`, `mapa_urls_entrenador.md`, `mapa_urls_miembro.md` |
| **Evaluación ISO 25010** | `plantilla_evaluacion_iso25010.md` |
| **Evidencias visuales** | `evidencias/admin/`, `evidencias/entrenador/`, `evidencias/miembro/` |
| **Defectos** | `reporte_defectos.md` |
| **Documentación del sistema** | `gympro-research.md`, `hallazgos_gympro.md`, `plan_de_pruebas_gympro.md` |
| **Teoría SQA (Pressman)** | `pressman_cap*_resumen.md`, `pressman_sqa_resumen.md`, `pressman_index_summary.md` |
| **Estándares** | `estandares_calidad_software.md` |
| **Material de clase** | `calidad_software_unidad_01.md`, `concepto_calidad_software.md`, `conceptos_pruebas_software.md`, `pruebas_software_slides.md` |

---

## Sistema Bajo Prueba

| Propiedad | Detalle |
|-----------|---------|
| URL | `https://gestion-gympro.up.railway.app` |
| Stack | Flask + SQLite + HTML/JS vanilla |
| Roles | Administrador, Entrenador, Miembro |
| Despliegue | Railway.app |

### Credenciales de prueba

| Rol | Email | Contraseña |
|-----|-------|------------|
| Admin | `admin@gympro.com` | `Admin1234!` |
| Entrenador | `laura.e@gympro.com` | `Entrena123!` |
| Miembro | `juan@gmail.com` | `Miembro123!` |

---

## Resultados de la Evaluación

| Métrica | Resultado |
|---------|-----------|
| Pruebas funcionales automatizadas | **119/119 PASS (100%)** — 77 casos únicos, 3 roles |
| Calidad ISO/IEC 25010 | **73.30/100 — Bueno** |
| Defectos encontrados | **4** (1 crítico, 1 alto, 1 medio, 1 bajo) |
| Pruebas de API (Newman) | 11 endpoints, 20 aserciones (14 PASS, 6 FAIL esperados) |
| Rendimiento (JMeter) | 554 ms promedio, 12.6 req/s, 0.67% error |
| Seguridad (OWASP ZAP) | 0 alertas críticas/altas/medias |
| Evidencias visuales | 43 capturas de pantalla |
| Rutas documentadas | 21 (admin: 9, entrenador: 6, miembro: 6) |

---

## Licencia

[MIT](LICENSE)
