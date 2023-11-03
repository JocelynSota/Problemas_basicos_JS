function mostrarReloj(horas, minutos, segundos) {
    console.clear(); 
  
    
    const horaFormateada = horas.toString().padStart(2, '0');
    const minutoFormateado = minutos.toString().padStart(2, '0');
    const segundoFormateado = segundos.toString().padStart(2, '0');
  
    console.log(`${horaFormateada}:${minutoFormateado}:${segundoFormateado}`);
  }
  
  function ponerEnHora() {
    const rl = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    rl.question('Introduce la hora (0-23): ', (hora) => {
      rl.question('Introduce los minutos (0-59): ', (minutos) => {
        rl.question('Introduce los segundos (0-59): ', (segundos) => {
          rl.close();
          iniciarReloj(hora, minutos, segundos);
        });
      });
    });
  }
  
  function iniciarReloj(hora, minutos, segundos) {
    mostrarReloj(hora, minutos, segundos);
  
    setInterval(function () {
      segundos++;
      if (segundos === 60) {
        segundos = 0;
        minutos++;
        if (minutos === 60) {
          minutos = 0;
          hora++;
          if (hora === 24) {
            hora = 0;
          }
        }
      }
      mostrarReloj(hora, minutos, segundos);
    }, 1000); 
  }
  
  ponerEnHora();
  