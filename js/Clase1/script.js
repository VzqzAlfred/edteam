// Para que te permita un recuadro de alerta con tu nombre
let nombre = `Alfredo`



// Variable es un comntenedor para un dato que puede variar
// Se declaran con la palabra "let (nombre) = (valor)"   
let numero = 25
    // console.log()    -> Te permite hacer impresion en consola del navegador
    console.log(numero)
    console.log(numero+1)
    console.log(numero*2)
    console.log(numero/3)

let nume = 10,
    name = 'Alfred',
    school = 'ESCOM',
    edad, cargo, pais

// Las constantes se declaran como "const" no puede variar
    const number = 222
    console.log(number)




    
    //                    TIPOS DE DATOS 

    // Primitivos
    //  - Números
    //  - String    ('', "", ``) Se recomienda el tercero
    //  - Boolean
    //  - Undefined
    //  - Null
    //  - Symbol()

    let age = 26
    let call = `ESCOM 
    is ${age} years`   
    
    console.log(call) 

    let div = `
        <div class="container">
            ${call}
        </div>        
    `
    document.body.innerHTML = div
   
   




   
    // Compuestos
    //  - Array
    //  - Object

    // Ejemplos:
        // Arreglo:
    let list = [1,2,3,4,5,6,7,8,9]

        // Object:
    let obj = {
        user:"Alfred",
        height:"1.72"
    }

    // typeof   --> Te devuelve el tipo de datos que quieras saber de una variable

        console.log(typeof list)
        console.log(typeof obj)
        console.log(typeof nombre)
        console.log(typeof age)
