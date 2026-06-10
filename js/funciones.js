const verificarAcceso = (edad, esEstudiante) => {
  if (edad >= 18 && esEstudiante) {
    // Nota: "esEstudiante" ya es true o false, no hace falta poner === true
    return "¡Acceso concedido! Tienes descuento de estudiante.";
  } else {
    return "Acceso denegado. No cumples los requisitos.";
  }
};

// --- Cómo probarla en tu consola ---
console.log(verificarAcceso(20, true)); // Resultado: ¡Acceso concedido!
console.log(verificarAcceso(17, true)); // Resultado: Acceso denegado. (Muy joven)
console.log(verificarAcceso(25, false)); // Resultado: Acceso denegado. (No es estudiante)
