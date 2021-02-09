            /* Operadores de Cortocircuito. */

/*
    Cortocircuito OR: Cuando el valor de la izquierda en la expresión siempre pueda validar a true, es el valor que se encargará por defecto.
    
    Cortocircuito AND: Cuando el valor de la izquierda en la expresión siempre pueda validar a false, es el valor que se encargará por defecto.
*/

const saludar = nombre => {
    nombre = nombre || "Desconocido";
    console.log(`Hola ${nombre}`); 
}

saludar();
saludar("Alfred");

console.log("cadena" || "valor de la derecha");
console.log("0" || "valor de la derecha");
console.log(false || "valor de la derecha");
console.log(null || "valor de la derecha");
console.log(-0 || "valor de la derecha");

console.log("\n");

console.log("cadena" && "valor de la derecha");
console.log(false && "valor de la derecha");
console.log(null && "valor de la derecha");
console.log(-0 && "valor de la derecha");