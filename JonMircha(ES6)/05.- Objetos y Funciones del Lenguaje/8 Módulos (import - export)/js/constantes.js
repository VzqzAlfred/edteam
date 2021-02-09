export const PI = Math.PI;

export let usuario = "Alfred";

let password = "qwerty";
//export default password;
// en let, y const, no tienen un hosting, asi que se exporta por default de esa manera



// Únicamente clases y funciones declaradas se pueden exportar seguido de default
// *Nota: Solo puedes exportar por default UNA SOLA VEZ.
export default function saludar(){
    console.log("Hola, soy exportado de 'js/constantes.js' siendo una función llamada saludar. HOLAA!!!");
}

export /*default*/ class Saludar{
    constructor(){
        console.log("Hola, soy una clase exportada de 'js/constantes.js' siendo una clase +ES6. HOLA!!!");
    }
}