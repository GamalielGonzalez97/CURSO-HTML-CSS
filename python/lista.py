#generar una lista

Jugetes =['carro','tren','avion']

print(Jugetes)




Frutas = ["platano","naranja","mango","durazno"]
print(Frutas)

# VARIABLES ACTUALIZADAS DE LA LISTA FRUTAS
Frutas[0] = "pera"
Frutas[1] = "guayaba"
Frutas[2] = "pepino"
Frutas[3] ="limon"
print(Frutas)

#AGREGAR ELEMENTOS EN FRUTAS usando append
Frutas.append("sandia")
print(Frutas)

#agregar en una especificacion con insert
Frutas.insert(0,"melon")
print([Frutas])

# Quitar por valor con remove
Frutas.remove("sandia")
print(Frutas)

# Quitar por posición con pop

Frutas.pop(1)
print(Frutas)



#validar cuantas frutas hay!
print(len(Frutas))

#ordenar automaticamente alfabeticamente
Frutas.sort()
print(Frutas)

# for Fruta in Frutas:
# print("mesguta comer frutas", Fruta)


print(type(Frutas))