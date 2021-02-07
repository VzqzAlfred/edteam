        /* Manejo de Errores */

// try - catch - finally: Es una sentencia que nos permite evaluar fragmentos de código para encontrar errores

try {
    console.log("En el try se agrega el código a evaluar.");
    noExiste;       // variable no declarada, es un error.
    console.log("Segundo mensaje en el try");
} catch (error) {
    console.log("Catch, captura cualquier error surguido en el try.");
    console.log(error);
} finally {
    console.log("Finally, se ejecutará siempre al final de un bloque try-catch");
}



try {
    let numero = "y";
    if(isNaN(numero)){      //isNaN(): Evalúa si no es un número su paŕametro.
        throw new Error("El caractér introducido, no es un número.");   // Es para hacer errores personalizados.
    }
    console.log(numero*numero);
} catch (error) {
    console.log(`Se produjo el siguiente error: ${error}`)
}