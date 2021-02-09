            /* Módulos (import & export) */

// Los 'default' 
import saludar, {Saludar, PI, usuario} from "./constantes.js";
import {artimetica as operacion} from "./aritmetica.js"

console.log("Archivo: js/modulos.js");
console.log(PI, usuario);

console.log("Hola, soy una suma: ",operacion.sumar(5,2));
console.log("Hola, soy una resta: ", operacion.restar(25, 8));
saludar();

let saludo = new Saludar();
saludo;