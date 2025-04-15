// Seleccionar los elementos del DOM
const form                  = document.getElementById('formComentarios');
const nombreInput           = document.getElementById('nombreInput');
const comentarioInput       = document.getElementById('comentarioInput');
const contenedorComentarios = document.getElementById('contenedorComentarios');
const mensajeError          = document.getElementById('mensajeError');
const caracteresRestantes   = document.getElementById('caracteresRestantes');
// Límite de caracteres para el comentario
const MAX_CARACTERES = 200;
// Evento para contar caracteres en tiempo real
comentarioInput.addEventListener('input', () => {
  const texto                     = comentarioInput.value;
  const remaining                 = MAX_CARACTERES - texto.length;
  caracteresRestantes.textContent = `Caracteres restantes: ${remaining}`;
  // Si excede el límite, se marca en rojo
  if (remaining < 0) {
    caracteresRestantes.style.color = 'red';
  } else {
    caracteresRestantes.style.color = '#777';
  }
});
// Escuchar el evento 'submit' del formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que la página se recarga
  const textoComentario = comentarioInput.value.trim();
  const nombreUsuario   = nombreInput.value.trim();
  // Validar que el nombre y comentario no deben estar vacíos
  if (!nombreUsuario || !textoComentario) {
    mostrarError("Por favor, escribe tu nombre y un comentario antes de enviarlo.");
    return;
  }
  // Validar el límite de caracteres
  if (textoComentario.length > MAX_CARACTERES) {
    mostrarError(`El comentario excede el límite de ${MAX_CARACTERES} caracteres.`);
    return;
  }
  // Ocultar el error si todo está bien
  ocultarError();
  // Crear el comentario en el DOM
  crearComentarioEnDOM(nombreUsuario, textoComentario);
  // Limpiar los campos y el contador
  comentarioInput.value           = "";
  nombreInput.value               = "";
  caracteresRestantes.textContent = "";
});
// Función para mostrar errores dentro del div #mensajeError
function mostrarError(mensaje) {
  mensajeError.textContent   = mensaje;
  mensajeError.style.display = 'block';
}
// Función para ocultar el mensaje de error
function ocultarError() {
  mensajeError.textContent   = "";
  mensajeError.style.display = 'none';
}
// Crear y agregar el comentario en el DOM
function crearComentarioEnDOM(nombreUsuario, textoComentario, fechaExistente) {
  // Crear el contenedor principal del comentario
  const comentarioDiv = document.createElement('div');
  comentarioDiv.classList.add('comentario');
  // Fecha y hora
  const fechaP       = document.createElement('p');
  fechaP.classList.add('fecha');
  const fechaActual  = fechaExistente || new Date().toLocaleString();
  fechaP.textContent = `Publicado: ${fechaActual}`;
  comentarioDiv.appendChild(fechaP);
  // Nombre o alias
  const nombreP       = document.createElement('p');
  nombreP.classList.add('autor');
  nombreP.textContent = nombreUsuario;
  comentarioDiv.appendChild(nombreP);
  // Texto del comentario
  const textoP       = document.createElement('p');
  textoP.textContent = textoComentario;
  comentarioDiv.appendChild(textoP);
  // Botón para eliminar comentario
  const btnEliminar       = document.createElement('button');
  btnEliminar.textContent = "Eliminar";
  btnEliminar.classList.add('btn-eliminar');
  btnEliminar.addEventListener('click', function() {
    const confirmar       = window.confirm("¿Estás seguro de eliminar este comentario?");
    if (confirmar) {
      contenedorComentarios.removeChild(comentarioDiv);
    }
  });
  comentarioDiv.appendChild(btnEliminar);
  // Agregar el comentario al contenedor principal
  contenedorComentarios.appendChild(comentarioDiv);
}
