/*
    15) Programa una función para convertir números de base binaria a decimal y viceversa, 
     pe. miFuncion(100,2) devolverá 4 base 10.
*/
const conversion = (numero = undefined, base = undefined) => {
    if(numero === undefined) return console.warn("No ingresaste el número a convertir");

    if( typeof(numero || base) !== 'number') return console.warn("Lo que han ingresado en alguno de los paŕametros no correspondo a un número");
    
    if(base === 2){
        return console.info(`'${numero}' en base ${base} = Es ${parseInt(numero, base)} en base 10`);  //parseInt(): lo pasa a entero
    }else if(base === 10){
        return console.info(`'${numero}' en base ${base} = Es ${numero.toString(2)} en base 2`);
    }else{
        return console.error("El tipo de base a convertir NO es válido.");
    }
}
//conversion(100, 2)
//conversion(16, 10)



 

/*
    16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, 
     pe. miFuncion(1000, 20) devolverá 800.
*/
const descuento = (monto = undefined, descuento = undefined) => {
    if(typeof(monto || descuento) !== 'number' || !monto || !descuento){
        return console.warn("Tienes que especificar con números el monto y el porcentaje.");
    }else {
        let porcentaje = (monto * descuento) / 100,
            precioReal = monto - porcentaje;
        console.info(`El descuento de ${monto} es de '${precioReal}'`)
    }
}
//descuento(1800,10);





/*
    17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, 
     pe. miFuncion(new Date(1996,4,23)) devolverá 24 años (en 2021).
*/
const calcularAnios = (fecha = undefined) => {
    if(fecha === undefined) return console.warn("La fecha tienen que ser números.");

        //instanceof: verifica si fecha no es una instancia del objeto Date
    if (!(fecha instanceof Date)) return console.error("El valor que ingresaste no es una fecha válida.");

    let hoyMenosIngresada = new Date().getTime() - fecha.getTime(),
        aniosEnMiliSegundos = 1000 * 60 * 60 * 24 * 365,                            // Timepo en días
               aniosHumanos = Math.floor(hoyMenosIngresada / aniosEnMiliSegundos);

    return (Math.sign(aniosHumanos) === -1)
        ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
        : (Math.sign(aniosHumanos) === 1)
            ? console.info(`Han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}`)
            : console.info(`No hay diferencia, estamos en el año actual ${fecha.getFullYear()}`);

}
calcularAnios()
calcularAnios(new Date(1996,2,22));
calcularAnios(new Date(2058,5,2))