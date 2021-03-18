            /* Librería de Componentes */

const d = document;

const app = new Component({
  el: "#todo-list",
  data: {
    todoList: []
  },
  template: function (props) {
    if (props.todoList.length < 1) {
      return `<p><em>Lista sin tareas. </em>🥺</p>`;
    }
  
    let todos = props.todoList.map((item) => `<li>${item}</li>`).join("");
  
    return todos;
  }
});


d.addEventListener("DOMContentLoaded", app.render);


//Estableciendo valores por defecto al State
app.setState({
  todoList: ["Tarea 1", "Tarea 2", "Tarea 3", "Tarea 4"]
});


d.addEventListener("submit", (e) => {
  if (!e.target.matches("#todo-form")) return false;

  e.preventDefault();
  const $item = d.getElementById("todo-item");
  if (!$item) return;

  // Actualizando el State de forma reactiva
  const lastState = app.getState();
  lastState.todoList.push($item.value);
  app.setState({
    todoList: lastState.todoList,
  });

  //Limpiando el input para volver a escribir.
  $item.value = "";
  $item.focus();
});