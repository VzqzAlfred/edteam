            /* JSON: JavaScript Object Notation */

/*
Es un formato ligero de intercambio de datos. Leerlo y escribirlo es simple para humanos, mientras que para las máquinas es fácil de interpretar y generar.
*/

const json = {
    cadena: "Grechen",
    numero: 9,
    booleano: true,
    arreglo: ["comer", "dormir", "correr"],
    objeto: {
        twitter: "@GreChen",
        email: "Gret@hotmail.com"
    },
    nulo: null
}

console.log(json);



//? Método: JSON.parse()
/*
    Analiza una notación JSON (una cadena de texto) y la va a convertir a un tipo de dato que JS valide como un objeto, arreglo, boolean, number & null.
 */
console.log(JSON);

//* verificar en consola de navegador *
console.log(JSON.parse("{}"));
console.log(JSON.parse("[]"));
console.log(JSON.parse("true"));
console.log(JSON.parse("false"));
console.log(JSON.parse("56"));
console.log(JSON.parse("null"));




console.log("\n\n");
//? Método: stringify()
/* Convierte un objeto o valor de JS lo convierte a cadena de texto. */

console.log(JSON.stringify({}));
console.log(JSON.stringify([]));
console.log(JSON.stringify(true));
console.log(JSON.stringify(false));
console.log(JSON.stringify(56));
console.log(JSON.stringify(null));
console.log(JSON.stringify(undefined));
console.log("\n\n");





// Lo convierte a notación JSON
console.log(JSON.stringify({x:2, y:4}));
console.log(JSON.stringify(json));


// Convirtiendo a un objeto JS
console.log(JSON.parse('{"cadena": "Grechen", "numero": "9", "booleano": "true", "arreglo": ["comer","dormir","correr"], "objeto": { "twitter": "@GreChen", "email": "Gret@hotmail.com"}, "nulo": null}'));