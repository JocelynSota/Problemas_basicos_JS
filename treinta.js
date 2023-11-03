const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function obtenerNumero(mensaje) {
  return new Promise((resolve) => {
    rl.question(mensaje, (numero) => {
      resolve(parseFloat(numero));
    });
  });
}

async function main() {
  console.log("Calculadora de dos números");
  const numero1 = await obtenerNumero("Introduce el primer número: ");
  const numero2 = await obtenerNumero("Introduce el segundo número: ");

  console.log("Selecciona una operación:");
  console.log("1. Suma");
  console.log("2. Resta");
  console.log("3. Multiplicación");
  console.log("4. División");

  rl.question("Ingresa el número de la operación que deseas realizar: ", (opcion) => {
    switch (parseInt(opcion)) {
      case 1:
        console.log(`La suma de ${numero1} y ${numero2} es: ${numero1 + numero2}`);
        break;
      case 2:
        console.log(`La resta de ${numero1} y ${numero2} es: ${numero1 - numero2}`);
        break;
      case 3:
        console.log(`La multiplicación de ${numero1} y ${numero2} es: ${numero1 * numero2}`);
        break;
      case 4:
        if (numero2 === 0) {
          console.log("No se puede dividir por cero.");
        } else {
          console.log(`La división de ${numero1} entre ${numero2} es: ${numero1 / numero2}`);
        }
        break;
      default:
        console.log("Operación no válida.");
        break;
    }
    
    rl.close();
  });
}

main();
