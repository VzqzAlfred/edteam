/*              TIPOS DE FUNCIONES
    1° Funciones puras: 
        Son las que no causa un efecto secundario y siempre devuelve lo mismos valores
            para los mismos parámetros

            // let a = 'Hola'
            // const saludar = persona => {
                // a = a + ' ' + persona
                // return a
            // }
            // console.log(saludar('Alfred'))           //Imprime Hola ALfred
            // console.log(a) //Es lo mismo que el de arriba imprime Hola ALfred

            // ó

            // let a = 'Hola'
            // const saludar = (saludo,persona) => `${saludo} ${persona}`
            // console.log(saludar(a, 'Luis'))      //Imprime "Hola Luis"
            // console.log(a)       //Imprime solo "Hola"


    2° Funciones autoinvocadas 

            // let a='Hola'  //Se agrega lo de una función en ()            //Y los argumentos
            // const saludar = ((saludo,persona) => `${saludo} ${persona}`)(a, 'Luis')
            // console.log(saludar)

    3° Funciones nombradas y anónimas
ejem:
*/
    // Es como alert, espera cierto tiempo para ejecutar algo
    // setTimeout(() => {
    //     alert('Hola Alfred')
    // }, 1000)
    // En ms el tiempo  



/*                  CLOSURES            
    function aumentar () {
        let number1 = 0
        return function(){
            number1++
            console.log(number1)
        }
    }

const incrementar = aumentar()

incrementar()
incrementar()
incrementar()
incrementar()
incrementar()
*/
    // ó mas fácil de la misma manera
    let numero = 0
    function aumentar () {
        numero++
        console.log(numero)
    }

    aumentar ()
    aumentar ()
    aumentar ()
    aumentar ()
    aumentar ()
    aumentar ()
    aumentar ()



    /*          THIS        */

    age = 0
    let user = {        //Esto es un objeto que se separan con coma dentro de un {}
        nombre: 'Alfred',
        age: 24,
        getAge(){       // Esto es una función, que accesa a edad, pero que esta dentro del mismo objeto
            console.log(this.age);  //this es que va a buscar dentro del objeto
            
        }
    }

    user.getAge()