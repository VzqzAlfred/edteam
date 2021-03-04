            /* Axios */

(() => {
    const $Axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

    axios
        .get("https://jsonplaceholder.typicode.com/user")
        .then(res => {
            console.log(res);
            let json = res.data;
            console.log(json);

            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} --- ${el.email} -- ${el.website}`;
                $fragment.appendChild($li);
            });
            $Axios.appendChild($fragment);
        })
        .catch(err => {
            console.log(err.response);
            let message = err.response.statusText || "Ocurrió un error";
            $Axios.innerHTML = `Error ${err.response.status}: ${message}`;
        })
        .finally( () => {
            console.log("Independientemente del try - catch")
        });    
})();