/*
    En Javascript tenemos estos 3 tipos de datos: NaN, null, undefined.
    null y undefined representan una ausencia de valor... pero se obtienen de forma diferente.
    Mientras que NaN representa "Not a number" o mejor dicho no es un numero.
    null se obtiene cuando se le indica que la variable valdra eso.
    undefined se obtiene cuando una variable no esta inicializada o la función no retorna un valor.
    NaN podemos obtenerla cuando hacemos una operación no valida por ejemplo la multiplicación de "hola" * 2.
    Si quisieramos hacer la suma de "hola" + 2. Aunque es incorrecto lo que hace este operador es concatenar
    quedando como: hola2
*/

//Obteniendo una variable que arroja null
let nula = null;
console.log(nula); //null


//Obteniendo una variable undefined
let costo;
console.log(costo); //undefined


//Obtieniendo un NaN
let n1 = 7;
let saludo = "Hola";
console.log(n1*saludo); //NaN
console.log(n1/saludo); //NaN
console.log(n1-saludo); //NaN
console.log(Math.sqrt(-1)); //NaN

