// Seleccionamos los elementos del DOM
const form = document.getElementById('formComentarios');
const comentarioInput = document.getElementById('comentarioInput');
const contenedorComentarios = document.getElementById('contenedorComentarios');

// Escuchamos el evento 'submit' del formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que la página se recargue

  const textoComentario = comentarioInput.value.trim();

  // Validación simple: si está vacío, salir
  if (!textoComentario) {
    alert("Por favor, escribe un comentario antes de enviarlo.");
    return;
  }

  // Crear un contenedor para el comentario
  const comentarioDiv = document.createElement('div');
  comentarioDiv.classList.add('comentario');

  // Crear el elemento para la fecha y hora
  const fechaP = document.createElement('p');
  fechaP.classList.add('fecha');
  const fechaActual = new Date().toLocaleString(); 
  fechaP.textContent = `Publicado: ${fechaActual}`;
  comentarioDiv.appendChild(fechaP);

  // Crear el elemento para el texto del comentario
  const textoP = document.createElement('p');
  textoP.textContent = textoComentario;
  comentarioDiv.appendChild(textoP);

  // (Opcional) Botón para eliminar comentario
  const btnEliminar = document.createElement('button');
  btnEliminar.textContent = "Eliminar";
  btnEliminar.classList.add('btn-eliminar');
  btnEliminar.addEventListener('click', function() {
    contenedorComentarios.removeChild(comentarioDiv);
  });
  comentarioDiv.appendChild(btnEliminar);

  // Agregamos el comentario al contenedor principal
  contenedorComentarios.appendChild(comentarioDiv);

  // Limpiamos el campo de texto
  comentarioInput.value = "";
});
