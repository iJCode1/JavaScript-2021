/*
    Objeto Set en Javascript.
    Este objeto es una mezcla de objeto y array pues comparte caracteristicas de los arrays.
    Pero alguanas caracteristicas no las comparte por lo que se requiere de hacer cierta conversión.
    Entre las carcteristicas principales del objeto set se tiene que no permite referencias a valores iguales. 
    Es decir que en valores primitivos solo vamos a poder almacenar un mismo valor y no se permitiran duplicados.
    Entre sus métodos principales se tiene:
    - add: añadir un valor
    - delete: eliminar un valor
    - clear: limpiar todo el objeto (dejar vacio)
    - has: comprobar si existe cierto valor
    - size: Devuelve la cantidad de valores
*/

//Declarando un objeto Set y asignandole valores
const set = new Set(["12", "4", "7", "4", 1, 3, 7, 1, true, false, false, {}, {}]);

//Imprimiendo el obseto set
console.log(set);
/*
    Set(10) {"12", "4", "7", 1, 3, …}
    [[Entries]]
    0: "12"
    1: "4"
    2: "7"
    3: 1
    4: 3
    5: 7
    6: true
    7: false
    8: Object
    9: Object
*/

//Obteniendo la cantidad de elementos del objeto
console.log(`La cantidad de elementos del objeto són: ${set.size}`); //La cantidad de elementos del objeto són: 10

//Limpiando el objeto
set.clear()
console.log(set); //Set(0) {}
console.log(`La cantidad de elementos del objeto són: ${set.size}`); //La cantidad de elementos del objeto són: 0

//Agregando nuevos valores al objeto
set.add(89)
set.add("hola")
set.add(true)
set.add("Hola")
set.add([1,2,3])

console.log(set);
/*
    Set(5) {89, "hola", true, "Hola", Array(3)}
    [[Entries]]
    0: 89
    1: "hola"
    2: "Hola"
    3: true
    4: Array(3)
*/
console.log(`La cantidad de elementos del objeto són: ${set.size}`); //La cantidad de elementos del objeto són: 5

//Comprobando si existe un valor dentro del objeto.
console.log(`Existe el valor 'true' dentro del objeto set?: ${set.has(true)}`); //Existe el valor 'true' dentro del objeto set?: true

//Comprobando si existe un valor dentro del objeto.
console.log(`Existe el valor '734' dentro del objeto set?: ${set.has(734)}`); //Existe el valor '734' dentro del objeto set?: false

//Eliminando un valor (Se pasa el valor a eliminar dentro de parentesis () )
set.delete(true)

//Si el valor no existe, no pasa nada.
set.delete(563)
console.log(set);
/*
    Set(4) {89, "hola", "Hola", Array(3)}
    [[Entries]]
    0: 89
    1: "hola"
    2: "Hola"
    3: Array(3)
*/

//Creando un nuevo objeto set
const set2 = new Set()

//Añadiendo valores
set2.add("Hola")
set2.add("Mundo")
set2.add(7)
set2.add(01)
set2.add(7)

//Imprimiendo los valores del objeto set con un ciclo
console.group("Valores del objeto set con ciclo")
for(let ele of set2){
    console.log(`El valor es: ${ele}`);
}
console.groupEnd()
/*
    El valor es: Hola
    El valor es: Mundo
    El valor es: 7
    El valor es: 1
*/

console.group("Objeto set")
console.log(set2); 
console.groupEnd()
/*
    Set(4) {"Hola", "Mundo", 7, 1}
    [[Entries]]
    0: "Hola"
    1: "Mundo"
    2: 7
    3: 1
    size: (...)
    __proto__: Set
*/

//Imprimiendo un valor en especifico... (Haciendo el cambio a Array)
const array = Array.from(set2);
console.group("Haciendo el cambio a Array")
console.log(array); 
console.groupEnd()
/*
    (4) ["Hola", "Mundo", 7, 1]
    0: "Hola"
    1: "Mundo"
    2: 7
    3: 1
    length: 4
    __proto__: Array(0)
*/

//Imprimiendo el valor en x posición
console.log(`El segundo valor es: ${array[1]}`); //El segundo valor es: Mundo
console.log(`El último valor es: ${array[array.length-1]}`); //El último valor es: 1