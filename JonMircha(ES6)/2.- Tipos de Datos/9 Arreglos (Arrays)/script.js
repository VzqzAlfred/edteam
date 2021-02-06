/* Arreglos (Arrays) */

const a = [];
const b = [1, true, "Alfred", ['a', 'b', 'c', 'd', [1,2,3,4,5]]];

console.log(a);
console.log(b);
console.log(b.length);
console.log(b[2]);
console.log(b[3][3]);
console.log(b[3][4][2]);


// Nueva forma de declarar arreglos

const c = Array.of("X", "Y", "Z", 9, 8, 7);
console.log("\n",c);

const d = Array(100).fill("");      // fill(): Llena el arreglo con lo que lo indiques.
console.log(d, "\n", d.length);


const colores = ["Rojo", "Verde", "Azul"];
console.log(`\n ${colores} \n ${colores.push("Rosa", "Naranja")}, ${colores}`);
colores.pop();                      // pop() : Saca el último elemento del arreglo.
console.log("\n", colores);



// forEach(): Recorre los elementos del arreglo con la función y su parámetro declarado.
colores.forEach((elemento, index) => {
    console.log(`<li id="${index}">${elemento}</li>`);
});