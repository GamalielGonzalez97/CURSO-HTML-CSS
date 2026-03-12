

#Adivinar un número secreto

#Crea un juego donde el usuario debe adivinar un número secreto entre 1 y 10
numero_secreto = 7
intento = 0

while intento != numero_secreto:
    intento = int(input("Adivina el número (1-10): "))
    if intento != numero_secreto:
        print("Intenta de nuevo...")

print("¡Felicidades, lo adivinaste!")



