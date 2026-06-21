"""Captura del flujo de la app por cada rol: administrador, entrenador, miembro"""
import os
import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

BASE = "https://gestion-gympro.up.railway.app"
EVIDENCIAS = os.path.expanduser("~/QA/evidencias")

roles = [
    {
        "nombre": "admin",
        "email": "admin@gympro.com",
        "password": "Admin1234!",
        "label": "Admin GymPro",
        "paginas": ["/inicio", "/inicio"],
    },
    {
        "nombre": "entrenador",
        "email": "carlos.e@gympro.com",
        "password": "Entrena123!",
        "label": "Carlos Mendoza",
        "paginas": ["/inicio", "/inicio"],
    },
    {
        "nombre": "miembro",
        "email": "juan@gmail.com",
        "password": "Miembro123!",
        "label": "Juan Martínez",
        "paginas": ["/inicio", "/inicio"],
    },
]

def init_driver():
    opts = Options()
    opts.add_argument("--headless")
    opts.add_argument("--no-sandbox")
    opts.add_argument("--disable-dev-shm-usage")
    opts.add_argument("--window-size=1366,768")
    return webdriver.Chrome(options=opts)

def auth_login(driver, email, password):
    driver.get(f"{BASE}/login")
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "captcha-check")))
    time.sleep(0.5)
    driver.find_element(By.ID, "email").send_keys(email)
    driver.find_element(By.ID, "password").send_keys(password)
    driver.find_element(By.ID, "captcha-check").click()
    time.sleep(0.3)
    cA = driver.execute_script("return window.cA")
    cB = driver.execute_script("return window.cB")
    if cA is None or cB is None:
        import re
        q = driver.find_element(By.ID, "captcha-q").text
        nums = re.findall(r"\d+", q)
        cA, cB = int(nums[0]), int(nums[1])
    driver.find_element(By.ID, "captcha-ans").send_keys(str(cA + cB))
    time.sleep(0.3)
    driver.find_element(By.ID, "btn-login").click()
    time.sleep(2)

for rol in roles:
    nombre = rol["nombre"]
    folder = os.path.join(EVIDENCIAS, nombre)
    os.makedirs(folder, exist_ok=True)
    print(f"\n{'='*60}")
    print(f"ROL: {nombre.upper()}")
    print(f"{'='*60}")

    driver = init_driver()
    try:
        # 1. Login page
        driver.get(f"{BASE}/login")
        WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.TAG_NAME, "body")))
        time.sleep(1)
        driver.save_screenshot(os.path.join(folder, "01_login_page.png"))
        print(f"  ✓ 01_login_page.png")

        # 2. Form filled
        driver.find_element(By.ID, "email").send_keys(rol["email"])
        driver.find_element(By.ID, "password").send_keys(rol["password"])
        driver.find_element(By.ID, "captcha-check").click()
        time.sleep(0.3)
        cA = driver.execute_script("return window.cA")
        cB = driver.execute_script("return window.cB")
        if cA is None or cB is None:
            import re
            q = driver.find_element(By.ID, "captcha-q").text
            nums = re.findall(r"\d+", q)
            cA, cB = int(nums[0]), int(nums[1])
        driver.find_element(By.ID, "captcha-ans").send_keys(str(cA + cB))
        time.sleep(0.3)
        driver.save_screenshot(os.path.join(folder, "02_form_completo.png"))
        print(f"  ✓ 02_form_completo.png")

        # 3. Login submit
        driver.find_element(By.ID, "btn-login").click()
        time.sleep(3)
        driver.save_screenshot(os.path.join(folder, "03_post_login.png"))
        print(f"  ✓ 03_post_login.png  (URL: {driver.current_url})")

        # 4. /inicio dashboard
        driver.save_screenshot(os.path.join(folder, "04_inicio_dashboard.png"))
        print(f"  ✓ 04_inicio_dashboard.png")

        # 5-8. Try navigation sidebar links
        nav_links = driver.execute_script("""
            const links = document.querySelectorAll('#sidebar a, nav a, .sidebar-menu a');
            return Array.from(links).map(a => ({href: a.getAttribute('href'), text: a.textContent.trim() || 'icon'}));
        """)
        # Filter unique meaningful links
        seen = set()
        unique_links = []
        for l in nav_links:
            if l["href"] and l["href"] not in seen and l["href"] != "#" and l["href"] != "/inicio":
                seen.add(l["href"])
                unique_links.append(l)

        print(f"\n  Enlaces laterales encontrados: {len(unique_links)}")
        for i, link in enumerate(unique_links[:6]):
            try:
                driver.get(f"{BASE}{link['href']}" if link["href"].startswith("/") else link["href"])
                time.sleep(2)
                fname = f"05_{i+1}_{link['href'].strip('/').replace('/','_') or 'home'}.png"
                driver.save_screenshot(os.path.join(folder, fname))
                print(f"  ✓ {fname}  (URL: {driver.current_url[:70]})")
            except Exception as e:
                print(f"  ✗ {link['href']}: {e}")

        # Last: /perfil (profile page)
        try:
            driver.get(f"{BASE}/perfil")
            time.sleep(2)
            driver.save_screenshot(os.path.join(folder, "09_perfil.png"))
            print(f"  ✓ 09_perfil.png  (URL: {driver.current_url[:70]})")
            # Click "Editar" button if exists
            try:
                editar = driver.find_element(By.XPATH, "//*[contains(text(),'Editar')]")
                editar.click()
                time.sleep(2)
                driver.save_screenshot(os.path.join(folder, "09b_perfil_editar.png"))
                print(f"  ✓ 09b_perfil_editar.png")
            except:
                print(f"  - Sin botón Editar en /perfil")
        except Exception as e:
            print(f"  ✗ /perfil: {e}")

        # Logout
        try:
            logout_btn = driver.find_element(By.XPATH, "//button[contains(text(),'Salir')] | //a[contains(text(),'Salir')] | //*[contains(@onclick,'logout')]")
            logout_btn.click()
        except:
            driver.execute_script("fetch('/api/auth/logout',{method:'POST'}).then(()=>location='/login')")
        time.sleep(2)
        driver.save_screenshot(os.path.join(folder, "10_logout.png"))
        print(f"  ✓ 10_logout.png  (URL: {driver.current_url[:70]})")

    except Exception as e:
        import traceback
        traceback.print_exc()
        driver.save_screenshot(os.path.join(folder, "error.png"))
        print(f"  ✗ Error: {e}")
    finally:
        driver.quit()

print(f"\n{'='*60}")
print("COMPLETADO. Capturas organizadas en:")
for rol in roles:
    print(f"  evidencias/{rol['nombre']}/")
