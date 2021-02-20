            /* stopPropagation & preventDefault */

const $divsEventos = document.querySelectorAll(".eventos-flujo div");
console.log($divsEventos);

function flujoEventos(e){
    console.log(`Hola, te saluda ${this.className}, el click lo origino ${e.target.className}`);

    // Hace a que ya no se propagen todos los mensajes; sino solo en donde presionemos.
    e.stopPropagation();
} 

$divsEventos.forEach((divElemento)=>{
    //Utilizando burbuja
    divElemento.addEventListener("click", flujoEventos);
});



const $linkEventos = document.querySelector(".eventos-flujo a");

$linkEventos.addEventListener("click", e => {
    alert(`Hola, bienvenido a Youtube.`);


    // Cancela la acción que tiene por default el elemento
    e.preventDefault();
    // Así ya no imprime en consola la sección que hacemos click
    e.stopPropagation();
})