                        /* API REST: CRUD con Axios */

const d = document,
 $table = d.querySelector(".crud-table"),
  $form = d.querySelector(".crud-form"),
 $title = d.querySelector(".crud-title"),
 $template = d.getElementById("crud-template").content,
 $fragment = d.createDocumentFragment();


const getAll = async() => {
    try {
        let res = await axios.get("http://localhost:3000/avenger"),
        json = await res.data;
        console.log(json);

        json.forEach((el) => {
            $template.querySelector(".name").textContent = el.name;
            $template.querySelector(".author").textContent = el.author;
            $template.querySelector(".edit").dataset.id = el.id;
            $template.querySelector(".edit").dataset.name = el.name;
            $template.querySelector(".edit").dataset.author = el.author;
            $template.querySelector(".delete").dataset.id = el.id;
      
            let $clone = d.importNode($template, true);
            $fragment.appendChild($clone);
        });

        $table.querySelector("tbody").appendChild($fragment);

    } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        $table.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`)
    }
} 

d.addEventListener("DOMContentLoaded", getAll);

d.addEventListener("submit", async(e) => {
    if(e.target === $form){
        e.preventDefault();

        if(!e.target.id.value){
            //Create POST
            try {
                let options = {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json; charset=utf-8",
                    },
                    data: JSON.stringify({
                      // json || el valor del atributo name del input
                      name: e.target.nombre.value,
                      author: e.target.author.value,
                    }),
                  },
                  res = await axios("http://localhost:3000/avenger", options),
                  json = await res.data
                  location.reload();
            } catch (err) {
                let message = err.statuText || "Ocurrió un error.";
                $form.insertAdjacentHTML("afterend",`<p><b>Error: ${err.status}: ${message}</b></p>`);
            }
        }else{
        //Update - PUT
            try {
                let options = {
                    method: "PUT",
                    headers: {
                        "Content-type": "application/json; charset=utf-8",
                    },
                    data: JSON.stringify({
                    name: e.target.nombre.value,
                    author: e.target.author.value,
                    }),
                },
                res = await axios(`http://localhost:3000/avenger/${e.target.id.value}`, options),
                json = await res.data
                location.reload();
            } catch (err) {
                let message = err.statuText || "Ocurrió un error.";
                $form.insertAdjacentHTML("afterend",`<p><b>Error: ${err.status}: ${message}</b></p>`);
            }    
        }
    }
});


d.addEventListener("click", async e => {
    if(e.target.matches(".edit")){
        $title.textContent = "Editando Heroe de la Justice League";
        $form.nombre.value = e.target.dataset.name;
        $form.author.value = e.target.dataset.author;
    $form.id.value = e.target.dataset.id;
    }

    if(e.target.matches(".delete")){
        let isDelete = confirm(`Estás seguro que quieres eliminar a ${e.target.dataset.id}`
        );

        if (isDelete) {
        // Delete - DELETE
        try {
            let options = {
                method: "DELETE",
                headers: {
                  "Content-type": "application/json; charset=utf-8",
                }
              },
              res = await axios(
                `http://localhost:3000/avenger/${e.target.dataset.id}`,
                options
              ),
              json = await res.data;
            location.reload();
          } catch (err) {
            let message = err.statuText || "Ocurrió un error.";
            alert(`Error: ${err.status}: ${message}`);
          }
        }
    }
});