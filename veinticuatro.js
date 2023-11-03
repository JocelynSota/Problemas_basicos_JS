const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Introduce un número mayor o igual que la unidad: ", (input) => {
  const num = parseInt(input);

  if (isNaN(num) || num < 1) {
    console.log("Ingresa un número válido mayor o igual que la unidad.");
    rl.close();
  } else {
    const esPrimo = verificarPrimo(num);
    if (esPrimo) {
      console.log(`${num} es un número primo.`);
    } else {
      console.log(`${num} no es un número primo.`);
    }
    rl.close();
  }
});

function verificarPrimo(numero) {
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
