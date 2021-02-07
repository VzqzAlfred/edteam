        /* Break & Continue */

const numeros = [10,20,30,40,50,60,70,80,90,100];

for (let i=0; i < numeros.length; i++){
    if(i===5){
        break;
    }
    console.log(numeros[i]);
}
console.log("\n");



for (let i=0; i < numeros.length; i++){
    if(i===5){
        continue;       // Omite el de la posición 5 no imprimiendolo.
    }
    console.log(numeros[i]);
}