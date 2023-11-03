function lanzarMoneda() {
    
    const resultado = Math.random();
    
   
    if (resultado < 0.5) {
      return "cara";
    } else {
      return "cruz";
    }
  }
  
  const resultadoLanzamiento = lanzarMoneda();
  console.log(`El resultado del lanzamiento de la moneda es: ${resultadoLanzamiento}`);
  