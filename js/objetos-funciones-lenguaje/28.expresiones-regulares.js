//Expresiones Regulares en JavaScript

const mensaje = "Hola mundo desde visual studio code y desde el lenguaje de programación Javascript. Aqui puedo crear vistas mas interactivas"

/*
    Para usar una expresion regular, se puede declarar de 2 formas distintas.
        - Constructor. let re = new RegExp('a*','i');
        - Notación Literal. let re = / a* /, 'i';
*/

//Declarando expresión regular con constructor

let pattern = new RegExp('vi', 'g');

//Declarando expresión resular con notación literal

/*
    Comprobando las expresiones regulares.
    Para poderlas comprobar se pueden usar 2 métodos.
    - test(). Se le pasa como argumento un texto el cual nos devuelve true o false dependiendo si la expresión cumple en el texto o no.
    - exec(). Nos devuelve un objeto con más datos si es que el texto cumple con la expresión regular.
*/

//Usando el método test().
console.log(pattern.test(mensaje)); //true

//Usando el método exec
console.log(pattern.exec(mensaje)); 
/*
    ["vi", index: 101, input: "Hola mundo desde visual studio code y desde el len…ascript. Aqui puedo crear vistas mas interactivas", groups: undefined]
0: "vi"
groups: undefined
index: 101
input: "Hola mundo desde visual studio code y desde el lenguaje de programación Javascript. Aqui puedo crear vistas mas interactivas"
length: 1
__proto__: Array(0)
*/

//Declarando expresion regular con la notación literal
let mensaje2 = "Las empanadas son muy ricas"

let pattern2 = /ricas/;

//Usando el método test().
console.log(pattern2.test(mensaje2)); //true

//Usando el método exec
console.log(pattern2.exec(mensaje2)); 
/*
    ["ricas", index: 22, input: "Las empanadas son muy ricas", groups: undefined]
0: "ricas"
groups: undefined
index: 22
input: "Las empanadas son muy ricas"
length: 1
*/

/*
    Existen algunas banderas como:
    - i: Que no importa si esta en mayuscula o minuscula
    - g: Que va a ser global, cuando encuentre la coincidencia seguira buscando y no se quedara unicamente en la primera que encuentre
    entre más...
*/