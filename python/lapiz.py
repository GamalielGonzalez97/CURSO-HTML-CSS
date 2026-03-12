import cv2  # Librería de OpenCV
import numpy as np

# Crear lienzo en blanco (600 alto x 800 ancho, 3 canales de color)
canvas = np.ones((600, 800, 3), dtype=np.uint8) * 255

# Variables de control
dibujando = False
x0, y0 = -1, -1

# Color del lápiz (negro por defecto)
color = (0, 0, 0)
grosor = 2

# Función para manejar eventos del mouse
def dibujar(event, x, y, flags, param):
    global x0, y0, dibujando, color

    if event == cv2.EVENT_LBUTTONDOWN:  # Clic presionado
        dibujando = True
        x0, y0 = x, y

    elif event == cv2.EVENT_MOUSEMOVE:  # Movimiento con clic presionado
        if dibujando:
            cv2.line(canvas, (x0, y0), (x, y), color, grosor)
            x0, y0 = x, y

    elif event == cv2.EVENT_LBUTTONUP:  # Soltar clic
        dibujando = False
        cv2.line(canvas, (x0, y0), (x, y), color, grosor)

# Crear ventana y asignar función de mouse
cv2.namedWindow("Pizarra")
cv2.setMouseCallback("Pizarra", dibujar)

while True:
    cv2.imshow("Pizarra", canvas)
    key = cv2.waitKey(1) & 0xFF

    # Cambiar color con teclas
    if key == ord('r'):  # rojo
        color = (0, 0, 255)
    elif key == ord('g'):  # verde
        color = (0, 255, 0)
    elif key == ord('b'):  # azul
        color = (255, 0, 0)
    elif key == ord('k'):  # negro
        color = (0, 0, 0)

    # Limpiar pantalla con 'c'
    elif key == ord('c'):
        canvas[:] = 2557

    # Salir con ESC
    elif key == 27:
        break

cv2.destroyAllWindows()
