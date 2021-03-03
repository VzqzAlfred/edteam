            /* API Fetch */

(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

  fetch("./users.json")  
  //fetch("https://jsonplaceholder.typicode.com/users")
    /*.then((res) => {
      //console.log(res);
    
      // Lo convierte a JSON y con el otro then ya se puede visualizar.
      return res.ok ? res.json() : Promise.reject(res);
    })
    */
    .then((res) => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
        console.log(json);
        json.forEach(el => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} --- ${el.email} -- <a>${el.website}</a>`;

            $fragment.appendChild($li);
        });

        $fetch.appendChild($fragment);
    })
    .catch((err) => {
        console.log(err);
        let message = err.statusText || "Ocurrio un error";
        $fetch.innerHTML = `Error ${err.status}: ${message}`
    })
    .finally(() => {
      console.log("Esto se ejecutará independinetemente del resultado Fetch");
    });
})();