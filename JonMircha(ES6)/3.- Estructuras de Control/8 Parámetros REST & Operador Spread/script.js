        /* Parámetros REST & Operador Spread */

/* REST:
        Son una forma virtualmente de ir agregando parámetros infinitos; se expresa como:   ...variable
*/

function suma(x,y, ...c){       // ...  indica que no sabemos cuantos elementos vamos agregar, por eso la razón que se expresa de esa manera
    let resultado = x+y;
    
    c.forEach((elementos) =>{
        resultado += elementos;
    })

    return resultado;
}
console.log(suma(1,2));
console.log(suma(1,2,3,4,5,6,7,8,9,10));




// Operador Spread ...

const array1 = [5,10,15,20,25], 
      array2 = [3,6,9,12,15];

console.log(array1, array2);

const array3 = [...array1,...array2];   // Deshace los arreglos agregandolos al arreglo 3.
console.log(array3);