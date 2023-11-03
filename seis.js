//Hacer un programa que imprima todos los números naturales que hay desde el uno hasta un
//número que introducimos por teclado.
let readline=require('readline/promises'); 
async function main(){ 
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let num=await rl.question('Escriba un numero: ');
    for(let i = 1; i <=+num; i++){
        console.log(i)
    };
    rl.close();


}

main();

