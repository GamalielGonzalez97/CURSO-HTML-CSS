// 1. Aquí elegimos qué color de bloque vamos a meter a la máquina
const colorBloque = "azul";

// 2. ¡Empieza la máquina switch!
switch (colorBloque) {
  case "rojo":
    console.log("🔴 ¡El bloque va a la caja ROJA!");
    break; // El "break" es para decirle a la máquina: "¡Para, ya encontramos el correcto!"

  case "azul":
    console.log("🔵 ¡El bloque va a la caja AZUL!");
    break;

  case "verde":
    console.log("🟢 ¡El bloque va a la caja VERDE!");
    break;

  default:
    // El "default" es la opción por si le metes algo que no coincide con ningún color de arriba
    console.log("📦 No sé qué es esto... va a la caja de juguetes varios.");
    break;
}
