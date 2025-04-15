// Array para almacenar los títulos de los libros leídos
let librosLeidos = [];
/**
 * Agrega un libro al array de libros leídos.
 * @param {string} titulo - El título del libro.
 */
function agregarLibro(titulo) {
  librosLeidos.push(titulo);
}
/**
 * Mostar en consola todos los libros que se han leído.
 */
function mostrarLibrosLeidos() {
  console.log("Libros Leídos:");
  if (librosLeidos.length === 0) {
    console.log("Aún no has leído ningún libro.");
  } else {
    for (let i = 0; i < librosLeidos.length; i++) {
      console.log(`- ${librosLeidos[i]}`);
    }
  }
}
// Ejemplos
agregarLibro("El Principito");
agregarLibro("Cien Años de Soledad");
agregarLibro("1984");
mostrarLibrosLeidos();