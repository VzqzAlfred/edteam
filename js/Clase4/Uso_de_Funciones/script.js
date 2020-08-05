/*
    Es un trozo de código re utilizable, en el que hay un conjunto de instrucciones

    1. Como funciona    
        °   input => funcion => output
        °   input => funcion1 => output1 => funcion2 => output2 => funcion3 => output3 =>...

    2. input => argumentos              // Los datos de entrada se llamana argumentos
    3. output => valor de retorno       // Los datos de salida se llama valor de retorno

    4. Como ejecutar una función
        °   nombreFuncion(argumento1, argumento2,...)
        °   nombreFuncion()             // En caso de que no haya argumentos

    5. Una función puede ser método de un objeto    
            // objeto.nombreFuncion(argumentos)
                °   'Hola mundo'.slice(3)

*/


        //      FORMAS DE DECLARARA UNA FUNCIÓN 
/*  con function (en desuso)
    1°  Declaración 
        1-1     function nombreFuncion(parámetro){
                    // instrucciones
                }
    Ejemplo:
*/  
    // function greattings(person, sex) {
    //    let saludo = sex === 'm'
    //             ? `Bienvenido`
    //             : `Bienvenida` 
    //     return `${saludo} to the jungle ${person}`    
    // }

    // console.log(greattings(`Alfred`, 'm'))
    // console.log(greattings(`Zai`, 'f'))
    // console.log(greattings(`Fernanda`, 'f'))




        //      Funciones de flecha (recomendado desde ES6)
/*  // const es para declarar funciones
        
        const nombreFuncion = (parametros) => {
            // instrucciones de la funcion
        return valor
        }
*/
                        // 2 parámetros
        const saludar = (person, sex) => {
            let saludo = sex ==='m' 
            ? `Bienvenido`
            : `Bienvenida` 
        return `${saludo} to the jungle ${person}`    
        }
                    //2 Argumentos 
console.log(saludar(`Alfred`, 'm'))
console.log(saludar(`Zai`, 'f'))
console.log(saludar(`Fernanda`, 'f'))

/* Si la función de flecha retorna directamente un valor, sin instrucciones adicionales, la sintaxis se reduce. */
    // const nombreFuncion = (parametros) => valor

    const sumar = (a,b) => a+b
    console.log(sumar(8,15))
    console.log(sumar(25,61))



/*              PARÁMETROS Y ARGUMENTOS
        1° Parámetros:
            Son variables locales que s edefinen en la declaración de la función.
        2° Argumentos:
            Son valores asignaos a los parámetros.

        3° Parámetros rest (spread operator)    //Operador de expansión
            funcion(...arguments)   //los ... permite mandar cualquier cantidad de argumentos 
*/

const sumarTodos = (...numeros) => {
    let resultado = 0
    for(let i=0; i<numeros.length; i++){
        resultado += numeros[i]
    }
    return resultado 
}

console.log(sumarTodos(15,551,11,1891,185))





/*                          FUNCIONES COMO CIUDADANOS DE PRIMERA CLASE 
    
    1° Pueden ser almacenadas en variables o constantes

    2° Pueden ser pasadas como argumentos de otra función

    3° Pueden ser retornadas por otra función

    4° Pueden tener métodos o propiedades */
        
        const c = console.log
        const multi = (x,y) => x * y
        let edad = multi(5,3)
        let edad2 = multi(multi(5,3),2)
        c(edad2)

        const suma2 = x => y => x+y
        c(suma2(3)(1))

//          EJERCICIO

    const doSomething = num1 => num2 => num1 * num2 
    
    const a1 = doSomething(2)(2)    // a1 = 4
    const a2 = doSomething(3)       // a2 = 3 * y
    c(doSomething(a1)(a2(3)))       // 4* (3*3) = 36