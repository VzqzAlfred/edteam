/* Tipos de Datos: Números (Numbers) */

let a = 2;
let b = new Number(3);
let c = 7.19;
let d = "5.28"; 

console.log(a, b);

console.log(c.toFixed(3));       // toFixed: Método que agrega decimales
console.log("\t",parseInt(c));   // parseInt: Convierte a un entero
console.log("\n", parseFloat(c));// parseFlolat: Convierte a un número a decimal.

console.log(a+b);
console.log(c+d);
console.log("\n", c + parseFloat(d), "Suma de un num conviertiendo un string a un número flotante C:");

// or 
console.log("\n", c + Number.parseFloat(d));