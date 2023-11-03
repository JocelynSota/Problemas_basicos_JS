const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const calificaciones = [];
const numAsignaturas = 10;

function obtenerCalificaciones() {
  rl.question(`Ingresa la calificación numero ${calificaciones.length + 1}: `, (calificacion) => {
    calificacion = parseFloat(calificacion);
    if (!isNaN(calificacion)) {
      calificaciones.push(calificacion);
    }

    if (calificaciones.length < numAsignaturas) {
      obtenerCalificaciones();
    } else {
      rl.close();
      calcularMedia();
    }
  });
}

function calcularMedia() {
  const sumaCalificaciones = calificaciones.reduce((acumulador, calificacion) => acumulador + calificacion, 0);
  const media = sumaCalificaciones / numAsignaturas;
  console.log(`Calificaciones ingresadas: ${calificaciones.join(', ')}`);
  console.log(`La media de las calificaciones es: ${media}`);
}

console.log("Ingresa las calificaciones para las 10 asignaturas:");
obtenerCalificaciones();
