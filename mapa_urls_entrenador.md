# Mapa de URLs — Rol Entrenador (Carlos Mendoza)

## Sidebar (navegación principal)

| Ruta | Descripción | Elemento |
|------|-------------|----------|
| `/inicio` | Dashboard con stats, lista de miembros, toggle asistencia, enlaces a valoración | Sidebar nav |
| `/entrenadores` | Lista de entrenadores | Sidebar nav |
| `/rutinas` | CRUD de rutinas + asignación a miembros | Sidebar nav |
| `/asistencia` | Vista semanal de asistencia por miembro | Sidebar nav |
| `/horarios` | Horarios | Sidebar nav |
| `/reportes` | Reportes/estadísticas | Sidebar nav |
| `/perfil` | Perfil del entrenador con botón Editar | Sidebar nav |

## /inicio — Dashboard

| Función | Elemento | Acción |
|---------|----------|--------|
| `toggleAsist(id_miembro)` | Botón `✓` / `○` | Marca/desmarca asistencia del día para el miembro |
| `/valoracion/{id}` | Enlace `📋 Valoración` | Abre formulario de valoración física del miembro |

### Miembros bajo cargo de Carlos Mendoza

| ID | Nombre | Asistencia hoy |
|----|--------|----------------|
| 5 | Ana López | ✅ Marcada |
| 10 | Andrés Moreno | Sin asistir |
| 4 | Carlos Rodríguez | Sin asistir |
| 8 | Diego Herrera | Sin asistir |
| 11 | Isabella Jiménez | Sin asistir |
| 12 | ISSLAM GUERRERO | Sin asistir |
| 2 | Juan Martínez | Sin asistir |
| 3 | María González | Sin asistir |
| 6 | Pedro Sánchez | Sin asistir |
| 7 | Sofía Ramírez | Sin asistir |
| 9 | Valentina Castro | Sin asistir |

## /valoracion/{id} — Formulario de Valoración Física

Campos del formulario:

| ID | Tipo | Descripción |
|----|------|-------------|
| `evaluador_nombre` | texto | Auto: Carlos Mendoza |
| `fecha_valoracion` | date | Fecha de la valoración |
| `genero` | select | Masculino / Femenino / Otro |
| `fecha_nacimiento` | date | Fecha de nacimiento |
| `edad` | number | Edad calculada (auto) |
| `objetivo` | select | Bajar de peso / Ganar músculo / Mantener / Mejorar salud / Aumentar resistencia |
| `estatura_cm` | number | Altura en cm |
| `peso_kg` | number | Peso en kg |
| `fc_reposo` | number | Frecuencia cardíaca en reposo |
| `presion_arterial` | text | Ej: 120/80 |
| `porcentaje_grasa` | number | % grasa corporal |
| `masa_muscular_kg` | number | Masa muscular kg |
| `masa_grasa_kg` | number | Masa grasa kg |
| `grasa_visceral` | number | Escala 1-20 |
| `porcentaje_agua` | number | % agua corporal |
| `tasa_metabolica_basal` | number | TMB en kcal |
| `perimetro_cuello` | number | cm |
| `perimetro_hombros` | number | cm |
| `perimetro_pecho` | number | cm |
| `perimetro_cintura` | number | cm |
| `perimetro_cadera` | number | cm |
| `perimetro_brazo_izq_rel` | number | cm |
| `perimetro_brazo_izq_con` | number | cm |
| `perimetro_brazo_der_rel` | number | cm |
| `perimetro_brazo_der_con` | number | cm |
| `perimetro_muslo_izq_alt` | number | cm |
| `perimetro_muslo_izq_med` | number | cm |
| `perimetro_muslo_der_alt` | number | cm |
| `perimetro_muslo_der_med` | number | cm |
| `perimetro_pantorrilla_izq` | number | cm |
| `perimetro_pantorrilla_der` | number | cm |
| `enfermedades` | textarea | Condiciones médicas |
| `lesiones` | textarea | Lesiones previas/actuales |
| `medicamentos` | text | Medicamentos |
| `nivel_actividad` | select | Sedentario / Poco activo / Activo / Muy activo |
| `fumador` | select | No / Sí |
| `observaciones` | textarea | Notas del evaluador |
| `tipo-foto` | select | Tipo de foto (Frente/Espalda/Lateral I/Lateral D/Otra) |
| `foto-input` | file | Subir foto |

