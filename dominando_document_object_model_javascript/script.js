// Referenciar los elementos del DOM
const pantallaContrasena  = document.getElementById("pantallaContrasena");
const botonCopiar         = document.getElementById("botonCopiar");
const rangoEntrada        = document.getElementById("rangoLongitud");
const rangoValor          = document.getElementById("rangoValor");
const incluirMayusculas   = document.getElementById("incluirMayusculas");
const incluirMinusculas   = document.getElementById("incluirMinusculas");
const incluirNumeros      = document.getElementById("incluirNumeros");
const incluirSimbolos     = document.getElementById("incluirSimbolos");
const botonGenerar        = document.getElementById("botonGenerar");
const etiquetaFuerza      = document.getElementById("etiquetaFuerza");
const barrasFuerza        = document.getElementById("barrasFuerza").querySelectorAll(".bar");
// Escuchar para cambiar el texto que muestra la longitud (10, 11, 12, etc.)
rangoEntrada.addEventListener("input", () => {
  rangoValor.textContent = rangoEntrada.value;
});
// Manejador de click en el botón "Generate"
botonGenerar.addEventListener("click", () => {
  const length = parseInt(rangoEntrada.value, 10);
  // Construir un conjunto de caracteres según checkboxes
  let chars = "";
  if (incluirMayusculas.checked) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (incluirMinusculas.checked) chars += "abcdefghijklmnopqrstuvwxyz";
  if (incluirNumeros.checked)    chars += "0123456789";
  if (incluirSimbolos.checked)   chars += "!@#$%^&*()_-+=<>?{}[]";
  // Si no se seleccionó ningún conjunto, forzar al menos uno (ej: minúsculas)
  if (chars === "") {
    chars = "abcdefghijklmnopqrstuvwxyz";
    incluirMinusculas.checked = true;
  }
  // Generar la contraseña con una función segura
  const generatedPassword = generateSecurePassword(length, chars);
  // Mostrar la contraseña generada
  pantallaContrasena.value = generatedPassword;
  // Actualizar indicador de fuerza (simple aproximación)
  updateStrengthIndicator(generatedPassword);
});
// Botón para copiar la contraseña al portapapeles
botonCopiar.addEventListener("click", () => {
  if (!pantallaContrasena.value) return;
  navigator.clipboard.writeText(pantallaContrasena.value)
    .then(() => {
      alert("¡Contraseña copiada!");
    })
    .catch((err) => {
      console.error("Error al copiar contraseña", err);
    });
});
/**
 * Genera una contraseña de manera criptográficamente segura
 * @param {number} length - Longitud de la contraseña
 * @param {string} chars - Caracteres disponibles para generar
 * @returns {string} Contraseña generada
 */
function generateSecurePassword(length, chars) {
  // Arreglo para valores aleatorios seguros
  const randomValues = new Uint32Array(length);
  crypto.getRandomValues(randomValues);
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars[randomValues[i] % chars.length];
  }
  return result;
}
// Función para actualizar la fuerza de la contraseña
function updateStrengthIndicator(password) {
  let                                              score = 0;
  if (password.length >= 8)                        score++;
  if (/[A-Z]/.test(password))                      score++;
  if (/[0-9]/.test(password))                      score++;
  if (/[!@#$%^&*()_\-+=<>?{}\[\]]/.test(password)) score++;
  // Limpia las barras
  barrasFuerza.forEach((bar, index) => {
    bar.style.background = index < score ? "#72d572" : "#444";
  });
  let                   label = "Muy débil";
  if      (score === 1) label = "Débil";
  else if (score === 2) label = "Media";
  else if (score === 3) label = "Fuerte";
  else if (score === 4) label = "Muy fuerte";
  etiquetaFuerza.textContent  = label;
}