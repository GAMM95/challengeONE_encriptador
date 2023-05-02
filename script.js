// inputs
const textarea1 = document.getElementById("mensaje");

// Diccionario de vocales a encriptar
const mensajeEncriptado = text => {
  return text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat")
}
// Diccionario de vocales a desencriptar
const mensajeDesencriptado = text => {
  return text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u")
}

// Restriccion de patrones para validar mensaje de entrada a traves de expresiones regulares
const pattern = /[A-ZÁÉÍÓÚÜÑáéíóúüñ0123456789\^$.!°"%&¿¡#*+?=!:@>´¨`^;:|\\/()\[\]{}]/;

// Funcion para encriptar texto
function encriptar(e) {
  e.preventDefault();

  // Metodos para encriptar y mostrar en pantalla
  let text = document.getElementById('mensaje').value;
  // Validar si el texto cumple con la expresion regular
  if (pattern.test(text) == true) {
    swal("Oops", "Solo letras minúsculas y sin caracteres especiales!", "error")
    resultadoSinTexto();
    return;
  }
  if (text != '') {// Validar si hay texto para encriptar
    text = mensajeEncriptado(text);
    resultadoConTexto(text);
  } else { // Validar si no hay texto para encriptar
    resultadoSinTexto();
    swal("No ingreso texto?", "Escriba algo que quiera encriptar o desencriptar ...!");
  }
}
// Funcion para desencriptar texto
function desencriptar(e) {
  e.preventDefault();

  // Metodos para encriptar y mostrar en pantalla
  let text = document.getElementById('mensaje').value;
  // Validar si el texto cumple con la expresion regular
  if (pattern.test(text) == true) {
    swal("Ups", "Solo letras minúsculas y sin caracteres especiales!", "error");
    resultadoSinTexto();
    return;
  }

  if (text != '') { // Validar si hay texto para encriptar
    text = mensajeDesencriptado(text);
    resultadoConTexto(text);
  } else { // Validar si no hay texto para encriptar
    resultadoSinTexto();
    swal("No ingreso texto?", "Escriba algo que quiera encriptar o desencriptar ...!");
  }
}

// Funcion para copiar mensaje encriptado o desencriptado
async function copiarPortapapeles() {
  let text = document.getElementById('texto').innerHTML;
  textarea1.value = "";
  await navigator.clipboard.writeText(text);
  swal("Buen trabajo!", "Texto copiado con éxito", "success");
}

function resultadoConTexto(text) {
  document.getElementById('texto').innerHTML = text;
  document.getElementById('mensaje_inicial').classList.add('disable'); // Ocultar imagen
  document.getElementById('resultado').classList.remove('disable');
}

function resultadoSinTexto() {
  document.getElementById('mensaje_inicial').classList.remove('disable'); // seguir mostrando imagen
  document.getElementById('resultado').classList.add('disable');
}