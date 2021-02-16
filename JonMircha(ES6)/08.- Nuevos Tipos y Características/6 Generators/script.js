            /* Generators */

//* LLevan un *, que indica que es un generador

// Un generador es convetir el código de una función en iterable


function* iterable () {

    //* yield: es como un return
    yield "hola";
    console.log("Hola consola");
    yield "hola 2";
    console.log("Seguimos en más instrucciones de nuestro código.");
    yield "hola 3";
    yield "hola 4";
}

let iterador = iterable();
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());

for(let y of iterador){
    console.log(y);
}
console.log("\n");



// Pasando a un arreglo los yield de la función generadora
const arr = [...iterable()]
console.log(arr);
console.log("\n");





// Realizando el ejercicio de la asíncronia (números cuadrados)
function cuadrado(valor) {
    setTimeout(() => {
        console.log({valor, resultado:valor*valor});
    }, Math.random() * 1000);
}

function* generador(){
    console.log("Inicia Generator");
    yield cuadrado(0);
    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(3);
    yield cuadrado(4);
    yield cuadrado(5);
    console.log("Termina Generator");
}

let gen = generador();
for(let y of gen){
    y
}