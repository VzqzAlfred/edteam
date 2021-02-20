            /* BOM: Propiedades y Eventos */

// BOM: Son métodos que cuelgan de window

// Manipulando el viewport
window.addEventListener("resize", e => {

    console.clear();
    console.log("************ Evento Resize ************");

    // immerWidrh: Hace referencia al tamaño del ancho del viewport de nuestra ventana
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    // Nos da el tamaño real del viewport
    console.log(window.outerWidth);
    console.log(window.outerHeight);

    console.log(e);
});



// Manipulando el scroll
window.addEventListener("scroll", e => {
    console.clear();
    console.log("************ Evento Scroll ************");

    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
});



// El cargado de la página
window.addEventListener("load", e => {
    //console.clear();
    console.log("************ Evento load ************");  

    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});



// Es lo mismo que load, pero más rápido.
document.addEventListener("DOMContentLoaded", e => {
    console.log("************ DOMContentLoaded ************");  

    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});