/*
    18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
*/
const vocalesConsonantes = (cadena = undefined) => {
    if(typeof(cadena) !== 'string') return console.info("La palabra o frase tiene que ser un texto.");

    if(!cadena) return console.info("La palabra o frase no puede estar vacía.");

    let separacionCadena = cadena.trim().split(' ').join(''),
        expresionVocales = /a|e|i|o|u/ig,
         busquedaVocales = expresionVocales.test(cadena);

    if(busquedaVocales){
        let c = separacionCadena.toLowerCase(),
            vocales = [],
            consonantes = [];
        
        for (let i = 0; i < c.length; i++) {
            if(c[i] === 'a' || c[i] === 'e' || c[i] === 'e' || c[i] === 'i' || c[i] === 'o' || c[i] === 'u' ){
                vocales.push(c[i]);
            }else{
                consonantes.push(c[i]);
            }
        }
        console.info(`En '${cadena}' hay ${vocales.length} vocales y ${consonantes.length} consonantes 🤓`);
    }
}    
//vocalesConsonantes("Hola");





/*
    19) Programa una función que valide que un texto sea un nombre válido, 
     pe. miFuncion("Jonathan MirCha") devolverá verdadero.
*/
const nombreValido = (cadena = undefined) => {
    if(typeof(cadena) !== 'string') return console.error("Tú nombre tiene que ser un texto");

    if(!cadena) return console.info("Su nombre no puede ir vacío");

    if(typeof(cadena) === 'string') return console.info(true);
}
//nombreValido("Alfred");





/*
    20) Programa una función que valide que un texto sea un email válido, 
     pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/
const emailValido = (correo) => {
    if(!correo) return console.warn("Su correo ingresado esta vacío, por lo que no es un correo electrónico.")
    
    let expRegArroba = /@/g,
        extension = /.com|.mx|gmail.com|hotmail.com|outlook.com/,
        busquedaArroba = expRegArroba.test(correo),
        busquedaExtension = extension.test(correo);

    // Otra expresión regular para validar correos: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i
    
    if(busquedaArroba === true && busquedaExtension === true){
        console.info("Su correo ingresado es válido")
    }else if(!busquedaArroba){
        console.info("Su correo ingresado no puede ser válido, debido a que debe contener un '@'")
    }else if(!busquedaExtension){
        console.info("Su correo no cumple con alguna extensión a ser un correo electrónico.")
    }
}
//emailValido("f@jhsg.mx");
//emailValido("dd@dsindigo.com");