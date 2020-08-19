alert(`Welcome to the Class five friends :D`)
 let number = [1,3,15,10,68,120,150,100,350,850,852,100,50,25,2,4,5]
 number.push(4)
 console.log(number)
 console.log(number.sort((a,b) => a - b)); 

 /*     Eliminar elementos duplicados en un array   */
 
 new Set(number)        //Elimina duplicados pero te devuelve un objeto
 
 /*En consola */

 //>  [...new Set(number)]   // Y ahora lo conviertes en un arreglo
 // const removeDuplicate = arr => [...new Set(arr)]
 // removeDuplicate(['5','15','10','15','10'])

 /*     OBJETO MATH CON ARRAYS      'Math'  
    
    Math: No recibe numeros con corchetes ni comillas
 */
 console.log(Math.floor(6.56))      // Te da el número redondeado
 console.log(Math.min(50,15,652,1505,25,50))        // te da el número menor
 console.log(Math.max(50,15,652,1505,25,50))        // te da el número mayor
    // ó también
 let num = [50,15,652,1505,25,50]
 console.log(Math.min(...num));
 console.log(Math.max(...num));


 /*     RECORRE UN ARRAY CON FOR Y FOR OF    */
    /*
        for
        for of
        forEach()
        .some()  .every()
    */

    let  countries = ['Deutschland', 'Sweden', 'Norway', 'Finland']
    for (let elements of countries){           // Se crea una variable cualquiera e imprimimos esa variables porque es la que va a recorrer los elementos y los va a imprimir
        console.log(elements)
        console.log(elements[0] + 'land')       //Imprime la posición de cada elemento más la palabra 'land' 
    }

    /*          forEach( callback)        */

    countries.forEach ( (el, i) => {    //forEach recibe dos elementos o más 
        console.log(i);
        console.log(el);
    })


    /*      .some(callback)        
    Retorna true o false    Verifica uno por uno o que al menos un elemento
    */
            // Verifica si en countries existe un nombre Norway
    console.log(countries.some( name => name === 'Norway'));
    console.log(countries.some( name => name === 'México'));
    
    /*  .every(callbak)
    Retorna true o false    Verifica que todos los elementos*/
    console.log(countries.every(name => name.includes('a') ));
    console.log(countries.every(name => name.length >= 3 ));    //Todos los elementos tienen más de 3 letras


    /*  Son mejores que un forEach()
            .map(callback)              Transforma todos los elementos del array
            .filter(callback)           Filtra los elementos que cumplan con la condición
            .reduce(callback)           Reduce todos los elementos a un único valor
    */

    /*  .map(callback)      */
    console.log(num.map(el => el*el));      //crean en automatico un array vacio para ponerlos
    // Crea una variable temporal y la multiplica por si mismo

    /*  .filter(callback)   */
    let otherArray = num.filter(max => max >= 100)      // filtra todos los numeros de num mayores de 100
    console.log(otherArray);

    /*  .reduce(callback)    */
    let first = [1,2,3,4,5,6,7,8,9,10]
    let sum = first.reduce( (a,b) => a+b )        // hace la suma de todos los elementos de first
    console.log(sum);
    
    
    

    

