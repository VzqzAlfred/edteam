const d = document,
$main = d.querySelector("main");

fetch("assets/javascript.md")
    .then(res => res.ok ? res.text() : Promise.reject(res))
    .then(text => {
        console.log(text);
        $main.innerHTML = new showdown.Converter().makeHtml(text)
    })
    .catch(err => {
        console.log(err);
        let message = err.statusTex || "Ocurrió un error";
        $main.innerHTML = `Error ${err.status}: ${message}`
    })