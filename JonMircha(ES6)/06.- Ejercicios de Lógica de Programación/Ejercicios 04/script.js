/*
    12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
*/
const numerosPrimos = (numero=undefined) => {
    if(numero === undefined) console.warn("No ingresaste un número.")

    if(typeof(numero) !== "number") return console.error("Lo que has ingresado no es un número.");

    if(numero === 0) return console.error("El número no puede ser '0'");
    
    if(numero === 1) return console.warn("El número no puede ser '1'");

    let divisible = false;
    for (let i = 2 ; i < numero; i++){
        if((numero % i) === 0){
            divisible = true;
            break;
        }
    }

    return (divisible)   // si divisble es true
        ? console.info(`El número '${numero}' NO es PRIMO`)
        : console.info(`El número '${numero}' sí es PRIMO`)
} 
//numerosPrimos(13);
//numerosPrimos(17);
//numerosPrimos(0);
//numerosPrimos(1);
//numerosPrimos("5");
       




/*
    13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
*/
const numeroParImpar = numero => {
    (!numero || typeof(numero) !== 'number')
    ? console.warn("Lo que usted ha ingresado no es un número.")
    : (numero % 2 === 0)
        ? console.info(`El número '${numero}' es PAR.`)
        : console.info(`El número '${numero}' es IMPAR.`)
}
//numeroParImpar(456);
//numeroParImpar(7);
//numeroParImpar(61);
//numeroParImpar(18);
//numeroParImpar(33);
//numeroParImpar(46);
//numeroParImpar(0);  // el cero lo considera el '!numero'





/*
    14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/

const gradosCelFaren = (grados = "", tipo = undefined) => {
    if(typeof(grados) !== 'number'){
        console.warn("No ingreso un número a convetir a grados")
    }else if(!tipo || typeof(tipo) !== 'string'){
        console.error(`No se puede convertir los ${grados} a tipo '${tipo}'.`)
    }else if(tipo.toUpperCase() == 'F'){
        let aFarenheit = Math.round((grados * 1.8) + 32);   // Redondea.
        console.info(`${aFarenheit}°F`)
    }else if(tipo.toUpperCase() == 'C'){
        let aCelsius = Math.round((grados - 32) / 1.8);
        console.info(`${aCelsius}°C`)
    }else{
        console.error(`No se puede convertir los ${grados} a tipo '${tipo}'.`)
    }
}
gradosCelFaren(0, 'f');
gradosCelFaren(0, 'c');
gradosCelFaren(0, 'hola');