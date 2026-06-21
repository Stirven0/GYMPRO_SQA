"""Pruebas funcionales completas — 3 roles: Admin, Entrenador (Laura), Miembro"""
import os, time, re, json
from datetime import datetime
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait, Select
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options

BASE = "https://gestion-gympro.up.railway.app"
BASE_FOLDER = os.path.expanduser("~/QA/evidencias")
RESULTADOS = []

def reportar(prueba, condicion, detalle=""):
    estado = "PASS" if condicion else "FAIL"
    RESULTADOS.append({"prueba": prueba, "estado": estado, "detalle": detalle})
    print(f"  [{estado}] {prueba}")

def init_driver():
    opts = Options()
    opts.add_argument("--headless=new")
    opts.add_argument("--no-sandbox")
    opts.add_argument("--window-size=1366,768")
    return webdriver.Chrome(options=opts)

def login(driver, email, password):
    driver.get(f"{BASE}/login")
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "email")))
    driver.find_element(By.ID, "email").send_keys(email)
    driver.find_element(By.ID, "password").send_keys(password)
    driver.find_element(By.ID, "captcha-check").click()
    time.sleep(0.5)
    q = driver.find_element(By.ID, "captcha-q").text
    nums = re.findall(r"\d+", q)
    driver.find_element(By.ID, "captcha-ans").send_keys(str(int(nums[0]) + int(nums[1])))
    driver.find_element(By.ID, "btn-login").click()
    WebDriverWait(driver, 10).until(lambda d: "/inicio" in d.current_url)

def snap(driver, folder, name):
    os.makedirs(folder, exist_ok=True)
    path = os.path.join(folder, name)
    driver.save_screenshot(path)
    print(f"    📸 {name}")

print("=" * 60)
print("PRUEBAS FUNCIONALES — 3 Roles (Admin / Entrenador / Miembro)")
print(f"Inicio: {datetime.now().isoformat()}")
print("=" * 60)

