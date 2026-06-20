# GymPro — Informe de Exploración

## 1. URL Principal
**https://gestion-gympro.up.railway.app**

### Stack Tecnológico
- **Backend**: Python Flask (servidor `railway-hikari`)
- **Frontend**: HTML plano con CSS inline y JavaScript vanilla
- **Base de datos**: SQLite (según repo asociado)
- **Host**: Railway (dominio `up.railway.app`)
- **Server**: `railway-hikari`

### Rutas Descubiertas

| Ruta | Método | Status | Descripción |
|------|--------|--------|-------------|
| `/` | GET | 302 → `/login` | Redirige al login |
| `/login` | GET | 200 | Página de inicio de sesión |
| `/inicio` | GET | 200 (login page) | Requiere auth, redirige a login si no autenticado |
| `/api/auth/login` | POST | 200/401 | Login API — espera `{email, password}` como JSON |
| `/api/auth/login` | OPTIONS | 200 | Permite OPTIONS, POST |
| `/api/auth/login` | GET | 405 | Method Not Allowed |
| `/api/auth/logout` | GET | 405 | Logout (POST esperado) |
| `/api/*` (varios) | GET | 404 | APIs protegidas requieren auth |
| `/health`, `/api/health` | GET | 404 | No existe |
| `/register`, `/signup` | GET | 404 | No existe registro público |
| `/admin`, `/dashboard` | GET | 404 | Rutas protegidas |
| `/static/*`, `/package.json`, `/.env` | GET | 404 | Sin exposición de archivos |

### Funcionalidades (desde landing page)
- Panel diferenciado Admin / Miembro
- Rutinas con ejercicios por día
- Asistencia en tiempo real
- Perfil físico y recomendaciones
- Membresías y pagos integrados
- Horarios y reservas de clases

### Mecanismo de Login
- Captcha matemático simple (suma de 2 números aleatorios 1-12)
- POST a `/api/auth/login` con Content-Type `application/json`
- Body: `{"email": "...", "password": "..."}`
- Respuesta error: `{"error": "Credenciales incorrectas"}`
- En success: redirección a `/inicio`

### Diseño
- Tema oscuro (#07071a, #0d0d2b)
- Acento morado (#6c63ff) y cian (#00d4ff)
- Fuentes: Space Grotesk + Orbitron
- Responsive (sidebar se oculta en <700px)



## 5. Repositorios Relacionados
- **katy1609/gympro-management-system** (GitHub)
  - Flask + SQLite + HTML/CSS/JS
  - Default login: `admin / admin123`
  - Planes: Monthly ₹999, Quarterly ₹2,499, Yearly ₹7,999
  - Features: Dashboard, Members, Plans, Attendance, Payments

- **IrisFernandaAmorim/GymPro_BackEnd** (GitHub)
  - Backend para GymPro

---

## 6. Resumen de Seguridad
- No hay registro público (/register, /signup devuelven 404)
- No hay endpoints de API expuestos (todos requieren auth)
- No hay exposición .env, package.json, robots.txt, sitemap.xml
- Captcha simple anti-bot en login
- CORS: no se detectaron cabeceras CORS abiertas
- Server: railway-hikari (servidor custom de Railway)
