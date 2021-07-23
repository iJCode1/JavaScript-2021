/*
    let vs var en Javascript
*/

/*
La diferencia principal entre estos 2 es el scope o alcance que estas tienen.
var tiene un problema muy grave y es que genera hoisting...
Ya que se almacena dentro del objeto global del navegador que es 'window' por lo que
puede traernos problemas ya que es accesible desde cuaqluier lugar.
Mientras que let evita tener hoisting ya que solo es accesible en el bloque donde se declaro.
Por lo que no nos modificara el codigo en otras partes donde no lo deseemos.
*/

var nombre = "Joel";
console.log("Nombre antes del bloque "+nombre); //Joel
{
    var nombre = "Pepe";
    console.log("Nombre dentro del bloque "+nombre); //Pepe
}

console.log("Nombre despues del bloque "+nombre); //Pepe

console.log("******************* let ********************");

let nombre2 = "Julieta";
console.log("Nombre antes del bloque "+nombre2); //Julieta
{
    let nombre2 = "Oscar";
    console.log("Nombre dentro del bloque "+nombre2); //Oscar
}
console.log("Nombre despues del bloque "+nombre2); //Julieta