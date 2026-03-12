#crear un diccionario

#diccionario persona
Persona = {
  "nombre":"Gamaliel",
  "edad": 27,
  "direccion": "col valle del guadiana"
}

print(Persona)

#diccionario pelicula
pelicula ={
  "nombre": "minions",
  "tipo": "caricaturas",
  "tiempo": 2.15
}

print(pelicula)

pelicula['autor'] = 'sannicolas'
print(pelicula)



#acceder a los valores
print(Persona["nombre"])
print(Persona["edad"])

#agregar un nuevo dato
Persona["profesion"] = 'ingSoftware'
print(Persona)


Persona['hobbie'] ='videojuegos'
print(Persona)

#modificar un dato
Persona['edad'] = 28
print(Persona )

Persona['nombre'] = 'Gamaliel Gonzalez'
print(Persona)


print(type(Persona))
