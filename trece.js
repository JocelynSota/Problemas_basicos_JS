let count = 0;

console.log('Números que son múltiplos de 2 o de 3 entre 1 y 100:');
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0 || i % 3 === 0) {
    console.log(i);
    count++;
  }
}

console.log('Total de números que son múltiplos de 2 o de 3: ' + count);
