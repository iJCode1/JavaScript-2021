/*
    Modificando elementos de la forma más actual o tambien llamada Cool-Style
    Con esto podremos...
        - Añadir elementos al principio de un selector
        - Añadir elementos al final de un selector
        - Añadir elementos entre el hermano anterior y el selector
        - Añadir elementos entre el hermano posterior y el selector

    Se utiliza la sintaxis de .insertAdyacent...
    Los cuales son:
        - .insertAdjacentElement(position, el)
        - .insertAdjacentHTML(position, html)
        - .insertAdjacentText(position, text)

    Las posiciones que se puede usar són:
        - beforebegin(hermano anterior)
        - afterbegin(primer hijo)
        - beforeend(ultimo hijo)
        - afterend(hermano siguiente)
*/

//Creando referencia de la sección de 'cards'
const $cards = document.querySelector(".cards");

//Creando una nueva card
const $card = document.createElement("figure");
$card.classList.add("card");

//Creando variable con código html
// let $contentCard = `<img src="https://placeimg.com/200/200/tech"><figcaption></figcaption>`

//Insertando html a la nueva 'card' creada (insertando 'img' y 'figcaption')
$card.insertAdjacentHTML("beforeend", `<img src="https://placeimg.com/200/200/tech"><figcaption></figcaption>`);

//Insertando texto al elemento figcaption de la nueva 'card'
$card.querySelector("figcaption").insertAdjacentText("afterbegin", "Tech")


//Insertando elemento entre el hermano superior y el selector 'cards'
$cards.insertAdjacentElement("beforebegin", $card);


//Insertando elemento entre el ultimo hijo y el selector
$cards.insertAdjacentElement("afterend", $card);


//Insertando elemento al inicio del selector 'primer hijo'
$cards.insertAdjacentElement("afterbegin", $card);


//Insertando elemento al final del selector 'ultimo hijo'
$cards.insertAdjacentElement("beforeend", $card);

console.log($card);



//Javascript ha incorporado nativamente algunos métodos que tenia jQuery para insertar elementos.


//Insertando elemento entre el hermano anterior y el selector 
$cards.before($card);


//Insertando elemento entre el hermano posterior y el selector 
$cards.after($card);


//Insertando elemento al incio del selector 'primerHijo'
$cards.prepend($card);


//Insertando elemento al final del selector 'ultimoHijo'
$cards.append($card);