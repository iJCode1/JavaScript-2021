/*
    Arreglos en Js.
    Los arreglos en cualquier lenguaje de programación son un conjunto de datos.
    Solo que en Js podemos tener arreglos con tipos de datos combinados.
    Es decir un arreglo que tenga datos number, string, mas arreglos dentro, etc...
    Los arreglos tienen propiedades y metodos con los que podemos ejecutar ciertas acciones.
*/

//Declarando un arreglo.
const nombres = ["Joel", "Julieta", "Ramon", "Marisol", "Cecilia"];

//Imprimiendo un arreglo en consola.
console.log(nombres); // (5) ["Joel", "Julieta", "Ramon", "Marisol", "Cecilia"]

/*
    Los arreglos pueden tener una cantidad ilimitada de elementos. 
    Pero en la programación cada posicion de estos elementos empieza desde 0 y va aumentando sucesivamente.
    Por ejemplo:
    ["Joel", "Julieta", "Ramon", "Marisol", "Cecilia"];
       0         1         2        3            4
    Aunque el arreglo anterior tiene 5 elementos... se comiensa a contar desde la posición 0.
    Por lo que siempre tendremos que la posición sera -1 al numero de elementos.
*/

//Accediendo a la posición de un elemento.
//Accediendo al elemento en la posición 2.
console.log(nombres[2]); //Ramon

//Obteniendo la longitud (Numero de elementos) de un arreglo.
console.log(nombres.length); //5


const edades = [13, 15, 7, 3, 4, 6];

/*
    Tenemos algunos metodos para tratar a los elementos de un arreglo
    Pero veamos el uso de .foreach(). Por cada elemento hara x acción.
*/

//Multiplicando por 2 cada elemento del arreglo edades.
edades.forEach(function(element){
    console.log(`${element*2}`);        
});

//Preguntar si un elemento existe (Esta incluido) o no en el elemento
console.log(edades.includes(34)); //False
console.log(edades.includes(7)); //True

//Insertar un elemento al array (Se inserta al final de esta)
edades.push(43);

console.log(edades); //(7) [13, 15, 7, 3, 4, 6, 43]

//Eliminando un elemento (Ultimo) del array
edades.pop();
console.log(edades); //(6) [13, 15, 7, 3, 4, 6]