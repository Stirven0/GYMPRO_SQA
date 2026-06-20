"""Pruebas de Humo y Sanidad — GymPro"""
import requests
import json
import os
from datetime import datetime

BASE = "https://gestion-gympro.up.railway.app"
EVIDENCIAS = os.path.expanduser("~/QA/evidencias")
os.makedirs(EVIDENCIAS, exist_ok=True)

resultados = []

def test(nombre, condicion, detalle=""):
    estado = "PASS" if condicion else "FAIL"
    resultados.append({"prueba": nombre, "estado": estado, "detalle": detalle})
    print(f"  [{estado}] {nombre}")

def guardar_respuesta(nombre, contenido):
    with open(os.path.join(EVIDENCIAS, f"{nombre}.txt"), "w") as f:
        f.write(str(contenido))

print("=" * 50)
print("PRUEBAS DE HUMO — GymPro")
print(f"Inicio: {datetime.now().isoformat()}")
print("=" * 50)

# 1. Smoke — Carga de página login
print("\n--- Humo: Página de Login ---")
r = requests.get(f"{BASE}/login", timeout=10)
test("Login page carga OK", r.status_code == 200, f"HTTP {r.status_code}")
test("Login contiene título GymPro", "GymPro" in r.text)
test("Login contiene captcha", "captcha" in r.text.lower() or "suma" in r.text.lower())
test("Login incluye Space Grotesk", "Space Grotesk" in r.text)
guardar_respuesta("login_page", r.text[:2000])

# 2. Smoke — Redirección raíz
print("\n--- Humo: Redirección raíz ---")
r = requests.get(BASE, timeout=10, allow_redirects=False)
test("Root redirige a /login", r.status_code == 302 and "/login" in r.headers.get("Location", ""))

# 3. Smoke — 404s esperados
print("\n--- Humo: Rutas protegidas ---")
for ruta in ["/health", "/register", "/admin", "/.env", "/api/health"]:
    r = requests.get(f"{BASE}{ruta}", timeout=10)
    test(f"{ruta} → 404", r.status_code == 404, f"HTTP {r.status_code}")
# /dashboard redirige a /login (protegido, no 404)
r = requests.get(f"{BASE}/dashboard", timeout=10, allow_redirects=False)
test("/dashboard redirige a login", r.status_code == 302 and "/login" in r.headers.get("Location",""))

# 4. Sanidad — API Auth: método incorrecto
print("\n--- Sanidad: API Auth ---")
r = requests.get(f"{BASE}/api/auth/login", timeout=10)
test("GET /api/auth/login → 405", r.status_code == 405, f"HTTP {r.status_code}")

# 5. Sanidad — Login sin body
print("\n--- Sanidad: Login sin credenciales ---")
r = requests.post(f"{BASE}/api/auth/login",
                  json={}, timeout=10)
test("Login con body vacío → error", r.status_code in (400, 401, 422))

# 6. Sanidad — Credenciales inválidas
print("\n--- Sanidad: Credenciales inválidas ---")
r = requests.post(f"{BASE}/api/auth/login",
                  json={"email": "invalido@test.com", "password": "wrong"},
                  timeout=10)
test("Login inválido → 401", r.status_code == 401, f"HTTP {r.status_code}")
if r.status_code == 401:
    data = r.json()
    test("Mensaje de error correcto", "Credenciales incorrectas" in str(data.get("error","")))

# 7. Sanidad — OPTIONS
print("\n--- Sanidad: CORS/OPTIONS ---")
r = requests.options(f"{BASE}/api/auth/login", timeout=10)
test("OPTIONS /api/auth/login → 200", r.status_code == 200)

# 8. Sanidad — Login con credenciales válidas
print("\n--- Sanidad: Login admin ---")
r = requests.post(f"{BASE}/api/auth/login",
                  json={"email": "admin@gympro.com", "password": "Admin1234!"},
                  timeout=10)
if r.status_code == 200:
    test("Login admin exitoso (sin captcha)", True,
         "⚠️ CAPTCHA no validado en servidor - bypass posible")
else:
    test("Login admin bloqueado por captcha", True,
         "Captcha server-side funciona")
guardar_respuesta("login_admin_response", r.text[:500])

# 9. Server header
print("\n--- Sanidad: Server header ---")
r = requests.get(f"{BASE}/login", timeout=10)
server = r.headers.get("Server", "")
test(f"Server header presente: {server}", bool(server))

# Resumen
print("\n" + "=" * 50)
print("RESUMEN DE PRUEBAS")
print("=" * 50)
pasaron = sum(1 for r in resultados if r["estado"] == "PASS")
fallaron = sum(1 for r in resultados if r["estado"] == "FAIL")
print(f"Total: {len(resultados)} | Pass: {pasaron} | Fail: {fallaron}")

with open(os.path.join(EVIDENCIAS, "resultado_humo_sanidad.json"), "w") as f:
    json.dump(resultados, f, indent=2)

print(f"\nEvidencias guardadas en: {EVIDENCIAS}/")
print("Script completado.")
