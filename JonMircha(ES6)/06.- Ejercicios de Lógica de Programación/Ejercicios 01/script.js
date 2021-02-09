    /* Ejercicios 1 */
/*
    1) Programa una función que cuente el número de caracteres de una cadena de texto.
     pe. miFuncion("Hola Mundo") devolverá 10.
*/
// Solución Ejercicio 1: 

const contarCaracteres = cadena => {
    if(typeof(cadena) !== 'string'){
        console.log("El tipo de dato ingresado no es un string");
    }else{
        console.log(`El largo de la palabra es de ${cadena.length} letras.`);
    }
} 
//contarCaracteres(75);
//contarCaracteres();
//contarCaracteres("Hola, soy una cadenita");





/*
    2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados. 
     pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
*/
    const cortarPalabras = (cadena, numeroLetras) => {
        if(typeof(cadena) !== 'string'){
            console.log("El tipo de dato ingresado no es un string");
        }else if(numeroLetras <=0 || typeof(numeroLetras) !== 'number' || numeroLetras > cadena.length){
            console.log(`No se puede recortar la palabra hasta su posición '${numeroLetras}'`);
        }else{
            console.log(cadena.substring(0, numeroLetras));
                // Metodo que eliges hasta donde quieres imprimir
        }
    }
//cortarPalabras("Hola mi nombre es Alfred", 6)





/*
    3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter.
     pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/
const cadenaAArreglo = (cadena = "", separador = undefined) => {
    (!cadena) 
    ? console.warn("No ingresaste una cadena")
    : (separador === undefined)
        ? console.warn("No ingresaste el caracter separador.")
        : console.info(cadena.split(separador))         //split convierte una cadena de texto a un arreglo.
}
cadenaAArreglo("Lorem imsupt of word to array", ' ');
cadenaAArreglo("Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Oct,Nov,Dic", ',');





/*
    4) Programa una función que repita un texto X veces.
     pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.    
*/
const repetirPalabra = (cadena,repeticiones) => {
    if(typeof(cadena) !== 'string') console.error("Error: El tipo de dato ingresado no es un string");
    
    if(repeticiones <= 0) console.error("Error: Las repeticiones no puede ser de cero y números negativos.");

    if(typeof(repeticiones) !== 'number'){
        console.error("Error: El número de repeticiones tiene que ser un número");
    }else{
        let veces = [cadena]
        for(let i=1; i<repeticiones; i++){
            veces.push(cadena)
        }
        console.log(veces);
    }
}
repetirPalabra("Me llamo alfred 🤓", 9)