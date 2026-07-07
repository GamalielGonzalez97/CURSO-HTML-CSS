function esColorValido(color) {
  // 1. Validar Hexadecimal (#fff o #ffffff)
  const regexHex = /^#([A-Fa-f0-9]{3}){1,2}$/;

  // 2. Validar RGB o RGBA (ej: rgb(255, 0, 0) o rgba(0,0,0,0.5))
  const regexRGB =
    /^rgba?\((\s*\d+\s*,\s*){2}(\s*\d+\s*)(,\s*(0?(\.\d+)?|1(\.0+)?)\s*)?\)$/;

  // Retorna true si cumple con cualquiera de los dos formatos
  return regexHex.test(color) || regexRGB.test(color);
}

// Pruebas en consola de Node.js
console.log("¿#00FF00 es válido?:", esColorValido("#ff5100")); // true
console.log("¿rgb(0,0,255) es válido?:", esColorValido("rgb(0,0,255)")); // true
console.log("¿not-a-color es válido?:", esColorValido("not-a-color")); // false
