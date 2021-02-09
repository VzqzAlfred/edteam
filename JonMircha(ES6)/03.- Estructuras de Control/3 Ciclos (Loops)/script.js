/* Ciclos (Loops) */

// while
let contador = 0;
while(contador <= 10){
    console.log("while: "+contador);
    contador++;
}

// do - while
/* do {
    console.log("do - while: "+contador);
    contador++
} while(contador<=10)*/



// for 
let colores = ["Amarrillo", "Rojo", "Azul", "Morado", "Blanco", "Negro", "Gris", "Café"];
for(let i = 1; i < colores.length; i++){
    let elementos = colores[i];
    console.log(`Ejecutada con 'for':${i}.- color: ${elementos}`);
}
console.log("\n");

// for-in:  Va enfocado solo para objetos, para recorrer sus propiedades.

const persona = {
    nombre: "Alfred",
    edad: 24,
    estatura: 1.72,
    peso: 74
}

for (const propiedad in persona) {
    console.log(`key: ${propiedad}, value: ${persona[propiedad]}`);     // con [], como los arreglos, se accede a las atributos del objeto.
}
console.log("\n");



// for-Of: Enfocado para recorrer todos los elementos de un arreglo.
for (let valor of colores) {
    console.log("Usando for( Of ): ",valor);
}
console.log("\n");

let cadenita = "Hola amigos";
for (const caracter of cadenita) {
    console.log(caracter);
}
console.log("\n");



// forEach(() => {})
colores.forEach((element, position) => {
    console.log(`Usando el método forEach(): ${position} color: '${element}'`)
})