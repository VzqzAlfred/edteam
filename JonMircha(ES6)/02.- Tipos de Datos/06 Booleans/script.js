/* Tipos de Datos: Booleans */

let verdadero = true;
let falso = false;
let v = Boolean(true);
let f = Boolean(false);

console.log(verdadero, falso, v, f, "\n");
console.log(typeof verdadero);
console.log("\n", Boolean(0));

/* 
    Thruty: Valores que siempre daran verdadero;

if (true)
if ({})
if ([])
if (42)
if ("foo")
if (new Date())
if (-42)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)



    Falsy: Valores que siempre daran falso;

if (false)
if (null)
if (undefined)
if (0)
if (-0)
if (0n)
if (NaN)
if ("")
*/

console.log(Boolean(new Date()));
console.log(Boolean(""));