Botones: `← Volver`, `💾 Guardar valoración` (parcial), `💾 Guardar Valoración Completa`

## /rutinas — CRUD de Rutinas

| Función | Elemento | Acción |
|---------|----------|--------|
| `openModal('modal-nueva')` | Botón `+ Nueva rutina` | Modal crear rutina |
| `openModal('modal-asignacion')` | Botón `Asignar rutina` | Modal asignar rutina a miembro |
| `verDetalle(id_rutina)` | Botón `Ver ejercicios` | Modal detalle/editar ejercicios |
| `search` | Input texto | Búsqueda de rutinas |
| `filtro-nivel` | Select | Filtro por nivel |
| `filtro-objetivo` | Select | Filtro por objetivo |

### Modal: Nueva rutina (`modal-nueva`)

| ID | Tipo | Descripción |
|----|------|-------------|
| `n-nombre` | text | Nombre de la rutina |
| `n-desc` | textarea | Descripción |
| `n-obj` | select | Objetivo (Fuerza/Cardio/Pérdida peso/Ganancia muscular/Flexibilidad/General) |
| `n-nivel` | select | Nivel (Principiante/Intermedio/Avanzado) |
| `n-semanas` | number | Duración en semanas |
| `n-dias` | number | Días por semana |
| `n-entrenador` | select | Entrenador asignado |

### Modal: Detalle/editar ejercicios (`modal-detalle`)

| ID | Tipo | Descripción |
|----|------|-------------|
| `ej-nombre` | text | Nombre del ejercicio |
| `ej-dia` | select | Día de la semana |
| `ej-series` | number | Número de series |
| `ej-reps` | text | Repeticiones |
| `ej-descanso` | number | Descanso en segundos |
| `ej-notas` | text | Notas adicionales |

### Modal: Asignar rutina (`modal-asignacion`)

| ID | Tipo | Descripción |
|----|------|-------------|
| `a-usuario` | select | Miembro a asignar |
| `a-rutina` | select | Rutina a asignar |
| `a-entrenador` | select | Entrenador responsable |
| `a-obs` | textarea | Observaciones |

## /asistencia — Vista semanal

Tabla con todos los miembros bajo cargo. Botones `toggleDia(id_miembro, 'YYYY-MM-DD', this, event)` por cada día (lun-dom). Total de asistencias por miembro.

| Función | Parámetros | Acción |
|---------|------------|--------|
| `toggleDia(miembro_id, fecha, this, event)` | `miembro_id`, `"2026-06-20"` | Marca/desmarca asistencia de ese día |

### Filtros
- `search` — input de búsqueda por nombre

## /horarios — Gestión de clases y horarios

| Función | Elemento | Acción |
|---------|----------|--------|
| `openModal('modal-horario')` | `+ Nuevo Horario` | Modal crear/editar horario |
| `filterTipo('')` | `Todos` | Mostrar todos los tipos |
| `filterTipo('general')` | `🏋 Zona libre` | Filtrar zona libre |
| `filterTipo('clase')` | `👥 Clases` | Filtrar clases grupales |
| `filterTipo('personal')` | `⭐ Personal` | Filtrar entrenamiento personal |
| `abrirReservaAdmin(id, nombre, inicio, fin, dias)` | 📅 `Reservar` | Modal reserva con calendario |
| `verMiembros(id, nombre)` | 👥 `Ver` | Modal miembros inscritos |
| `editHorario({...})` | ✏ `Editar` | Modal editar horario (abre modal-horario con datos) |
| `deleteHorario(id)` | × `Eliminar` | Elimina el horario |

