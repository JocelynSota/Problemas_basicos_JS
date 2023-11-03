const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function positiveOrNegative() {
  rl.question('Introduce un número: ', (input) => {
    const number = parseFloat(input);

    if (number > 0) {
        console.log(`${number} es positivo`);
        rl.close();
        } else if (number < 0) {
            console.log(`${number} es negativo`);
            rl.close();
        }
      
  });
}

positiveOrNegative();
