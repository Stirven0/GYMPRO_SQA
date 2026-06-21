# Mapa de URLs — Rol Administrador (Admin GymPro)

## Sidebar (9 rutas + /inicio)

| # | Ruta | Descripción | Icono |
|---|------|-------------|-------|
| 1 | `/inicio` | Dashboard con stats, accesos rápidos, calendario | 🏠 |
| 2 | `/usuarios` | CRUD usuarios (miembros, entrenadores, admins) | 👥 |
| 3 | `/membresias` | Gestión de planes de membresía y pagos | 💳 |
| 4 | `/entrenadores` | CRUD entrenadores | 🏋 |
| 5 | `/rutinas` | CRUD rutinas + asignación | 📋 |
| 6 | `/asistencia` | Vista semanal + reinicio de semana | ✓ |
| 7 | `/horarios` | Gestión de clases y horarios | 🕐 |
| 8 | `/reportes` | 4 secciones de reportes | 📊 |
| 9 | `/perfil` | Perfil del admin con editar | 👤 |

---

## 1. /inicio — Dashboard

### Stats
- 11 Miembros activos, 0 Asistencias hoy, 6 Rutinas activas, 10 Membresías activas

### Accesos rápidos (cards clickeables)
| Texto | Enlace |
|-------|--------|
| 👤 Nuevo miembro | `/usuarios` |
| 📋 Nueva rutina | `/rutinas` |
| ✓ Registrar asistencia | `/asistencia` |
| 💳 Nueva membresía | `/membresias` |
| 📊 Ver reportes | `/reportes` |

### Componentes
- ASISTENCIA ÚLTIMOS 6 MESES (gráfico)
- ALERTAS Y ACTIVIDAD (timeline)
- ASISTENCIA HOY (tabla miembros entrada/estado)
- CALENDARIO DE ASISTENCIA (grid de días)

---

## 2. /usuarios — Gestión de Usuarios

### Botones principales
| Elemento | Función | Acción |
|----------|---------|--------|
| `+ Nuevo Usuario` | `openModal('modal-nuevo')` | Modal crear usuario |
| `search` | input | Búsqueda |
| `filtro-rol` | select | Miembro / Entrenador / Administrador |
| `filtro-estado` | select | Todos / Activos / Inactivos |

### Por cada usuario (fila)
| Botón | Función | Acción |
|-------|---------|--------|
| ✏ | `openEdit({...})` | Modal editar usuario |
| 📋 Valoración | Enlace a `/valoracion/{id}` | Formulario de valoración |
| × Desactivar | `deactivate(id)` | Desactivar usuario |

### Modal: Nuevo Usuario (`modal-nuevo`)
| ID | Tipo | Descripción |
|----|------|-------------|
| `n-cedula` | text | Cédula |
| `n-telefono` | text | Teléfono |
| `n-nombre` | text | Nombre |
| `n-apellido` | text | Apellido |
| `n-email` | email | Correo |
| `n-password` | password | Contraseña |
| `n-fechanac` | date | Fecha de nacimiento |
| `n-genero` | select | Masculino / Femenino / Otro |
| `n-rol` | select | 1=Admin / 2=Entrenador / 3=Miembro |
| `n-tipo-memb` | select | Tipo membresía (si es miembro) |
| `n-monto-memb` | number | Monto membresía |
| `btn-crear` | button | `createUsuario()` |

### Modal: Editar Usuario (`modal-editar`)
| ID | Tipo | Descripción |
|----|------|-------------|
| `e-id` | hidden | ID usuario |
| `e-cedula` | text | Cédula |
| `e-telefono` | text | Teléfono |
| `e-nombre` | text | Nombre |
| `e-apellido` | text | Apellido |
| `e-email` | email | Correo |
| `e-fechanac` | date | Fecha de nacimiento |
| `e-genero` | select | Género |
| `e-password` | password | Contraseña |
| `e-estado` | select | activo / inactivo |

