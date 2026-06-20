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
|---|---|---|---|---|
| Completitud funcional | ¿El sistema implementa todos los módulos funcionales documentados? (Usuarios, Membresías, Rutinas, Asistencia, Valoración, Horarios, Reportes, Plan Nutricional) | 4 | 2 |
| Corrección funcional | ¿Los resultados de los procesos (cálculo membresías, registro asistencia) son correctos y consistentes? | 4 | 3 |
| Pertinencia funcional | ¿Las funciones implementadas facilitan las tareas de administración del gimnasio? | 4 | 3 |

### Fiabilidad (15 pts)

| Subcaracterística | Pregunta | Puntaje esperado | Puntaje obtenido |
|---|---|---|---|---|
| Madurez | ¿El sistema opera sin fallos frecuentes en condiciones normales de uso? | 4 | 3 |
| Disponibilidad | ¿El sistema está accesible la mayor parte del tiempo? (SLAs) | 4 | 3 |
| Tolerancia a fallos | ¿El sistema maneja errores inesperados sin colapsar? | 4 | 2 |
| Recuperabilidad | ¿El sistema se recupera adecuadamente tras una caída o error? | 4 | 2 |

### Eficiencia de desempeño (15 pts)

| Subcaracterística | Pregunta | Puntaje esperado | Puntaje obtenido |
|---|---|---|---|---|
| Comportamiento temporal | ¿Los tiempos de respuesta de login, carga de paneles y consultas son aceptables (< 3s)? | 4 | 3 |
| Uso de recursos | ¿El servidor maneja adecuadamente la concurrencia sin degradación excesiva? | 4 | 3 |
| Capacidad | ¿El sistema soporta la carga esperada de usuarios simultáneos? | 4 | 2 |

### Usabilidad (15 pts)

| Subcaracterística | Pregunta | Puntaje esperado | Puntaje obtenido |
|---|---|---|---|---|
| Reconocibilidad | ¿El usuario comprende rápidamente para qué sirve cada pantalla? | 4 | 3 |
| Aprendizaje | ¿Un nuevo usuario puede completar el login y navegar sin instrucciones? | 4 | 3 |
| Operabilidad | ¿El sistema es fácil de operar (navegación, botones, formularios claros)? | 4 | 3 |
| Protección errores usuario | ¿El sistema previene errores del usuario (validaciones, campos obligatorios)? | 4 | 1 |
| Estética | ¿La interfaz es visualmente coherente y agradable? | 4 | 3 |
| Accesibilidad | ¿El diseño es responsivo y funcional en móvil y escritorio? | 4 | 3 |

### Seguridad (15 pts)

| Subcaracterística | Pregunta | Puntaje esperado | Puntaje obtenido |
|---|---|---|---|---|
| Confidencialidad | ¿Los datos sensibles están protegidos contra accesos no autorizados? | 4 | 2 |
| Integridad | ¿Los datos no pueden ser modificados por usuarios no autorizados? | 4 | 2 |
| No repudio | ¿Las acciones críticas quedan registradas con trazabilidad? | 4 | 1 |
| Responsabilidad | ¿El sistema identifica y audita quién realizó cada acción? | 4 | 2 |
| Autenticidad | ¿El login con captcha y JWT garantiza que solo usuarios legítimos accedan? | 4 | 1 |

### Compatibilidad (5 pts)

| Subcaracterística | Pregunta | Puntaje esperado | Puntaje obtenido |
|---|---|---|---|---|
| Coexistencia | ¿El sistema funciona sin interferir con otros servicios en el mismo servidor? | 4 | 3 |
| Interoperabilidad | ¿El sistema se integra correctamente con otros componentes (base de datos, APIs)? | 4 | 3 |

### Mantenibilidad (5 pts)

| Subcaracterística | Pregunta | Puntaje esperado | Puntaje obtenido |
|---|---|---|---|---|
| Modularidad | ¿El código está organizado en módulos independientes? | 4 | 2 |
| Reusabilidad | ¿Los componentes pueden reutilizarse en otros contextos? | 4 | 2 |
| Analizabilidad | ¿Es fácil diagnosticar la causa de un fallo? | 4 | 2 |
| Modificabilidad | ¿Se puede añadir o modificar funcionalidad sin romper otras? | 4 | 2 |
| Testeabilidad | ¿El sistema está diseñado para ser probado eficientemente? | 4 | 2 |

### Portabilidad (5 pts)

| Subcaracterística | Pregunta | Puntaje esperado | Puntaje obtenido |
|---|---|---|---|---|
| Adaptabilidad | ¿El sistema se adapta a diferentes navegadores y dispositivos? | 4 | 3 |
| Instalabilidad | ¿El despliegue en Railway es reproducible y sencillo? | 4 | 2 |
| Reemplazabilidad | ¿El software puede migrarse a otro entorno si fuera necesario? | 4 | 2 |

---

## Consolidación de Puntajes

| Característica | Puntaje asignado | Promedio subcaracterísticas | Puntaje escala (obtenido) |
|---|---|---|---|---|
| Idoneidad funcional | 25 | 2.67 | 16.67 |
| Fiabilidad | 15 | 2.50 | 9.38 |
| Eficiencia de desempeño | 15 | 2.67 | 10.00 |
| Usabilidad | 15 | 2.67 | 10.00 |
| Seguridad | 15 | 1.60 | 6.00 |
| Compatibilidad | 5 | 3.00 | 3.75 |
| Mantenibilidad | 5 | 2.00 | 2.50 |
| Portabilidad | 5 | 2.33 | 2.92 |
| **Total** | **100** | | **61.21** |

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

**Puntaje total obtenido:** 61.21 / 100

**Clasificación:** Regular

---

## Conclusiones

### Fortalezas
- API REST funcional con 5 endpoints operativos (usuarios, rutinas, asistencia, membresías, reportes)
- Tiempos de respuesta rápidos (avg 553ms en carga concurrente)
- Diseño responsivo funcional en todos los viewports probados
- Sesión con HttpOnly, logout invalida correctamente la cookie
- Sin vulnerabilidades críticas detectadas por ZAP

### Debilidades
- CAPTCHA solo client-side (D-001 — crítico)
- NoSQL injection causa error 500 interno (D-003 — medio)
- Cookie de sesión sin flag Secure (D-002 — bajo)
- Módulos del plan original (Valoración, Horarios, Plan Nutricional) no implementados o retornan 404
- Sin evidencia de auditoría/trazabilidad de acciones
- Sin protección anti-CSRF ni token JWT visible

### Recomendaciones
1. Implementar validación server-side del captcha
2. Sanitizar inputs del login para prevenir NoSQL injection
3. Agregar flag Secure a la cookie de sesión
4. Completar implementación de módulos faltantes
5. Implementar registro de auditoría para acciones críticas

---

## Referencias

- ISO/IEC 25010:2011 — Systems and software Quality Requirements and Evaluation (SQuaRE)
- ISO/IEC 25000:2014 — Guide to SQuaRE
