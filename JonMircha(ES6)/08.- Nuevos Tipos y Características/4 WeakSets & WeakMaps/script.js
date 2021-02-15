            /* WeakSets & WeakMaps */

/* Conjuntos débiles, Mapas débiles
    ?- Solo pueden almacenar valores débiles.
    ?- No se pueden iterar en ellos (forOf, forEcah, forIn)
    ?- No se pueden eliminar valores de un jalon (Solo en uno en uno).
    ?- No tienen la propiedad size.
*/

// Agregando valor uno por uno para weakSet (No se puede de un jalón)
const ws = new WeakSet();

let valor1 = {"valor1": 1},
    valor2 = {"valor2": 2},
    valor3 = {"valor3": 3};

ws.add(valor1);
ws.add(valor2);
ws.add(valor3);

console.log(ws)
console.log(ws.has(valor2));
console.log(ws.has(valor3));
console.log("\n");


// Eliminando un valor
ws.delete(valor2);
console.log(ws.has(valor2));
console.log("\n");




/* weakMap */
const wm = new WeakMap();

let llave1 = {},
    llave2 = {},
    llave3 = {};

// Agregando 
wm.set(llave1, 1);
wm.set(llave2, 2);
console.log(wm);

//Imprimiendo un valor del weakMap
console.log(wm.get(llave1));


// Verificando si tiene un valor
console.log(wm.has(llave3));
console.log("\n");


//Eliminado un objeto
wm.set(llave3, 3);
console.log(wm);
console.log(wm.delete(llave1));
console.log(wm);