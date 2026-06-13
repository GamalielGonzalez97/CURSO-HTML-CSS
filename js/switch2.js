//importar herramienta de node.js para leer datos por consola
const readline = require("readline");

//configurar para la entrada y salida de datos por consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//preguntar al usuario usuario por consola y se quedan esperando a que el usuario ingrese un dato y presione enter
rl.question("escribe una fruta(manzana, platano, uva): ", (fruta) => {
  //convertir el dato ingresado a un número entero

  switch (fruta) {
    case "manzana":
      console.log("La manzana es roja");
      break;
    case "platano":
      console.log("El platano es amarillo");
      break;
    case "uva":
      console.log("La uva es morada");
      break;
    default:
      console.log("Fruta no reconocida!");
  }

  //cerrar la interfaz de lectura de datos por consola
  rl.close();
});
