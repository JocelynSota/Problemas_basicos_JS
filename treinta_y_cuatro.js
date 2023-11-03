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
      rl.question("Ingresa un número para buscar las calificaciones correspondientes: ", (numero) => {
        numero = parseFloat(numero);
        if (!isNaN(numero)) {
          calcularMedia();
          buscarCalificaciones(numero);
        } else {
          console.log("Número inválido. Sólo se calculará la media.");
          calcularMedia();
          rl.close();
        }
      });
    }
  });
}

function calcularMedia() {
  const sumaCalificaciones = calificaciones.reduce((acumulador, calificacion) => acumulador + calificacion, 0);
  const media = sumaCalificaciones / numAsignaturas;
  console.log(`Calificaciones ingresadas: ${calificaciones.join(', ')}`);
  console.log(`La media de las calificaciones es: ${media}`);
}

function buscarCalificaciones(numero) {
    const calificacionesEncontradas = [];
    
    calificaciones.forEach((calificacion, index) => {
      if (calificacion === numero) {
        calificacionesEncontradas.push({ calificacion, posicion: index });
      }
    });
  
    if (calificacionesEncontradas.length > 0) {
      console.log(`Calificaciones encontradas para ${numero}:`);
      calificacionesEncontradas.forEach(item => {
        console.log(`Posición: ${item.posicion}`);
      });
    } else {
      console.log(`No se encontraron calificaciones para ${numero}.`);
    }
  }
  

console.log("Ingresa las calificaciones para las 10 asignaturas:");
obtenerCalificaciones();
