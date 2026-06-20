# Reporte de Defectos — GymPro

Formato de registro de incidencias. Cada defecto encontrado durante las pruebas se documenta aquí.

## Formato de Entrada

| Campo | Descripción |
|-------|-------------|
| **ID** | D-001, D-002, … |
| **Fecha** | dd/mm/aaaa |
| **Reportado por** | Nombre del tester |
| **Módulo** | Ej: Login, Membresías, Asistencia |
| **Severidad** | Crítica / Alta / Media / Baja |
| **Prioridad** | Inmediata / Alta / Media / Baja |
| **Descripción** | ¿Qué ocurre? ¿Qué se esperaba? |
| **Pasos para reproducir** | 1. … 2. … 3. … |
| **Evidencia** | `evidencias/fallo_*.png` |
| **Estado** | Abierto / En progreso / Resuelto / Cerrado |

---

## Registro de Defectos

| ID | Fecha | Módulo | Severidad | Descripción | Estado |
|----|-------|--------|-----------|-------------|--------|
| D-001 | 20/06/2026 | Login | Crítica | **CAPTCHA bypass**: El captcha matemático solo se valida en cliente (JS). `POST /api/auth/login` con JSON directo autentica sin resolver el captcha. Afecta a todos los roles (admin, entrenador, miembro). | Abierto |
| D-002 | 20/06/2026 | Login | Baja | **Cookie sin flag Secure**: La cookie de sesión se envía sin `Secure`, aunque la app corre 100% sobre HTTPS. Riesgo bajo. | Abierto |
| D-003 | 20/06/2026 | API | Media | **NoSQL injection causa HTTP 500**: Enviar `{"email":{"$ne":""},"password":{"$ne":""}}` al login produce error interno 500. Posible fuga de información o manipulación de consultas. | Abierto |
| D-004 | 20/06/2026 | API | Alta | **Fuga de datos entre roles**: Un miembro autenticado puede acceder a `/api/membresias`, `/api/asistencia` y `/api/rutinas` y ver datos de todos los usuarios (otros miembros, sus membresías, asistencias). Ej: `juan@gmail.com` ve 10 membresías incluyendo las de otros miembros. | Abierto |