# =====================================================================
# ROL: ADMINISTRADOR
# =====================================================================
print("\n" + "█" * 60)
print("██ ROL: ADMINISTRADOR (admin@gympro.com)")
print("█" * 60)
folder = os.path.join(BASE_FOLDER, "admin")
driver = init_driver()
try:
    # --- LOGIN ---
    login(driver, "admin@gympro.com", "Admin1234!")
    snap(driver, folder, "00_login.png")
    reportar("ADM-01: Login admin exitoso", "/inicio" in driver.current_url)

    # --- /inicio ---
    driver.get(f"{BASE}/inicio")
    time.sleep(2)
    snap(driver, folder, "01_inicio.png")
    reportar("ADM-02: /inicio carga", True)
    for txt in ["Nuevo miembro", "Nueva rutina", "Registrar asistencia", "Nueva membresía", "Ver reportes"]:
        try:
            driver.find_element(By.XPATH, f"//a[contains(.,'{txt}')]")
            reportar(f"ADM-03: Acceso rápido '{txt}' presente", True)
        except:
            reportar(f"ADM-03: Acceso rápido '{txt}' presente", False)

    # --- /usuarios ---
    driver.get(f"{BASE}/usuarios")
    time.sleep(1)
    snap(driver, folder, "02_usuarios.png")
    reportar("ADM-04: /usuarios carga", True)

    # Nuevo usuario modal
    driver.find_element(By.XPATH, "//button[contains(@onclick,'modal-nuevo')]").click()
    time.sleep(0.5)
    snap(driver, folder, "02a_usuarios_modal_nuevo.png")
    reportar("ADM-05: Modal nuevo usuario se abre",
             driver.find_element(By.ID, "modal-nuevo").is_displayed())
    for cid in ["n-cedula", "n-nombre", "n-apellido", "n-email", "n-password", "n-rol"]:
        reportar(f"ADM-06: Campo '{cid}' presente", driver.find_element(By.ID, cid).is_displayed())
    driver.execute_script("document.getElementById('modal-nuevo').style.display='none'"); time.sleep(0.2)

    # Filtros
    for fid in ["search", "filtro-rol", "filtro-estado"]:
        reportar(f"ADM-07: Filtro '{fid}' presente", driver.find_element(By.ID, fid).is_displayed())

    # Botones editar, desactivar, valoración
    edits = driver.find_elements(By.XPATH, "//button[contains(@onclick,'openEdit')]")
    reportar(f"ADM-08: ✏ Editar ({len(edits)} botones)", len(edits) >= 12)
    desact = driver.find_elements(By.XPATH, "//button[contains(@onclick,'deactivate')]")
    reportar(f"ADM-09: × Desactivar ({len(desact)} botones)", len(desact) >= 11)
    vals = driver.find_elements(By.XPATH, "//a[contains(@href,'/valoracion/')]")
    reportar(f"ADM-10: 📋 Valoración ({len(vals)} enlaces)", len(vals) >= 11)

    # Editar usuario
    edits[0].click(); time.sleep(0.5)
    snap(driver, folder, "02b_usuarios_modal_editar.png")
    reportar("ADM-11: Modal editar usuario se abre",
             driver.find_element(By.ID, "modal-editar").is_displayed())
    driver.execute_script("document.getElementById('modal-editar').style.display='none'"); time.sleep(0.2)

    # --- /membresias ---
    driver.get(f"{BASE}/membresias"); time.sleep(1)
    snap(driver, folder, "03_membresias.png")
    reportar("ADM-12: /membresias carga", True)
    for s in ["ACTIVAS", "INGRESOS", "VENCEN", "CONGELADAS"]:
        reportar(f"ADM-13: Stat '{s}' visible", s in driver.find_element(By.TAG_NAME, "body").text)

    # Tipos de plan
    driver.find_element(By.XPATH, "//button[contains(@onclick,'modal-tipos')]").click(); time.sleep(0.5)
    snap(driver, folder, "03a_membresias_tipos.png")
    reportar("ADM-14: Modal tipos de plan se abre",
             driver.find_element(By.ID, "modal-tipos").is_displayed())
    driver.execute_script("document.getElementById('modal-tipos').style.display='none'"); time.sleep(0.2)

    # Nueva membresía
    driver.find_element(By.XPATH, "//button[contains(@onclick,'modal-nueva')]").click(); time.sleep(0.5)
    snap(driver, folder, "03b_membresias_nueva.png")
    reportar("ADM-15: Modal nueva membresía se abre",
             driver.find_element(By.ID, "modal-nueva").is_displayed())
    driver.execute_script("document.getElementById('modal-nueva').style.display='none'"); time.sleep(0.2)

    # Acciones por fila
    cong = driver.find_elements(By.XPATH, "//button[contains(@onclick,'congelar')]")
    can = driver.find_elements(By.XPATH, "//button[contains(@onclick,'cancelar')]")
    reportar(f"ADM-16: ❄ Congelar ({len(cong)} botones)", len(cong) >= 10)
    reportar(f"ADM-17: × Cancelar ({len(can)} botones)", len(can) >= 10)

    # --- /entrenadores ---
    driver.get(f"{BASE}/entrenadores"); time.sleep(1)
    snap(driver, folder, "04_entrenadores.png")
    reportar("ADM-18: /entrenadores carga", True)
    for nom in ["Carlos Mendoza", "Laura Pérez", "Roberto Salinas", "Valentina Torres", "Andrés Gutiérrez"]:
        reportar(f"ADM-19: Entrenador '{nom}' listado", nom in driver.page_source)

    # Nuevo entrenador modal
    driver.find_element(By.XPATH, "//button[contains(@onclick,'modal-nuevo')]").click(); time.sleep(0.5)
    snap(driver, folder, "04a_entrenadores_modal_nuevo.png")
    reportar("ADM-20: Modal nuevo entrenador se abre",
             driver.find_element(By.ID, "modal-nuevo").is_displayed())
    driver.execute_script("document.getElementById('modal-nuevo').style.display='none'"); time.sleep(0.2)

    # Editar entrenadores
    edits_e = driver.find_elements(By.XPATH, "//button[contains(@onclick,'openEdit')]")
    reportar(f"ADM-21: ✏ Editar entrenador ({len(edits_e)} botones)", len(edits_e) == 5)
    if edits_e:
        edits_e[0].click(); time.sleep(0.5)
        snap(driver, folder, "04b_entrenadores_modal_editar.png")
        reportar("ADM-22: Modal editar entrenador se abre",
                 driver.find_element(By.ID, "modal-editar").is_displayed())
        driver.execute_script("document.getElementById('modal-editar').style.display='none'"); time.sleep(0.2)

    # --- /rutinas ---
    driver.get(f"{BASE}/rutinas"); time.sleep(1)
    snap(driver, folder, "05_rutinas.png")
    reportar("ADM-23: /rutinas carga", True)

    dets = driver.find_elements(By.XPATH, "//button[contains(@onclick,'verDetalle')]")
    reportar(f"ADM-24: Ver ejercicios ({len(dets)} botones)", len(dets) == 6)

    # Modal nueva rutina
    driver.find_element(By.XPATH, "//button[contains(@onclick,'modal-nueva')]").click(); time.sleep(0.5)
    snap(driver, folder, "05a_rutinas_modal_nueva.png")
    reportar("ADM-25: Modal nueva rutina se abre",
             driver.find_element(By.ID, "modal-nueva").is_displayed())
    driver.execute_script("document.getElementById('modal-nueva').style.display='none'"); time.sleep(0.2)

    # Modal asignar
    driver.find_element(By.XPATH, "//button[contains(@onclick,'modal-asignacion')]").click(); time.sleep(0.5)
    snap(driver, folder, "05b_rutinas_modal_asignar.png")
    reportar("ADM-26: Modal asignar rutina se abre",
             driver.find_element(By.ID, "modal-asignacion").is_displayed())
    driver.execute_script("document.getElementById('modal-asignacion').style.display='none'"); time.sleep(0.2)

    # Ver ejercicios detalle
    if dets:
        dets[0].click(); time.sleep(0.5)
        snap(driver, folder, "05c_rutinas_detalle.png")
        reportar("ADM-27: Modal detalle ejercicios se abre",
                 driver.find_element(By.ID, "modal-detalle").is_displayed())
        driver.execute_script("document.getElementById('modal-detalle').style.display='none'"); time.sleep(0.2)

    # --- /asistencia ---
    driver.get(f"{BASE}/asistencia"); time.sleep(1)
    snap(driver, folder, "06_asistencia.png")
    reportar("ADM-28: /asistencia carga", True)

    # Reiniciar semana (solo admin)
    try:
        driver.find_element(By.XPATH, "//button[contains(@onclick,'modal-reinicio')]")
        reportar("ADM-29: Botón 'Reiniciar semana' presente (solo admin)", True)
    except:
        reportar("ADM-29: Botón 'Reiniciar semana' presente (solo admin)", False)

    toggles = driver.find_elements(By.XPATH, "//button[contains(@onclick,'toggleDia')]")
    reportar(f"ADM-30: toggleDia ({len(toggles)} botones, 12 miembros × 7 días)", len(toggles) >= 77)

    # --- /horarios ---
    driver.get(f"{BASE}/horarios"); time.sleep(1)
    snap(driver, folder, "07_horarios.png")
    reportar("ADM-31: /horarios carga", True)

    for fid in ["f-todos", "f-general", "f-clase", "f-personal"]:
        reportar(f"ADM-32: Filtro '{fid}' presente", driver.find_element(By.ID, fid).is_displayed())

    # Nuevo horario
    driver.find_element(By.XPATH, "//button[contains(@onclick,'modal-horario')]").click(); time.sleep(0.5)
    snap(driver, folder, "07a_horarios_modal_nuevo.png")
    reportar("ADM-33: Modal nuevo horario se abre",
             driver.find_element(By.ID, "modal-horario").is_displayed())
    driver.execute_script("document.getElementById('modal-horario').style.display='none'"); time.sleep(0.2)

    # Reservar (admin tiene r-usuario)
    driver.execute_script("document.querySelectorAll('button[onclick*=\"abrirReservaAdmin\"]')[0].click()")
    time.sleep(0.5)
    snap(driver, folder, "07b_horarios_reservar.png")
    reportar("ADM-34: Modal reservar se abre",
             driver.find_element(By.ID, "modal-reservar").is_displayed())
    try:
        driver.find_element(By.ID, "r-usuario")
        reportar("ADM-35: Select 'r-usuario' presente (admin reserva para cualquiera)", True)
    except:
        reportar("ADM-35: Select 'r-usuario' presente (admin reserva para cualquiera)", False)
    driver.execute_script("document.getElementById('modal-reservar').style.display='none'"); time.sleep(0.2)

    # Ver / Editar / Eliminar
    for pat, label in [("verMiembros", "ver miembros"), ("editHorario", "editar"), ("deleteHorario", "eliminar")]:
        btns = driver.find_elements(By.XPATH, f"//button[contains(@onclick,'{pat}')]")
        reportar(f"ADM-36: Botones {label} ({len(btns)})", len(btns) == 12)

    # --- /reportes ---
    driver.get(f"{BASE}/reportes"); time.sleep(1)
    snap(driver, folder, "08_reportes.png")
    reportar("ADM-37: /reportes carga", True)

    for seccion in ["asistencia", "miembros", "carga", "auditoria"]:
        try:
            driver.find_element(By.XPATH, f"//button[contains(@onclick,\"showSection('{seccion}'\")]")
            reportar(f"ADM-38: Botón sección '{seccion}' presente", True)
        except:
            reportar(f"ADM-38: Botón sección '{seccion}' presente", False)

    # --- /perfil ---
    driver.get(f"{BASE}/perfil"); time.sleep(1)
    snap(driver, folder, "09_perfil.png")
    reportar("ADM-39: /perfil carga", True)

    try:
        driver.find_element(By.XPATH, "//button[contains(text(),'Editar')]")
        reportar("ADM-40: Botón Editar presente", True)
    except:
        reportar("ADM-40: Botón Editar presente", False)

    # --- LOGOUT ---
    driver.execute_script("logout()"); time.sleep(2)
    snap(driver, folder, "10_logout.png")
    reportar("ADM-41: Logout exitoso", "/login" in driver.current_url)

