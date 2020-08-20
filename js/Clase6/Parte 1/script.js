/*          OBJETOS
    Objeto: Es una estructura de datos  
        {
            propiedad: valor,
            propiedad2: valor2,
            propiedad3: valor3,

            metodo(){
                // código del metodo 
            }
        }
*/
let dog = {
    name: 'Bell',
    age: 3,
    color: 'White and gray',
    sex: 'male',
    vacunas: true,
    run(){
        console.log(`${this.name} corre` );     //this es de que busca dentro del objeto la propiedad nombre
    }
}
console.log(dog);




/*      PROPIEDADES DE LOS OBJETOS      */

let user = {
    name: 'Alfred',
    'ape-llido': 'Vazquez'          //No es recomendable que tenga giones una variables
}
console.log(user.name)              //Para imprimir una propiedad del objeto
console.log(user['ape-llido'])      //Como no te deja seleccionar .ape-llido se pone entre []
console.log(user['name'])

let a = 'Hola', b=' mundo'

let saludo = {
    [a+b]: `Mi primer hola mundo`       //Concatena a y b 
}
console.log(saludo);

const myObject = {a,b}
console.log(myObject)




/*      AGREGAR Y QUITAR PROPIEDADES DE UN OBJETO        */
/*  delete              borra */

 delete dog.name      //Borra el nombre
 console.log(dog)

 /* Agregar */
//  dog.name='Bell'     //Asi se le vuelve agrega el nombre al objecto 
console.log(dog);

 


