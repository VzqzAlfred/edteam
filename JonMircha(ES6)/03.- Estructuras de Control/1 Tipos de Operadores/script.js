        /* Tipos de Operadores */

// Aritméticos: +, -, *, /, %, ()
let a = 5+(5-10)*3;
let modulo = 5%2;       // Devuelve el residuo de una división.
let mod = 7%4;

console.log(a);
console.log(modulo);
console.log(mod, "\n");



// Relacionales: >, <, >=, <=, ==, ===, !=, !==
console.log(8>9);           // false
console.log(9>=8);          // true

/*
    =   Asignación
    ==  Comparación de valores
    === Comparación de tipo de datos y de valor.
*/

console.log(15 == "15");    // true
console.log(15 === "15");   // false
console.log(15 != "10");    // true
console.log(15 !== "10");   // true
console.log("\n");



// Incremento y Decremento: ++, --
let i = 1;
i += 2;         // i = i + 2
console.log(i);
i++;            // i +=1  ó  i = i + 1
console.log(i);
i--;            // i -=1  ó  i = i - 1
console.log(i);



// Operadores Lógicos: !-(Not), ||-(Or), &&-(And)
console.log(!(5 === "5"));