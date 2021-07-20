/*
    Iterables e Iteradores en Javascript
    En Javascript se tienen objetos iteradores como lo son:
        - strings
        - arreglos
        - map
        - set
    Estos contienen elementos los cuales pueden ser iterables con un bucle for por ejemplo...
    Existe un objeto 'iterator' que puede cumplir esta tarea
*/

//Declarando un arreglo (iterable)
const iterable = [12, 78, "Hola", "Mundo", 21]
const iterable2 = "Hola Mundo desde JS"
const iterable3 = new Set(["Hola", 23])

//Declarando iterador
let iterador = iterable[Symbol.iterator]()
const iterador2 = iterable2[Symbol.iterator]()
const iterador3 = iterable3[Symbol.iterator]()

console.log(iterador); //Array Iterator {}
console.log(iterador2); //StringIterator {}
console.log(iterador3); //SetIterator {"Hola", 23}

/*
    Una vez que se tiene el iterador se puede recorrer cada valor con el método 'next()'
*/

console.log(iterador3.next()); //{value: "Hola", done: false}
/*
    Este devolvera 2 parametros: value === valor y done === (true | false)
    Devolvera true cuando ya se haya terminado de iterar y ya no haya más valores.
    Devolvera false cuando aún no se haya terminado de iterar y aún queden más valores.
*/

console.log(iterador2.next()); //{value: "H", done: false}
console.log(iterador2.next()); //{value: "o", done: false}

console.log(iterador3.next()); //{value: 23, done: false}

//Declarando una variable para obtener el método next()
let siguiente = iterador.next()

//Recorriendo todos los valores
while(!siguiente.done){
    console.log(`El valor es: ${siguiente.value} y el valor de done es: ${siguiente.done}`);
    siguiente = iterador.next()
}

/*
    El valor es: 12 y el valor de done es: false
    El valor es: 78 y el valor de done es: false
    El valor es: Hola y el valor de done es: false
    El valor es: Mundo y el valor de done es: false
    El valor es: 21 y el valor de done es: false
*/