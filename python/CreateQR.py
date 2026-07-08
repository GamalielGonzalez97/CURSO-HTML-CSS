import qrcode

# Link que queremos guardar
url = "https://www.facebook.com"

# Crear QR
img = qrcode.make(url)

# Guardarlo
img.save("#")

print("QR creado correctamente")