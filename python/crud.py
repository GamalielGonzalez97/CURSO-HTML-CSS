# Listas del supermercado
frutas = ["Manzana", "Plátano", "Naranja", "Mango"]
verduras = ["Zanahoria", "Lechuga", "Tomate", "Papa"]
bebidas = ["Agua", "Jugo", "Refresco", "Café"]

while True:
    print("\n--- MENÚ SUPERMERCADO ---")
    print("1. Ver frutas")
    print("2. Ver verduras")
    print("3. Ver bebidas")
    print("4. Salir")

    opcion = input("Elige una opción: ")

    match opcion:
        case "1":
            print("\nLista de Frutas:")
            for fruta in frutas:
                print("-", fruta)
        case "2":
            print("\nLista de Verduras:")
            for verdura in verduras:
                print("-", verdura)
        case "3":
            print("\nLista de Bebidas:")
            for bebida in bebidas:
                print("-", bebida)
        case "4":
            print("¡Gracias por visitar el supermercado!")
            break
        case _:

            print("⚠ Opción no válida, intenta de nuevo.")




