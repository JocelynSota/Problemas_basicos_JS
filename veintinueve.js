function tirarDado() {
    
    return Math.floor(Math.random() * 6) + 1;
  }
  
  function contarSuma10() {
    let conteo = 0;
  
    for (let i = 0; i < 100; i++) {
      const dado1 = tirarDado();
      const dado2 = tirarDado();
  
      if (dado1 + dado2 === 10) {
        conteo++;
      }
    }
  
    return conteo;
  }
  
  const vecesSuma10 = contarSuma10();
  console.log(`De 100 tiradas de dos dados, la suma de 10 ocurrió ${vecesSuma10} veces.`);
  