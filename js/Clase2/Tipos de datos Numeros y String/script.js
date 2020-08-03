/*                              NUMEROS


            ********** Todo lo que lleva parentesis es un metodo *************
    1º  toFixed():      Especifica el nùmero de decimales, eje:  number.toFixed(n)
    Convierte texto a numero
        2º  parseInt(string,10) 
                let texto = '20'
                texto
                >> "20"
                let textToNumber = parseInt(texto, 10)  //10 porque lo convierte a sistema decimal     
        3º  parseFloat()

    4º  NaN (NotAtNumber)
        Cualquier operacion
        matematica que no
        devuelva un
        numero
    5º  Math
        -   .floor():   Redondea un numero hacia abajo 
                    Math.floor(20.7)
                    >> 20
        -   .ceil():    Redondea un numero hacia arriba
                    Math.ceil(20.7)
                    >> 21
        -   .round():   redondea segun el valor, como las calificaciones .5 se va arriba
        -   .random():  Te da un numeor random
                    Math.random()
                    >> 0.98865118

                    Si lo queremos entre 1 y 10 se multiplica por 10
                    Math.ceil(Math.random()*10) //Y te da un numeroe ntero entre 1 y 10
*/

/*                      Strings 

    1.  Propiedades (Son valores que tienen un dato)
        -   .leght:     devuelve cuantos caracteres tiene un texto
                        'Alfred'.leght

    2.  Metodos     (Es algo que se puede hacer como una operacion)
        -   Sin Parametros
            1º  .trim():            Quita los espacios en blanco al principio y al final
                                    '     Ho  la    '.trim()
                                    >> "Ho  la"
            2º  .toUpperCase():     El texto lo convierte en mayuscula, todo
                                    'amigos hola'.toUpperCase()
                                    "AMIGOS HOLA"
            3º  .toLoweCase():      El texto lo convierte en minuscula, todo
                                    'HoLA  AMIgoS'.toLowerCase()
                                    "hola amigos"

    Ejemplo de aplicaciòn:
*/
                                    //UpperCase es para que no importa si el usuario lo pone en minuscula, lo convierte a mayuscula e ignora los espacios en blanco.
    let answer = prompt(`Cual es la capital de Finlandia?`).toUpperCase().trim()

    let message = answer === 'HELSINKI'
                    ? `Correct!`
                    : `Sorry, the answer is Helsinki`
    alert(message)

/* 
        -   Encontrar caracteres
            1º  indexOf(string[,i]):    Preguntamos en que posiciòn esta un caracter
                                        let name = 'Bershka'
                                        name.indexOf('k')
                                        >> 5

                                        'Hola amigos'.indexOf('o', 2)   ò   'Hola amigos'.indexOf('o', 'Hola amigos'.indexOf('o') + 1)         //Hace a que te muestre la segunda 'o'
                                        >> 9
                1.1   Devuelve un -1 si no encuentra el string
            

            2º  lastIndexOf():          Tambièn encuentra una letra, pero desde atràs
                                        'Hola amigos'.lastIndexOf('o')
                                        >> 9        
                2.1     Devuelve un -1 si no encuentra el string
            

            3º  includes(string[,i]):   Busca si una frase o ruta tiene esa palabra
                                        'Rammstein is a band German in Deutschland'.includes('Deutschland')
                                        >> true

            4º  startsWith(string[,i]): Pregunta si comienza una frase o ruta con alguna palabra o letra
            5º  endsWith(string[,i]):   Pregunta como termina un texto
        




        -   Manipular Strings 

            1º  replace(original,replacement):      Coje un texto y lo remplaza por otro.
                                                'Hola Mundo'.replace('el texto a cambiar','el nuevo')
                                                'Hola Mundo'.replace('mundo','amigos')

            2º  split(separator[,quantity]):        Separa un texto
                                                'Santy'.split('n')
                                                >> ["Sa", "ty"]
                                                'Hola amigos'.split(' ')[0]
                                                >> Hola
                                                'Santy'.split('')
                                                >> ["S","a","n","t","y"]
                                                'Santy'[2]
                                                >> "n"

            3º  substring(start[,end]):     Imprime desde donde o indiques.
                                        'Hola mundo'.substring(2)
                                        >> "la mundo"
                                        'Hola mundo'.substring(2,6) //El lugar 6 ya no lo toma e imprime
                                        >> "la m"
                -   No incluye end
                -   Si end es negativo extrae hacia atràs


            4º  substr(start[,quantity]):   Busca la cantidad, imprimiendo la cantidad de caracteres que aparezcan
                                            
                                            'Hola amigos'.substr(2,5)   //Inicia desde el 2 y desde ahi imprime 5 caracteres
                                            >> "la a"

                -   Si start es negativo, empieza a extraer desde atràs


            5º  slice(start[,end]):         Es parecido al substring
                -   Se diferencia de substr con valores negativos
                -   end negativo: no toma los ùltimos [end] valores
                -   start negativo: empieza a contar desde el final

                                        'Hola amigos'.slice(-5,-2)
                                        >> mig

                                        'Rammstein'.slice(2,-5)
                                        >> "mm"
*/
