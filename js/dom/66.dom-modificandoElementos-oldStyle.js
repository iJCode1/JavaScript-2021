/*
    Modificando elementos de HTML desde Javascript
    Mediante esto se puede ...
        - Agregar nuevos elementos la inicio de una sección
        - Reemplazar un elemento por otro
        - Eliminar un elemento
        - Dado un selector y elemento como referencia, agregar un elemento
*/

//Creando referencia de las 'cards'
const $cards = document.querySelector(".cards");

//Creando un nuevo elemento
const $figure = document.createElement("figure");
const $img = document.createElement("img");
const $figcaption = document.createElement("figcaption");
const $figcaptionText = document.TEXT_NODE= "Any";

$img.setAttribute("src", "https://placeimg.com/200/200/any");
$img.setAttribute("alt", "Any");

$figcaption.textContent = $figcaptionText;

$figure.appendChild($img);
$figure.appendChild($figcaption);
$figure.classList.add("card");


//Añadiendo la card al principio en la sección de 'cards' usando 'insertBefore()'
//Primer parametro: 'nuevo elemento', segundo parametro: 'referencia de donde se colocara'
$cards.insertBefore($figure, $cards.firstElementChild);


//Eliminando la quinta card 'posición: [4]'
$cards.removeChild($cards.children[4]);


//Añadiendo la 'card' al final
$cards.appendChild($figure);


//Reemplazando la card de animales 'posición: [1]' por la card de 'any'
$cards.replaceChild($figure, $cards.children[1]);


//Clonar toda la sección de cards y agregarlas despues de las originales
$cloneCards = $cards.cloneNode(true);

//Agregandolas al final de main
$main = document.querySelector(".main");
$main.appendChild($cloneCards);