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

try:
    # 1. Captura: Página de login
    print("1. Capturando login...")
    driver.get(f"{BASE}/login")
    wait.until(EC.presence_of_element_located((By.TAG_NAME, "body")))
    time.sleep(1)
    driver.save_screenshot(os.path.join(EVIDENCIAS, "login_cargado.png"))
    print("   → login_cargado.png")

    # 2. Captura: Login con credenciales admin (bypass captcha - confirmación visual)
    print("2. Login admin (captcha no validado server-side)...")
    email_input = wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, "input[type='email'], input[name='email']")))
    password_input = driver.find_element(By.CSS_SELECTOR, "input[type='password'], input[name='password']")
    email_input.send_keys("admin@gympro.com")
    password_input.send_keys("Admin1234!")
    time.sleep(0.5)
    driver.save_screenshot(os.path.join(EVIDENCIAS, "formulario_lleno.png"))
    print("   → formulario_lleno.png")

    # 3. Captura: Después del login (intento directo a /inicio)
    print("3. Navegando a /inicio...")
    driver.get(f"{BASE}/inicio")
    time.sleep(2)
    driver.save_screenshot(os.path.join(EVIDENCIAS, "pagina_inicio.png"))
    print("   → pagina_inicio.png")

    # 4. Captura: Dashboard
    print("4. Navegando a /dashboard...")
    driver.get(f"{BASE}/dashboard")
    time.sleep(1)
    driver.save_screenshot(os.path.join(EVIDENCIAS, "dashboard.png"))
    print("   → dashboard.png")

    print("\nEvidencias capturadas en:", EVIDENCIAS)

except Exception as e:
    print(f"Error: {e}")
    driver.save_screenshot(os.path.join(EVIDENCIAS, "fallo_selenium.png"))
    print("   → fallo_selenium.png guardado")

finally:
    driver.quit()
