# Resumen de Aseguramiento de la Calidad del Software (Pressman - Cap. 16)

Este documento resume el capítulo 16 del texto guía *"Ingeniería del Software - Un enfoque práctico"* de Roger Pressman (páginas 368-382). Detalla los fundamentos del SQA (ACS) aplicables al proyecto **GymPro**.

---

## 1. Definición de ACS (SQA)

El aseguramiento de la calidad del software es una **actividad sombrilla** que se aplica en todo el proceso del software. Incluye:
1. Un proceso de ACS
2. Tareas específicas de aseguramiento y control de calidad (revisiones técnicas + estrategia de pruebas)
3. Prácticas eficaces de ingeniería de software (métodos y herramientas)
4. Control de todos los productos del trabajo de software y sus cambios
5. Procedimientos para garantizar el cumplimiento de estándares
6. Mecanismos de medición y reporte

---

## 2. Elementos del ACS

| Elemento | Descripción |
|----------|-------------|
| **Estándares** | Asegurar que los estándares (IEEE, ISO, etc.) adoptados se sigan |
| **Revisiones y auditorías** | Revisiones técnicas para detectar errores; auditorías para verificar cumplimiento |
| **Pruebas** | Función de control de calidad para detectar errores; ACS garantiza que estén bien planeadas |
| **Colección y análisis de errores** | Reunir datos sobre defectos para entender causas y eliminarlas |
| **Administración del cambio** | Control de cambios para evitar confusión y pérdida de calidad |
| **Educación** | Capacitación continua del equipo |
| **Administración de proveedores** | Garantizar calidad de software externo (paquetes, shells, contratado) |
| **Administración de seguridad** | Protección de datos, cortafuegos, prevención de vulneraciones |
| **Seguridad (safety)** | Evaluar efecto de fallas en sistemas críticos (automotriz, aeronáutico) |
| **Administración de riesgos** | Asegurar planes de contingencia para riesgos |

---

## 3. Tareas del Grupo de ACS (IEEE/SEI)

El grupo de ACS actúa como representante del cliente y realiza:

1. **Prepara el plan de ACS** — identifica evaluaciones, auditorías, estándares, procedimientos de reporte y seguimiento
2. **Participa en la descripción del proceso** — revisa cumplimiento con política organizacional, estándares internos/externos
3. **Revisa actividades de ingeniería** — verifica apego al proceso definido, documenta desviaciones
4. **Audita productos de trabajo** — verifica cumplimiento, da seguimiento a correcciones
5. **Asegura documentación de desviaciones** — según procedimientos documentados
6. **Registra incumplimientos** — reporta a la alta dirección, da seguimiento hasta resolución

---

## 4. Metas, Atributos y Métricas (Figura 16.1)

| Meta | Atributos | Métricas ejemplo |
|------|-----------|-----------------|
| **Calidad de requerimientos** | Ambigüedad, completitud, comprensibilidad, volatilidad, trazabilidad, claridad del modelo | N° modificadores ambiguos, N° TBA/TBD, N° cambios por requerimiento, N° requerimientos no trazables |
| **Calidad de diseño** | Integridad arquitectónica, completitud de componentes, complejidad del diseño, complejidad de interfaz | Existencia del modelo arquitectónico, N° componentes trazables, N° pasos para llegar a una función |
| **Calidad de código** | Patrones, complejidad, facilidad de mantenimiento, comprensibilidad, reusabilidad, documentación | Complejidad ciclomática, % comentarios internos, % componentes reutilizados, índice de legibilidad |
| **Eficacia del control de calidad** | Asignación de recursos, tasa de finalización, eficacia de revisión, eficacia de pruebas | % personal por hora/actividad, tiempo real vs planeado, N° errores críticos encontrados |

---

## 5. Aseguramiento Estadístico de la Calidad

Pasos del enfoque estadístico:

1. Recabar y clasificar información sobre errores y defectos
2. Rastrear cada error hasta su causa raíz
3. Aplicar **Principio de Pareto** (80% de defectos → 20% de causas)
4. Corregir las causas vitales identificadas

**Causas típicas de defectos:** EEI (especificaciones erróneas), MCC (mala comunicación con cliente), DIE (desviación intencional), VEP (violación estándares), ERD (error representación datos), ICI (interfaz inconsistente), EDL (error diseño lógico), PIE (pruebas incompletas), DII (documentación inexacta), LPD (traducción diseño), IHC (interfaz humano/computadora).

---

## 6. Seis Sigma para Ingeniería de Software

Metodología rigurosa para medir y mejorar el desempeño, buscando **3.4 defectos por millón de ocurrencias**.

**DMAMC** (mejorar proceso existente): Definir, Medir, Analizar, Mejorar, Controlar.
**DMADV** (crear nuevo proceso): Definir, Medir, Analizar, Diseñar, Verificar.

---

## 7. Confiabilidad del Software

- **Confiabilidad:** Probabilidad de que un programa opere sin fallas en un ambiente específico por un tiempo específico
- **TMEF (MTBF):** TMPF + TMPR (Tiempo Medio Para la Falla + Tiempo Medio Para la Reparación)
- **Disponibilidad:** TMPF / (TMPF + TMPR) × 100%
- **FET (Fallas en el Tiempo):** Fallas por mil millones de horas de operación

---

## 8. Seguridad del Software (Safety)

Identificación y evaluación de peligros potenciales. Diferencia con confiabilidad: una falla no necesariamente genera un peligro. La seguridad evalúa fallas en el contexto del sistema completo y su ambiente.

---

## 9. Normas ISO 9000

ISO 9001:2000 cubre: responsabilidad de administración, sistema de calidad, control de diseño, documentación, control de procesos, inspección y pruebas, acciones correctivas/preventivas, auditorías internas, capacitación y técnicas estadísticas. La certificación requiere auditorías externas y seguimiento semestral.

---

## 10. El Plan de ACS (IEEE)

Estructura recomendada por IEEE:
1. Propósito y alcance
2. Descripción de productos del trabajo
3. Normas y prácticas aplicables
4. Acciones y tareas de ACS (revisiones y auditorías)
5. Herramientas y métodos de apoyo
6. Procedimientos de administración de configuración
7. Métodos de salvaguardas y registros
8. Roles y responsabilidades
