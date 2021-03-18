            /* Manipulación NO Reactiva del DOM */

const d = document,
$item = d.getElementById("todo-item"),
$list = d.getElementById("todo-list");


d.addEventListener("submit", e => {
    if(!e.target.matches("#todo-form")) return false;

    e.preventDefault();

    //Agregando un item a la lista.
    let $li = d.createElement("li");
    $li.textContent = $item.value;

    //Inyectando el nodo para que se muestre.
    $list.appendChild($li);

    //Limpiando el input para volver a escribir.
    $item.value = "";
    $item.focus(); 
})