const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function multTres() {
  rl.question('Por favor, introduce un número: ', (input) => {
    const number = parseInt(input);

    if (isNaN(number)) {
      console.log('Error: Debes introducir un número válido.');
      multTres();
    } else {
      printMuTres(number);
      rl.close();
    }
  });
}

function printMuTres(limit) {
  let count = 0;

  console.log('Múltiplos de 3 desde 1 hasta ' + limit + ':');
  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0) {
      console.log(i);
      count++;
    }
  }

  console.log('Total de múltiplos de 3: ' + count);
}

multTres();
