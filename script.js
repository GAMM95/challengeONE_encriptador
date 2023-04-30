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

// Restriccion de patrones para validar mensaje de entrada
const pattern = /[A-ZÁÉÍÓÚÜÑáéíóúüñ0123456789]/;

// Funcion para encriptar texto
function encriptar(e) {
  e.preventDefault();

  // Metodos para encriptar y mostrar en pantalla
  let text = document.getElementById('mensaje').value;
  // Validar si el texto cumple con la expresion regular
  if (pattern.test(text) == true) {
    alterta();
    sinResultado();
    return;
  }
  // Validar si hay texto para encriptar
  if (text != '') {
    text = mensajeEncriptado(text);
    resultado(text);
  } else {
    sinResultado();
  }
}
// Funcion para desencriptar texto
function desencriptar(e) {
  e.preventDefault();

  // Metodos para encriptar y mostrar en pantalla
  let text = document.getElementById('mensaje').value;
  // Validar si el texto cumple con la expresion regular
  if (pattern.test(text) == true) {
    alterta();
    sinResultado();
    return;
  }
  // Validar si hay texto para encriptar
  if (text != '') {
    text = mensajeDesencriptado(text);
    resultado(text);
  } else {
    sinResultado();
  }
}

// Funcion para copiar el mensaje al portapapeles
async function copiarPortapapeles() {
  let text = document.getElementById('texto').innerHTML;
  try {
    await navigator.clipboard.writeText(text);
    // mostrar mensaje de copiado
    console.log("Texto copiado al portapapeles");
  } catch (err) {
    // mostrar mensaje de no copiado
    console.error("Error al copiar texto al portapapeles:", err);
  }
}

function resultado(text) {
  document.getElementById('texto').innerHTML = text;
  document.getElementById('mensaje_inicial').classList.add('disable'); // Ocultar imagen
  document.getElementById('resultado').classList.remove('disable');
}

function sinResultado() {
  document.getElementById('mensaje_inicial').classList.remove('disable'); // seguir mostrando imagen
  document.getElementById('resultado').classList.add('disable');
}

/* Funcion para esconder mensaje de alerta cuando es necesario */
function alterta() {
  document.getElementById('alertText').classList.remove('disable');
  setTimeout(function () {
    document.getElementById('alertText').classList.add('disable');
  }, 3000);
}