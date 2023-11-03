const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numero1, numero2;
let count = 0;
let sumaMultiplosDe2 = 0;

function printNumbers() {
  rl.question('Introduce el primer número: ', (input1) => {
    numero1 = parseInt(input1);
    if (isNaN(numero1)) {
      console.log('Error: Debes introducir un número válido.');
      printNumbers();
    } else {
      rl.question('Introduce el segundo número (mayor o igual que el primero): ', (input2) => {
        numero2 = parseInt(input2);
        if (isNaN(numero2) || numero2 < numero1) {
          console.log('Error: Debes introducir un número válido y mayor o igual al primero.');
          printNumbers();
        } else {
          rl.close();
          imprimirContarSumarMultiplosDe2();
        }
      });
    }
  });
}

function imprimirContarSumarMultiplosDe2() {
  console.log(`Múltiplos de 2 entre ${numero1} y ${numero2}:`);
  for (let i = numero1; i <= numero2; i++) {
    if (i % 2 === 0) {
      console.log(i);
      count++;
      sumaMultiplosDe2 += i;
    }
  }

  console.log(`Total de múltiplos de 2: ${count}`);
  console.log(`Suma de múltiplos de 2: ${sumaMultiplosDe2}`);
}

printNumbers();
