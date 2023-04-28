// Diccionario para encriptar y desencriptar
const mensajeEncriptado = text => {
  return text
  .replace(/e/g, "enter")
  .replace(/i/g, "imes")
  .replace(/a/g, "ai")
  .replace(/o/g, "ober")
  .replace(/u/g, "ufat")
}

const mensajeDesencriptado = text => {
  return text
  .replace(/enter/g, "e")
  .replace(/imes/g, "i")
  .replace(/ai/g, "a")
  .replace(/ober/g, "o")
  .replace(/ufat/g, "u")
}

// Expresion regular para validar el texto
const pattern = /[A-ZÁÉÍÓÚÜÑáéíóúüñ]/;

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
  document.getElementById('mensaje_inicial').classList.add('disable');
  document.getElementById('resultado').classList.remove('disable');
}

function sinResultado() {
  document.getElementById('mensaje_inicial').classList.remove('disable');
  document.getElementById('resultado').classList.add('disable');
}

/* Funcion para esconder mensaje de alerta cuando es necesario */
function alterta() {
  document.getElementById('alertText').classList.remove('disable');
  setTimeout(function() {
      document.getElementById('alertText').classList.add('disable');
  }, 3000);
}