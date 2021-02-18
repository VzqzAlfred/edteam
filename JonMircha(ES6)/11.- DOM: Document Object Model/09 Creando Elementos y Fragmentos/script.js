            /* Creando Elementos y Fragmentos */

// Creando un elemento 
const $figure = document.createElement("figure"),
      $img = document.createElement("img"),
      $figcaption = document.createElement("figcaption"),
      $figcaptionText = document.createTextNode("Animals"),
        // Agregando elemento donde lo vamos a agregar
      $cards = document.querySelector(".cards");


$img.setAttribute("src", "http://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals")
$figure.classList.add("card")

$figcaption.appendChild($figcaptionText)
$figure.appendChild($img); 
$figure.appendChild($figcaption)

// Agregando el hijo
$cards.appendChild($figure);





/* Creandolo de otra manera */
const $figure2 = document.createElement("figure");

$figure2.innerHTML = `
<img src="http://placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>
`
$figure2.classList.add("card");
$cards.appendChild($figure2);




// Otro ejemplo
const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
            $ul = document.createElement("ul");

document.write("<h3>Estaciones del año</h3>");
document.body.appendChild($ul);

estaciones.forEach(e => {
    const $li = document.createElement("li");
    $li.textContent = e;
    $ul.appendChild($li);
});




// Otra forma
const continentes = ["África", "América", "Europa", "Asia", "Oceanía"],
$ul2 = document.createElement("ul");

document.write("<h3>Continentes del mundo</h3>")
document.body.appendChild($ul2);

continentes.forEach(e => $ul2.innerHTML += `<li>${e}</li>`)






// TODO: Utilizando fragmentos (Para hacer que se muestre un arreglo de cientos o mil)
const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
$ul3 = document.createElement("ul"),
$fragment = document.createDocumentFragment();

dias.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
});

document.write("<h3>Meses del año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);