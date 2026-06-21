# Mapa de URLs — Rol Miembro (juan@gmail.com)

## Sistema bajo prueba
- **URL:** https://gestion-gympro.up.railway.app
- **Rol:** Miembro (Juan Martínez)
- **Membresía:** Mensual Premium (vence 2026-06-22)
- **Rutina asignada:** Full Body Principiante (Carlos Mendoza)
- **Fecha de exploración:** 2026-06-20

## Sidebar — 5 rutas

| Icono | Texto | Ruta | ¿Solo miembro? |
|-------|-------|------|----------------|
| 🏠 | Inicio | `/inicio` | No |
| 📋 | Rutinas | `/rutinas` | No |
| 🥗 | Mi Dieta | `/dieta` | **Sí** (único rol con acceso) |
| 🕐 | Horarios | `/horarios` | No |
| 👤 | Mi Perfil | `/perfil` | No |

## Funciones globales (en todas las páginas)

| Función | Disparador | Descripción |
|---------|-----------|-------------|
| `toggleSidebar()` | Botón hamburguesa | Abre/cierra menú lateral |
| `toggleTheme()` | Botón ☀ Claro | Alterna tema claro/oscuro |
| `logout()` | Botón ⏻ Salir | Cierra sesión y redirige a `/login` |

---

## 1. `/inicio` — Dashboard

**Título:** `Inicio — GymPro`

### Secciones del dashboard

| Sección | Contenido |
|---------|-----------|
| **Encabezado** | "BIENVENIDO, JUAN" + fecha (sábado, 20 de junio de 2026) |
| **MI ASISTENCIA HOY** | Indicador ✓ + estado ("Aún no has asistido hoy") + botón "Registra tu entrada al llegar" |
| **MI MEMBRESÍA** | Días restantes (2), tipo (Mensual Premium), fecha de vencimiento (2026-06-22) |
| **¿QUÉ ME TOCA HOY?** | Rutina del día (Sábado — Full Body Principiante, 4 ejercicios, Día 3 de 3): Zancadas 3×10, Elevaciones lat. 3×12, Abdominales 3×20, Caminadora 1×20min |

### Funciones

| Función | Disparador | Descripción |
|---------|-----------|-------------|
| `toggleAsist()` | Botón en MI ASISTENCIA HOY | Marca/desmarca asistencia del día |

### Elementos únicos

| Elemento | ID/Selector |
|----------|------------|
| Botón asistencia | Botón inline en sección MI ASISTENCIA HOY |

> **Nota:** No tiene acceso a `toggleAsist` múltiple como el entrenador, ni tabla de asistencia mensual como admin/entrenador.

---

## 2. `/rutinas` — Mi Rutina

**Título:** `Mi Rutina — GymPro`

### Estructura

- **Rutina asignada:** Full Body Principiante
- **Tipo:** GENERAL · PRINCIPIANTE
- **Duración:** 3 DÍAS/SEMANA · 8 SEMANAS
- **Entrenador:** Carlos Mendoza
- **Inicio:** 2026-01-08

### Distribución semanal

| Día | Tipo | Ejercicios |
|-----|------|-----------|
| Lun | 💪 Tren Superior | 4 ejercicios |
| Mar | 🦵 Tren Inferior | 4 ejercicios |
| Mié | 🔄 Full Body | 4 ejercicios |
| Jue | 😴 Descanso | — |
| Vie | 😴 Descanso | — |
| Sáb | 😴 Descanso | — |
| Dom | 😴 Descanso | — |

### Ejercicios visibles (día activo por defecto)

Cada ejercicio muestra:
- Nombre (ej. Sentadilla, Flexiones, Remo mancuerna, Plancha)
- 💡 Tips (ej. "Espalda recta", "Cuerpo recto", "Apoya rodilla", "Core activo")
- Series × Reps (3×15, 3×10, 3×12, 3×30s)
- ⏱ Tiempo de descanso

### Funciones

| Función | Disparador | Descripción |
|---------|-----------|-------------|
| `toggleDay(n)` | Tabs de día | Cambia entre LUN/MAR/MIÉ |

