/*
    5) Programa una función que invierta las palabras de una cadena de texto, 
     pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/
const invertirPalabra = cadena => {
    (typeof(cadena) !== 'string') 
    ? console.warn("Su cadena ingresada no es un string")
    : console.log(cadena.split('').reverse().join(''));
}
//invertirPalabra("Hola me llamo Alfred :3");
//invertirPalabra("Anita Lava La Tina")




 
/*
    6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
     pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
*/
const repetirPalabra = (cadena = undefined, palabraRepetida = undefined) => {
    if(typeof(cadena) !== 'string' || typeof(palabraRepetida) !== 'string'){
        console.warn("Su cadena ingresada no es un string");
    }else {
        let cad = cadena.toUpperCase().split(' ');
        //console.log(cad);
        //console.log(cad.length);
        let veces = [];
        for (let i = 0; i < cad.length; i++) {
            if (cad[i] === palabraRepetida.toUpperCase()) {
                veces.push(palabraRepetida)
            }
        }
        console.log(`La palabra se repite ${veces.length} veces`);
    }
}
//repetirPalabra("México es muy lindo, México tiene cultura, MÉxico tiene petróleo, méxico es amor y méxIco es pasión ", "méxico")
//repetirPalabra("hola mundo adios mundo", "je")





/*
    7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), 
     pe. mifuncion("Salas") devolverá true.
*/
const palabraPalindromo = cadena => {
    if(typeof(cadena) !== 'string'){
        console.warn("Su cadena ingresada no es un string");
    }else{
        let palabraMayusculas = cadena.toUpperCase(),
                 palabraUnida = palabraMayusculas.trim().split(' ').join(''),
                 palabraAlreves = palabraUnida.split('').reverse().join('');
        
        (palabraUnida === palabraAlreves)
        ? console.info(`Sí es Palíndromo`)
        : console.info(`NO es Palíndromo`);
    }
}                                           /* By: Alfred Vzqz */
//palabraPalindromo("Anita Lava la Tina");
//palabraPalindromo("Amor a Roma");
//palabraPalindromo("A la patata tapala");
//palabraPalindromo("RecOnoCer");
//palabraPalindromo("Otro");

 



/*
    8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
     pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/
const eliminarCaracteres = (texto = "", patron="" ) => {
    (!texto)        //Si hay texto vacío
    ? console.warn("No ingresaste un texto.")
    : (!patron)
        ? console.warn("No ingresaste un patrón de catacteres.")
        : console.info(texto.replace(new RegExp(patron, "ig"), ""));
} 

eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
eliminarCaracteres("Programa una función que elimine cierto patrón de caracteres de un texto dado", "o");