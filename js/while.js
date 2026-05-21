let gelDisponible = 100; // El bote empieza al 100%
let clientesAtendidos = 0;

// MIENTRAS el gel sea mayor a 0, el ciclo sigue funcionando
while (gelDisponible > 0) {
  clientesAtendidos++; // Atendemos a un cliente
  gelDisponible = gelDisponible - 25; // Cada cliente gasta 25% de gel

  console.log("Cliente atendido. Gel restante: " + gelDisponible + "%");
}

console.log(
  "¡Se acabó el gel! Total de clientes atendidos: " + clientesAtendidos,
);

// Resultado en la consola:
// Cliente atendido. Gel restante: 75%
// Cliente atendido. Gel restante: 50%
// Cliente atendido. Gel restante: 25%
// Cliente atendido. Gel restante: 0%
// ¡Se acabó el gel! Total de clientes atendidos: 4
