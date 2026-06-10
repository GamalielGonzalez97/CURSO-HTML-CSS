// Necesitamos esto para que Node.js pueda leer lo que escribes en el teclado
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Le hacemos la pregunta al usuario
readline.question(
  "¿Qué fruta quieres comprar? (opciones: manzana, platano, uva): ",
  (frutaUsuario) => {
    // Convertimos lo que escribió el usuario a minúsculas por si escribe "MANZANA" o "Manzana"
    const fruta = frutaUsuario.toLowerCase().trim();

    console.log("\n--- Resultado de tu búsqueda ---");

    // ¡Aquí empieza nuestro switch de frutas!
    switch (fruta) {
      case "manzana":
        console.log(
          "🍎 La manzana cuesta $1.50 el kilo. ¡Está muy roja y dulce!",
        );
        break;

      case "platano":
      case "plátano": // Podemos poner dos casos juntos por si lo escribe con o sin tilde
        console.log(
          "🍌 El plátano cuesta $1.20 el kilo. ¡Viene en tarta o para licuado!",
        );
        break;

      case "uva":
        console.log("🍇 Las uvas cuestan $2.50 el kilo. ¡No tienen semillas!");
        break;

      default:
        console.log(
          `❌ Lo sentimos, no tenemos "${frutaUsuario}" en nuestra frutería hoy.`,
        );
        break;
    }

    // Cerramos la lectura del teclado para que el programa termine
    readline.close();
  },
);
