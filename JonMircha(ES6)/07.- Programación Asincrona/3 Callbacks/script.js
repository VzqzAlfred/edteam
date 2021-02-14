            /* Callbacks */

// Callback (LLamada de vuelta): Es una función que se va a ejecutar después de que otra lo haga.
function cuadradoCallback(value, callback){
    setTimeout(()=>{
        callback(value, value*value);
    }, 0 | Math.random() * 1000)    
}

// 
cuadradoCallback(0, (value, result) => {
    console.log("Inicio de Callback");
    console.log(`Callback: ${value}, ${result}`);

    cuadradoCallback(1, (value, result) => {
        console.log(`Callback: ${value}, ${result}`);

        cuadradoCallback(2, (value, result) => {
            console.log(`Callback: ${value}, ${result}`);

            cuadradoCallback(3, (value, result) => {
                console.log(`Callback: ${value}, ${result}`);

                cuadradoCallback(4, (value, result) => {
                    console.log(`Callback: ${value}, ${result}`);

                    cuadradoCallback(5, (value, result) => {
                        console.log(`Callback: ${value}, ${result}`);
                        console.log("Fin de la Callback :C");
                    })

                })

            })

        })    

    })

})