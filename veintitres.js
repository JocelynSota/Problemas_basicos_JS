const maxNumero = 100;
const columnasPorFila = 10;

for (let i = 0; i <= maxNumero; i++) {
  process.stdout.write(i.toString().padStart(3, ' ') + ' ');

  
  if ((i + 1) % columnasPorFila === 0) {
    process.stdout.write('\n');
  }
}
