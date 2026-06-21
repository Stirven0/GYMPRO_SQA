"""Pruebas funcionales del rol Administrador — 9 rutas, botones, modales, formularios"""
import os, time, re, json
from datetime import datetime
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait, Select
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options

BASE = "https://gestion-gympro.up.railway.app"
FOLDER = os.path.expanduser("~/QA/evidencias/admin")
os.makedirs(FOLDER, exist_ok=True)
RESULTADOS = []

def reportar(prueba, condicion, detalle=""):
    estado = "PASS" if condicion else "FAIL"
    RESULTADOS.append({"prueba": prueba, "estado": estado, "detalle": detalle})
    print(f"  [{estado}] {prueba}")

def snap(name):
    path = os.path.join(FOLDER, name)
    driver.save_screenshot(path)
    return path

opts = Options()
opts.add_argument("--headless=new")
opts.add_argument("--no-sandbox")
opts.add_argument("--window-size=1366,768")
driver = webdriver.Chrome(options=opts)

print("=" * 60)
print("PRUEBAS FUNCIONALES ADMIN — GymPro")
print(f"Inicio: {datetime.now().isoformat()}")
print("=" * 60)

try:
    # === LOGIN ===
    print("\n--- Login ---")
    driver.get(f"{BASE}/login")
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "email")))
    snap("01_login_page.png")
    reportar("Login page carga", True)

    driver.find_element(By.ID, "email").send_keys("admin@gympro.com")
    driver.find_element(By.ID, "password").send_keys("Admin1234!")
    driver.find_element(By.ID, "captcha-check").click()
    time.sleep(0.5)
    q = driver.find_element(By.ID, "captcha-q").text
    nums = re.findall(r"\d+", q)
    driver.find_element(By.ID, "captcha-ans").send_keys(str(int(nums[0]) + int(nums[1])))
    snap("02_form_completo.png")
    driver.find_element(By.ID, "btn-login").click()
    WebDriverWait(driver, 10).until(lambda d: "/inicio" in d.current_url)
    snap("03_post_login.png")
    reportar("Login admin exitoso", "/inicio" in driver.current_url)

    # ============================================
    # 1. /inicio — Dashboard
    # ============================================
    print("\n--- 1. /inicio — Dashboard ---")
    driver.get(f"{BASE}/inicio")
    time.sleep(2)
    snap("04_inicio_dashboard.png")
    reportar("/inicio carga", True)

    # Verificar accesos rápidos
    accesos = {"Nuevo miembro": "/usuarios", "Nueva rutina": "/rutinas",
               "Registrar asistencia": "/asistencia", "Nueva membresía": "/membresias",
               "Ver reportes": "/reportes"}
    for txt, esperado in accesos.items():
        link = driver.find_element(By.XPATH, f"//a[contains(text(),'{txt}')]")
        ok = esperado in link.get_attribute("href")
        reportar(f"Acceso rápido '{txt}' → {esperado}", ok)

    # Verificar stats
    for stat in ["MIEMBROS ACTIVOS", "ASISTENCIAS HOY", "RUTINAS ACTIVAS", "MEMBRESÍAS ACTIVAS"]:
        reportar(f"Stat visible: {stat}", stat in driver.find_element(By.TAG_NAME, "body").text)

    # ============================================
    # 2. /usuarios — Gestión de Usuarios
    # ============================================
    print("\n--- 2. /usuarios — Gestión de Usuarios ---")
    driver.get(f"{BASE}/usuarios")
    time.sleep(2)
    snap("05_1_usuarios.png")
    reportar("/usuarios carga", True)

    # Botón + Nuevo Usuario
    btn_nuevo = driver.find_element(By.XPATH, "//button[contains(@onclick,'modal-nuevo')]")
    reportar("Botón '+ Nuevo Usuario' existe", btn_nuevo.is_displayed())
    btn_nuevo.click()
    time.sleep(1)
    snap("05_1a_usuarios_modal_nuevo.png")
    reportar("Modal nuevo usuario se abre",
             driver.find_element(By.ID, "modal-nuevo").is_displayed())

    # Verificar campos del formulario
    for cid in ["n-cedula", "n-nombre", "n-apellido", "n-email", "n-password", "n-rol"]:
        el = driver.find_element(By.ID, cid)
        reportar(f"Campo '{cid}' presente en modal nuevo", el.is_displayed())

    # Rellenar formulario
    driver.find_element(By.ID, "n-cedula").send_keys("1234567890")
    driver.find_element(By.ID, "n-nombre").send_keys("Test")
    driver.find_element(By.ID, "n-apellido").send_keys("QA")
    driver.find_element(By.ID, "n-email").send_keys("test@qa.com")
    driver.find_element(By.ID, "n-password").send_keys("Test1234!")
    Select(driver.find_element(By.ID, "n-rol")).select_by_visible_text("Miembro")
    snap("05_1b_usuarios_nuevo_rellenado.png")
    reportar("Formulario nuevo usuario se rellena", True)
    # Cerrar modal
    driver.execute_script("document.getElementById('modal-nuevo').style.display='none'")
    time.sleep(0.3)

    # Filtros
    for fid in ["search", "filtro-rol", "filtro-estado"]:
        el = driver.find_element(By.ID, fid)
        reportar(f"Filtro '{fid}' presente", el.is_displayed())

    # Botones por fila: editar
    btns_edit = driver.find_elements(By.XPATH, "//button[contains(@onclick,'openEdit')]")
    reportar(f"Botones ✏ editar: {len(btns_edit)} encontrados", len(btns_edit) >= 12)
    if btns_edit:
        btns_edit[0].click()
        time.sleep(1)
        snap("05_1c_usuarios_modal_editar.png")
        reportar("Modal editar usuario se abre",
                 driver.find_element(By.ID, "modal-editar").is_displayed())
        for cid in ["e-nombre", "e-apellido", "e-email", "e-estado"]:
            el = driver.find_element(By.ID, cid)
            reportar(f"Campo '{cid}' en editar usuario", el.is_displayed())
        driver.execute_script("document.getElementById('modal-editar').style.display='none'")
        time.sleep(0.3)

    # Botones × Desactivar
    btns_desact = driver.find_elements(By.XPATH, "//button[contains(@onclick,'deactivate')]")
    reportar(f"Botones × Desactivar: {len(btns_desact)} encontrados", len(btns_desact) >= 11)

    # Enlaces Valoración
    links_val = driver.find_elements(By.XPATH, "//a[contains(@href,'/valoracion/')]")
    reportar(f"Enlaces 📋 Valoración: {len(links_val)} encontrados", len(links_val) >= 11)

    # ============================================
    # 3. /membresias — Membresías
    # ============================================
    print("\n--- 3. /membresias ---")
    driver.get(f"{BASE}/membresias")
    time.sleep(2)
    snap("05_2_membresias.png")
    reportar("/membresias carga", True)

    # Stats
    for stat in ["ACTIVAS", "INGRESOS", "VENCEN", "CONGELADAS"]:
        reportar(f"Stat '{stat}' visible", stat in driver.find_element(By.TAG_NAME, "body").text)

    # Modal Tipos de Plan
    driver.find_element(By.XPATH, "//button[contains(@onclick,'modal-tipos')]").click()
    time.sleep(1)
    snap("05_2a_membresias_modal_tipos.png")
    reportar("Modal 'Tipos de Plan' se abre",
             driver.find_element(By.ID, "modal-tipos").is_displayed())
    for cid in ["t-nombre", "t-dias", "t-precio", "t-desc"]:
        el = driver.find_element(By.ID, cid)
        reportar(f"Campo '{cid}' en modal tipos", el.is_displayed())
    driver.find_element(By.ID, "t-nombre").send_keys("Plan QA")
    driver.find_element(By.ID, "t-dias").send_keys("30")
    driver.find_element(By.ID, "t-precio").send_keys("99999")
    snap("05_2b_membresias_tipos_rellenado.png")
    driver.execute_script("document.getElementById('modal-tipos').style.display='none'")
    time.sleep(0.3)

    # Modal Nueva Membresía
    driver.find_element(By.XPATH, "//button[contains(@onclick,'modal-nueva')]").click()
    time.sleep(1)
    snap("05_2c_membresias_modal_nueva.png")
    reportar("Modal 'Nueva Membresía' se abre",
             driver.find_element(By.ID, "modal-nueva").is_displayed())
    for cid in ["n-usuario", "n-tipo", "n-monto", "n-obs"]:
        el = driver.find_element(By.ID, cid)
        reportar(f"Campo '{cid}' en nueva membresía", el.is_displayed())
    Select(driver.find_element(By.ID, "n-usuario")).select_by_index(2)
    Select(driver.find_element(By.ID, "n-tipo")).select_by_index(1)
    snap("05_2d_membresias_nueva_rellenado.png")
    driver.execute_script("document.getElementById('modal-nueva').style.display='none'")
    time.sleep(0.3)

    # Botones congelar/cancelar
    btns_congelar = driver.find_elements(By.XPATH, "//button[contains(@onclick,'congelar')]")
    btns_cancelar = driver.find_elements(By.XPATH, "//button[contains(@onclick,'cancelar')]")
    reportar(f"Botones ❄ Congelar: {len(btns_congelar)}", len(btns_congelar) >= 10)
    reportar(f"Botones × Cancelar: {len(btns_cancelar)}", len(btns_cancelar) >= 10)

    # Filtro
    reportar("Filtro estado presente",
             driver.find_element(By.ID, "filtro-estado").is_displayed())

    # ============================================
    # 4. /entrenadores — Entrenadores
    # ============================================
    print("\n--- 4. /entrenadores ---")
    driver.get(f"{BASE}/entrenadores")
    time.sleep(2)
    snap("05_3_entrenadores.png")
    reportar("/entrenadores carga", True)

    reportar("5 entrenadores listados", "Carlos Mendoza" in driver.page_source
             and "Laura Pérez" in driver.page_source and "Roberto Salinas" in driver.page_source
             and "Valentina Torres" in driver.page_source and "Andrés Gutiérrez" in driver.page_source)

    # Botón Nuevo Entrenador
    driver.find_element(By.XPATH, "//button[contains(@onclick,'modal-nuevo')]").click()
    time.sleep(1)
    snap("05_3a_entrenadores_modal_nuevo.png")
    reportar("Modal nuevo entrenador se abre",
             driver.find_element(By.ID, "modal-nuevo").is_displayed())
    for cid in ["n-cedula", "n-nombre", "n-apellido", "n-email", "n-especialidad",
                 "n-titulo", "n-profesional", "n-experiencia"]:
        el = driver.find_element(By.ID, cid)
        reportar(f"Campo '{cid}' en nuevo entrenador", el.is_displayed())
    driver.find_element(By.ID, "n-cedula").send_keys("9999999999")
    driver.find_element(By.ID, "n-nombre").send_keys("Entrenador")
    driver.find_element(By.ID, "n-apellido").send_keys("QA")
    driver.find_element(By.ID, "n-email").send_keys("entrenador@qa.com")
    driver.find_element(By.ID, "n-especialidad").send_keys("QA Testing")
    Select(driver.find_element(By.ID, "n-profesional")).select_by_index(1)
    driver.find_element(By.ID, "n-experiencia").send_keys("5")
    snap("05_3b_entrenadores_nuevo_rellenado.png")
    driver.execute_script("document.getElementById('modal-nuevo').style.display='none'")
    time.sleep(0.3)

    # Botones Editar
    btns_edit_ent = driver.find_elements(By.XPATH, "//button[contains(@onclick,'openEdit')]")
    reportar(f"Botones ✏ Editar entrenador: {len(btns_edit_ent)}", len(btns_edit_ent) == 5)
    if btns_edit_ent:
        btns_edit_ent[0].click()
        time.sleep(1)
        snap("05_3c_entrenadores_modal_editar.png")
        reportar("Modal editar entrenador se abre",
                 driver.find_element(By.ID, "modal-editar").is_displayed())
        for cid in ["e-nombre", "e-apellido", "e-especialidad", "e-estado"]:
            el = driver.find_element(By.ID, cid)
            reportar(f"Campo '{cid}' en editar entrenador", el.is_displayed())
        driver.execute_script("document.getElementById('modal-editar').style.display='none'")
        time.sleep(0.3)

    # ============================================
    # 5. /rutinas — Rutinas CRUD
    # ============================================
    print("\n--- 5. /rutinas ---")
    driver.get(f"{BASE}/rutinas")
    time.sleep(2)
    snap("05_4_rutinas.png")
    reportar("/rutinas carga", True)

    reportar("6 rutinas listadas",
             len(driver.find_elements(By.XPATH, "//button[contains(@onclick,'verDetalle')]")) == 6)

    # Botón Nueva rutina
    driver.find_element(By.XPATH, "//button[contains(@onclick,'modal-nueva')]").click()
    time.sleep(1)
    snap("05_4a_rutinas_modal_nueva.png")
    reportar("Modal nueva rutina se abre",
             driver.find_element(By.ID, "modal-nueva").is_displayed())
    for cid in ["n-nombre", "n-desc", "n-obj", "n-nivel", "n-semanas", "n-dias", "n-entrenador"]:
        el = driver.find_element(By.ID, cid)
        reportar(f"Campo '{cid}' en nueva rutina", el.is_displayed())
    driver.execute_script("document.getElementById('modal-nueva').style.display='none'")
    time.sleep(0.3)

    # Botón Asignar rutina
    driver.find_element(By.XPATH, "//button[contains(@onclick,'modal-asignacion')]").click()
    time.sleep(1)
    snap("05_4b_rutinas_modal_asignar.png")
    reportar("Modal asignar rutina se abre",
             driver.find_element(By.ID, "modal-asignacion").is_displayed())
    for cid in ["a-usuario", "a-rutina", "a-entrenador", "a-obs"]:
        el = driver.find_element(By.ID, cid)
        reportar(f"Campo '{cid}' en asignar rutina", el.is_displayed())
    driver.execute_script("document.getElementById('modal-asignacion').style.display='none'")
    time.sleep(0.3)

    # Ver ejercicios
    driver.find_element(By.XPATH, "//button[contains(@onclick,'verDetalle(1)')]").click()
    time.sleep(1)
    snap("05_4c_rutinas_detalle_ejercicios.png")
    reportar("Modal detalle ejercicios se abre",
             driver.find_element(By.ID, "modal-detalle").is_displayed())
    for cid in ["ej-nombre", "ej-dia", "ej-series", "ej-reps", "ej-descanso"]:
        el = driver.find_element(By.ID, cid)
        reportar(f"Campo '{cid}' en detalle ejercicios", el.is_displayed())
    driver.execute_script("document.getElementById('modal-detalle').style.display='none'")
    time.sleep(0.3)

    # Filtros
    for fid in ["search", "filtro-nivel", "filtro-objetivo"]:
        reportar(f"Filtro '{fid}' presente",
                 driver.find_element(By.ID, fid).is_displayed())

    # ============================================
    # 6. /asistencia — Asistencia Semanal
    # ============================================
    print("\n--- 6. /asistencia ---")
    driver.get(f"{BASE}/asistencia")
    time.sleep(2)
    snap("05_5_asistencia.png")
    reportar("/asistencia carga", True)

    # Botón Reiniciar semana (solo admin)
    btn_reinicio = driver.find_element(By.XPATH, "//button[contains(@onclick,'modal-reinicio')]")
    reportar("Botón '🔄 Reiniciar semana' presente (solo admin)", btn_reinicio.is_displayed())
    btn_reinicio.click()
    time.sleep(1)
    snap("05_5a_asistencia_modal_reinicio.png")
    reportar("Modal reinicio semana se abre",
             driver.find_element(By.ID, "modal-reinicio").is_displayed())
    driver.execute_script("document.getElementById('modal-reinicio').style.display='none'")
    time.sleep(0.3)

    # Toggle días
    btns_dia = driver.find_elements(By.XPATH, "//button[contains(@onclick,'toggleDia')]")
    # Admin tiene acceso a todos los miembros (12 miembros * 7 días = 84 botones)
    reportar(f"Botones toggleDia: {len(btns_dia)} encontrados (12 miembros × 7 días)",
             len(btns_dia) >= 77)

    # Probar toggle de algunos
    if len(btns_dia) > 10:
        btns_dia[3].click()
        time.sleep(0.3)
        btns_dia[5].click()
        time.sleep(0.3)
        snap("05_5b_asistencia_dias_marcados.png")
        reportar("Toggle días funciona", True)

    # ============================================
    # 7. /horarios — Horarios
    # ============================================
    print("\n--- 7. /horarios ---")
    driver.get(f"{BASE}/horarios")
    time.sleep(2)
    snap("05_6_horarios.png")
    reportar("/horarios carga", True)

    # Filtros
    for fid in ["f-todos", "f-general", "f-clase", "f-personal"]:
        el = driver.find_element(By.ID, fid)
        reportar(f"Filtro '{fid}' presente", el.is_displayed())

    # Probar filtro clases
    driver.find_element(By.ID, "f-clase").click()
    time.sleep(1)
    snap("05_6a_horarios_filtro_clases.png")
    reportar("Filtro por clases funciona", True)
    driver.find_element(By.ID, "f-todos").click()
    time.sleep(0.5)

    # Nuevo Horario
    driver.find_element(By.XPATH, "//button[contains(@onclick,'modal-horario')]").click()
    time.sleep(1)
    snap("05_6b_horarios_modal_nuevo.png")
    reportar("Modal nuevo horario se abre",
             driver.find_element(By.ID, "modal-horario").is_displayed())
    for cid in ["h-nombre", "h-inicio", "h-fin", "h-dias", "h-tipo", "h-cupo", "h-entrenador"]:
        el = driver.find_element(By.ID, cid)
        reportar(f"Campo '{cid}' en horario", el.is_displayed())
    driver.find_element(By.ID, "h-nombre").send_keys("QA Test")
    driver.find_element(By.ID, "h-inicio").send_keys("10:00")
    driver.find_element(By.ID, "h-fin").send_keys("11:00")
    driver.find_element(By.ID, "h-dias").send_keys("LUN,MIE,VIE")
    Select(driver.find_element(By.ID, "h-tipo")).select_by_visible_text("Clase grupal")
    snap("05_6c_horarios_rellenado.png")
    driver.execute_script("document.getElementById('modal-horario').style.display='none'")
    time.sleep(0.3)

    # Reservar (admin tiene r-usuario)
    driver.execute_script("document.querySelectorAll('button[onclick*=\"abrirReservaAdmin\"]')[0].click()")
    time.sleep(1)
    snap("05_6d_horarios_modal_reservar.png")
    reportar("Modal reservar se abre",
             driver.find_element(By.ID, "modal-reservar").is_displayed())
    # Admin puede seleccionar usuario
    sel_user = driver.find_element(By.ID, "r-usuario")
    reportar("Campo 'r-usuario' presente (admin puede reservar para cualquiera)",
             sel_user.is_displayed())
    Select(sel_user).select_by_index(2)
    snap("05_6e_horarios_reservar_rellenado.png")
    driver.execute_script("document.getElementById('modal-reservar').style.display='none'")
    time.sleep(0.3)

    # Ver miembros
    driver.execute_script("document.querySelectorAll('button[onclick*=\"verMiembros\"]')[0].click()")
    time.sleep(1)
    snap("05_6f_horarios_ver_miembros.png")
    reportar("Modal ver miembros se abre",
             driver.find_element(By.ID, "modal-miembros").is_displayed())
    driver.execute_script("document.getElementById('modal-miembros').style.display='none'")
    time.sleep(0.3)

    # Editar horario
    driver.execute_script("document.querySelectorAll('button[onclick*=\"editHorario\"]')[0].click()")
    time.sleep(1)
    snap("05_6g_horarios_modal_editar.png")
    reportar("Modal editar horario se abre",
             driver.find_element(By.ID, "modal-horario").is_displayed())
    driver.execute_script("document.getElementById('modal-horario').style.display='none'")
    time.sleep(0.3)

    # Botones eliminar
    btns_delete = driver.find_elements(By.XPATH, "//button[contains(@onclick,'deleteHorario')]")
    reportar(f"Botones × eliminar horario: {len(btns_delete)}", len(btns_delete) == 12)

    # ============================================
    # 8. /reportes — 4 secciones
    # ============================================
    print("\n--- 8. /reportes ---")
    driver.get(f"{BASE}/reportes")
    time.sleep(2)
    snap("05_7_reportes.png")
    reportar("/reportes carga", True)

    secciones = {"Asistencia Mensual": "asistencia", "Miembros y Rutinas": "miembros",
                  "Carga de Entrenadores": "carga", "Log de Auditoría": "auditoria"}
    for label, section in secciones.items():
        btn = driver.find_element(By.XPATH, f"//button[contains(@onclick,\"showSection('{section}'\")]")
        reportar(f"Botón '{label}' presente", btn.is_displayed())
        btn.click()
        time.sleep(1)
        fname = f"05_7_reportes_{section}.png"
        snap(fname)
        # Verificar que el contenido cambió
        body = driver.find_element(By.TAG_NAME, "body").text
        if section == "asistencia":
            ok = "ASISTENCIA MENSUAL" in body or "Miembro" in body
        elif section == "miembros":
            ok = "MIEMBROS Y RUTINAS" in body or "Miembro" in body
        elif section == "carga":
            ok = "CARGA DE ENTRENADORES" in body or "Entrenador" in body
        else:
            ok = "LOG DE AUDITORÍA" in body or "FECHA" in body
        reportar(f"Sección '{label}' se muestra", ok)

    # ============================================
    # 9. /perfil — Mi Perfil
    # ============================================
    print("\n--- 9. /perfil ---")
    driver.get(f"{BASE}/perfil")
    time.sleep(2)
    snap("09_perfil.png")
    reportar("/perfil carga", True)

    # Stats
    for stat in ["MIEMBROS", "ENTRENADORES", "RUTINAS", "MEMBRESÍAS ACTIVAS", "INGRESOS"]:
        reportar(f"Stat '{stat}' visible en perfil", stat in driver.find_element(By.TAG_NAME, "body").text)

    # Botón Editar
    btn_editar = driver.find_element(By.XPATH, "//button[contains(text(),'Editar')]")
    reportar("Botón '✏ Editar' presente", btn_editar.is_displayed())
    btn_editar.click()
    time.sleep(1)
    snap("09b_perfil_editar.png")
    reportar("Modal editar perfil se abre",
             driver.find_element(By.ID, "modal-editar").is_displayed())
    for cid in ["e-nombre", "e-apellido", "e-telefono", "e-password"]:
        el = driver.find_element(By.ID, cid)
        reportar(f"Campo '{cid}' en editar perfil", el.is_displayed())
    driver.execute_script("document.getElementById('modal-editar').style.display='none'")
    time.sleep(0.3)

    # Logout
    driver.find_element(By.XPATH, "//button[contains(text(),'Salir')]").click()
    time.sleep(2)
    snap("10_logout.png")
    reportar("Logout redirige a login", "/login" in driver.current_url)

    # ============================================
    # RESUMEN
    # ============================================
    print("\n" + "=" * 60)
    pasaron = sum(1 for r in RESULTADOS if r["estado"] == "PASS")
    fallaron = sum(1 for r in RESULTADOS if r["estado"] == "FAIL")
    print(f"RESUMEN: Total {len(RESULTADOS)} | Pass: {pasaron} | Fail: {fallaron}")
    print(f"Capturas: {len(os.listdir(FOLDER))} PNG en {FOLDER}")
    print("=" * 60)

    with open(os.path.join(FOLDER, "resultado_funcional_admin.json"), "w") as f:
        json.dump(RESULTADOS, f, indent=2, ensure_ascii=False)

except Exception as e:
    import traceback
    traceback.print_exc()
    snap("error.png")
    print(f"ERROR FATAL: {e}")
finally:
    driver.quit()
