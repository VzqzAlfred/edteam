            /* Symbols */

//! Sumbol(): Es un tipo de dato primitivo, se mantienen privados y se manejo interno. Nos permiten crear identificadores unicos 
// * Symbol() va sin el *new*

let id = Symbol("id"), 
    id2 = Symbol("id");

console.log(id === id2);
console.log(id,id2);
console.log(typeof(id), typeof(id2));

const NOMBRE = Symbol("name");
const SALUDAR = Symbol("saludar");

// Los corchete hacen referencia a que es un tipo symbol
const persona = {
    [NOMBRE]: "Alfred symbol"
}
console.log(persona);



persona.NOMBRE = "Alfredo";
console.log("\n",persona);

console.log(persona.NOMBRE);
console.log(persona[NOMBRE]);



// Agregando otro simbolo al objeto
persona[SALUDAR] = function(){
    console.log("Hola");
}



// TODO: Accede a las propiedades pero no a los symbols porque son privados.
console.log(persona);
persona[SALUDAR]();

for (let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
}




// TODO: Accediendo a los symbols, listandolos
console.log(Object.getOwnPropertySymbols(persona));