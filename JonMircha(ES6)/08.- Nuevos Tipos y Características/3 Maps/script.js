            /* Map */

// Map: son objetos que nos sirven para almacenar un conjunto de valores asociados en manera de objeto.

let mapa = new Map();
mapa.set("Nombre", "Alfred");
mapa.set("Apellido", "Vzqz");
mapa.set("Edad", 24)
console.log("\n");


// Tamaño de un mapa
console.log(mapa);
console.log(mapa.size,"\n");
console.log("\n");


// Si existe alguna llave y obtener un valor
console.log(mapa.has("Nombre"));
console.log(mapa.get("Nombre"));
console.log("\n");


// Reescribir el valor de alguna llave
console.log(mapa.set("Nombre", "Alfredo"));
console.log("\n");


// Eliminando elemento de un mapa
console.log(mapa.delete("Apellido"))
console.log(mapa);
console.log("\n");


// Recorriendo un mapa
for (let [key, elemento] of mapa) {
    console.log(key, ":", elemento);
}
console.log("\n");


// Podemos agregar llaves de diferente tipo (ES INADECUADO)
mapa.set(13, "trece");
mapa.set(true, "verdadero");
console.log(mapa.set(null, "nulo"));
console.log(mapa.set(undefined, null));
console.log(mapa);
console.log("\n");


// Deestructurando un mapa y recorriendolo
const mapa2 = new Map([
    ["nombre", "Tanhauss"],
    ["edad", "9"],
    ["animal", "gato"],
    [null, "Nulo"]
])
console.log(mapa2);
for (const [index, elemento] of mapa2) {
    console.log(`Llave '${index}': ${elemento}`);
}
console.log("\n");



// Convirtiendo las llaves y valores de mapa2 almacenandolos en variables diferentes
const llavesMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];
console.log(llavesMapa2);
console.log(valoresMapa2);