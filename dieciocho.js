const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function contarLetraEnFrase() {
  rl.question('Introduce una frase: ', (frase) => {
    rl.question('Introduce la letra que deseas contar: ', (letra) => {
      const letraBuscada = letra.toLowerCase();
      const fraseEnMinusculas = frase.toLowerCase();
      const contador = contarLetra(fraseEnMinusculas, letraBuscada);

      console.log(`La letra "${letra}" aparece ${contador} veces en la frase.`);
      rl.close();
    });
  });
}

function contarLetra(frase, letra) {
  let contador = 0;
  for (let i = 0; i < frase.length; i++) {
    if (frase[i] === letra) {
      contador++;
    }
  }
  return contador;
}

contarLetraEnFrase();

