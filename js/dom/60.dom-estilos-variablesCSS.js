/*
    Estilos y Variables de CSS desde Javascript.
*/

//Accediendo a todos los estilos del html 'todos los estilos posibles'
console.log(document.documentElement.style); //CSSStyleDeclaration {additiveSymbols: "", alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", …}

//Creando variable del objeto con la clase 'link-dom'
const $link_dom = document.querySelector(".link-dom");
//Imprimiendo todos los estilos posibles al elemento
console.log($link_dom.style); //CSSStyleDeclaration {0: "background-color", 1: "color", additiveSymbols: "", alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", …}

//Obteniendo unicamente los estilos aplicados al elemento
console.log($link_dom.getAttribute("style")); //background-color: #fca311; color: #14213d

//Obteniendo un estilo en especifico
console.log($link_dom.style.backgroundColor); //rgb(252, 163, 17)
console.log($link_dom.style.color); //rgb(20, 33, 61)

//Visualizando los estilos que se han computalizado
console.log(window.getComputedStyle($link_dom)); //

//Accediendo a un elemento de los estilos computarizados
console.log(getComputedStyle($link_dom).getPropertyValue("color")); //rgb(20, 33, 61)
console.log(getComputedStyle($link_dom).getPropertyValue("background-color")); //rgb(252, 163, 17)


//Agregando nuevos estilos a un elemento de HTML
console.log("Agregando nuevos estilos al elemento de HTML");

$link_dom.style.setProperty("width", "50%");
$link_dom.style.setProperty("display", "block");

//Eliminando una propiedad del elemento
$link_dom.style.removeProperty("background-color");

console.log($link_dom.getAttribute("style")); //color: rgb(20, 33, 61); width: 50%; display: block;

//Añadiendo nuevamente el background-color

$link_dom.style.setProperty("background-color", "rgb(252, 163, 17)");
console.log($link_dom.getAttribute("style")); //color: rgb(20, 33, 61); width: 50%; display: block; background-color: rgb(252, 163, 17);

//Agregando nuevos estilos con la notación del (.)
$link_dom.style.marginLeft = "auto";
$link_dom.style.marginRight = "auto";
$link_dom.style.padding= "10px";
console.log($link_dom.getAttribute("style")); //background-color: rgb(252, 163, 17); color: rgb(20, 33, 61); width: 50%; display: block; margin-left: auto; margin-right: auto; padding: 10px;

$link_dom.style.setProperty("text-align", "center");
$link_dom.style.fontSize = "3rem";

//Observando los estilos finales
console.log($link_dom.style); //
console.log($link_dom.getAttribute("style")); //background-color: rgb(252, 163, 17); color: rgb(20, 33, 61); width: 50%; display: block; margin-left: auto; margin-right: auto; padding: 10px; text-align: center; font-size: 3rem;
console.log(getComputedStyle($link_dom)); //

//Variables de CSS

//Accediendo al html y al body
$html = document.documentElement;
$body = document.body;

console.log($html); 

//Imprimiendo las variables declaradas en el root del html
console.log(getComputedStyle($html).getPropertyValue("--dark-color")); //rgb(20, 33, 61)

//Guardando las variables CSS en variables de JS
let varDark = getComputedStyle($html).getPropertyValue("--dark-color");
let varOrange = getComputedStyle($html).getPropertyValue("--orange");

console.log(varDark, varOrange); //rgb(20, 33, 61)  rgb(252, 163, 17)

//Cambiando el estilo al body
$body.style.backgroundColor = varOrange;
$body.style.color = varDark;

//Cambiando el valor de una propiedad variable de CSS
$html.style.setProperty("background-color", "#a0c4ff");

//Actualizando el valor de background del body
$body.style.backgroundColor = $html.style.backgroundColor;