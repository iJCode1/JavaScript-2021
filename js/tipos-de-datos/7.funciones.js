/*
    Funciones en Javascript
    Las funciones son bloques de código que declaramos 1 vez y podemos usar las veces que queramos.
    En javascript tenemos funciones declaradas, funciones expresadas...
    A su vez las funciones nos permiten devolvero o retornar un valor.
*/

mensaje(); //Invocando función declarada antes de ser declarada o definida (ejemplo de función declarada y no expresada).

//Declarando una función sin ningun retorno.
//Función declarada.
function mensaje(){
    console.log("Este es un mensaje de una función");
}

//Invocando una función.
mensaje(); //Este es un mensaje de una función


//Declarando una función que retorna un valor
function saludo(){
    return "Hola Mundo!";
}


/*
    Para poder ver el valor de retorno debemos o guardar el llamado en una variable...
    O hacer el llamado dentro de un console.log
    Ya que si hacemos el llamado asi solamente, esta no mostrara nada por que guarda el valor en donde esta se invoque.
*/


//Llamando a la función saludo
saludo(); // No muestra nada por que debemos guardar el resultado del retorno en algun lugar para poderlo mostrar.


//Guardando el valor que retorna e imprimiendola.
//Podemos guardar el valor y posteriormente imprimirlo.
let saludo1 = saludo();
console.log(`El saludo es: ${saludo1}`); //El saludo es: Hola Mundo!

//O bien podemos hacerlo directamente en el console.log
console.log(saludo()); //Hola Mundo!



/*
    Tambien podemos tener funciones con parametros.
    Es decir que al momento de hacer el llamado a estas, nos pediran que les pasemos uno o mas valores
    que posteriormente funcionaran de algo dentro de esta.
    Por ejemplo para mostrar un mensaje personalizado o hacer alguna operación....
*/

//Declarando una función con 2 parametros (n1 y n2).
function suma(n1, n2){
    let sum = n1+n2;
    return sum;
}


//Llamando a la función suma
suma(5, 6); // No muestra nada por que debemos guardar el resultado en algun lugar para poderlo mostrar.

//Guardando el valor que retorna e imprimiendola.
//Podemos guardar el valor y posteriormente imprimirlo.
let resultado = suma(5, 6);
console.log(`El resultado es: ${resultado}`); //El resultado es: 11

//O bien podemos hacerlo directamente en el console.log
console.log(suma(4, 3)); //7


/*
    Como comente tenemos funciones declaradas y expresadas.
    Los ejemplos de arriba son funciones declarada y en JS las funciones
    declaradas al momento de interpretarse nuestro código estas no importan 
    donde fueron declaradas... Js las declara hasta el principio por lo que no importa en 
    que lugar la invoquemos. Podremos hacer uso de esta.

    Pero las funciones expresadas no permiten esto.
    Para invocar una función expresada necesitamos previamente haberla creado y despues hacer la invocación.
*/


/*
    Estas funciones tienen la particular que se guardan dentro de una variable.
    De preferencia en una de tipo const.
    Tambien se debe mencionar que a la forma en la que se declaran suelen conocerse como funciones anonimas ya que
    despues de escribir la palabra reservada function no debemos indicarle un nombre a esta ya que ya se le coloco en el nombre de la variable.
    Tambien es importante recalcar que para invocar una función expresada debemos previamente haberla creado.
*/


//Definiendo una función expresada.
const mensajeSalida = function(){
    return "Gracias por estar dentro, hasta pronto!";
}

/*
    Para poder hacer el llamado a una función expresada es lo mismo.
    Si retornan algo deberan ser guardadas previamente en una variable o llamarse directamente en el console.log
    Y de igual manera se hace llamado con el nombre de la variable constante.
*/

//Invocando función expresada.
mensajeSalida(); //No muestra nada por que debemos guardar el valor que retorna (Devuelve)

let mensajeS = mensajeSalida();
console.log(mensajeS); //Gracias por estar dentro, hasta pronto!



// Definiendo función expresada con parametros.
const mensajePersonalizado = function(name, age, nationality){
    let msj = `Hola ${name}! eres de ${nationality} y tienes ${age} años.`;
    return msj;
}

console.log(mensajePersonalizado("Joel", 21, "MX")); // Hola Joel! eres de MX y tienes 21 años.

/*
    Por ultimo es importante mencionar que al recibir argumentos (Los parametros que pide una función) podemos establecer
    por defecto algunos valores en caso de que no nos pasen ningun valor en su invocación ya que si no obtendriamos
    valores undefined ya qye estaria creado la variable mas no tendria un valor dado.
*/

//Declarando función con parametros donde tengan un valor por default (Defecto)
const agradecimiento = function(name = "Perenganito", day = "Desconocido"){
    return `Gracias ${name} por visitarnos el dia ${day}!`;
}

//Haciendo el llamado sin pasarle ningun valor.
console.log(agradecimiento()); //Gracias Perenganito por visitarnos el dia Desconocido!

//Haciendo el llamado con valores.
console.log(agradecimiento("Joel", "Jueves")); // Gracias Joel por visitarnos el dia Jueves!