### Modal: Nuevo/Editar horario (`modal-horario`)

| ID | Tipo | Descripción |
|----|------|-------------|
| `h-id` | hidden | ID del horario (0 = nuevo) |
| `h-nombre` | text | Nombre de la clase |
| `h-inicio` | time | Hora inicio |
| `h-fin` | time | Hora fin |
| `h-dias` | text | Días (ej: LUN,MIE,VIE) |
| `h-tipo` | select | general / clase / personal |
| `h-cupo` | number | Cupo máximo |
| `h-entrenador` | select | Entrenador asignado |

### Modal: Reservar (`modal-reservar`)

| Elemento | Descripción |
|----------|-------------|
| Calendario interactivo | Navegación ‹ ›, días clickeables |
| `btn-confirmar` | Confirma la reserva para la fecha seleccionada |

No tiene selector de miembro — la reserva se hace desde el entrenador para sí mismo o desde admin.

### Modal: Ver miembros inscritos (`modal-miembros`)

Lista de miembros con rutina asignada a ese horario.

### Horarios existentes (12)

| ID | Nombre | Tipo | Horario | Días | Entrenador |
|----|--------|------|---------|------|------------|
| 1 | Apertura mañana | Zona libre | 05:00-07:00 | LUN-SAB | — |
| 2 | Entrenamiento funcional | Clase grupal | 06:00-07:00 | LUN,MIE,VIE | Carlos Mendoza |
| 3 | Cardio intenso | Clase grupal | 07:00-08:00 | LUN-VIE | Laura Pérez |
| 4 | Zona libre mañana | Zona libre | 07:00-12:00 | LUN-SAB | — |
| 5 | Yoga y flexibilidad | Clase grupal | 08:00-09:00 | MAR,JUE,SAB | Roberto Salinas |
| 6 | CrossFit | Clase grupal | 09:00-10:00 | LUN,MIE,VIE | Valentina Torres |
| 7 | Spinning | Clase grupal | 12:00-13:00 | LUN,MIE,VIE | Laura Pérez |
| 8 | Rumba / Zumba | Clase grupal | 17:00-18:00 | MAR,JUE,SAB | Valentina Torres |
| 9 | Zona libre tarde | Zona libre | 15:00-21:00 | LUN-SAB | — |
| 10 | Fuerza y musculación | Clase grupal | 16:00-17:00 | LUN,MIE,VIE | Carlos Mendoza |
| 11 | Entrenamiento personal | Personal | 18:00-19:00 | LUN-VIE | Carlos Mendoza |
| 12 | Fin de semana | Zona libre | 08:00-13:00 | SAB,DOM | — |

## /reportes — 4 secciones

| Botón | Función JS | Contenido |
|-------|------------|-----------|
| `Asistencia Mensual` | `showSection('asistencia')` | Tabla: Miembro, Año, Mes, Total Asistencias |
| `Miembros y Rutinas` | `showSection('miembros')` | Tabla: Miembro, Email, Estado, Rutina, Objetivo, Entrenador |
| `Carga de Entrenadores` | `showSection('carga')` | Tabla: Entrenador, Especialidad, Total Rutinas, Miembros Activos |
| `Log de Auditoría` | `showSection('auditoria')` | Tabla: Fecha, Tabla, Operación, Registro ID, Detalle |

## Rutinas existentes (6)

| ID | Nombre | Nivel | Objetivo | Creador |
|----|--------|-------|----------|---------|
| 1 | Full Body Principiante | Principiante | General | Carlos Mendoza |
| 2 | Quema Grasa Intensiva | Intermedio | Pérdida de peso | Laura Pérez |
| 3 | Hipertrofia Máxima | Avanzado | Ganancia muscular | Carlos Mendoza |
| 4 | Resistencia Cardiovascular | Intermedio | Cardio | Laura Pérez |
| 5 | Yoga y Flexibilidad | Principiante | Flexibilidad | Roberto Salinas |
| 6 | Glúteos y Piernas | Intermedio | Ganancia muscular | Laura Pérez |