### Usuarios registrados (12)
| ID | Nombre | Rol | Cédula |
|----|--------|-----|--------|
| 1 | Admin GymPro | ADMINISTRADOR | 0000000000 |
| 2 | Juan Martínez | MIEMBRO | 1090001001 |
| 3 | María González | MIEMBRO | 1090001002 |
| 4 | Carlos Rodríguez | MIEMBRO | 1090001003 |
| 5 | Ana López | MIEMBRO | 1090001004 |
| 6 | Pedro Sánchez | MIEMBRO | 1090001005 |
| 7 | Sofía Ramírez | MIEMBRO | 1090001006 |
| 8 | Diego Herrera | MIEMBRO | 1090001007 |
| 9 | Valentina Castro | MIEMBRO | 1090001008 |
| 10 | Andrés Moreno | MIEMBRO | 1090001009 |
| 11 | Isabella Jiménez | MIEMBRO | 1090001010 |
| 12 | ISSLAM GUERRERO | MIEMBRO | 1121527658 |

---

## 3. /membresias — Membresías

### Stats
- 10 ACTIVAS, $1510K ingresos, 4 vencen pronto, 0 congeladas

### Botones principales
| Elemento | Función | Acción |
|----------|---------|--------|
| `⚙ Tipos de Plan` | `openModal('modal-tipos')` | Modal gestionar tipos de plan |
| `+ Nueva Membresía` | `openModal('modal-nueva')` | Modal crear membresía |
| `search` | input | Búsqueda |
| `filtro-estado` | select | Todos / Activa / Vencida / Cancelada / Congelada |

### Por cada membresía (fila)
| Botón | Función | Acción |
|-------|---------|--------|
| ❄ Congelar | `congelar(id)` | Congela la membresía |
| × Cancelar | `cancelar(id)` | Cancela la membresía |

### Modal: Nueva Membresía (`modal-nueva`)
| ID | Tipo | Descripción |
|----|------|-------------|
| `n-usuario` | select | Miembro |
| `n-tipo` | select | Tipo de plan |
| `n-monto` | number | Monto |
| `n-obs` | textarea | Observaciones |

### Modal: Tipos de Plan (`modal-tipos`)
| ID | Tipo | Descripción |
|----|------|-------------|
| `t-nombre` | text | Nombre del plan |
| `t-dias` | number | Duración en días |
| `t-precio` | number | Precio |
| `t-desc` | text | Descripción |

### Membresías activas (10)
| Miembro | Tipo | Inicio | Vence | Monto |
|---------|------|--------|-------|-------|
| Pedro Sánchez | Mensual Premium | 2026-05-18 | 2026-06-17 | $80K |
| Andrés Moreno | Mensual Premium | 2026-05-20 | 2026-06-19 | $80K |
| Juan Martínez | Mensual Premium | 2026-05-23 | 2026-06-22 | $80K |
| Ana López | Mensual Básico | 2026-05-28 | 2026-06-27 | $50K |
| Valentina Castro | Mensual Básico | 2026-06-02 | 2026-07-02 | $50K |
| Diego Herrera | Trimestral | 2026-04-23 | 2026-07-22 | $140K |
| María González | Trimestral | 2026-05-08 | 2026-08-06 | $140K |
| Isabella Jiménez | Trimestral | 2026-05-28 | 2026-08-26 | $140K |
| Carlos Rodríguez | Semestral | 2026-04-08 | 2026-10-05 | $250K |
| Sofía Ramírez | Anual | 2026-03-09 | 2027-03-09 | $500K |

---

## 4. /entrenadores — Entrenadores

### Botones principales
| Elemento | Función | Acción |
|----------|---------|--------|
| `+ Nuevo Entrenador` | `openModal('modal-nuevo')` | Modal crear entrenador |

### Por cada entrenador
| Botón | Función |
|-------|---------|
| ✏ Editar | `openEdit({...})` |

### Entrenadores (5)
| Nombre | Especialidad | Email |
|--------|-------------|-------|
| Carlos Mendoza | Fuerza y musculación | carlos.e@gympro.com |
| Laura Pérez | Cardio y pérdida de peso | laura.e@gympro.com |
| Roberto Salinas | Flexibilidad y yoga | roberto.e@gympro.com |
| Valentina Torres | CrossFit y funcional | vale.e@gympro.com |
| Andrés Gutiérrez | Nutrición deportiva | andres.e@gympro.com |

