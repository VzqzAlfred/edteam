/*
    21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, 
     pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
*/
const elevados = (arreglo) => {
    if(typeof(arreglo) !== 'object') return console.error("Tienes que ingresar un arreglo");

    if(!arreglo) return console.warm("El arreglo no tiene que estar vacío");
    
    if(arreglo instanceof Array){

        let cantidad = []
        arreglo.forEach((elemento)=>{

            if(typeof(elemento) !== 'number'){
                console.error("Tienes que ingresar numeros en el arreglo");
            }else{
                cantidad.push(elemento*elemento);
            }
        })
        console.info(cantidad)
    }
}
//elevados([2,5,4]);





/*
    22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, 
     pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
*/
const numeroMinMax = (arreglo = undefined) => {
    if(arreglo === undefined) return console.error("Tienes que ingresar un arreglo de números");

    if(arreglo.length === 0) return console.warn("El arreglo no tiene que estar vacío");
    
    if(!(arreglo instanceof Array)) return console.warn("El valor que ingresaste no es un arreglo.");
    
    for (let elementos of arreglo) {
        if(typeof(elementos) !== 'number') return console.error(`El valor ${elementos} ingresado, no es un número`);
    }

    // min() max() : esperan el spreed operator para recorre el arreglo
    return console.info(`Arreglo original ${arreglo} \n Valor mayor: ${Math.max(...arreglo)} \n Valor mínimo: ${Math.min(...arreglo)}`)
}
numeroMinMax([1,5,-589,-7,156])





/*
    23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, 
     pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/
const devolucion = (arreglo) => {
    if(typeof(arreglo) !== 'object') return console.error("Tienes que ingresar un arreglo");

    if(!arreglo || arreglo == "") return console.warn("El arreglo no tiene que estar vacío");
    
    if(arreglo instanceof Array){
        
        let pares = [],
            impares = [];

        for(let i = 0; i < arreglo.length; i++) {
            if (arreglo[i] % 2 === 0) {
                pares.push(arreglo[i]);
            }else{
                impares.push(arreglo[i])
            }
        }

        const list = {
            pares,
            impares
        }
        
        if(pares == ""){
            console.info(`Sin números pares; N° impares: ${list.impares}`);
        }else if(impares == ""){
            console.info(` N° pares: ${list.pares}; Sin números impares.`)
        }else{
            console.info(`N° pares ${list.pares}; N° impares ${list.impares}`)
        }
    }
}
//devolucion([12,50]);