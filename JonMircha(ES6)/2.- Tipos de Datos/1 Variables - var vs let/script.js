/* Las variables 'var' son de ámbito global */
var hola = "Hola Amigos :D";
console.log(hola);


/* Las variables 'let' son de ámbito de bloque */
let hello = "Hello World!";
console.log(hello);


/***********  Ejemplo  **********/
/* 1 */
console.log(window.hola);
console.log(window.hello);


/* 2 */
console.log("********** VAR **********");
var music = "Rock";
console.log("Variable Music, antes del bloque: ", music);

{
    var music = "Metal /m/";
    console.log("Varianle Music dentro del bloque: ", music);
}

console.log("Variable Music, después del bloque: ", music);


/* 3 */
console.log("********** LET **********");
let deporte = "Fútbol";
console.log("Variable let deporte, antes del bloque: ", deporte);

{
    let deporte = "Americano";
    console.log("Varianle let deporte dentro del bloque: ", deporte);
}

console.log("Variable let deporte , después del bloque: ", deporte);