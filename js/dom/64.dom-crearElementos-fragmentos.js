/*
    Crear Elementos y Fragmentos de HTML desde Javascript
*/

//Creando elemento por elemento de una 'card' para posteriormente juntarlos
const $figure = document.createElement("figure");
const $img = document.createElement("img");
const $figCaption = document.createElement("figcaption");
const $figCaptionText = document.createTextNode("Tech");

//Creando la referencia de la sección de las 'cards'
const $cards = document.querySelector(".cards");

//Añadiendo los atributos a la etiqueta 'img'
$img.setAttribute("src", "https://placeimg.com/200/200/tech");
$img.setAttribute("alt", "Tech");

//Añadiendo el TextoNode al elemento 'figCaption'
$figCaption.appendChild($figCaptionText);

//Juntando los elementos en una 'card'
$figure.appendChild($img);
$figure.appendChild($figCaption);

//Agregando la clase 'card' al elemento 'figure'
$figure.classList.add("card");

//Agregando la 'card' a la sección 'cards'
$cards.appendChild($figure);



//Agregando de otra manera un 'card' (Forma no tan recomendada dado que no se esta creando un nodo)
const $figure2 = document.createElement("figure");

//Agregando la clase 'card' al figure
$figure2.classList.add("card");

//Creando la 'card'
$figure2.innerHTML = `<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>`;

//Agregando la 'card' a la sección de 'cards'
$cards.appendChild($figure2);



//añadiendo clase a los figures de cada 'card'
const $card = document.querySelectorAll(".card figcaption");
// console.log($card);
$card.forEach(el =>{
    el.classList.add("text2Rem");
    el.style.textTransform = "uppercase"
});




//Agregando dinamicamente elementos html 

//Creando referencia del 'main'
const $main = document.querySelector(".main");

//Añadiendo un h2 en el html (no recomendable)
const $h2 = document.createElement("h2");
const $h2Text = document.createTextNode("Estaciones del año");
$h2.appendChild($h2Text);
$main.appendChild($h2);

//Creando arreglo con elementos
const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];

//Creando elemento ul
$ul = document.createElement("ul");

//Agregando cada elemento del arreglo en un 'li' dentro del 'ul'
estaciones.forEach(elemento =>{
    const $li = document.createElement("li");
    $li.textContent = elemento;
    $ul.appendChild($li);
})

//Añadiendo 'ul' al 'main' (Al final)
$main.appendChild($ul);


//Segunda forma de crear elementos dinamicos... (No tan recomendada)

//Creando arreglo de continentes
const continentes = ["África", "América", "Asia", "Europa", "Oceanía"];


//Insertando un 'h2' al 'main'
const $h22 = document.createElement("h2");
const $h22Text = document.createTextNode("Continentes del mundo");
$h22.appendChild($h22Text);
$main.appendChild($h22);

//Creando nuevo 'ul'
const $ul2 = document.createElement("ul");

//Agregando 'ul' al 'main'
$main.appendChild($ul2);

//En algunos navegadores es necesario inicializar el .innerHTML
$ul2.innerHTML = "";

//Creando cada 'li' con ayuda de 'innerHTML'
continentes.forEach(el =>{
    $ul2.innerHTML += `<li>${el}</li>`;
})

/*
    Es importante mencionar que al generar dinamicamente nuevos elementos html desde js
    es una carga de trabajo extra para la pagina cada vez que agrega cada nuevo elemento por ejemplo con un bucle foreach.
    Por lo que... es mas recomendable crear Fragmentos donde se almacenene todos los elementos que se deben mostrar en la pagina.
    Y al final se hace una unica inserción del fragmento completo.

    Dicho esto, se hara uso de la sintaxis del fragmento (recomendada)
*/

//Creando arreglo de meses
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

//Creando texto
const $h23 = document.createElement("h2");
const $h23Text = document.createTextNode("Meses del año");
$h23.appendChild($h23Text);

//Agregando 'h2' al 'main'
$main.appendChild($h23);

//Creando 'ul'
const $ul3 = document.createElement("ul");

//Creando fragmento de meses
const $fragmentoMeses = document.createDocumentFragment();

//Recorriendo el arreglo de meses
meses.forEach(el=>{
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragmentoMeses.appendChild($li);
});

//Agregando el fragmento al 'ul'
$ul3.appendChild($fragmentoMeses);

//Agregando el 'ul' al 'main'
$main.appendChild($ul3);