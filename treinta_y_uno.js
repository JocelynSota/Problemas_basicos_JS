const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function obtenerNumero(mensaje) {
  return new Promise((resolve) => {
    rl.question(mensaje, (numero) => {
      resolve(parseInt(numero));
    });
  });
}

function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }

  if (numero <= 3) {
    return true;
  }

  if (numero % 2 === 0 || numero % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= numero; i += 6) {
    if (numero % i === 0 || numero % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

function calcularFactorial(numero) {
  if (numero < 0) {
    return -1; // No se puede calcular el factorial de un número negativo
  }
  
  if (numero === 0) {
    return 1; // Factorial de 0 es 1
  }

  let factorial = 1;
  for (let i = 1; i <= numero; i++) {
    factorial *= i;
  }

  return factorial;
}

async function main() {
  const numero = await obtenerNumero("Introduce un número: ");
  console.log(`Número ingresado: ${numero}`);

  console.log("Selecciona una opción:");
  console.log("1. Comprobar si es primo");
  console.log("2. Calcular el factorial");
  console.log("3. Imprimir tabla de multiplicar");

  rl.question("Ingresa el número de la opción que deseas: ", async (opcion) => {
    switch (parseInt(opcion)) {
      case 1:
        if (esPrimo(numero)) {
          console.log(`${numero} es un número primo.`);
        } else {
          console.log(`${numero} no es un número primo.`);
        }
        break;
      case 2:
        const factorial = calcularFactorial(numero);
        if (factorial !== -1) {
          console.log(`El factorial de ${numero} es: ${factorial}`);
        } else {
          console.log("No se puede calcular el factorial de un número negativo.");
        }
        break;
      case 3:
        console.log(`Tabla de multiplicar de ${numero}:`);
        for (let i = 1; i <= 10; i++) {
          console.log(`${numero} x ${i} = ${numero * i}`);
        }
        break;
      default:
        console.log("Opción no válida.");
        break;
    }
    
    rl.close();
  });
}

main();