### Diferencias con Admin/Entrenador

| Elemento | Admin | Entrenador | Miembro |
|----------|-------|-----------|---------|
| Crear rutina | ✅ Sí | ✅ Sí | ❌ No |
| Asignar rutina | ✅ Sí | ❌ No | ❌ No |
| Ver ejercicios | ✅ Sí | ✅ Sí | ✅ Sí |
| Editar/eliminar | ✅ Sí | ❌ No | ❌ No |

---

## 3. `/asistencia`

**Título:** `Inicio — GymPro`

La app redirige a `/inicio` (no hay vista de asistencia separada para el miembro).

### Diferencias

| Elemento | Admin | Entrenador | Miembro |
|----------|-------|-----------|---------|
| Tabla asistencia mensual | ✅ 77 toggleDia | ✅ 77 toggleDia | ❌ No |
| Reiniciar semana | ✅ Sí | ❌ No | ❌ No |
| Botón toggle en dashboard | ❌ No | ✅ 11 botones | ✅ 1 (solo propio) |
| Marcar asistencia propia | ❌ No aplica | ❌ No aplica | ✅ Sí |

---

## 4. `/horarios` — Horarios

**Título:** `Horarios — GymPro`

### Filtros

| ID | Texto | Función | Descripción |
|----|-------|---------|------------|
| `f-todos` | Todos | `filterTipo('')` | Muestra todos los horarios |
| `f-general` | 🏋 Zona libre | `filterTipo('general')` | Solo zona libre |
| `f-clase` | 👥 Clases | `filterTipo('clase')` | Solo clases grupales |
| `f-personal` | ⭐ Personal | `filterTipo('personal')` | Solo entrenamiento personal |

### Botones de reserva por clase

| ID Horario | Clase | Horario | Días | onclick |
|-----------|-------|---------|------|---------|
| 2 | Entrenamiento funcional | 06:00–07:00 | Lun,Mie,Vie | `abrirReserva(2,...)` |
| 3 | Cardio intenso | 07:00–08:00 | Lun,Mar,Mie,Jue,Vie | `abrirReserva(3,...)` |
| 5 | Yoga y flexibilidad | 08:00–09:00 | Mar,Jue,Sab | `abrirReserva(5,...)` |
| 6 | CrossFit | 09:00–10:00 | Lun,Mie,Vie | `abrirReserva(6,...)` |
| 7 | Spinning | 12:00–13:00 | Lun,Mie,Vie | `abrirReserva(7,...)` |
| 10 | Fuerza y musculación | 16:00–17:00 | Lun,Mie,Vie | `abrirReserva(10,...)` |
| 8 | Rumba / Zumba | 17:00–18:00 | Mar,Jue,Sab | `abrirReserva(8,...)` |

### Navegación calendario

| Función | Descripción |
|---------|------------|
| `calPrev()` | Semana anterior |
| `calNext()` | Semana siguiente |

### Modal reservar

| Elemento | ID | Descripción |
|----------|----|------------|
| Modal | `modal-reservar` | Confirmación de reserva |
| Botón confirmar | `btn-confirmar` | `confirmarReserva()` |

### Funciones

| Función | Disparador |
|---------|-----------|
| `filterTipo(tipo)` | Botones de filtro |
| `abrirReserva(id, nombre, inicio, fin, dias)` | Botones "📅 Reservar clase" |
| `confirmarReserva()` | Botón en modal |
| `calPrev()` / `calNext()` | Navegación calendario |

---

## 5. `/dieta` — Mi Dieta

**Título:** `Mi Dieta — GymPro`

**Rol exclusivo:** Solo el miembro accede a esta ruta.

### Perfil nutricional

- **IMC:** 25.6 (Sobrepeso)
- **Peso:** 78.5kg · **Estatura:** 175cm
- **Objetivo:** bajar peso
- **Metas diarias:** 🔥 ~1820 kcal | 🥩 173g proteína

### Tabs de días

