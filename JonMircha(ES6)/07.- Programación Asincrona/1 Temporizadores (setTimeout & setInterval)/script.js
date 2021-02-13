            /* Temporizadores (setTimeout & setInterval) */


// setTimeout(() => {}, enMiliSegundos): Recibe una función (callback) y un timepo expresado en mili segundos. 
/*
console.log("Inicio del setTimeout()");
setTimeout(() => {
    console.log("Ejecutando un setTimeout(), esto se ejecuta una sola vez");
}, 3000);
*/
//clearTimeout();
//clearTimeout(): Cancela el setTimeout() para que calcele y lo limpie.





// setTimeInterval(): Se ejecuta varias veces.
setInterval(() => {
    // Ejecutando un setInterval, esto se ejecuta indefinidamente cada cierto intervalo de tiempo.         
    console.log(new Date().toLocaleTimeString());
}, 1000);
//console.log("Después del clearInterval()");

//clearInterval()