### Modal: Nuevo/Editar Entrenador
| ID | Tipo | Campo |
|----|------|-------|
| `n-cedula` / `e-cedula` | text | Cédula |
| `n-telefono` / `e-telefono` | text | Teléfono |
| `n-nombre` / `e-nombre` | text | Nombre |
| `n-apellido` / `e-apellido` | text | Apellido |
| `n-email` / `e-email` | email | Email |
| `n-especialidad` / `e-especialidad` | text | Especialidad |
| `n-titulo` / `e-titulo` | text | Título académico |
| `n-universidad` / `e-universidad` | text | Universidad |
| `n-profesional` / `e-profesional` | select | ¿Profesional certificado? (0/1) |
| `n-experiencia` / `e-experiencia` | number | Años de experiencia |
| `n-certificaciones` / `e-certificaciones` | textarea | Certificaciones |
| `e-estado` (solo editar) | select | activo / inactivo |

---

## 5. /rutinas — Rutinas

*(Idéntico al rol entrenador — ver `mapa_urls_entrenador.md`)*

| Botón | Función |
|-------|---------|
| `+ Nueva rutina` | `openModal('modal-nueva')` |
| `Asignar rutina` | `openModal('modal-asignacion')` |
| `Ver ejercicios` | `verDetalle(id)` |
| `search` | Búsqueda |
| `filtro-nivel` | Select filtro nivel |
| `filtro-objetivo` | Select filtro objetivo |

6 rutinas: Full Body Principiante, Quema Grasa Intensiva, Hipertrofia Máxima, Resistencia Cardiovascular, Yoga y Flexibilidad, Glúteos y Piernas.

---

## 6. /asistencia — Asistencia Semanal

### Diferencias con entrenador
| Elemento | Admin | Entrenador |
|----------|-------|------------|
| `🔄 Reiniciar semana` | ✅ `openModal('modal-reinicio')` | ❌ |
| `toggleDia(id, fecha, this, event)` | ✅ Todos los miembros | ✅ Solo sus miembros |

### Botón extra
| Botón | Función |
|-------|---------|
| 🔄 Reiniciar semana | `openModal('modal-reinicio')` — Reinicia asistencias de la semana |

---

## 7. /horarios — Horarios

*(Similar a entrenador, con diferencias)*

### Diferencias en modal Reservar
| ID | Admin | Entrenador |
|----|-------|------------|
| `r-usuario` | ✅ Select: puede reservar para cualquier miembro | ❌ (reserva para sí mismo) |
| Calendario | ✅ | ✅ |
| `btn-confirmar` | ✅ `confirmarReserva()` | ✅ `confirmarReserva()` |

### Mismos botones que entrenador
- `+ Nuevo Horario`, `filterTipo`, `abrirReservaAdmin`, `verMiembros`, `editHorario`, `deleteHorario`

---

## 8. /reportes — Reportes y Análisis

*(Idéntico a entrenador)*

| Botón | Función | Contenido |
|-------|---------|-----------|
| `Asistencia Mensual` | `showSection('asistencia')` | Tabla miembro/año/mes/total |
| `Miembros y Rutinas` | `showSection('miembros')` | Tabla miembro/email/estado/rutina/objetivo/entrenador |
| `Carga de Entrenadores` | `showSection('carga')` | Tabla entrenador/especialidad/rutinas/miembros |
| `Log de Auditoría` | `showSection('auditoria')` | Tabla fecha/tabla/operación/registro/detalle |

---

## 9. /perfil — Mi Perfil

### Stats
- 11 miembros, 5 entrenadores, 6 rutinas, 10 membresías activas, 0 asistencias hoy
- $1.510.000 ingresos
- 4 membresías por vencer (7 días)

### Botones
| Elemento | Función | Acción |
|----------|---------|--------|
| ✏ Editar | `openModal('modal-editar')` | Modal editar perfil |

### Modal: Editar Perfil (`modal-editar`)
| ID | Tipo | Descripción |
|----|------|-------------|
| `e-nombre` | text | Nombre |
| `e-apellido` | text | Apellido |
| `e-telefono` | text | Teléfono |
| `e-password` | password | Nueva contraseña |
