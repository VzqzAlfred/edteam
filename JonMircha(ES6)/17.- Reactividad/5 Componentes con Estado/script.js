            /* Componentes con Estado */

const d = document;

// El state Global
const state = {
  todoList: [],
  nombre: "",
};


// Template UI
const template = () => {
  if (template.data.todoList.length < 1) {
    return `<p><em>Lista sin tareas. </em>🥺</p>`;
  }

  let todos = template.data.todoList.map((item) => `<li>${item}</li>`).join("");

  return todos;
};

// Agregando State al Template que genera el Componente de UI (State Local)
template.data = {
    todoList: []
}

// Render UI
const render = () => {
  console.log("Estado global", state);
  console.log("Estado Local", template.data);
  const $list = d.getElementById("todo-list");
  if (!$list) return;

  $list.innerHTML = template();
};


// Actualizar el State de forma reactiva
const setState = (obj) => {
  for (let key in obj) {
    if (template.data.hasOwnProperty(key)) {
        template.data[key] = obj[key];
    }
  }

  render();
};


// Obtenemos una copia inmutable del State
const getState = () => JSON.parse(JSON.stringify(template.data));


d.addEventListener("DOMContentLoaded", render);


//Estableciendo valores por defecto al State
setState({
  todoList: ["Tarea 1", "Tarea 2", "Tarea 3", "Tarea 4"]
});


d.addEventListener("submit", (e) => {
  if (!e.target.matches("#todo-form")) return false;

  e.preventDefault();
  const $item = d.getElementById("todo-item");
  if (!$item) return;

  // Actualizando el State de forma reactiva
  const lastState = getState();
  lastState.todoList.push($item.value);
  setState({
    todoList: lastState.todoList,
  });

  //Limpiando el input para volver a escribir.
  $item.value = "";
  $item.focus();
});