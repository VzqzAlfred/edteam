            /* Estilos y Variables CSS */

const $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);


// Estilos que da el navegador
console.log(getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));


// Estabvleciendo valores
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width ="50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1em"
$linkDOM.style.borderRadius = "1.2em"
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(getComputedStyle($linkDOM));





// Variables CSS - Custom Properties (Propiedades configurables-dinámicas).
const $html = document.documentElement,
      $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
 varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color", "#000");

varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");


$body.style.setProperty("background-color", varDarkColor)