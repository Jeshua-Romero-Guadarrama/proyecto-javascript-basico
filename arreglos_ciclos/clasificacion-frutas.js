// 1. Declarar un arreglo (array) de frutas
const frutas = ['manzana', 'pera', 'manzana', 'naranja', 'pera', 'kiwi', 'manzana', 'naranja'];
// 2. Crear un objeto para almacenar la cantidad de cada tipo de fruta
const clasificacion = {};

// --- Enfoque 1: Ciclo for ---
for (let i = 0; i < frutas.length; i++) {
  const frutaActual = frutas[i];
  // Si la fruta ya existe como propiedad en el objeto, aumentamos el contador
  if (clasificacion[frutaActual]) {
    clasificacion[frutaActual]++;
  } else {
    // Si no existe, la inicializamos en 1
    clasificacion[frutaActual] = 1;
  }
}
console.log("Clasificación de frutas (usando ciclo for):");
console.log(clasificacion);

// --- Enfoque 2: Ciclo while ---
const clasificacionWhile = {};
let index = 0;
while (index < frutas.length) {
  const frutaActual = frutas[index];
  // Si la fruta ya existe como propiedad en el objeto, aumentamos el contador
  if (clasificacionWhile[frutaActual]) {
    clasificacionWhile[frutaActual]++;
  } else {
    // Si no existe, la inicializamos en 1
    clasificacionWhile[frutaActual] = 1;
  }
  index++;
}
console.log("Clasificación de frutas (usando ciclo while):");
console.log(clasificacionWhile);