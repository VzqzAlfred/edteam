
    // typeof {}      Asi es un object
    // typeof []      Así es un array, pero muestra la consola un object
    // typeof function (){}    Así es una function, siendo un subtipo de objeto

    //  Type coertion

    /* Es unir un texto con un numero, pero un numero por un string no se puede, arroja un NaN */



    //      VALOR POR REFERENCIA O POR VALOR
    /*
        Por valor:

            let number = 8
            let number2 = number
            numer2
            >> 8
            number2 = 60
            number2
            >> 60
    *****       Todos los primitivos son por valor  *****
    */

    /*      
        Por referencia:

        let list = [2,6,8,10]
        let list2 = list
        list2
        >> (4) [2,6,8,10]
        list2.push(12)
        >> 5
        list2
        >> (5) [2,6,8,10,12]
        list
        >> (5) [2,6,8,10,12]


       ********** Cuando hago cambios en objetos y arreglos, el cambio se hace por referencia. ***********
    */

                 /*   ---------- OPERADORES ---------  */

    // ASIGNACIÓN
        // =
        // +=
        // -=
        // /=
        // *=
    // COMPARACIÓN 
        // ==               // ES PARA IGUALAR: ESTA Y USAR LA DE TRIPLE
        // ===              // ES COMPACIO: ES MEJOR PORQUE COMPARA A NIVEL DE DATO MÀS ESTRICTO
        // !=  ó  !==
        // >
        // <
        // <=
        // >=
        
        /*  'a' < 'b' 
            >> True     porque es por orden alfabético
            
        */

//              OPERADORES UNARIOS
    // %    ->   Es el resto, por ejemplo
    //  5 % 3       Da igual a '2' porque cabe 3 y lo que sobra es 2 
    
    
    // ++
    
    /*  x = 5   postincremento
        x++
        >> 5
        x
        >> 6


                preincremento
        y=10
        ++y
        >> 11
    
        Para el -- funviona igual    
    */


    // OPERADOR TERNARIO
        // expresion ? si es verdadera ? falsa
        // prompt es una ventana que aparece como pregunta guardandose en la variable que le colocas 
        let age = prompt (`Tell me how old are you?`)
        
        // Comparando si es mayor de edad
        let isAdult = age >= 18
                        ? `You're Adult my fiend.`
                        : `You're a kid, sorry with ${age} years`
        alert(isAdult) 



        // OPERADOR DE CORTO CIRCUITO   (||   &&)
        
        // Permite asignar uno u otro valor
        /*
            let a
            let b = a || 'Juan'
            b 
            >> 'Juan'


            let c = null || 25
            c
            >> 25 

            // El && hace lo contrario 
        */ 