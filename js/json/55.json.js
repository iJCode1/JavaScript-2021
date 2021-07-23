/*
    Json en Javascript
    Es la abreviación de Javascript Object Notation
    Básicamente es una forma de trabajar 'estandar' para leer archivos o bien crear archivos 
    que pueda entender otro lenguaje.
    Por ejemplo cuando enviamos algunos datos al banco cuando se debe procesar una compra.
    Tambien cuando se quiere leer un archivo que devuelve el banco referente a la solicitud de pago.

    Json
    Tiene 2 métodos en JS.
    - .parse(): Hace el parseo de notación Json a Código javascript
    Pe: Json.parse("[1,2,3]") = [1,2,3]

    - .stringify(): Hace la covcersión de Código JS a Notación Json.
    Pe: Json.stringify("{x:1, y:2, z:3}") = {"x": 1, "y": 2, "z": 3}
*/

//.parse() convirtiendo de notación JSON a código JS
console.group("Json to JS: '.parse()")
console.log(JSON.parse("[1,2,3]")); //(3) [1, 2, 3]
console.log(JSON.parse('"Hola Mundo"')); //Hola Mundo
console.log(JSON.parse('{"x":1, "y":2, "z":3}')); //{x: 1, y: 2, z: 3}
console.log(JSON.parse('"h"')); //h
console.log(JSON.parse("34")); //34
console.log(JSON.parse("true")); //true
console.log(JSON.parse("false")); //false
console.log(JSON.parse("null")); //null
console.groupEnd()
// console.log(JSON.parse("undefined")); //Unexpected token u in JSON at position 0   at JSON.parse (<anonymous>)

//.stringify() convirtiendo de código js a notación Json
console.group("JS to Json: '.stringify()")
console.log(JSON.stringify([1,2,3])); //[1,2,3]
console.log(JSON.stringify("Hola Mundo")); //"Hola Mundo"
console.log(JSON.stringify({x: 1, y: 2, z: 3})); //{"x":1,"y":2,"z":3}
console.log(JSON.stringify('h')); //"h"
console.log(JSON.stringify(34)); //34
console.log(JSON.stringify(true)); //true
console.log(JSON.stringify(false)); //false
console.log(JSON.stringify(null)); //null
console.log(JSON.stringify(undefined)); //undefined
console.groupEnd()