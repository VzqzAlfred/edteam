            /* Clases CSS */

const $card = document.querySelector(".card")

console.log($card);
console.log($card.className);
console.log($card.classList);


// Verificando si tiene la clase 'rotate-45'
console.log($card.classList.contains("rotate-45"));


// Agregando la clase 'rotate-45'
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));


// Eliminando la clase 'rotate-45'
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));





// Método toggle (Para agregar y quitar)
$card.classList.toggle("rotate-45");    // La agrega
$card.classList.toggle("rotate-45");    // La elimina



// Remplazando clases
$card.classList.toggle("rotate-45");    // La agrega
$card.classList.replace("rotate-45","rotate-135");


// Agregando varias clases
$card.classList.add("opacity-80", "sepia");

// Eliminando varias clases
$card.classList.remove("opacity-80", "sepia");

// Cambiando con toggle
$card.classList.toggle("opacity-80", "sepia");