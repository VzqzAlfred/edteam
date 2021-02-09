        /* Objeto console */


console.log(console);
console.error("Esto es un error.");     // Para dar errores en consola
console.warn("Esto es un aviso.");      // Para dar warnings en la consola.
console.info("Para dar información en la consola.");

//console.clear();                        // Limpia la consola. 

//console.log(window);        // window: Es el objeto global de JS en los navegadores, que representa la ventana del navegador.        

//console.log(document);    // Te imprime las etiquetas del HTML
//console.dir(window);      // Imprime propiedades y métodos de window

//console.dir(document);      // Imprime propiedades y métodos de document

// Agrupación en consola. 
console.group("Materias en ESCOM");
console.log("Análisis de Algoritmos: Luna Benoso.");
console.log("Bases de Datos: Euler.");
console.log("Arquitectura de Computadoras: Nayelli Vega.");
console.log("Teoría de Señales: Jacqueline.");
console.groupEnd();


console.groupCollapsed("Materias en ESCOM");
console.log("Análisis de Algoritmos: Luna Benoso.");
console.log("Arquitectura de Computadoras: Nayelli Vega.");
console.log("Teoría de Señales: Jacqueline.");
console.groupEnd();


// Tablas       sort: sirve para ordenar en alfabéticp
console.table(Object.entries(console).sort());

const numeros = [10,20,30,40,50],
      vocales = ["a", "e", "i", "o", "u"];
console.table(numeros);
console.table(vocales);

const perro = {
    name: "neni",
    edad: 15,
    color: "white"
}
console.table(perro);

// lo que va entre "" tiene que ser la misma en ambos como para time y timeEnd
console.time("¿Cuánto tiempo tarda mi código?");
    const arreglo = Array(1000000);
    for(let i=0; i<arreglo.length; i++){
        arreglo[i] = i;
    }
console.timeEnd("¿Cuánto tiempo tarda mi código?");
//console.log(arreglo);



for(let i=0; i<15; i++){
    // Hace un conteo de cuantás veces se ejecutó el código.
    console.count("codigo for: ")
    console.log(i);
}


let x = 1, //3, así ejecutara el error en la consola, verificando con assert
    y = 2, 
    pruebaXY = "Se espera que 'X' siempre sea menor que 'Y'";
console.assert(x<y, {x,y,pruebaXY})