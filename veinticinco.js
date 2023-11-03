const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Introduce un número menor que 5000: ", (input) => {
  const num = parseInt(input);

  if (isNaN(num) || num <= 0 || num >= 5000) {
    console.log("Ingresa un número  menor que 5000.");
    rl.close();
  } 
  else {
    const numeroRomano = convertirANumeroRomano(num);
    console.log(`El número ${num} en números romanos es: ${numeroRomano}`);
    rl.close();
  }
});

function convertirANumeroRomano(numero) {
  const valoresRomanos = [
    { valor: 1000, romano: "M" },
    { valor: 900, romano: "CM" },
    { valor: 500, romano: "D" },
    { valor: 400, romano: "CD" },
    { valor: 100, romano: "C" },
    { valor: 90, romano: "XC" },
    { valor: 50, romano: "L" },
    { valor: 40, romano: "XL" },
    { valor: 10, romano: "X" },
    { valor: 9, romano: "IX" },
    { valor: 5, romano: "V" },
    { valor: 4, romano: "IV" },
    { valor: 1, romano: "I" }
  ];

  let numeroRomano = "";

  for (const parValorRomano of valoresRomanos) {
    while (numero >= parValorRomano.valor) {
      numeroRomano += parValorRomano.romano;
      numero -= parValorRomano.valor;
    }
  }

  return numeroRomano;
}
