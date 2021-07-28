/*
    Dom Travesing - Recorriendo el DOM desde Javascript
    Con esto podemos recorrer todo el html a partir de nodos o de un elemento.
*/

//Obteniendo la referencia del elemento que tiene la clase .cards
const $cards = document.querySelector(".cards");
//Imprimiendo el elemento
console.log($cards); //<section class="cards">...</section>

//Imprimiendo todos los hijos que tiene el elemento
console.group("Imprimiendo todos los hijos");
console.log($cards.children); //HTMLCollection(5) [figure.card, figure.card, figure.card, figure.card, figure.card]
console.groupEnd();

//Seleccionar el primer hijo
console.group("Primer hijo '.firstElementChild'");
console.log($cards.firstElementChild); //<figure class="card">...</figure> 'Tech'
console.groupEnd();

//Seleccionar el ultimo hijo
console.group("Ultimo hijo '.lastElementChild'");
console.log($cards.lastElementChild); //<figure class="card">...</figure> 'Nature'
console.groupEnd();

//Imprimiendo un hijo en especifico
console.group("Imprimiendo el tercer hijo [2]");
console.log($cards.children[2]); //<figure class="card">...</figure> 'People'
console.groupEnd();

//Imprimiendo el padre del elemento
console.group("Padre del elemento");
console.log($cards.parentElement); //<main class="main">...</main>
console.groupEnd();

console.group("Hermano previo del elemento");
console.log($cards.previousElementSibling); //<input type="text" name="nombre" placeholder="Nombre">
console.groupEnd();

console.group("Hermano siguiente del elemento");
console.log($cards.nextElementSibling); //null
console.groupEnd();

//Buscando el elemento ascendiente que se encuentre tras un determinado selector (busca hacia arriba)
console.group("Elemento ascendiente dado un selector");
console.log($cards.closest("section")); //<section class="cards">...</section>
console.log($cards.closest("body")); //<body>...</body>
console.log($cards.closest("div")); //null
console.log($cards.children[2].closest("footer")); //null
console.log($cards.children[2].closest(".card")); //<figure class="card">...</figure> 'People'
console.groupEnd();