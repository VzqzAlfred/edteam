/* Undefined, null & NaN */

/* 
Undefined & null: Representan un valor ausente.
    - undefined: Es una variable que no ha sido inicializada asignada por JS.
    - null: Es un valor especial que indica la ausencia de un valor; el programador le agrega el valor de null. 
*/

let indefinida;
console.log(indefinida);

let nulo = null;
console.log(nulo);



/* NaN (Not A Number): Sucede cuando hacemos operaciones cuanod datos no son de tipo número */

let noEsUnNumero = "hola" * 5;
console.log(noEsUnNumero);