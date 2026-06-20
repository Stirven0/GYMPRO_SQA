# Reporte de Seguridad — ZAP 2.17.0

**URL:** https://gestion-gympro.up.railway.app
**Fecha:** 20/06/2026
**Duración:** Spider + Active Scan completos

## Resumen

| Severidad | Cantidad |
|-----------|----------|
| **Alta** | 0 |
| **Media** | 0 |
| **Baja** | 0 |
| **Informativo** | 12 |

## Hallazgos

| # | Riesgo | Nombre |
|---|--------|-------|
| 1–12 | Informativo | User Agent Fuzzer |

Los 12 hallazgos corresponden a sondas propias del User Agent Fuzzer de ZAP (pruebas con diferentes User-Agents). No se detectaron vulnerabilidades reales.

## Endpoints escaneados

- `/` (login page)
- `/login`
- `/static/` (recursos estáticos)

## Conclusión

Sin vulnerabilidades críticas, altas o medias. El servidor Railway maneja correctamente la seguridad a nivel de infraestructura. El único hallazgo del plan de pruebas (CAPTCHA bypass) ya fue documentado como D-001.
