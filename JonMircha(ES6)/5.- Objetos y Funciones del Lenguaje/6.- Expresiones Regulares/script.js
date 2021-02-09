            /* Expresiones Regulares */

/* 
    Es una secuencia de carácteres que forman un patrón de búsqueda.
*/

let cadena = "Lorem imput set in dat loremque iure ea"
let expresionRegular = new RegExp("lorem","ig");     // 'i' es un parametro que ignora mayúsculas y minúsculas. 'g' no solo busca una coincidencia, sino busca todas



console.log(expresionRegular.test(cadena));     // test: busca en toda la cadena.
console.log(expresionRegular.exec(cadena));     // Devuelvé un arreglo
console.log("\n");


// Otra forma de declarar las expresiones regulares.
let expresionRegular2 = /lorem/ig;
console.log(expresionRegular2.test(cadena));
console.log(expresionRegular2.exec(cadena));