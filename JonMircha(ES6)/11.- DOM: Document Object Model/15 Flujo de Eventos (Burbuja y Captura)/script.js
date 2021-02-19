            /* Flujo de Eventos (Burbuja y Captura) */

// Hay 2 maneras en como se va propagando el evento.
/*
    Fase de Burbuja: Va del interno al externo.

    Captura: Va del más externo al interno.
*/


const $divsEventos = document.querySelectorAll(".eventos-flujo div");
console.log($divsEventos);

function flujoEventos(e){
    console.log(`Hola, te saluda ${this.className}, el click lo origino ${e.target.className}`);
} 

$divsEventos.forEach((divElemento)=>{
    //! Fase de burbuja es: sin especificar el tercer parámetro o especificandolo con false
    //divElemento.addEventListener("click", flujoEventos);
    divElemento.addEventListener("click", flujoEventos, false);



    //! Fase de captura: es activando el tercer parámetro a true
    //divElemento.addEventListener("click", flujoEventos, true)


    /* ó también
    divElemento.addEventListener("click", flujoEventos, {
        capture: false,      // false o true (burbuja o captura).
        once: true,          // 'true' Solo se ejecuta una sola vez.
    })*/
});