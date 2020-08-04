/*              CONDICIONALES Y CICLOS 

    1°  CONDICIONALES
        1.1     if

            if (condition) // Hacer algo
            if (condition){
                ...
            }

            if (condition 1){
                ...
            }else if (condition 2){
                ...
            }else { 
                ...
            }


    2°  CONDICIONALES MÚLTIPLES Y ANIDADAS  (||, &&)
    
    if('a' === 'b' && 3<5){console.log('verdad')}

*/

            // Parse, es para que convierta el promt que es texto a numero decial del 1 al 10
let age = parseInt(prompt (`Tell me how old are you?`), 10) 

console.log(age)

if (age){   // age porque entra si es un número
    if (age >= 18 && age < 90){
        alert(`Eres mayor de edad.`)
    }else if (age > 90){
        alert(`Lo siento, tu edad no es muy apropiada.`)
    }else {
        alert(`Perdón, pero eres menor de edad.`)
    }
}else {
    age = parseInt(prompt(`La edad debe ser un número.`), 10)
}


//          TRUTHY AND FALSY VALUES
        /*
            1°  Falsy
                - 0
                - ""
                - NaN
                - undefined
                - null

            2°  Truthy
                - strig no vacío
                - Número diferente de cero 
                - arrays
                - objetos

        
        */