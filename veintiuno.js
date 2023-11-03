let sumaP=0
let sumaI=0

for(let i=1; i<101; i++){
    if (i % 2 === 0) {
        sumaP += i;
    }
    else {
        sumaI += i;
    }

}
    

console.log('Suma de los números pares del 1 al 1000: ' + sumaP);
console.log('Suma de los números impares del 1 al 1000: ' + sumaI);
