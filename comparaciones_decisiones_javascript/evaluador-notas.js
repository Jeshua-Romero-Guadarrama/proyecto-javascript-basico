// 1. Declarar la variable nota con un valor entre 0 y 100 (usar un número aleatorio entre 0 y 100):
let nota = Math.floor(Math.random() * 101);
// Para asignar un valor específico, comentar la línea anterior y descomentar la siguiente:
// let nota = 75;
// Mostrar la nota para verificar el resultado
console.log("La nota del estudiante es:", nota);
// 2. Verificar que la nota sea un número válido y mayor o igual a 0
if (nota >= 0 && nota <= 100) { 
  // 3. Evaluar los distintos rangos de notas usando if, else if, else
  if (nota >= 90) {
    console.log("El estudiante aprueba con 'Excelente'");
  } else if (nota >= 75) {
    console.log("El estudiante aprueba con 'Bien'");
  } else if (nota >= 60) {
    console.log("El estudiante aprueba con 'Suficiente'");
  } else {
    console.log("El estudiante no aprueba");
  }

} else {
  console.log("La nota ingresada no es válida. Debe estar entre 0 y 100.");
}
