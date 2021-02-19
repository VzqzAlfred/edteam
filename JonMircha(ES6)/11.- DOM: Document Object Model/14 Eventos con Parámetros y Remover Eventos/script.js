            /* Eventos con Parámetros y Remover Eventos */


const $eventoMultiple = document.getElementById("evento-multiple");

function saludar(nombre = "Desconocid@"){
    alert(`Hola ${nombre} soy el DOM`);
}

$eventoMultiple.addEventListener("click", (e)=> {
    alert(`Manejador de Eventos múltiples`);
    console.log(e);
    console.log(e.type);
    console.log(e.target);
});

$eventoMultiple.addEventListener("click", () => {
    saludar();
    saludar("Alfred :D")
})





// Eliminando eventos de un elemento
//TODO: No se pueden eliminar utilizando *arrow function* en el handler

const $eventoRemover = document.getElementById("evento-remover");

const removeDblClick = (e) => {
    alert(`Removiendo el evento de type ${e.type}`);
    console.log(e);

    $eventoRemover.removeEventListener("dblclick", removeDblClick);

    // Deshabilita el botón
    $eventoRemover.disabled = true;
}

$eventoRemover.addEventListener("dblclick", removeDblClick);