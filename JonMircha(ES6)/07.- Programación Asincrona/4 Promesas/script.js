            /* Promesas */

// Promesa: Podemos verlo como un if-else, tiene dos parámetros; la parte que resuleve y la parte que la rechaza 

function cuadradoPromise(value){

                    // Promise.reject() por ser un método estático.
    if(typeof(value) !== 'number') return Promise.reject(`Error, el valor "${value}" ingresado NO es número.`);

    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve({
                value,
                result: value * value 
            });      // Es el return positivo de la promesa en caso de que se cumpla
        }, 0 | Math.random() * 1000)
    })    
}





//* Cuando trabajamos con promises, tenemos dos parámetros más para hacer la síncronia.

//? then(): Es el que va a ejecutar una vez su función unicial cuadradoPromise() 
//? catch(): Maneja en caso de que haya un error.

    cuadradoPromise(0)
            // objeto es el lo que devuelve resolve
        .then((objeto) => {
            //console.log(objeto);
            console.log("Inicio de la Promesa");
            console.log(`Promise: ${objeto.value}, ${objeto.result}`);

            return cuadradoPromise(1);
        })
        .then(objeto=> {
            console.log(`Promise: ${objeto.value}, ${objeto.result}`);

            return cuadradoPromise(2);
        })
        .then(objeto => {
            console.log(`Promise: ${objeto.value}, ${objeto.result}`);

            return cuadradoPromise(3);
        })
        .then(objeto => {
            console.log(`Promise: ${objeto.value}, ${objeto.result}`);

            return cuadradoPromise(4);
        })
        .then(objeto => {
            console.log(`Promise: ${objeto.value}, ${objeto.result}`);

            return cuadradoPromise(5);
        })
        .then(objeto => {
            console.log(`Promise: ${objeto.value}, ${objeto.result}`);
            console.log("Fin del hell .THEN");
        })
        .catch(error => console.error(error) );
            // err es lo que devuelve el reject si hay algún error.