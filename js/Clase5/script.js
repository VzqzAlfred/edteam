/*          Desestructuración de un arreglo.
    let array = ['hola', 3, false, [0,1,2,3], {}]
    
    let string1 = array[0]
    let string1 = array[1]
    let string1 = array[2]
    . . . 
    ó

    let [s1,s2,s3,s4,s5] = array    // Y así guarda cada valor del array
*/

/*      Agregar y quitar valores de un array. 
    AL FINAL
    .push(value)
        Agrega value como nuevo elemento del arreglo
    .pop()
        quita y retoma el último elemento del arreglo

    AL INICIO
    .unshift(value)
        Agrega value como nuevo elemento al arreglo
    .shift()
        Elimina y retorna el primer valor

*/

let arr = [1,2,3,4]
arr.push('end') // Se agrega el end
console.log(arr);

arr.pop()   //  Quita el último elemento 
console.log(arr);

arr.unshift('new')  //Agrega el elemento new
console.log(arr);

arr.shift()     //Quita el primer elemento
console.log(arr)

/*      Agregar y quitar elementos entre arreglos 
    .splice(startIndex,quantity,value1,value2...)
        Retorna un array con los elementos

        startIndex
            Indíce en el que se insertarán 
        quantity
            Cantidad de elementos que serán 
        value1, value2, value3...
            Valores que serán añadidos al array 
    
    .slice(start, end)
        Extrae en un nuevo array los valores
    arr.slice(2,4)      //Imprime desde el elemento 2 y hasta el 4
*/

arr = ['Sweden','Finland','Norway','Deutschland']
    // Agrega desde el elemento 2 y el 0 es quirar ningún elemento
arr.splice(2,0, 'México', 'Russian')
console.log(arr);

    // Posicion 2 quita 1 elemento y agrega NewZeland
arr.splice(2,1,'New Zeland')
console.log(arr);