| Botón | Función |
|-------|---------|
| Lunes | `showDia(0, this)` |
| Martes | `showDia(1, this)` |
| Miércoles | `showDia(2, this)` |
| Jueves | `showDia(3, this)` |
| Viernes | `showDia(4, this)` |
| Sábado | `showDia(5, this)` |
| Domingo | `showDia(6, this)` |

### Comidas del día (ejemplo activo: Lunes)

| Comida | Hora | Alimentos | Macros |
|--------|------|-----------|--------|
| 🌅 DESAYUNO | 7:00 AM | Avena con frutas + 1 huevo duro | 🥩18g 🌾45g 🥑5g 🔥293 kcal |
| 🍎 MEDIA MAÑANA | 10:00 AM | 1 manzana + 10 almendras | 🥩4g 🌾22g 🥑9g 🔥181 kcal |
| ☀ ALMUERZO | 12:30 PM | Ensalada con 150g pollo a la plancha + ... | *(continúa)* |

### Totales diarios

| 🔥 kcal | 🥩 proteína | 🌾 carbohidratos | 🥑 grasas |
|---------|------------|-----------------|-----------|
| 1098 kcal | 107g | 111g | 26g |

### Funciones

| Función | Disparador |
|---------|-----------|
| `showDia(index, btn)` | Botones Lunes–Domingo |
| `toggleSidebar()` | Botón hamburguesa |
| `toggleTheme()` | Botón ☀ Claro |
| `logout()` | Botón ⏻ Salir |

---

## 6. `/perfil` — Mi Perfil

**Título:** `Mi Perfil — GymPro`

### Datos del perfil (mostrados en página)

- Nombre completo: Juan Martínez
- Email: juan@gmail.com
- Rol: MIEMBRO
- Membresía: MENSUAL PREMIUM · 2D

### Modal editar (`modal-editar`)

| Campo | ID | Tipo |
|-------|----|------|
| Nombre | `e-nombre` | text |
| Apellido | `e-apellido` | text |
| Teléfono | `e-telefono` | text |
| Contraseña | `e-password` | password |

### Botones del modal

| Texto | Función |
|-------|---------|
| ✏ Editar | `openModal('modal-editar')` |
| — (botón cerrar) | `closeModal('modal-editar')` |
| — (botón guardar) | `updatePerfil()` |

---

## Resumen de elementos por página

| Página | Botones | Modales | Formularios | Tablas | Funciones JS únicas |
|--------|---------|---------|-------------|--------|-------------------|
| `/inicio` | 3 | 0 | 0 | 0 | `toggleAsist()` |
| `/rutinas` | 3 | 0 | 0 | 0 | `toggleDay(n)` |
| `/asistencia` | *(redirige a /inicio)* | — | — | — | — |
| `/horarios` | 20 | 2 modales | 0 | 0 | `filterTipo()`, `abrirReserva()`, `confirmarReserva()`, `calPrev()`, `calNext()` |
| `/dieta` | 10 | 0 | 0 | 0 | `showDia()` |
| `/perfil` | 6 | 1 modal | 4 campos | 0 | `openModal()`, `updatePerfil()` |

## Diferencias clave con otros roles

| Capacidad | Admin | Entrenador | Miembro |
|-----------|-------|-----------|---------|
| CRUD usuarios | ✅ | ❌ | ❌ |
| CRUD membresías | ✅ | ❌ | ❌ |
| Gestionar entrenadores | ✅ | ❌ | ❌ |
| CRUD rutinas propias | ✅ | ✅ | ❌ (solo lectura) |
| Ver/asignar rutina a sí mismo | ❌ | ❌ | ✅ |
| Tabla asistencia general | ✅ | ✅ | ❌ |
| Marcar asistencia de otros | ✅ | ✅ | ❌ |
| Marcar propia asistencia | ❌ | ❌ | ✅ |
| Gestión horarios completa | ✅ | ✅ | ❌ (solo reservar) |
| Reservar clase | ✅ (para cualquiera) | ❌ (solo propio) | ✅ (solo propio) |
| Ver dieta/nutrición | ❌ | ❌ | ✅ |
| Reportes | ✅ (4 secciones) | ✅ (4 secciones) | ❌ |
| Editar perfil propio | ✅ | ✅ | ✅ |
