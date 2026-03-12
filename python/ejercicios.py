# while True:
    
#     try:
#         numero = int(input("ingrese un numero "))
#         break
#     except ValueError:
#         print("ingrese un numero correcto")
        
        

# i = 0
# while i<=10:
#     print(f"{numero}x{i}= {numero * i}")    
    
#     i+=1
# CRUD básico en Python

# Lista donde vamos a guardar nuestros "registros"
usuarios = []

# --- CREATE ---
def crear_usuario(nombre, edad):
    usuario = {"id": len(usuarios) + 1, "nombre": nombre, "edad": edad}
    usuarios.append(usuario)
    print(f"Usuario creado: {usuario}")

# --- READ ---
def listar_usuarios():
    if not usuarios:
        print("No hay usuarios registrados.")
    else:
        for usuario in usuarios:
            print(usuario)

# --- UPDATE ---
def actualizar_usuario(id_usuario, nuevo_nombre, nueva_edad):
    for usuario in usuarios:
        if usuario["id"] == id_usuario:
            usuario["nombre"] = nuevo_nombre
            usuario["edad"] = nueva_edad
            print(f"Usuario actualizado: {usuario}")
            return
    print("Usuario no encontrado.")

# --- DELETE ---
def eliminar_usuario(id_usuario):
    for usuario in usuarios:
        if usuario["id"] == id_usuario:
            usuarios.remove(usuario)
            print(f"Usuario eliminado con id {id_usuario}")
            return
    print("Usuario no encontrado.")


# --- MENÚ ---
while True:
    print("\n--- MENÚ CRUD ---")
    print("1. Crear usuario")
    print("2. Listar usuarios")
    print("3. Actualizar usuario")
    print("4. Eliminar usuario")
    print("5. Salir")

    opcion = input("Elige una opción: ")

    if opcion == "1":
        nombre = input("Nombre: ")
        edad = int(input("Edad: "))
        crear_usuario(nombre, edad)

    elif opcion == "2":
        listar_usuarios()

    elif opcion == "3":
        id_usuario = int(input("ID del usuario a actualizar: "))
        nuevo_nombre = input("Nuevo nombre: ")
        nueva_edad = int(input("Nueva edad: "))
        actualizar_usuario(id_usuario, nuevo_nombre, nueva_edad)

    elif opcion == "4":
        id_usuario = int(input("ID del usuario a eliminar: "))
        eliminar_usuario(id_usuario)
