/*
    El objeto console ofrece muchas funciones que podemos usar.
*/

//Mostrar mensaje en consola
console.log("Hola mundo desde la consola");

//Mostrar información
console.info("Hola mundo, una vez mas");

//Mostrar un warning
console.warn("Esto es un warning");

//Mostrar un error
console.error("Esto es un error");

//Agrupar mensajes
console.group("Grupo de mensajes");
console.log("Hola")
console.log("Mundo")
console.log("Desde el grupo")
console.groupEnd();

//Mostrar en tabla
let años = [14, 30, 23, 45, 13, 24];
console.table(años);

//Limpiar la consola
console.clear()

console.dir(console)

//Contar las veces que algo aparece
for(let i=4; i<32; i++){
    console.count(`i aparece...`)
    console.log(i);
}

console.clear()

console.assert(12 < 9, "el primer valor no es menor que el segundo");