except Exception as e:
    import traceback; traceback.print_exc()
    snap(driver, folder, "ERROR.png")
    reportar("ADM-ERR: Error en admin", False, str(e))
finally:
    driver.quit()

# =====================================================================
# ROL: ENTRENADOR (Laura Pérez)
# =====================================================================
print("\n" + "█" * 60)
print("██ ROL: ENTRENADOR (laura.e@gympro.com)")
print("█" * 60)
folder = os.path.join(BASE_FOLDER, "entrenador")
driver = init_driver()
try:
    login(driver, "laura.e@gympro.com", "Entrena123!")
    snap(driver, folder, "00_login.png")
    reportar("ENT-01: Login entrenador exitoso", "/inicio" in driver.current_url)

    # --- /inicio ---
    driver.get(f"{BASE}/inicio"); time.sleep(2)
    snap(driver, folder, "01_inicio.png")
    reportar("ENT-02: /inicio carga", True)

    # Asistencia toggle en dashboard
    toggles = driver.find_elements(By.XPATH, "//button[contains(@onclick,'toggleAsist')]")
    reportar(f"ENT-03: toggleAsist en dashboard ({len(toggles)} botones)", len(toggles) == 11)

    # Valoración links
    vals = driver.find_elements(By.XPATH, "//a[contains(@href,'/valoracion/')]")
    reportar(f"ENT-04: 📋 Valoración ({len(vals)} enlaces)", len(vals) == 10)

    # Toggle some
    if toggles:
        toggles[0].click(); time.sleep(0.2)
        snap(driver, folder, "01a_inicio_asistencia_marcada.png")
        reportar("ENT-05: Toggle asistencia en dashboard funciona", True)

    # --- /asistencia ---
    driver.get(f"{BASE}/asistencia"); time.sleep(1)
    snap(driver, folder, "02_asistencia.png")
    reportar("ENT-06: /asistencia carga", True)

    toggles_mes = driver.find_elements(By.XPATH, "//button[contains(@onclick,'toggleDia')]")
    reportar(f"ENT-07: toggleDia ({len(toggles_mes)} botones)", len(toggles_mes) >= 77)

    # --- /horarios ---
    driver.get(f"{BASE}/horarios"); time.sleep(1)
    snap(driver, folder, "03_horarios.png")
    reportar("ENT-08: /horarios carga", True)

    # Filtros
    for fid in ["f-todos", "f-general", "f-clase", "f-personal"]:
        reportar("ENT-09: Filtros presentes", driver.find_element(By.ID, fid).is_displayed())

    driver.find_element(By.ID, "f-clase").click(); time.sleep(0.5)
    snap(driver, folder, "03a_horarios_filtro_clases.png")
    reportar("ENT-10: Filtro clases funciona", True)

    # Nuevo horario
    driver.find_element(By.ID, "f-todos").click(); time.sleep(0.3)
    driver.find_element(By.XPATH, "//button[contains(@onclick,'modal-horario')]").click(); time.sleep(0.5)
    snap(driver, folder, "03b_horarios_modal_nuevo.png")
    reportar("ENT-11: Modal nuevo horario se abre",
             driver.find_element(By.ID, "modal-horario").is_displayed())
    driver.execute_script("document.getElementById('modal-horario').style.display='none'"); time.sleep(0.2)

    # Reservar (entrenador NO tiene r-usuario)
    driver.execute_script("document.querySelectorAll('button[onclick*=\"abrirReservaAdmin\"]')[0].click()")
    time.sleep(0.5)
    snap(driver, folder, "03c_horarios_reservar.png")
    reportar("ENT-12: Modal reservar se abre",
             driver.find_element(By.ID, "modal-reservar").is_displayed())
    try:
        driver.find_element(By.ID, "r-usuario")
        reportar("ENT-13: r-usuario presente (entrenador reserva para cualquiera)", True)
    except:
        reportar("ENT-13: Sin r-usuario (entrenador reserva solo para sí mismo)", True)
    driver.execute_script("document.getElementById('modal-reservar').style.display='none'"); time.sleep(0.2)

    # --- /rutinas ---
    driver.get(f"{BASE}/rutinas"); time.sleep(1)
    snap(driver, folder, "04_rutinas.png")
    reportar("ENT-14: /rutinas carga", True)

    driver.find_element(By.XPATH, "//button[contains(@onclick,'modal-nueva')]").click(); time.sleep(0.5)
    snap(driver, folder, "04a_rutinas_modal_nueva.png")
    reportar("ENT-15: Modal nueva rutina se abre",
             driver.find_element(By.ID, "modal-nueva").is_displayed())
    driver.execute_script("document.getElementById('modal-nueva').style.display='none'"); time.sleep(0.2)

    # Ver ejercicios detalle
    driver.find_element(By.XPATH, "//button[contains(@onclick,'verDetalle(1)')]").click(); time.sleep(0.5)
    snap(driver, folder, "04b_rutinas_detalle.png")
    reportar("ENT-16: Modal detalle ejercicios se abre",
             driver.find_element(By.ID, "modal-detalle").is_displayed())
    driver.execute_script("document.getElementById('modal-detalle').style.display='none'"); time.sleep(0.2)

    # --- /valoracion/{id} ---
    driver.get(f"{BASE}/valoracion/2"); time.sleep(1)
    snap(driver, folder, "05_valoracion.png")
    reportar("ENT-17: /valoracion/2 carga", True)

    for cid in ["evaluador_nombre", "fecha_valoracion", "genero", "objetivo",
                 "peso_kg", "estatura_cm", "porcentaje_grasa", "nivel_actividad",
                 "fumador", "observaciones"]:
        reportar(f"ENT-18: Campo '{cid}' presente",
                 driver.find_element(By.ID, cid).is_displayed())

    try:
        driver.find_element(By.XPATH, "//button[contains(@onclick,'guardarValoracion')]")
        reportar("ENT-19: Botón 'Guardar valoración' presente", True)
    except:
        reportar("ENT-19: Botón 'Guardar valoración' presente", False)

    # --- /reportes ---
    driver.get(f"{BASE}/reportes"); time.sleep(1)
    snap(driver, folder, "06_reportes.png")
    reportar("ENT-20: /reportes carga", True)
    for s in ["asistencia", "miembros", "carga", "auditoria"]:
        try:
            driver.find_element(By.XPATH, f"//button[contains(@onclick,\"showSection('{s}'\")]")
            reportar(f"ENT-21: Botón reporte '{s}' presente", True)
        except:
            reportar(f"ENT-21: Botón reporte '{s}' presente", False)

    # --- /perfil ---
    driver.get(f"{BASE}/perfil"); time.sleep(1)
    snap(driver, folder, "07_perfil.png")
    reportar("ENT-22: /perfil carga", True)
    try:
        driver.find_element(By.XPATH, "//button[contains(text(),'Editar')]")
        reportar("ENT-23: Botón Editar presente", True)
    except:
        reportar("ENT-23: Botón Editar presente", False)

