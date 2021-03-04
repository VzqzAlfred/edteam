            /* API Fetch + Async-Await */

(() => {
    const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

    async function getData() {
        try{
            let res = await fetch("https://jsonplaceholder.typicode.com/users"),
            json = await res.json();

            //console.log(res, json);

            //if(!res.ok) throw new Error("Ocurrio un Errror al solicitar los Datos");
            if(!res.ok) throw {status: res.status, statuText: res.statusText}

            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} --- ${el.email} -- ${el.website}`;
                $fragment.appendChild($li);
            });

            $fetchAsync.appendChild($fragment);

        }catch(err){
            console.log(err);
            let message = err.statusText || "Ocurrió un error";
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;

        } finally{
            console.log("Independiente de catch y try");
        }
    }

    getData();
})();