"""Captura de evidencias visuales con Selenium + Firefox"""
from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import os

BASE = "https://gestion-gympro.up.railway.app"
EVIDENCIAS = os.path.expanduser("~/QA/evidencias")
os.makedirs(EVIDENCIAS, exist_ok=True)

options = Options()
options.add_argument("--headless")
options.binary_location = "/snap/firefox/current/usr/lib/firefox/firefox"
driver = webdriver.Firefox(options=options)
wait = WebDriverWait(driver, 10)

def auth_login(email, password, screenshot_label=""):
    """Autentica resolviendo el captcha client-side y hace clic en Ingresar."""
    driver.get(f"{BASE}/login")
    wait.until(EC.presence_of_element_located((By.ID, "captcha-check")))
    time.sleep(0.5)

    # Llenar credenciales
    email_input = driver.find_element(By.ID, "email")
    pwd_input = driver.find_element(By.ID, "password")
    email_input.clear()
    email_input.send_keys(email)
    pwd_input.clear()
    pwd_input.send_keys(password)

    # Activar captcha
    captcha_check = driver.find_element(By.ID, "captcha-check")
    captcha_check.click()
    time.sleep(0.3)

    # Leer valores generados por JS
    cA = driver.execute_script("return window.cA")
    cB = driver.execute_script("return window.cB")
    if cA is None or cB is None:
        # Fallback: leer del DOM
        q_text = driver.find_element(By.ID, "captcha-q").text
        import re
        nums = re.findall(r'\d+', q_text)
        cA, cB = int(nums[0]), int(nums[1])

    # Resolver captcha
    answer = cA + cB
    captcha_ans = driver.find_element(By.ID, "captcha-ans")
    captcha_ans.send_keys(str(answer))
    time.sleep(0.3)

    if screenshot_label:
        driver.save_screenshot(os.path.join(EVIDENCIAS, f"formulario_lleno_{screenshot_label}.png"))

    # Click en Ingresar
    btn_login = driver.find_element(By.ID, "btn-login")
    btn_login.click()
    time.sleep(2)

try:
    # 1. Captura: Página de login
    print("1. Capturando login...")
    driver.get(f"{BASE}/login")
    wait.until(EC.presence_of_element_located((By.TAG_NAME, "body")))
    time.sleep(1)
    driver.save_screenshot(os.path.join(EVIDENCIAS, "login_cargado.png"))
    print("   → login_cargado.png")

    # 2. Login admin
    print("2. Autenticando admin...")
    auth_login("admin@gympro.com", "Admin1234!", screenshot_label="admin")
    driver.save_screenshot(os.path.join(EVIDENCIAS, "login_exitoso.png"))
    print("   → login_exitoso.png")

    # 3. Captura: /inicio autenticado
    print("3. Navegando a /inicio...")
    driver.get(f"{BASE}/inicio")
    time.sleep(2)
    driver.save_screenshot(os.path.join(EVIDENCIAS, "pagina_inicio.png"))
    print(f"   → pagina_inicio.png (URL: {driver.current_url})")

    # 4. Captura: Dashboard
    print("4. Navegando a /dashboard...")
    driver.get(f"{BASE}/dashboard")
    time.sleep(1)
    driver.save_screenshot(os.path.join(EVIDENCIAS, "dashboard.png"))
    print(f"   → dashboard.png (URL: {driver.current_url})")

    print("\nEvidencias capturadas en:", EVIDENCIAS)

except Exception as e:
    print(f"Error: {e}")
    import traceback
    traceback.print_exc()
    driver.save_screenshot(os.path.join(EVIDENCIAS, "fallo_selenium.png"))
    print("   → fallo_selenium.png guardado")

finally:
    driver.quit()
