"""Exploración profunda del rol Entrenador: asistencia, valoración, rutinas"""
import os, time, re
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait, Select
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options

BASE = "https://gestion-gympro.up.railway.app"
FOLDER = os.path.expanduser("~/QA/evidencias/entrenador")
os.makedirs(FOLDER, exist_ok=True)

def login(driver):
    driver.get(f"{BASE}/login")
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "email")))
    driver.find_element(By.ID, "email").send_keys("carlos.e@gympro.com")
    driver.find_element(By.ID, "password").send_keys("Entrena123!")
    driver.find_element(By.ID, "captcha-check").click()
    time.sleep(0.5)
    q = driver.find_element(By.ID, "captcha-q").text
    nums = re.findall(r"\d+", q)
    driver.find_element(By.ID, "captcha-ans").send_keys(str(int(nums[0]) + int(nums[1])))
    driver.find_element(By.ID, "btn-login").click()
    WebDriverWait(driver, 10).until(lambda d: "/inicio" in d.current_url)

def screenshot(driver, name):
    path = os.path.join(FOLDER, name)
    driver.save_screenshot(path)
    print(f"  ✓ {name}")
    return path

def print_interactive(driver):
    els = driver.find_elements(By.XPATH, "//a | //button | //input | //select | //textarea")
    for el in els:
        tag = el.tag_name
        txt = (el.text or el.get_attribute("value") or "")[:70]
        href = (el.get_attribute("href") or "")[:70]
        eid = (el.get_attribute("id") or "")[:30]
        onclick = (el.get_attribute("onclick") or "")[:70]
        typ = (el.get_attribute("type") or "")[:15]
        name_attr = (el.get_attribute("name") or "")[:20]
        if txt or href or eid:
            print(f"    <{tag}> txt='{txt}' href='{href}' id='{eid}' name='{name_attr}' onclick='{onclick}' type='{typ}'")

opts = Options()
opts.add_argument("--headless=new")
opts.add_argument("--no-sandbox")
opts.add_argument("--window-size=1366,768")
driver = webdriver.Chrome(options=opts)

