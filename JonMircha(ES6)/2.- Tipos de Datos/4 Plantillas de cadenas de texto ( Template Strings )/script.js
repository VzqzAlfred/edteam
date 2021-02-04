        // Template Strings

/* Interpolación y concatenación. */

let nombre = "Alfred";
let apellido = 'Vazquez';

// Concatenación: Es juntar.
let saludo = "Hola, mi nombre es: " + nombre + " " + apellido + " concatenado";
console.log(saludo);



// Interpolación de variables: Es meter dentro de una cadena de texto el valor dinámicamente de una variable.
let saludo2 = `Hola, mi nombre es ${nombre} ${apellido} interpolado.`
console.log("\n", saludo2)



// Más ejemplos 
let ul = "<ul><li>México</li><li>España</li></ul>"
console.log(ul);

let ul2 = `
<ul>
    <li>México</li>
    <li>España</li>
</ul>
`
console.log(ul2);