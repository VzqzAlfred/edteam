            /* Sets */

// Tienen una estructura al igual y como un array pero de datos únicos, que solo acepta valores únicos.
//? - Puede eliminar las palabras repetidas

const set = new Set([1,2,3,3,5,4,6,6,8,5,5,4,true, false, false, {}, {}, true, true, "hola", "HOLA"]);
console.log(set);

// Para saber longitud de un set, en lugar de lenght es 'size'
console.log(set.size);

// Agregando valores a SET()
const set2 = new Set();
set2.add(1)
set2.add(2)
set2.add(2)
set2.add(3)
set2.add(true)
set2.add(false)
set2.add(true)
set2.add({})
console.log(set2);
console.log(set2.size);

console.log("Recorriendo set2 utilizando forOf");
for (let elemento of set2){
    console.log(elemento);
}

console.log("Recorriendo set2 utilizando forEach");
set2.forEach((elemento) => {
    console.log(elemento);
})



console.log("\n");
console.log("Accediendo a los elementos únicos del Set");
//? Lo convierte a un arreglo

let arr = Array.from(set2)
console.log(arr); 
console.log(arr[0]);
console.log(arr[4]);



console.log("\n");
//Eliminando valores del Set
set.delete("hola");
let arrSet1 = Array.from(set);
console.log(arrSet1);



console.log("\n");
// has(): Comprueba si ese valor existe dentro de la colección de datos.
console.log(set.has("hola"));



// Limpiando el set
set2.clear();
console.log(set2);