            /* Modificando Elementos (Cool Style) */
/* 
    * .insertAdjacent...
        .insertAdjacentElement(position, elemento)
        .insertAdjacentHTML(position, html)
        .insertAdjacentText(position, text)

    * Posiciones:
        beforebegin(hermano anterior)
        afterbegin(primer hijo)
        beforeend(último hijo)
        afterend(hermano siguiente)
*/

const $cards = document.querySelector(".cards"),
      $newCard = document.createElement("figure");

/***************************************************************
$newCard.innerHTML = `
            <img src="https://placeimg.com/200/200/any" alt="Any">
            <figcaption>Any</figcaption>
`;
$newCard.classList.add("card");


                    //? Posiciones
// Se crean entre el enlace 'a' y la 'section'
//$cards.insertAdjacentElement("beforebegin", $newCard);

// Agregandola como primer hijo
//$cards.insertAdjacentElement("afterbegin", $newCard);

// Agregandolo como último hijo
//$cards.insertAdjacentElement("beforeend", $newCard);

// Agregandolo después del section
//$cards.insertAdjacentElement("afterend", $newCard);

***************************************************************/






//!     AdjacentHTML vs innerHTML
let $contentCard = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption></figcaption>
`;
$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend", $contentCard);

$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any")

$cards.insertAdjacentElement("afterbegin", $newCard);



// Hace lo mismo que AdjacentElement
//$cards.prepend($newCard);

// Hace lo mismo que beforebegin
//$cards.before($newCard);

// Hace lo mismo que beforend
//$cards.append($newCard)

// Hermano posterior o después
//$cards.after($newCard)