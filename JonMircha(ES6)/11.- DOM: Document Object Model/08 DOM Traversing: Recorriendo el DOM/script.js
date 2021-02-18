            /* DOM Traversing: Recorriendo el DOM  */

const $cards = document.querySelector(".cards");
console.log($cards);
//console.log($cards.childNodes);


// Accesiendo a los hijos de .cards
console.log($cards.children);

// Accediendo a uno en particular
console.log($cards.children[2]);

// Retorna el elemento padre
console.log($cards.parentElement);
console.log($cards.parentNode);



// Obteniendo el primero y último elemento
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);

// Elemento antes de cards
console.log($cards.previousElementSibling);

// Elemento después del cards
console.log($cards.nextElementSibling);



// closest(): Busca el ancestro al padre
console.log($cards.children[3].closest("section"));