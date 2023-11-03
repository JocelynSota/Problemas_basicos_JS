const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function imparOrPar() {
  rl.question('Introduce un número: ', (input) => {
    const number = parseFloat(input);

    if (number % 2 === 0) {
        console.log(`${number} es par`);
        rl.close();
        } else if (number % 2 !== 0) {
            console.log(`${number} es impar`);
            rl.close();
        }
      
  });
}

imparOrPar();