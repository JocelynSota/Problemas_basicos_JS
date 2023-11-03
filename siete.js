//
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let fraseCount = 0;

function contarFrases() {
  rl.question('Introduce una frase (o escriba "salir" para finalizar): ', (frase) => {
    if (frase.toLowerCase() === 'salir') {
      rl.close();
      console.log(`Has introducido ${fraseCount} frases.`);
    } else {
      fraseCount++;
      contarFrases();
    }
  });
}

contarFrases();
