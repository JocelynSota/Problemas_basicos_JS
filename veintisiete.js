const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Introduce un número entre 0 y 10: ", (input) => {
  const numero = parseInt(input);

  if (isNaN(numero) || numero < 0 || numero > 10) {
    console.log("Ingresa un número válido entre 0 y 10.");
    rl.close();
  } else {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
      const resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
    rl.close();
  }
});
