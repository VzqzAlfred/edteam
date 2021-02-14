            /* Async - Await */

// Funciones asíncronas: Van a esperar a que se cumpla algo para seguir ejecutando el proceso. 


function cuadradoPromise(value){

    if(typeof(value) !== 'number') return Promise.reject(`Error, el valor "${value}" ingresado NO es número.`);

    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve({
                value,
                result: value * value 
        });
    }, 0 | Math.random() * 1000)
    
    })    
}


// async: es para declararar que es una función asíncrona; van empezando la función en funciones declaradas.
async function funcionAsincronaDeclarada(){
    try {
        console.log("Inicio de async Function (Función asíncrona).");

        // await: hace a que espere elresultado del setTimeout
        let objeto = await cuadradoPromise(0);
        console.log(`Async Function: ${objeto.value}, ${objeto.result}`);

        objeto = await cuadradoPromise(1);
        console.log(`Async Function: ${objeto.value}, ${objeto.result}`);

        objeto = await cuadradoPromise(2);
        console.log(`Async Function: ${objeto.value}, ${objeto.result}`);

        objeto = await cuadradoPromise(3);
        console.log(`Async Function: ${objeto.value}, ${objeto.result}`);

        objeto = await cuadradoPromise(4);
        console.log(`Async Function: ${objeto.value}, ${objeto.result}`);

        objeto = await cuadradoPromise(5);
        console.log(`Async Function: ${objeto.value}, ${objeto.result}`);
        
        console.log("Fin del Async Function");

    } catch (error) { 
        console.error(`Error econtrado en ${error}`)
    }
}

funcionAsincronaDeclarada();






// async en funciones expresadas van antes de los parámetros
const funcionAsincronadaExpresada = async () => {
    try {
        console.log("Inicio de async Function EXPRESADA (Función asíncrona).");

        objeto = await cuadradoPromise(6);
        console.log(`Async Function: ${objeto.value}, ${objeto.result}`);

        objeto = await cuadradoPromise(7);
        console.log(`Async Function: ${objeto.value}, ${objeto.result}`);

        objeto = await cuadradoPromise(8);
        console.log(`Async Function: ${objeto.value}, ${objeto.result}`);

        objeto = await cuadradoPromise(9);
        console.log(`Async Function: ${objeto.value}, ${objeto.result}`);

        objeto = await cuadradoPromise(10);
        console.log(`Async Function: ${objeto.value}, ${objeto.result}`);
        
        console.log("Fin del Async Function EXPRESADA");

    } catch (error) { 
        console.error(`Error econtrado en ${error}`)
    }
}

funcionAsincronadaExpresada();