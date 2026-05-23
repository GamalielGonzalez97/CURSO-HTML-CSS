let fruta = "mango";

switch (fruta) {
  case "manzana":
    console.log("La manzana cuesta $1.50 el kilo.");
    break;
  case "plátano":
    console.log("El plátano cuesta $1.20 el kilo.");
    break;
  case "mango":
  case "fresa":
    // Casos agrupados: ambos ejecutan el mismo bloque de código
    console.log("El mango y la fresa cuestan $2.50 el kilo.");
    break;
  default:
    console.log(`Lo siento, no tenemos precio para ${fruta}.`);
}
let fruta = "mango";

switch (fruta) {
  case "manzana":
    console.log("La manzana cuesta $1.50 el kilo.");
    break;
  case "plátano":
    console.log("El plátano cuesta $1.20 el kilo.");
    break;
  case "mango":
  case "fresa":
    // Casos agrupados: ambos ejecutan el mismo bloque de código
    console.log("El mango y la fresa cuestan $2.50 el kilo.");
    break;
  default:
    console.log(`Lo siento, no tenemos precio para ${fruta}.`);
}
