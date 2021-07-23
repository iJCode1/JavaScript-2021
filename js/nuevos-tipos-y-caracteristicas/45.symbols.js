/*
    Simbolos en Javascript.
    Básicamente es un nuevo tipo de dato primitivo como lo es un number, string o boolean.
    Se usa sobretodo en las propiedades de un objeto ya que hace que la propiedad sea privada.
    También hace que dicha propiedad tenga un identificador unico. Por lo cual no sera igual a otro simbolo.
    Se declara con la palabra reservada Symbol().

    Se le puede pasar una descripción al simbolo, de la siguiente forma.
    const NOMBRE = Symbol("nombre")

    Para acceder a las pripiedades privadas (symbol) de un objeto... se hace uso del método de Object.
    Object.getOwnPropertySymbols(nombre_objeto)
*/

//Declarando 2 porpiedades privadas con Symbol
const NOMBRE = Symbol();

//Declaradno otra propiedad privada pero con una descripcion
const EDAD = Symbol("edad");

//Declarando un objeto y asignando una propiedad privada
const estudiante = {
    [NOMBRE]: "Joel",
    apellido: "DoMe",
    nacionalidad: "MX"
}

//Asignando otra pripiedad pivada
estudiante[EDAD] = 21;

//Imprimiendo el objeto
console.log(estudiante)
/*
    {apellido: "DoMe", nacionalidad: "MX", Symbol(): "Joel", Symbol(edad): 21}
    apellido: "DoMe"
    nacionalidad: "MX"
    Symbol(): "Joel"
    Symbol(edad): 21
*/

//Obteniendo el valor que se encuentra en una propiedad privada de un ojeto
console.log(`La edad del estudiante es: ${estudiante[EDAD]}`); //La edad del estudiante es: 21


//Declarando una nueva pripiedad privada
const SALUDO = Symbol("Saludo");

//Asignandolo como un método al objeto
estudiante[SALUDO] = () =>{
    console.log(`Hola!, Mi nombre es ${estudiante[NOMBRE]}`)
}


//Ejecutando un método privado de un objeto
estudiante[SALUDO](); //Hola!, Mi nombre es Joel

console.group("Propiedades y Valor de un Objeto")
//Imprimiendo las propiedades y valores de un objeto (No se imprimen las propiedades privadas, ni sus valores)
for(let propiedad in estudiante){
    console.log(`Propiedad: ${propiedad}`)
    console.log(`Valor: ${estudiante[propiedad]}`)
}
console.groupEnd();
/*
    Propiedades y Valor de un Objeto
    Propiedad: apellido
    Valor: DoMe
    Propiedad: nacionalidad
    Valor: MX
*/

//Obteniendo las propiedades de un objeto
console.log(Object.getOwnPropertySymbols(estudiante));
/*
    (3) [Symbol(), Symbol(edad), Symbol(Saludo)]
    0: Symbol()
    1: Symbol(edad)
    2: Symbol(Saludo)
    length: 3
*/

//Los simbolos generan un identificador unico.
//Comprobandolo
console.log(NOMBRE === EDAD); //false

//Aunque su tipo de dato es el mismo
console.log(typeof NOMBRE === typeof EDAD); //true