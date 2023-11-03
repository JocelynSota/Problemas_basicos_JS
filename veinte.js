function calcularFactorial(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
      factorial *= i;
    }
    return factorial;
  }
  
  const numero = 5; 
  const resultado = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es ${resultado}`);
  