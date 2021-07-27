/*
    Interactuar desde Javascript con los elementos de html con determinado atributo o data-attribute.
    No solo se puede seleccionar un elemento a partir de X atributo, tambien se puede agregar Y atributo
    al elemento de html.
*/

//Obteniendo el lenguaje del documento html
console.log(document.documentElement.lang); //es

//Aunque se obtiene el atributo... Es mas recomendable usar .getAttribute("")
console.group("Obteniendo 'lang' con .getAttribute()");
console.log(document.documentElement.getAttribute("lang")); //es
console.groupEnd();

//Modificando el atributo lang con 'setAttribute(atributo, valor)'

console.group("Atributo 'lang' modificado");
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.getAttribute("lang")); //es-MX
console.groupEnd();

//Guardando el variable el elemento con el la clase 'link-dom'
//Al crear variables del dom... se recomienda anteponer el simbolo '$'
const $link_dom = document.querySelector(".link-dom");
console.log($link_dom); //<a class="link-dom" href="index.html">DOM</a>

//Imprimiendo el valor de 'href'
console.log($link_dom.getAttribute("href")); //index.html

//Eliminando el atributo 'href'
$link_dom.removeAttribute("href");
console.log($link_dom.getAttribute("href")); //null

//Consultando si el elemento contiene el atributo 'href'
console.log($link_dom.hasAttribute("href")); //false

//Agregando nuevamente el atrubuto 'href'
$link_dom.setAttribute("href", "https://www.youtube.com/jonmircha")

//Consultando si el elemento contiene el atributo 'href'
console.log($link_dom.hasAttribute("href")); //true

//Imprimiendo el atributo 'href'
console.log($link_dom.getAttribute("href")); //https://www.youtube.com/jonmircha

//Agregando un nuevo atributo 'target'
$link_dom.setAttribute("target", "_blank");
console.log($link_dom.getAttribute("target")); //_blank

//Agregando un nuevo atributo 'rel'
$link_dom.setAttribute("rel", "noopener");

//Imprimiendo el ultimo atributo puesto
console.log($link_dom.hasAttribute("rel")); //true
console.log($link_dom.getAttribute("rel")); //noopener

/*
    De igual forma se puede trabajar con los data-attributes que contienen los elementos en HTML 
*/

//Accediendo a un data-attribute
console.log($link_dom.getAttribute("data-description")); //Document Object Model

//Accediendo a un data-attribute 'método 2'
console.log($link_dom.dataset.description); //Document Object Model

//Los data-attributes se guardan en una especie de mapa, para acceder a dicho mapa se indica 'dataset'
//Con esta forma es una nueva manera de trabajar con los data-attributes
console.group("Mapa de data-attributes");
console.log($link_dom.dataset); //DOMStringMap {description: "Document Object Model"}
console.groupEnd();

//Agregando un nuevo data-attribute
$link_dom.setAttribute("data-id", "7");
console.log($link_dom.getAttribute("data-id")); //7
console.log($link_dom.dataset.id); //7

//Eliminando un atributo
$link_dom.removeAttribute("data-id")

//Consultando si el elemento tiene el data-attribute 'id'
console.log($link_dom.hasAttribute("data-id")); //false

//Añadiendo de nuevo el data-attribute 'data-id'
$link_dom.setAttribute("data-id", "2");
console.log($link_dom.getAttribute("data-id")); //2

//Preguntando si el elemento tiene el data-attribute 'data-id'
console.log($link_dom.hasAttribute("data-id")); //true