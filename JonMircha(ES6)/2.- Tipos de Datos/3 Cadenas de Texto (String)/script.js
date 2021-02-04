            /* Cadenas de Texto 'String' */

// Usando propiuedades en String

let nombre = "Alfred"; 
let apellido = 'VazQuEZ';
let signo = `Aries`;
let saludo = new String("Hola AMIGOS");
let lorem = "       Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."

console.log(nombre, apellido, signo, saludo);
console.log(apellido.length);
console.log(signo.length);
console.log(saludo.length);



// Usando métodos para String

console.log(nombre.toUpperCase());
console.log(saludo.toLowerCase());

console.log(
    lorem.includes("text"),     // includes: Verifica si existe la palabra en el string. 
    lorem.includes("Alfred"),
    lorem.trim()                // trim: Elimina los espacios en blanco al inicio y al final.
);

console.log("\n", lorem, "\n");

console.log(
    nombre.split(),               // split: Convierte un string a un arreglo.
    nombre.length
);