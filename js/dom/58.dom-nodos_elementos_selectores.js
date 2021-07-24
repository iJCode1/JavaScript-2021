/*
    Nodos, elementos y selectores del DOM
    A partir de esto es que se puede interactiar con los elementos del HTML desde Javascript.

    Se tienen los siguientes métodos. 

    (Los siguientes 3 ya no se recomiendan usar)
    - getElementsByTagName()
    - getElementsByName()
    - getElementsByClassName()

    (Estos 3 son los que se recomiendan usar)
    - getElementByID()
    - querySelector()
    - querySelectorAll()
*/

//Seleccionando elementos del html por tag 'todos los a'
let tag = document.getElementsByTagName("a");
console.log(tag); //HTMLCollection(6) [a, a, a, a, a, a.link-dom]

//Seleccionando elementos por atributo name 
let namee = document.getElementsByName("nombre");
console.log(namee); //NodeList [input]

//Seleccionando elementos por clase
let clase = document.getElementsByClassName("link-dom");
console.log(clase); //HTMLCollection [a.link-dom]


//Recomendables.

//Seleccionando elemento por ID
let identificador = document.getElementById("que-es");
console.log(identificador); // <p id="que-es">...</p>

//Seleccionando el primer elemento 'a' con querySelector
let primerA = document.querySelector("a");
console.log(primerA); //<a href="#">Seccion 1</a>

//Seleccionando todos los elementos 'a' con querySelector
let todosLosA = document.querySelectorAll("a");
console.log(todosLosA); //NodeList(6) [a, a, a, a, a, a.link-dom]

//Seleccionando todas las imagenes que estan dentro de un elemento con la clase 'card'
let imagenes = document.querySelectorAll(".card img")
console.log(imagenes); //NodeList(5) [img, img, img, img, img]

/*
    Con querySelector y querySelectorAll
    Tambien se pueden seleccionar elementos por class e id
    Solo es necesario indicar el (.) para clase y (#) para id
*/

//Imprimiendo el tercer elemento a
let tercerA = document.querySelectorAll("#menu li a")[2];
console.log(tercerA); //<a href="#">Seccion 3</a>

//Imprimiendo cuantas etiquetas 'li' hay dentro del 'menu'
let tamanio = document.querySelectorAll("#menu ul li").length;
console.log(tamanio); //5

//Imprimiendo cada elemento a con un bucle
let imprimiendoElementos = document.querySelectorAll("a").forEach(el=>{
    console.log(el);
})

/*
    <a href="#">Seccion 1</a>
    <a href="#">Seccion 2</a>
    <a href="#">Seccion 3</a>
    <a href="#">Seccion 4</a>
    <a href="#">Seccion 5</a>
    <a class="link-dom" href="index.html">DOM</a>
*/