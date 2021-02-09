    /* Son un tipo de variable que no vayan a cambiar su valor. */
    
/* 
    CARACTERISTICAS:
1. No puede haber 'const' vacías, o sea sin un valor.
2. No se pueden reasignar valores en los tipos de datos primitivos.
3. En tipos de datos compuestos (array, object, function), se pueden agregar nuevos elementos, modificandolos.   

*/

const PI = 3.14159
console.log(PI);


// Ejemplo con tipos de datos compuesto.

const color = ["red", "blue", "purpple"];
console.log(color, "\n");

color.push("yellow");

console.log(color);


