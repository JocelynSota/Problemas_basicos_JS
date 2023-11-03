const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sN() {
  rl.question('Por favor, introduce S o N: ', (input) => {
    if (input === 'S' || input === 'N') {
      console.log(`Has introducido: ${input}`);
      rl.close();
    } else {
      console.log('Error: Debes introducir S o N.');
      sN();
    }
  });
}

sN();
