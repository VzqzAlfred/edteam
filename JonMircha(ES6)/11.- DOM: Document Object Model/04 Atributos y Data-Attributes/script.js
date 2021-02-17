            /* Atributos y Data-Attributes */

// Accediendo a los atributos
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));



// Cambiando el valor de los atributos
document.documentElement.lang = "en"
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);





// Utilizar '$' no hace referencia a JQuery, sino que hace referencia a que esa variable guarda un elemento del DOM.
const $linkDOM = document.querySelector(".link-dom");


// Agregando atributos a las etiquetas del HTML
$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");



// Verificando si tieene atributos una etiqueta de HTML
console.log($linkDOM.hasAttribute("rel"));



// Quitando atributos de las etiquetas HTML
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));





// TODO: Data-Attributes

// Los data, se van almacenando en un MAP, 
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);


// Estableciendo nuevos valores
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);


// ó también 
$linkDOM.dataset.description = "Usando notación del puntito";
console.log($linkDOM.dataset.description);