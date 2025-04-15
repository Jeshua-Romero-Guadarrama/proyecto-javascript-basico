// Objeto libro con propiedades básicas y un método describirLibro
const libro = {
    titulo:    "El Principito",
    autor:     "Antoine de Saint-Exupéry",
    anio:      1943,
    estado:    "disponible", // Puede ser 'disponible' o 'prestado'
    capitulos: ["Capítulo 1: El encuentro", "Capítulo 2: Conversación con el zorro"],
    // Método para describir la información del libro
    describirLibro: function () {
      console.log(
        `Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}. El estado es: ${this.estado}.`
      );
    },
    // Método para agregar un capítulo
    agregarCapitulo: function (capitulo) {
      this.capitulos.push(capitulo);
    },
    // Método para eliminar un capítulo
    eliminarCapitulo: function (capitulo) {
      const indice = this.capitulos.indexOf(capitulo);
      if (indice !== -1) {
        this.capitulos.splice(indice, 1);
      }
    },
  };
  // Ejemplo de métodos
  libro.describirLibro();
  console.log("Capítulos:", libro.capitulos);
  // Agregar un capítulo
  libro.agregarCapitulo("Capítulo 3: El despegue");
  console.log("Capítulos (después de agregar):", libro.capitulos);
  // Eliminar un capítulo
  libro.eliminarCapitulo("Capítulo 1: El encuentro");
  console.log("Capítulos (después de eliminar):", libro.capitulos);