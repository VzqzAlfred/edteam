            /* Manejadores de Eventos */

// (Event handlers): Mecanismo para controlar las acciones del usuario y definir acciones del documento.
// 3 formas de declarar eventos en JS.

//? 1. Evento con atributo HTML
const holaMundo = () => {
    alert("Hola Amigos");
    console.log(event);
    // event; imprime info de que tipo de evento es y etc
}





//? 2. Evento con Manejador semántico

const $eventoSemantico = document.getElementById("evento-semantico");

// Sin los '()' porque al momento de colocarlo y cargar el DOM se va a ejecutar.
$eventoSemantico.onclick = holaMundo;

// Desventaja es que se ejecuta la segunda
$eventoSemantico.onclick = function(e){
    alert(`Hola amigos desde el Manejador de Eventos Semántico`);

    // 'e' es lo mismo que event
    console.log(e);
    console.log(event);
}





//? 3. Evento con Manejador Múltiples

const $eventoMultiple = document.getElementById("evento-multiple");

$eventoMultiple.addEventListener("click", holaMundo)
$eventoMultiple.addEventListener("click", (e)=> {
    alert(`Manejador de Eventos múltiples`);
    console.log(e);
    console.log(e.type);
    console.log(e.target);
});
