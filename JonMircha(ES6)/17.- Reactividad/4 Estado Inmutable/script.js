            /* Estado Inmutable */

const d = document;

// El state
const state = {
    todoList: [],
    nombre: ""
}

// Template UI
const template = () => {
    if(state.todoList.length < 1){
        return `<p><em>Lista sin tareas. </em>🥺</p>`
    }

    let todos = state.todoList.map(item => `<li>${item}</li>`).join("");

    return todos;
}

// Render UI
const render = () => {
    console.log(state);
    const $list = d.getElementById("todo-list");
    if(!$list) return;

    $list.innerHTML = template();
}

// Actualizar el State de forma reactiva
const setState = obj => {
    for (let key in obj) {
        if (state.hasOwnProperty(key)){
            state[key] = obj[key];
        }
    }

    render();
}


// Obtenemos una copia inmutable del State
const getState = () => JSON.parse(JSON.stringify(state));



d.addEventListener("DOMContentLoaded", render);



//Estableciendo valores por defecto al State
setState({
    todoList: ["Tarea 1", "Tarea 2", "Tarea 3", "Tarea 4"],
    nombre: "Alfred"
});

//* Estado mutable, porque permite modificar el estado directamente creando una copia del objeto y agregando otro elemento.
const items = getState();
items.todoList.push("Tarea 5");
console.log("Ya tengo mi estado inmutable", state);



d.addEventListener("submit", e => {
    if(!e.target.matches("#todo-form")) return false;

    e.preventDefault();
    const $item = d.getElementById("todo-item");
    if(!$item) return;

    // Actualizando el State de forma reactiva
    const lastState = getState()
    lastState.todoList.push($item.value);
    setState({
        todoList: lastState.todoList
    });

    //Limpiando el input para volver a escribir.
    $item.value = "";
    $item.focus(); 
})