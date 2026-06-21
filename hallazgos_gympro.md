# Análisis y Hallazgos del Sistema GymPro

Este documento recopila la información obtenida a partir del análisis del portal web de **GymPro** y del informe técnico en formato PDF proporcionado.

---

## 1. Portal Web (`gestion-gympro.up.railway.app`)

El sitio web corresponde a la página de acceso (Login) del sistema **GymPro**. A continuación se detallan sus componentes técnicos y visuales:

* **Interfaz Gráfica:**
  * Diseño moderno y de temática oscura con detalles en colores neón (púrpura y cian), enfocado en la experiencia del usuario (UX) usando fuentes como *Space Grotesk* y *Orbitron*.
  * Estructura responsiva (se adapta a móviles ocultando la columna lateral izquierda de características).
* **Funcionalidades del Formulario:**
  * Campos para Correo electrónico y Contraseña.
  * **Filtro de Seguridad (CAPTCHA integrado):** Requiere marcar una casilla de verificación *"No soy un robot"* y resolver un acertijo de suma matemática simple autogenerado antes de habilitar el botón de ingreso.
  * **Envío de Datos:** Realiza una petición `POST` al endpoint `/api/auth/login`. Si las credenciales son válidas, redirige al usuario a `/inicio`.

---

## 2. Resumen del Informe Técnico (`DOC-20260609-WA0062-contenido.md`)

El documento markdown contiene el informe del proyecto **GYMPRO V6**, desarrollado de forma académica por los estudiantes **Islam Quiroz, Leonardo Hernández y María García** de la **Universidad de La Guajira**.

### Objetivos del Sistema
* **General:** Desarrollar una herramienta informática que facilite la administración de gimnasios mediante la automatización de procesos relacionados con la gestión de usuarios, control de asistencia, seguimiento físico y planificación de entrenamientos.
* **Específicos:** Centralizar datos de miembros, registrar valoraciones físicas, asignar rutinas, controlar asistencias y gestionar la vigencia de membresías.

### Roles de Usuario
1. **Administrador:** Usuario con mayores privilegios. Gestiona usuarios (miembros y entrenadores), membresías, horarios, clases y reportes.
2. **Entrenador:** Responsable del seguimiento físico, registrar valoraciones, diseñar/asignar rutinas y registrar asistencias.
3. **Miembro:** Cliente del gimnasio. Puede consultar su información personal, ver sus rutinas y planes nutricionales, registrar asistencia y reservar clases.

### Módulos del Sistema
* **Inicio:** Estadísticas y resumen de membresía/asistencia.
* **Usuarios y Entrenadores:** Registro y gestión de perfiles.
* **Valoración Física:** Registro de medidas, composición corporal y fotos de seguimiento.
* **Rutinas y Plan Nutricional:** Planes personalizados de entrenamiento y alimentación.
* **Asistencia:** Registro semanal.
* **Membresías:** Control de planes y vigencia de los mismos.
* **Horarios y Reservas:** Control de clases.
* **Reportes:** Estadísticas generales de desempeño.

---

## 3. Credenciales de Acceso de Prueba

El informe técnico provee las siguientes cuentas para probar y verificar el funcionamiento de la plataforma:

### Administrador
* **Correo:** `admin@gympro.com`
* **Contraseña:** `Admin1234!`

### Entrenadores
* **Contraseña común:** `Entrena123!`
* **Correos:**
  * `carlos.e@gympro.com`
  * `laura.e@gympro.com`
  * `roberto.e@gympro.com`

### Miembros (Clientes)
* **Contraseña común:** `Miembro123!`
* **Correos:**
  * `juan@gmail.com`
  * `maria@gmail.com`
  * `carlos@gmail.com`
