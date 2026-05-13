const nombre = "Gamaliel";
console.log(nombre); // <--- Sin esto, la terminal no muestra nada

let edad = 28;
console.log(edad);

var a = 28;
var b = 12;

var resultado = a + b;

console.log(resultado);

mayor = true;
menor = false;
console.log(mayor);

let esMayorDeEdad = true;
let tieneDescuento = false;

// Object: Colección de propiedades (clave: valor)
const usuario = {
  nombre: "Ana",
  puntos: 1500,
  esPremium: true,
};

console.log(usuario);

// Array: Lista de elementos (colección indexada)
const colores = ["rojo", "verde", "azul"];
console.log(colores[0]); // Imprime: "rojo"

// Function: Bloques de código ejecutables
const saludar = function () {
  return "¡Hola Mundo!";
};

console.log(saludar);
