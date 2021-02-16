            /* Iterables & Iterators */

//! Iterable: Es el elemento el cual su contenido se puede recorrer.

//! Iterador: Es el apuntador que esta recorriendo los elementos.

const iterable = [10,20,30,40,50];
/*
const iterable = "Hola amigos";
const iteable = new Set(1,3,9,8,5,4,5,4,3);
const iterable = new Map([["nombre", "Alfred"],["apellido", "vzqz"]])
*/

// Accedemos al iterador del iterable.
const iterador = iterable[Symbol.iterator]();
console.log(iterable);
console.log(iterador);

// next(): Método que recorre el iterador (Devuelve value: , done: "El valor del elemento que va recorriendo y done si ai termina el iterador")
/*
console.log(iterador.next());   //value: 10
console.log(iterador.next());   //value: 20
console.log(iterador.next());   //value: 30
console.log(iterador.next());   //value: 40
console.log(iterador.next());  
console.log(iterador.next()); 
*/

let next = iterador.next();

while(!next.done){
    console.log(next.value);
    next = iterador.next();     //* Guarda el siguiente valor
}