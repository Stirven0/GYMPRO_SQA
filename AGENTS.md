# AGENTS.md — Repositorio QA

## Naturaleza del repositorio

Repositorio de documentación (solo markdown, sin código ejecutable) sobre **Aseguramiento de Calidad de Software (SQA)**. Todo el contenido está en **español**. No hay dependencias, builds, tests, lint, ni CI/CD que ejecutar.

## Estructura

| Área | Archivos |
|------|----------|
| **Teoría SQA (Pressman caps. 16–20)** | `pressman_cap16_resumen.md`, `pressman_cap17_resumen.md`, `pressman_cap18_resumen.md`, `pressman_cap20_resumen.md`, `pressman_index_summary.md`, `pressman_sqa_resumen.md` |
| **Estándares** | `estandares_calidad_software.md` (ISO/IEC 25010 SQuaRE) |
| **Material de clase** | `calidad_software_unidad_01.md`, `conceptos_pruebas_software.md`, `pruebas_software_slides.md`, `concepto_calidad_software.md` |
| **Caso práctico: GymPro** | `gympro-research.md`, `hallazgos_gympro.md`, `plan_de_pruebas_gympro.md`, `DOC-20260609-WA0062-contenido.md` |
| **Plantillas evaluación** | `plantilla_evaluacion_iso25010.md` (adaptación ISO 25010) |
| **Referencia externa** | `informe_pruebas_automatizadas.md` (informe de otro proyecto — e-commerce, no GymPro) |
| **Gestión** | `reporte_defectos.md`, `evidencias/` |

## Sistema bajo prueba (GymPro)

- **URL bajo prueba:** `https://gestion-gympro.up.railway.app` — Flask + SQLite + HTML/JS vanilla

### Credenciales de prueba (del informe académico)

| Rol | Email | Contraseña |
|-----|-------|------------|
| Admin | admin@gympro.com | Admin1234! |
| Entrenador | carlos.e@gympro.com (y laura.e, roberto.e) | Entrena123! |
| Miembro | juan@gmail.com (y maria, carlos) | Miembro123! |

### Login API

`POST /api/auth/login` con `Content-Type: application/json` y body `{"email": "...", "password": "..."}`. Incluye captcha matemático (suma de 2 números 1–12).

## Convenciones del proyecto

- **Idioma:** español. Todo documento nuevo debe escribirse en español.
- **Evidencias:** las capturas de Selenium/Postman/JMeter se guardan en `~/QA/evidencias/` con nombres en snake_case (ej. `login_exitoso.png`).
- **Herramientas de prueba referenciadas:** pytest, Postman/Newman, Selenium WebDriver (Python), JMeter, OWASP ZAP.
- **Gestión de defectos:** se registran en `~/QA/reporte_defectos.md` (formato Markdown).

## Estado del repositorio

- Commit inicial realizado (`9e96294`). Rama: `main`.
- Sin remoto configurado aún.
- README.md creado.
