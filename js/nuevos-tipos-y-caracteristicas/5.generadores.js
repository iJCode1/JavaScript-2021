/*
    Generadores en Javascript
    Básicamente permite hacer una función iterable.
    Su estructura es la siguiente
    function* nombre_función(){

    }

    Con ese (*) indicamos que sera un generador.
    Utiliza una estructura llamada 'yield', lo que representa a un return dentro del generador.
    Dicho yield retornara algo y ahi se quedara hasta que no se ejecute el método .next() del iterador (función generadora)
*/

//Declarando un Generador
function* iterable(){
    yield "Hola, iniciando generador"
    console.log("Este es el primer Log")
    yield 22
    yield "Tercer Yield"
    console.log("Saludos!!!")
    yield "Cuarto Yield"
    yield "Ultimo Yield"
}

//Creando un iterador
const iterador = iterable()

//Ejecutando el iterador y observando los retornos (yield's)
console.log(iterador.next()); //{value: "Hola, iniciando generador", done: false}
console.log(iterador.next());
/*
    Este es el primer Log
    {value: 22, done: false}
*/
console.log(iterador.next()); //{value: "Tercer Yield", done: false}
console.log(iterador.next());
/*
    Saludos!!!
    {value: "Cuarto Yield", done: false}
*/
console.log(iterador.next()); //{value: "Ultimo Yield", done: false}
console.log(iterador.next()); //{value: undefined, done: true}

//Guardando los valores de un generador en un arreglo
const array = [...iterable()]
console.log(array);
/*
    (5) ["Hola, iniciando generador", 22, "Tercer Yield", "Cuarto Yield", "Ultimo Yield"]
    0: "Hola, iniciando generador"
    1: 22
    2: "Tercer Yield"
    3: "Cuarto Yield"
    4: "Ultimo Yield"
    length: 5
    __proto__: Array(0)
*/




//Función que sacara el cuadrado de un numero
const cuadrado = (valor) =>{
    setTimeout(()=>{
        return console.log({
            valor,
            resultado: valor*valor
        })
    },0 | Math.random() * 1000)
}

//Creando función generadora
function* generadora(){
    console.log("Inicio del Generador");
    yield cuadrado(0)
    yield cuadrado(1)
    yield cuadrado(2)
    yield cuadrado(3)
    yield cuadrado(4)
    yield cuadrado(5)
    yield cuadrado(6)
    yield cuadrado(7)
    console.log("Fin del Generador");
}

//Creando iterador de la función generadora()
const iterador2 = generadora()

//Recorriendo los valores de un generador con un ciclo
for(valor of iterador2){
    valor
}
/*
    Inicio del Generador
    Fin del Generador
    {valor: 6, resultado: 36}
    {valor: 4, resultado: 16}
    {valor: 7, resultado: 49}
    {valor: 5, resultado: 25}
    {valor: 2, resultado: 4}
    {valor: 3, resultado: 9}
    {valor: 1, resultado: 1}
    {valor: 0, resultado: 0}
*/