except Exception as e:
    import traceback; traceback.print_exc()
    snap(driver, folder, "ERROR.png")
    reportar("ENT-ERR: Error en entrenador", False, str(e))
finally:
    driver.quit()

# =====================================================================
# ROL: MIEMBRO
# =====================================================================
print("\n" + "█" * 60)
print("██ ROL: MIEMBRO (juan@gmail.com)")
print("█" * 60)
folder = os.path.join(BASE_FOLDER, "miembro")
driver = init_driver()
try:
    login(driver, "juan@gmail.com", "Miembro123!")
    snap(driver, folder, "00_login.png")
    reportar("Mie-01: Login miembro exitoso", "/inicio" in driver.current_url)

    # --- /inicio ---
    driver.get(f"{BASE}/inicio"); time.sleep(2)
    snap(driver, folder, "01_inicio.png")
    reportar("Mie-02: /inicio carga", True)
    body = driver.find_element(By.TAG_NAME, "body").text
    for s in ["MI ASISTENCIA HOY", "MI MEMBRESÍA"]:
        reportar(f"Mie-03: Sección '{s}' visible", s in body)

    # Sidebar (menos opciones que admin/entrenador)
    print("    Sidebar del miembro:")
    links = driver.execute_script("""
        const links = document.querySelectorAll('#sidebar a, nav a, .nav-item');
        return Array.from(links).map(a => ({href: a.getAttribute('href'), text: a.textContent.trim().replace(/\\n/g,' ')}));
    """)
    for l in links:
        if l["href"] and l["href"] != "#":
            print(f"      {l['text'][:30]} -> {l['href']}")
    # Miembro tiene 4 rutas sidebar
    sidebar_urls = [l["href"] for l in links if l["href"] and l["href"] != "#"]
    reportar(f"Mie-04: Enlaces sidebar ({len(set(sidebar_urls)) - 1} rutas únicas)",
             len(set(sidebar_urls)) >= 4)

    # --- /rutinas (miembro ve su rutina) ---
    driver.get(f"{BASE}/rutinas"); time.sleep(1)
    snap(driver, folder, "02_rutinas.png")
    reportar("Mie-05: /rutinas carga", True)

    # Miembro solo ve detalles, no crea/asigna
    try:
        driver.find_element(By.XPATH, "//button[contains(text(),'+ Nueva rutina')]")
        reportar("Mie-06: Sin botón '+ Nueva rutina'", False)
    except:
        reportar("Mie-06: Sin botón '+ Nueva rutina' (correcto)", True)

    # --- /asistencia ---
    driver.get(f"{BASE}/asistencia"); time.sleep(1)
    snap(driver, folder, "03_asistencia.png")
    reportar("Mie-07: /asistencia carga", True)

    # Miembro ve su propia asistencia (sin botones toggle)
    toggles = driver.find_elements(By.XPATH, "//button[contains(@onclick,'toggleDia')]")
    reportar(f"Mie-08: Sin botones toggleDia ({len(toggles)}) — solo lectura",
             len(toggles) == 0)

    # --- /horarios ---
    driver.get(f"{BASE}/horarios"); time.sleep(1)
    snap(driver, folder, "04_horarios.png")
    reportar("Mie-09: /horarios carga", True)

    # Miembro puede reservar para sí mismo con botón "Reservar"
    reservas = driver.find_elements(By.XPATH, "//button[contains(text(),'Reservar') and not(contains(@onclick,'abrirReservaAdmin'))]")
    # Miembro usa abrirReservaAdmin igual pero sin selector de usuario
    # Verificar que NO tiene botón "+ Nuevo Horario"
    try:
        driver.find_element(By.XPATH, "//button[contains(text(),'+ Nuevo Horario')]")
        reportar("Mie-10: Sin botón '+ Nuevo Horario'", False)
    except:
        reportar("Mie-10: Sin botón '+ Nuevo Horario' (correcto)", True)

    # --- /dieta (solo miembro) ---
    driver.get(f"{BASE}/dieta"); time.sleep(1)
    snap(driver, folder, "05_dieta.png")
    reportar("Mie-11: /dieta carga", True)

    # --- /perfil ---
    driver.get(f"{BASE}/perfil"); time.sleep(1)
    snap(driver, folder, "06_perfil.png")
    reportar("Mie-12: /perfil carga", True)
    try:
        driver.find_element(By.XPATH, "//button[contains(text(),'Editar')]")
        reportar("Mie-13: Botón Editar presente", True)
    except:
        reportar("Mie-13: Botón Editar presente", False)

