/*      PROTOTIPOS       
    Object.getPrototypeOf()    
*/
let amigo = 'Nombre'
console.log(Object.getPrototypeOf(amigo));      //Te muestra todo los prototipos que tiene esa variable 

/*          //NO ES RECOMENDABLE HACER ESTO, PERO ES UNA FORMA DE HACER UN OBJETO A UNA VARIABLE
    let amigo2 = new String ('user')
    console.log(amigo2)                 //Devuelve >> String{'use'} siendo un objeto
*/

//Object.getPrototypeOf('Alfred')           //Te devuelve igual siendo un objeto con sus prototipos
//Algo que comienza en mayuscula es un prototipo, es el molde para crear otros objetos

// String.prototype.lenght = '20'       //Haces a que todo los strings tengan el valor de 20 



/*            OPERADOR IN Y CICLO FOR IN       */
let dog ={
    name: 'Bell',
    age: 3,
    sex: 'Mane',
    color: 'White with gray',
    vacunas: true,
    run(){
        console.log(`${this.name} corre`);
    }
}
            // las propiedades van en comillas simples
console.log('sex' in dog)
console.log('age' in dog)
console.log('vacuna' in dog)

//  FOR IN
    // Devuelve las propiedades del objeto dog
    for(let properties in dog){
        console.log(properties);
    }



/*          MUTABILIDAD Y COPIADO DE OBJETOS         
    
    Son asignados por referencia, no por valor.
*/
    // Los datos primitivos son por valor
    // Los arreglos y los objetos son por referencia

/*  SI UN OBJETO SE IGUALA A OTRO, ES ASIGNADO POR REFERENCIA, SI CAMBIA, HACE CAMBIAR
    AL ORIGINAL.    */

    // Si hago otro objeto

    let otherDog = dog
    console.log(otherDog)
    otherDog.patitas = 4        //Asigno una nueva propiedad al otro perro y cmo son por referencia DOG original tambien tiene esta nueva propiedad
    
    console.log(otherDog); 
    console.log(dog);
    
    // PONERLE PROPIEDAD SIN AFECTAR A OTRO OBJETO

    //     Object.assign([], object)
    let otherDog2 = Object.assign({},dog)       //Crea propiedad nueva teniendo lo mismo que dog, pero unicamente agregando a otherDog2       
    otherDog2.orejas = 'Medianas'               // Se le agrega la propiedad solo a otherdog2
    console.log(otherDog2);
    console.log(dog);
    


    
/*          RECORRER OBJETOS         
    for in                              
            Devuelve los nombres de las propiedades de un objeto, pero tambien devuelve las propiedades en la cadena de prototipos
    for of
            No recorre un objeto, porque un objeto no tiene indices (no es iterable)

    // Estás te devuelven las propiedades de los objetos
    Object.entries()
            Devuelve como arrays cada una de las entradas del objeto (propiedad, valor)
    Object.keys()
            Devuelve un object (array like) con todas las propiedades
    Object.values()
            Devuelve eñ valor de las propiedades del objeto
*/
console.log(Object.entries(dog))
console.log(Object.keys(dog));
console.log(Object.values(dog));