const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numero1, numero2;
let count = 0;
let countPares = 0;
let sumaImpares = 0;

function printNumbers() {
  rl.question('Introduce el primer número: ', (input1) => {
    numero1 = parseInt(input1);
    if (isNaN(numero1)) {
      console.log('Error: Debes introducir un número válido.');
      printNumbers();
    } else {
      rl.question('Introduce el segundo número: ', (input2) => {
        numero2 = parseInt(input2);
        if (isNaN(numero2)) {
          console.log('Error: Debes introducir un número válido.');
          printNumbers();
        } else {
          rl.close();
          imprimirContarSumarNumeros();
        }
      });
    }
  });
}

function imprimirContarSumarNumeros() {
  let inicio = Math.min(numero1, numero2);
  let fin = Math.max(numero1, numero2);

  console.log(`Números naturales entre ${inicio} y ${fin}:`);
  for (let i = inicio; i <= fin; i++) {
    console.log(i);
    count++;
    if (i % 2 === 0) {
      countPares++;
    } else {
      sumaImpares += i;
    }
  }

  console.log(`Total de números naturales: ${count}`);
  console.log(`Total de números pares: ${countPares}`);
  console.log(`Suma de números impares: ${sumaImpares}`);
}

printNumbers();
