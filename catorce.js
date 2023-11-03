const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numeros = [];
let contador = 1;

function mayorMinor() {
  rl.question(`Introduce el número ${contador}: `, (input) => {
    const number = parseFloat(input);

    if (isNaN(number)) {
      console.log('Error: Debes introducir un número válido.');
      mayorMinor();
    } else {
      numeros.push(number);
      contador++;

      if (contador <= 5) {
        mayorMinor();
      } else {
        rl.close();
        encontrarMayorYMenor();
      }
    }
  });
}

function encontrarMayorYMenor() {
  const mayor = Math.max(...numeros);
  const menor = Math.min(...numeros);

  console.log(`Números introducidos: ${numeros.join(', ')}`);
  console.log(`El número mayor es: ${mayor}`);
  console.log(`El número menor es: ${menor}`);
}

mayorMinor();
