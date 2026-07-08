import os
import qrcode

# Link que quieres guardar
url = "https://www.facebook.com"

# Crear el QR
img = qrcode.make(url)

# Ruta donde se guardará
ruta = os.path.join("img", "facebook_qr.png")

# Guardar la imagen
img.save(ruta)

print("QR generado correctamente.")
print("Guardado en:", os.path.abspath(ruta))

# Abrir la imagen automáticamente
os.startfile(os.path.abspath(ruta))