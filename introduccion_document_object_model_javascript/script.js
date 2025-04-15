// Seleccionar los elementos del DOM
const form = document.getElementById('formComentarios');
const comentarioInput = document.getElementById('comentarioInput');
const contenedorComentarios = document.getElementById('contenedorComentarios');

// Manejar el evento 'submit' del formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que se recargue la página
  const textoComentario = comentarioInput.value.trim();
  // Verificar que no esté vacío
  if (textoComentario === "") {
    alert("Por favor, escribir un comentario antes de enviar.");
    return;
  }
  // Crear un contenedor para cada comentario
  const comentarioDiv = document.createElement('div');
  comentarioDiv.classList.add('comentario');
  // Agregar fecha y hora
  const fechaP = document.createElement('p');
  fechaP.classList.add('fecha');
  const fechaActual = new Date().toLocaleString();
  fechaP.textContent = `Publicado: ${fechaActual}`;
  comentarioDiv.appendChild(fechaP);
  // Crear el elemento p para el texto del comentario
  const textoP = document.createElement('p');
  textoP.textContent = textoComentario;
  comentarioDiv.appendChild(textoP);
  // Agregar botón para eliminar comentario
  const btnEliminar = document.createElement('button');
  btnEliminar.textContent = "Eliminar";
  btnEliminar.addEventListener('click', function() {
    contenedorComentarios.removeChild(comentarioDiv);
  });
  comentarioDiv.appendChild(btnEliminar);
  // Agregar el contenedor del nuevo comentario al DOM
  contenedorComentarios.appendChild(comentarioDiv);
  // Limpiar el textarea
  comentarioInput.value = "";
});