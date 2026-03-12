// Nuestra "base de datos" temporal
let usuarios = [];

// --- CREATE ---
function crearUsuario(nombre, edad) {
  let usuario = {
    id: usuarios.length + 1,
    nombre: nombre,
    edad: edad,
  };
  usuarios.push(usuario);
  console.log("Usuario creado:", usuario);
}

// --- READ ---
function listarUsuarios() {
  if (usuarios.length === 0) {
    console.log("No hay usuarios registrados.");
  } else {
    usuarios.forEach((usuario) => console.log(usuario));
  }
}

// --- UPDATE ---
function actualizarUsuario(idUsuario, nuevoNombre, nuevaEdad) {
  let usuario = usuarios.find((u) => u.id === idUsuario);
  if (usuario) {
    usuario.nombre = nuevoNombre;
    usuario.edad = nuevaEdad;
    console.log("Usuario actualizado:", usuario);
  } else {
    console.log("Usuario no encontrado.");
  }
}

// --- DELETE ---
function eliminarUsuario(idUsuario) {
  let index = usuarios.findIndex((u) => u.id === idUsuario);
  if (index !== -1) {
    usuarios.splice(index, 1);
    console.log(`Usuario eliminado con id ${idUsuario}`);
  } else {
    console.log("Usuario no encontrado.");
  }
}
