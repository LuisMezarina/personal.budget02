
const movimientos = [
  { nombre: "Sueldo", tipo: "Ingreso", monto: 2000 },
  { nombre: "Alquiler", tipo: "Egreso", monto: 800 },
  { nombre: "Supermercado", tipo: "Egreso", monto: 150 },
  { nombre: "Alquiler", tipo: "Ingreso", monto: 300 },
  { nombre: "Restaurante", tipo: "Egreso", monto: 45.50 },
  { nombre: "Transporte", tipo: "Egreso", monto: 30 }
];


function obtenerNombresMovimientos(listaMovimientos) {
  return listaMovimientos.map((movimiento) => movimiento.nombre);
}

// Filtrar egresos mayores a $100 (filter)
function filtrarEgresosMayoresA(listaMovimientos, montoMinimo = 100) {
  return listaMovimientos.filter(
    (movimiento) => movimiento.tipo === "Egreso" && movimiento.monto > montoMinimo
  );
}

// Buscar movimiento por nombre
function buscarMovimientoPorNombre(listaMovimientos, nombreBuscado) {
  return listaMovimientos.find(
    (movimiento) => movimiento.nombre.toLowerCase() === nombreBuscado.toLowerCase()
  );
}

// Función adicional: Calcular balance total
function calcularBalanceTotal(listaMovimientos) {
  return listaMovimientos.reduce((total, movimiento) => {
    return movimiento.tipo === "Ingreso"
      ? total + movimiento.monto
      : total - movimiento.monto;
  }, 0);
}


// MOSTRAR RESULTADOS EN CONSOLA

// Lista de nombres de movimientos
console.log(
  "Nombres de movimientos registrados:",
  obtenerNombresMovimientos(movimientos)
);

// Egresos mayores a $100
console.log(
  "Egresos mayores a $100:",
  filtrarEgresosMayoresA(movimientos)
);

// Buscar movimiento por nombre
const movimientoBuscado = buscarMovimientoPorNombre(movimientos, "Alquiler");
console.log(
  "Buscar movimiento por nombre: 'Supermercado'",
  movimientoBuscado || "No encontrado"
);

// Balance total calculado funcionalmente
console.log(
  "Balance total calculado:",
  calcularBalanceTotal(movimientos)
);