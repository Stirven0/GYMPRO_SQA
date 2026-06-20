# Evaluación de Calidad de Software — ISO/IEC 25010 (SQuaRE)

**Software evaluado:** GymPro — `https://gestion-gympro.up.railway.app`

---

## Escala de Valoración

| Descripción | Cuantificación |
|---|---|
| Excelente | 4 |
| Bueno | 3 |
| Regular | 2 |
| Malo | 1 |

---

## Tabla de Ponderación por Característica

| Característica | Puntaje Asignado | Subcaracterísticas |
|---|---|---|
| Idoneidad funcional | 25 | Completitud funcional, Corrección funcional, Pertinencia funcional |
| Fiabilidad | 15 | Madurez, Disponibilidad, Tolerancia a fallos, Recuperabilidad |
| Eficiencia de desempeño | 15 | Comportamiento temporal, Uso de recursos, Capacidad |
| Usabilidad | 15 | Reconocibilidad, Aprendizaje, Operabilidad, Protección errores usuario, Estética, Accesibilidad |
| Seguridad | 15 | Confidencialidad, Integridad, No repudio, Responsabilidad, Autenticidad |
| Compatibilidad | 5 | Coexistencia, Interoperabilidad |
| Mantenibilidad | 5 | Modularidad, Reusabilidad, Analizabilidad, Modificabilidad, Testeabilidad |
| Portabilidad | 5 | Adaptabilidad, Instalabilidad, Reemplazabilidad |
| **Total** | **100** | |

---

## Cuestionario de Evaluación

### Idoneidad funcional (25 pts)

| Subcaracterística | Pregunta | Puntaje esperado | Puntaje obtenido |
|---|---|---|---|
| Completitud funcional | ¿El sistema implementa todos los módulos funcionales documentados? (Usuarios, Membresías, Rutinas, Asistencia, Valoración, Horarios, Reportes, Plan Nutricional) | | |
| Corrección funcional | ¿Los resultados de los procesos (cálculo membresías, registro asistencia) son correctos y consistentes? | | |
| Pertinencia funcional | ¿Las funciones implementadas facilitan las tareas de administración del gimnasio? | | |

### Fiabilidad (15 pts)

| Subcaracterística | Pregunta | Puntaje esperado | Puntaje obtenido |
|---|---|---|---|
| Madurez | ¿El sistema opera sin fallos frecuentes en condiciones normales de uso? | | |
| Disponibilidad | ¿El sistema está accesible la mayor parte del tiempo? (SLAs) | | |
| Tolerancia a fallos | ¿El sistema maneja errores inesperados sin colapsar? | | |
| Recuperabilidad | ¿El sistema se recupera adecuadamente tras una caída o error? | | |

### Eficiencia de desempeño (15 pts)

| Subcaracterística | Pregunta | Puntaje esperado | Puntaje obtenido |
|---|---|---|---|
| Comportamiento temporal | ¿Los tiempos de respuesta de login, carga de paneles y consultas son aceptables (< 3s)? | | |
| Uso de recursos | ¿El servidor maneja adecuadamente la concurrencia sin degradación excesiva? | | |
| Capacidad | ¿El sistema soporta la carga esperada de usuarios simultáneos? | | |

### Usabilidad (15 pts)

| Subcaracterística | Pregunta | Puntaje esperado | Puntaje obtenido |
|---|---|---|---|
| Reconocibilidad | ¿El usuario comprende rápidamente para qué sirve cada pantalla? | | |
| Aprendizaje | ¿Un nuevo usuario puede completar el login y navegar sin instrucciones? | | |
| Operabilidad | ¿El sistema es fácil de operar (navegación, botones, formularios claros)? | | |
| Protección errores usuario | ¿El sistema previene errores del usuario (validaciones, campos obligatorios)? | | |
| Estética | ¿La interfaz es visualmente coherente y agradable? | | |
| Accesibilidad | ¿El diseño es responsivo y funcional en móvil y escritorio? | | |

### Seguridad (15 pts)

| Subcaracterística | Pregunta | Puntaje esperado | Puntaje obtenido |
|---|---|---|---|
| Confidencialidad | ¿Los datos sensibles están protegidos contra accesos no autorizados? | | |
| Integridad | ¿Los datos no pueden ser modificados por usuarios no autorizados? | | |
| No repudio | ¿Las acciones críticas quedan registradas con trazabilidad? | | |
| Responsabilidad | ¿El sistema identifica y audita quién realizó cada acción? | | |
| Autenticidad | ¿El login con captcha y JWT garantiza que solo usuarios legítimos accedan? | | |

### Compatibilidad (5 pts)

| Subcaracterística | Pregunta | Puntaje esperado | Puntaje obtenido |
|---|---|---|---|
| Coexistencia | ¿El sistema funciona sin interferir con otros servicios en el mismo servidor? | | |
| Interoperabilidad | ¿El sistema se integra correctamente con otros componentes (base de datos, APIs)? | | |

### Mantenibilidad (5 pts)

| Subcaracterística | Pregunta | Puntaje esperado | Puntaje obtenido |
|---|---|---|---|
| Modularidad | ¿El código está organizado en módulos independientes? | | |
| Reusabilidad | ¿Los componentes pueden reutilizarse en otros contextos? | | |
| Analizabilidad | ¿Es fácil diagnosticar la causa de un fallo? | | |
| Modificabilidad | ¿Se puede añadir o modificar funcionalidad sin romper otras? | | |
| Testeabilidad | ¿El sistema está diseñado para ser probado eficientemente? | | |

### Portabilidad (5 pts)

| Subcaracterística | Pregunta | Puntaje esperado | Puntaje obtenido |
|---|---|---|---|
| Adaptabilidad | ¿El sistema se adapta a diferentes navegadores y dispositivos? | | |
| Instalabilidad | ¿El despliegue en Railway es reproducible y sencillo? | | |
| Reemplazabilidad | ¿El software puede migrarse a otro entorno si fuera necesario? | | |

---

## Consolidación de Puntajes

| Característica | Puntaje asignado | Promedio subcaracterísticas | Puntaje escala (obtenido) |
|---|---|---|---|
| Idoneidad funcional | 25 | | |
| Fiabilidad | 15 | | |
| Eficiencia de desempeño | 15 | | |
| Usabilidad | 15 | | |
| Seguridad | 15 | | |
| Compatibilidad | 5 | | |
| Mantenibilidad | 5 | | |
| Portabilidad | 5 | | |
| **Total** | **100** | | |

### Cálculo

- **Puntaje escala de cada característica** = (Promedio subcaracterísticas / 4) × Puntaje asignado
- **Puntaje total obtenido** = Suma de puntajes escala de todas las características

---

## Resultados de la Evaluación

| Rango | Clasificación |
|---|---|
| 90 – 100 | Excelente |
| 70 – 89 | Bueno |
| 50 – 69 | Regular |
| < 50 | Malo |

**Puntaje total obtenido:** ____ / 100

**Clasificación:** ____

---

## Conclusiones

_Texto libre — resumir hallazgos, fortalezas, debilidades y recomendaciones de mejora._

---

## Referencias

- ISO/IEC 25010:2011 — Systems and software Quality Requirements and Evaluation (SQuaRE)
- ISO/IEC 25000:2014 — Guide to SQuaRE
