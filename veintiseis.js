const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Introduce una frase: ", (frase) => {
  const screenWidth = process.stdout.columns; 
  const centro = Math.floor((screenWidth - frase.length) / 2); 

  if (centro < 0) {
    
    console.log("La frase es demasiado larga para centrar en la pantalla.");
  } else {
   
    console.log(' '.repeat(centro) + frase);
  }

  rl.close();
});
