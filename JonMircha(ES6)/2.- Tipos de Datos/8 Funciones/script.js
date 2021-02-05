        /* Manejo de Funciones. */

/* FUNCIONES:
    
    - Una función es un bloque de código, autocontenido, que se puede definir una vez y ejecutar en cualquier momento. 
    
    - Opcionalmente, una función puede aceptar parámetros y devolver un valor.   
    
    - Hay funciones expresadas y declaras.

    - Las funciones en JavaScript son objetos, un tipo especial de objetos. 
*/


// Función declarada.
function numbers(){
    console.log("One");
    console.log("Two");
    console.log("Three");
}

// Función con un parámetros
function saludar(nombre = "Desconocido", edad = 0) {
    console.log(`\n\n${nombre} con ${edad} años fue el valor asignado como parámetro en la función.`);
    return console.log(`Hola ${nombre}`);
}


// Invocación de función.
numbers();
saludar("Alfred", 24);
saludar();




// Función Declarada VS Función expresada

funcionDeclarada();

function funcionDeclarada(){
    console.log("\n\nEsta es una función Declarada, pude invocarse en cualquier parte del código, incluso antes de que la función sea declarada.");
}

funcionDeclarada();



    /* Funciones anónima (Expresada) */

// funcionExpresada(); //Si la invocamos antes, nos manda error.

const funcionExpresada = function() {
    console.log("\nEsto es una función expresada, es decir, una función que se le ha asignado como valor a una variable. :D, si la invocamos antes de su definición; JavaScriot nos dirá: Cannot access 'funcionExpresada' before initialization.");
}

funcionExpresada();