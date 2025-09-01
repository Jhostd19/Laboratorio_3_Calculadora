// --- Parte 1 --- Funciones Matematicas ---
// --- Funciones matemáticas ---
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => b !== 0 ? a / b : "No se puede dividir entre cero";

// --- Función que se encarga del cálculo paso 2
function realizarOperacion(num1, num2, operacion) {
  switch (operacion) {
    case "suma": return suma(num1, num2);
    case "resta": return resta(num1, num2);
    case "multiplicacion": return multiplicacion(num1, num2);
    case "division": return division(num1, num2);
    default: return "Operación inválida";
  }
}

// --- Calculadora para la interfaz visual - paso 3
function ejecutarCalculadora() {
  const numero1 = document.getElementById("num1").value;
  const numero2 = document.getElementById("num2").value;
  const operacion = document.getElementById("operacion").value;
  const resultadoElemento = document.getElementById("resultado");

  if (numero1 === "" || numero2 === "") {
    resultadoElemento.textContent = "Debes ingresar ambos números.";
    return;
  }

  const num1 = parseFloat(numero1);
  const num2 = parseFloat(numero2);

  if (isNaN(num1) || isNaN(num2)) {
    resultadoElemento.textContent = "Los valores deben ser numéricos.";
    return;
  }

  if (operacion === "division" && num2 === 0) {
    resultadoElemento.textContent = "No se puede dividir entre cero.";
    return;
  }

  const resultado = realizarOperacion(num1, num2, operacion);
  resultadoElemento.textContent = `Resultado: ${resultado}`;
}

// --- paso 4 Bucle para realizar multiples operaciones while
function iniciarCalculadora() {
  alert("Bienvenido a la Calculadora en modo interactivo.\n\n Puedes realizar sumas, restas, multiplicaciones y divisiones.\n Escribe 'si' cuando quieras seguir, o cualquier otra cosa para salir.");

  let continuar = true;

  while (continuar) {
    let num1 = prompt("Ingrese el primer número:");
    let num2 = prompt("Ingrese el segundo número:");
    let operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division):");

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      alert("Debes ingresar valores numéricos.");
    } else {
      const resultado = realizarOperacion(n1, n2, operacion);
      alert(`El resultado es: ${resultado}`);
    }

    let pregunta = prompt("¿Desea realizar otra operación? (si / no):");
    if (!pregunta || pregunta.toLowerCase() !== "si") {
      alert("Gracias por usar la calculadora. ¡Adiós!");
      continuar = false;
    }
  }
}

// --- Mostrar solo una sección a la vez ---
function mostrarSeccion(id) {
  const secciones = document.querySelectorAll("main section");
  secciones.forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}
