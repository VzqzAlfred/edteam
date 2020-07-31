
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
        // ==               // ES MEJOR EVITAR ESTA Y USAR LA DE TRIPLE
        // ===              // ESTA ES MEJOR COMPARANDO A NIVEL DE DATO MÀS ESTRICTO
        // !=  ó  !==
        // >
        // <
        // <=
        // >=
        
        /*  'a' < 'b' 
            >> True     porque es por orden alfabético
            
        */