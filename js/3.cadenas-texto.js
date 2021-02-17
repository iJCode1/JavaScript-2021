/*
    Cadenas de texto y Template Literals en Javascript.
    Las cadenas de texto es cualquier palabra que usamos día a día.
    Por ejemplo:
    let name = "Joel";
    Ahí hacemos una declaración y asignación de una cadena de texto más conocida como String.
    Los strings tienen algunas propiedades y algunos métodos que podemos usar.
*/

// Declarando una cadena de texto:
let nombre = "Joel";
console.log(nombre); //Joel
console.log(typeof nombre); //string : tipo de dato

// Haciendo uso de propiedades y métodos que tienen los Strings.
console.log(nombre.length); // Obtenemos numero de elementos === 4
console.log(nombre.concat(" DoMe")); //Concatenando algo
console.log(nombre.repeat(3)); //Repitiendo el nombre X veces
console.log(nombre.toUpperCase()); //JOEL : Convirtiendo a Mayusculas
console.log(nombre.toLowerCase()); //joel : Convirtiendo a Minisculas

// Cuando queremos concatenar (unir) 2 o mas strings podemos usar el simbolo de adicción (+)
let apellido = "Dominguez";

console.log("Mi nombre es: " + nombre + " " + apellido); // Mi nombre es: Joel Dominguez

/*
    Pero hacer eso es muy tardado.
    Es por eso que desde el año 2015 se implemento en Ecmascript6 el uso de Template literals
    Se utiliza el simbolo de `` y apoñandonos de ${} podemos escribir una variable sin mayor problema.
*/

// Haciendo uso de template literals

let saludo = `Hola! ${nombre} ${apellido}, Bienvenido al programa!`;
console.log(saludo); // Hola! Joel Dominguez, Bienvenido al programa!