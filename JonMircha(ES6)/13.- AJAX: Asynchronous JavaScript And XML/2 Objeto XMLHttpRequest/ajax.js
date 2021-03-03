            /* Objeto XMLHttpRequest */

(() => {
    //TODO: Instanciamos uno bjeto XML
    const xhr = new XMLHttpRequest(),
         $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

    //console.log("Verifica readyState", xhr);


    //TODO: Asignarle los eventos, para manipular en la petición
    // xhr.onreadystatechange       ó
    xhr.addEventListener("readystatechange", e => {
        if(xhr.readyState !== 4) return;

        console.log(xhr);
        if(xhr.status >= 200 && xhr.status <= 300){
            console.log("Éxito");
            //console.log(xhr.responseText);
            //$xhr.innerHTML = xhr.responseText;
            
            // Convirtiendo la respuesta a JSON (parse)
            let json = JSON.parse(xhr.responseText);
            console.log(json);

            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} --- ${el.email} -- <a>${el.website}</a>`;

                $fragment.appendChild($li);
            });

            $xhr.appendChild($fragment);
        }else{
            console.log("Error");

            let message = xhr.statusText || "Ocurrio un error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`
        }
    });


    //TODO: Instrucción que va a abrir la petición; estableciendo el método y el recurso ó endPoint a acceder
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");


    //TODO: Enviar la petición
    xhr.send();
})();