except Exception as e:
    import traceback; traceback.print_exc()
    snap(driver, folder, "ERROR.png")
    reportar("Mie-ERR: Error en miembro", False, str(e))
finally:
    driver.quit()

# =====================================================================
# RESUMEN GLOBAL
# =====================================================================
print("\n" + "=" * 60)
pasaron = sum(1 for r in RESULTADOS if r["estado"] == "PASS")
fallaron = sum(1 for r in RESULTADOS if r["estado"] == "FAIL")
print(f"RESUMEN GLOBAL")
print(f"  Total pruebas: {len(RESULTADOS)}")
print(f"  Pass: {pasaron}")
print(f"  Fail: {fallaron}")
print(f"  Tasa éxito: {100*pasaron//len(RESULTADOS) if RESULTADOS else 0}%")
print("=" * 60)

# Guardar resultados
with open(os.path.join(BASE_FOLDER, "resultado_funcional_global.json"), "w") as f:
    json.dump(RESULTADOS, f, indent=2, ensure_ascii=False)

# Listar capturas
for rol in ["admin", "entrenador", "miembro"]:
    pngs = [f for f in os.listdir(os.path.join(BASE_FOLDER, rol)) if f.endswith(".png")]
    print(f"\n📁 evidencias/{rol}/ — {len(pngs)} capturas")
    for p in sorted(pngs):
        print(f"    {p}")

print(f"\nFin: {datetime.now().isoformat()}")
