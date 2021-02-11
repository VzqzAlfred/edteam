/*
    24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, 
     pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
*/
const ascendenteDescendente = (arreglo = undefined) => {
    if(arreglo === undefined) return console.error("Tienes que ingresar un arreglo de números");

    if(arreglo.length === 0) return console.warn("El arreglo no tiene que estar vacío");
    
    if(!(arreglo instanceof Array)) return console.warn("El valor que ingresaste no es un arreglo.");
    
    for (let elementos of arreglo) {
        if(typeof(elementos) !== 'number') return console.error(`El valor ${elementos} ingresado, no es un número`);
    }

    return console.info({
        arreglo,
        asc: arreglo.map( e => e).sort(),       //map, al igual que forEach recorre todo
        des: arreglo.sort().reverse()
    })
}
//ascendenteDescendente([2,8,3,6,3]);





/*
    25) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
     pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
*/
const eliminarDuplicados = (arreglo = undefined) => {
    if(arreglo === undefined) return console.error("Tienes que ingresar un arreglo de números.");

    if(!(arreglo instanceof Array)) return console.warn("El valor que ingresaste no es un arreglo.");

    if(arreglo.length === 0) return console.warn("El arreglo no tiene que estar vacío.");

    if(arreglo.length === 1) return console.warn("El arreglo debe tener al menos 2 elementos.");

    /* Primera manera
    return console.info({
        original: arreglo,
        sinDuplicados: arreglo.filter((elemento, posicion, mismoArrego) => mismoArrego.indexOf(elemento) === posicion)
    })*/

    // Segunda manera
    return console.info({
        original: arreglo,
        sinDuplicados: [...new Set(arreglo)]  // set(): recibe un objeto iterable
    })
    // set forma un arreglo para que va recorriendo y verificar que no tenga duplicaciones

}
eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);





/*
    26) Programa una función que dado un arreglo de números obtenga el promedio, 
     pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/
const promedio = (arreglo = undefined) => {
    if(arreglo === undefined) return console.error("Tienes que ingresar un arreglo de números");

    if(arreglo.length === 0) return console.warn("El arreglo no tiene que estar vacío");

    if(!(arreglo instanceof Array)) return console.warn("El valor que ingresaste no es un arreglo.");
    
    for (let elementos of arreglo) {
        if(typeof(elementos) !== "number") return console.error(`El valor ${elementos} ingresado, no es un número`);
    }

    let promedio,
        suma=0;
    /*for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i]
    }*/
        
    arreglo.forEach((elementos,posicion)=>{
        suma+=arreglo[posicion]
    })
    promedio = suma / arreglo.length
    return console.info(`El promedio de '${arreglo}' es ${promedio}`)
    
}
//promedio([9,8,7,6,5,4,1])