try:
    login(driver)
    print("Login OK\n")

    # ========== /inicio — Dashboard ==========
    driver.get(f"{BASE}/inicio")
    time.sleep(2)
    print("=" * 60)
    print("1. /inicio — Dashboard")
    print("=" * 60)
    screenshot(driver, "inicio_dashboard.png")
    print("\nContenido visible:")
    print(driver.find_element(By.TAG_NAME, "body").text[:2000])
    print("\nElementos interactivos:")
    print_interactive(driver)

    # Toggle some attendance buttons
    print("\n--- Asistencia: marcando algunas ---")
    for mid in [2, 10, 4]:
        btn = driver.find_element(By.XPATH, f"//button[contains(@onclick,'toggleAsist({mid}')]")
        btn.click()
        time.sleep(0.3)
    screenshot(driver, "inicio_asistencia_marcada.png")

    # Click a "Valoración" link
    val_link = driver.find_element(By.XPATH, "//a[contains(@href,'/valoracion/2')]")
    val_link.click()
    time.sleep(3)
    print(f"\nURL actual: {driver.current_url}")
    screenshot(driver, "inicio_click_valoracion_2.png")

    # ========== /valoracion/{id} — Formulario ==========
    print("\n" + "=" * 60)
    print("2. /valoracion/2 — Formulario de valoración")
    print("=" * 60)
    print("\nContenido visible:")
    print(driver.find_element(By.TAG_NAME, "body").text[:2000])
    print("\nElementos del formulario:")
    print_interactive(driver)
    screenshot(driver, "valoracion_form.png")

    # Back to /inicio and navigate via sidebar
    driver.get(f"{BASE}/inicio")
    time.sleep(2)

    # ========== /rutinas — CRUD ==========
    driver.get(f"{BASE}/rutinas")
    time.sleep(2)
    print("\n" + "=" * 60)
    print("3. /rutinas — CRUD de rutinas")
    print("=" * 60)
    screenshot(driver, "rutinas_lista.png")
    print("\nContenido visible:")
    print(driver.find_element(By.TAG_NAME, "body").text[:2000])
    print("\nBotones y formularios:")
    print_interactive(driver)

    # Open "Nueva rutina" modal
    print("\n--- Abriendo modal 'Nueva rutina' ---")
    driver.find_element(By.XPATH, "//button[contains(@onclick,'modal-nueva')]").click()
    time.sleep(1)
    screenshot(driver, "rutinas_modal_nueva.png")
    print("Modal visible:", driver.find_element(By.ID, "modal-nueva").is_displayed())

    # Fill in new routine form
    driver.find_element(By.ID, "n-nombre").send_keys("Rutina Test QA")
    driver.find_element(By.ID, "n-desc").send_keys("Descripción de prueba automatizada")
    Select(driver.find_element(By.ID, "n-obj")).select_by_visible_text("Fuerza")
    Select(driver.find_element(By.ID, "n-nivel")).select_by_visible_text("Principiante")
    n_semanas = driver.find_element(By.ID, "n-semanas")
    n_semanas.clear(); n_semanas.send_keys("4")
    n_dias = driver.find_element(By.ID, "n-dias")
    n_dias.clear(); n_dias.send_keys("3")
    screenshot(driver, "rutinas_nueva_rellenada.png")

    # Close nueva modal via escape
    driver.execute_script("document.getElementById('modal-nueva').style.display='none';")
    time.sleep(0.5)

    # Test "Ver ejercicios" on a routine
    driver.find_element(By.XPATH, "//button[contains(@onclick,'verDetalle(1)')]").click()
    time.sleep(1)
    screenshot(driver, "rutinas_detalle_ejercicios.png")
    print("Modal detalle visible:", driver.find_element(By.ID, "modal-detalle").is_displayed())
    # Fill exercise in detail
    ej_nombre = driver.find_element(By.ID, "ej-nombre")
    ej_nombre.send_keys("Press banca")
    Select(driver.find_element(By.ID, "ej-dia")).select_by_index(1)
    ej_series = driver.find_element(By.ID, "ej-series")
    ej_series.clear(); ej_series.send_keys("4")
    ej_reps = driver.find_element(By.ID, "ej-reps")
    ej_reps.clear(); ej_reps.send_keys("12")
    ej_descanso = driver.find_element(By.ID, "ej-descanso")
    ej_descanso.clear(); ej_descanso.send_keys("90")
    ej_notas = driver.find_element(By.ID, "ej-notas")
    ej_notas.send_keys("Nota de prueba QA")
    screenshot(driver, "rutinas_ejercicio_rellenado.png")

    # Close detalle modal via escape
    driver.execute_script("document.getElementById('modal-detalle').style.display='none';")
    time.sleep(0.5)

    # Test "Asignar rutina" modal
    driver.find_element(By.XPATH, "//button[contains(@onclick,'modal-asignacion')]").click()
    time.sleep(1)
    screenshot(driver, "rutinas_modal_asignar.png")
    print("Modal asignación visible:", driver.find_element(By.ID, "modal-asignacion").is_displayed())
    Select(driver.find_element(By.ID, "a-usuario")).select_by_index(1)
    Select(driver.find_element(By.ID, "a-rutina")).select_by_index(1)
    Select(driver.find_element(By.ID, "a-entrenador")).select_by_index(1)
    obs = driver.find_element(By.ID, "a-obs")
    obs.send_keys("Asignación por QA test")
    screenshot(driver, "rutinas_asignar_rellenado.png")

    # ========== /asistencia — vista general ==========
    driver.get(f"{BASE}/asistencia")
    time.sleep(2)
    print("\n" + "=" * 60)
    print("4. /asistencia — Vista general")
    print("=" * 60)
    screenshot(driver, "asistencia_vista.png")
    print(driver.find_element(By.TAG_NAME, "body").text[:1500])
    print_interactive(driver)

    print(f"\n{'='*60}")
    print(f"EXPLORACIÓN COMPLETADA. Capturas en: {FOLDER}")

finally:
    driver.quit()
