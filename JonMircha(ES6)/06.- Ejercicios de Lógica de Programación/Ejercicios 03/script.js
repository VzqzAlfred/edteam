/* 
    9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
*/
const getRandomArbitrary = (min, max) => {
  let num = Math.ceil(Math.random() * 100 + 500);
  console.info(num)
}
getRandomArbitrary(501, 600)






/*
    10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
*/
const capicua = numero => {
    if(!numero || typeof(numero) !== 'number'){
        console.info("Lo que inigresaste no es un número");
    }else {
        let aCadena = numero.toString(),
        numeroAlReves = aCadena.split('').reverse().join('');

        (aCadena === numeroAlReves)
        ? console.info(`Sí es número capicua`)
        : console.info(`NO es número capicua`);
    }
}
capicua(2002);





/*
    11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/
const factorial = (numero=undefined) =>{
    if(numero === undefined){
        console.error("El valor ingresado no es un número.");
    }

    if(numero === 0){
        console.error("El número ingresado no puede ser cero.");
    }

    if(Math.sign(numero) === -1){
        console.error("El número no puede ser negativo.")
    }

    let factorial = 1;
    for(let i = numero; i > 1; i--){
        factorial *= i;
    }

    return console.info(`El factorial del número ${numero} es ${factorial}`)
}
factorial(5);