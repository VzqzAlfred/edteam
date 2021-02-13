/*          Asincronía y el Event Loop

    ! JS trabaja de forma single thread, es decir ejecuta solo una sola vez. También es asíncrono y No bloqueante.

    TODO: JS tiene usa un modelo asíncrono y NO bloqueante con un loop de eventos implementados en un sólo hilo para operaciones (In / Out)

    *  LIFO: Last In First Out

    ?    1. Procesamiento single thread y Multithread
            Hay programas que suceden en un single thread y otros multi thread.

    ?    2. Operaciones de CPU y Operaciones de I/O

    ?    3. Operaciones concurrentes y paralelas.
            Concurrencia: Es cuando 2 o más tareas progresan simultaneamente
            Parelelismo: Cuando 2 o más se ejecután al mismo tiempo.

    ?    4. Operaciones Bloqueantes y No Bloqueantes.

    ?    5. Operaciones Sincronas y Asíncronas. 
            Síncrono: Se ejecutá y al recibir la respuesta la envía al hilo principal.
            Asíncrono: Se ejecutá y no le importa su respuesta. 

    * Página para ir viendo la pila con funciones síncronas y asíncronas: http://latentflip.com/loupe/?code=!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
*/




/*  Código Síncrono Bloqueante */
// Cada ooperación se hace de una vez bloqueando el flujo del hilo principal.
(() => {
    console.log("Código Síncrono");
    console.log("Inicio");

    function dos(){
        console.log("Dos");
    }
    
    function uno(){
        console.log("Uno");
        dos();
        console.log("Tres");
    }

    uno();
    console.log("Fin");
})();



console.log("**********************************************");



/* Código Asíncrono NO Bloqueante */
(() => {
    console.log("Código Síncrono");
    console.log("Inicio");

    function dos(){
        setTimeout(function(){
            console.log("Dos");
        }, 500);
    }
    
    function uno(){
        setTimeout(function(){
            console.log("Uno");
        }, 1000);
        dos();
        console.log("Tres");
    }

    uno();
    console.log("Fin");
})();
// ! log tiene mayor preferencia a contestar que setTimeout()