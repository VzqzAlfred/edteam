            /* Modificando Elementos (Old Style) */

// Métodos antes utilizados (YA NO MUY USADOS)

const $cards = document.querySelector(".cards"),
      $newCard = document.createElement("figure");

$newCard.innerHTML = `
            <img src="https://placeimg.com/200/200/any" alt="Any">
            <figcaption>Any</figcaption>
`;

$newCard.classList.add("card");


// Remplazamos por 'any':   (nuevaAAgregar, enDondeRemplazar)
//$cards.replaceChild($newCard, $cards.children[2]);



// Insertando en la primera con 'insertbefore'
//$cards.insertBefore($newCard, $cards.firstElementChild); 



// Eliminando último card
//$cards.removeChild($cards.lastElementChild);



// Clonando elementos
// 'true' es un aparámetro que nos copiara todo los elementos.
const $cloneCards = $cards.cloneNode(true);
document.body.appendChild($cloneCards)