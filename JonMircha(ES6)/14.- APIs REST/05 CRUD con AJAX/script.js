                        /* CRUD con AJAX */

const d = document,
 $table = d.querySelector(".crud-table"),
  $form = d.querySelector(".crud-form"),
 $title = d.querySelector(".crud-title"),
 $template = d.getElementById("crud-template").content,
 $fragment = d.createDocumentFragment();


const ajax = options => {
    let {url, method, succes, error, data} = options;
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", e => {
        if(xhr.readyState !== 4) return;

        if(xhr.status >= 200 && xhr.status <= 300){
            let json = JSON.parse(xhr.responseText);
            succes(json);
        }else{
            let message = xhr.statusText || "Ocurrió un error";
            error(`Error ${xhr.status}: ${message}`);
        }
    });


    xhr.open(method || "GET", url);
    xhr.setRequestHeader("Content-Type","application/json; charset = utf-8");
    
    xhr.send(JSON.stringify(data));
}

const getAllJusticeLeague = () => {
    ajax({
        //method: "GET",
        url: " http://localhost:3000/justiceleague",
        succes: (respons) => {
            console.log(respons);
            respons.forEach(el => {
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
        },
        error: (err) => {
            console.warn(err);
            $table.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`)
        },
    })
}


d.addEventListener("DOMContentLoaded", getAllJusticeLeague);

d.addEventListener("submit", e => {
    if(e.target === $form){
        e.preventDefault();

        if(!e.target.id.value){
            // Si NO existe haremos un POST-Create
            ajax({
                url: "http://localhost:3000/justiceleague",
                method: "POST",
                succes: (res) => location.reload(),
                error: (err) => $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
                data: {
                    name: e.target.nombre.value,
                    author: e.target.author.value
                }
            });
        }else{
            // Si existe el valor entonces es un PUT-Update
            ajax({
                url: `http://localhost:3000/justiceleague/${e.target.id.value}`,
                method: "PUT",
                succes: (res) => location.reload(),
                error: (err) => $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
                data: {
                    name: e.target.nombre.value,
                    author: e.target.author.value
                }
            });
        }
    }
})


d.addEventListener("click", e => {
    if(e.target.matches(".edit")){
        alert("Presionaste el botón editar");
        $title.textContent = "Editando Heroe de la Justice League";
        $form.nombre.value = e.target.dataset.name;
        $form.author.value = e.target.dataset.author;
        $form.id.value = e.target.dataset.id;   
    }

    if(e.target.matches(".delete")){
        let isDelete = confirm(`Estás seguro que quieres eliminar a ${e.target.dataset.id}`);

        if(isDelete){
            // Delete - DELETE
            ajax({
                url: `http://localhost:3000/justiceleague/${e.target.dataset.id}`,
                method: "DELETE",
                succes: (res) => location.reload(),
                error: (err) => alert(err)
            });    
        }
    }
})