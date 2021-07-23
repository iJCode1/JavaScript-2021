/*
    Numeros en JS.
    El uso de variables numericas es igual que en otros lenguajes de programación.
    Solo que en JS no debemos especificar el tipo de dato. Este lo hara en automatico
    incluso si cambia a lo largo del programa.
*/

//Definiendo un tipo de dato Number:
let edad = 21;
console.log(edad); //21
console.log(typeof edad); //number

let precio = 47.99
console.log(precio); //47.99
console.log(typeof edad); //number

let precio2 = 71.65632
console.log(precio2); //71.65632

//.toFixed "Delimitar el numero de decimales e incluso lo redondea si es el caso."
console.log(precio.toFixed(1)); //48.0
console.log(precio2.toFixed(3)); //71.656

let n1 = 70.2;
let n2 = "3.2"; //3 de tipo string.

//Tratemos de sumar los 2 numeros anteriores.
let suma = n1+n2;
console.log(suma); //70.23.2
/*
Javascript al ver que uno de los datos es un string lo que hace es unirlos (Concatenación) más no la suma de estos.
Para solucionar esto lo que podemos hacer es un casteo al numero que en realidad es de tipo string.
Para esto hacemos uso de parseInt() o parseFloat() depende sea el caso requerido;
*/

let suma2 = n1 + parseFloat(n2);
console.log(suma2); // 73.4
console.log(typeof suma2); // number

//Obteniendo solo la parte entera de un numero con decimal.
let decimal = 34.65445;
console.log(parseInt(decimal)); //34

/*
    Javascript tiene un problema con los numeros sobretodo al querer hacer operaciones con 2 numeros.
*/

let n3 = 34.7;
let n4 = "23.12";

let adicion = n3 + parseFloat(n4);
console.log(adicion); //49 57.82000000000001

//Para solucionar esto podriamos hacer uso de .toFiced()

console.log(adicion.toFixed(2)); //57.82