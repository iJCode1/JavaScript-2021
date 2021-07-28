/*
    Classes de CSS en manipuladas desde Javascript
    Se tienen 2 opciones.
    - document.className
    - document.classList() 'Recomendada'
    Adicionalmente con .classList se puede agregar clases, remover, consultar si existe, reemplazar o utilizar el método toogle
    toggle: Si la clase esta declarada, se elimina. Si la clase no esta declarada, se añade.
*/

//Accediendo al primer .card que existe.
let $card = document.querySelector(".card");
console.log($card); //<figure class="card">...</figure>

console.group(".className");
console.log($card.className); //card
console.groupEnd();

console.group(".classList");
console.log($card.classList); //DOMTokenList ["card", value: "card"]
console.groupEnd();

//Añadiendo una nueva clase al elemento
$card.classList.add("rotate-45");
console.log($card.classList); //DOMTokenList(2) ["card", "rotate-45", value: "card rotate-45"]

//Preguntando si el elemento '$card' tiene la clase 'rotate-45'
console.log($card.classList.contains("rotate-45")); //true

//Eliminando la clase 'rotate-45'
$card.classList.remove("rotate-45");

//Consultando nuevamente si el elemento '$card' tiene la clase 'rotate-45' despues de haber sido eliminada.
console.log($card.classList.contains("rotate-45")); //false

//Aplicando más de 1 clase a la vez al elemento
$card.classList.add("rotate-45", "sepia", "opacity-80");
console.log($card.classList); //DOMTokenList(4) ["card", "rotate-45", "sepia", "opacity-80", value: "card rotate-45 sepia opacity-80"]

//Eliminando más de 1 clase al elemento
$card.classList.remove("opacity-80","sepia");
console.log($card.classList); //DOMTokenList(2) ["card", "rotate-45", value: "card rotate-45"]

//Reemplazando una clase por otra
$card.classList.replace("rotate-45", "rotate-135");
console.log($card.classList); //DOMTokenList(2) ["card", "rotate-135", value: "card rotate-135"]

//Imprimiendo las clases del elemento
$card.classList.forEach((clase)=>{
    console.log(`La clase es: '${clase}'`);
})
/*
    La clase es: 'card'
    La clase es: 'rotate-135'
*/

console.group("togle");
console.log("Estilos al inicio");
console.log($card.classList); //DOMTokenList(2) ["card", "rotate-135", value: "card rotate-135"]
console.log("Aplicando toogle con clase 'sepia'");
$card.classList.toggle("sepia");
console.log($card.classList); //DOMTokenList(3) ["card", "rotate-135", "sepia", value: "card rotate-135 sepia"]
console.log("Aplicando toogle con clase 'sepia'");
$card.classList.toggle("sepia");
console.log($card.classList); //DOMTokenList(2) ["card", "rotate-135", value: "card rotate-135"]

//Pero se puede pasar un parametro más para indicar si se debe aplicar o no... (true || false)
//$card.classList.toggle("sepia",true);
console.groupEnd();