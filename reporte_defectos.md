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
