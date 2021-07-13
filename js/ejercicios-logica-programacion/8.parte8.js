/*
    Ejercicios de lógica de programación en Javascript #8
*/

/*
    24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos,
     el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendente, 
     pe. miFuncion([7, 5,7,8,6]) 
     devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
*/

const objetoNumeros = (array = undefined) => {
    if (array === undefined) return console.warn("Debes ingresar un arreglo de números")
    if (!(array instanceof Array)) return console.warn("Solo se permiten arreglos")
    if (array.length <=1) return console.warn("Se requieren minimo 2 valores en el arreglo")

    for(let ele of array){
        if (typeof ele !== 'number') return console.error(`El elemento "${ele}" no es un número`)
    }

    let arrayAscendente = array.sort((eleA, eleB) =>{
        return eleA - eleB
    })

    let arrayDescendente = [];
    for(let i = arrayAscendente.length-1; i>=0; i--){
        arrayDescendente[i] = arrayAscendente[i];
    }

    let objetoFinal = {asc: arrayAscendente, desc: arrayDescendente.reverse()}

    return console.log(objetoFinal)
}

console.group("Ejercicio #24")
objetoNumeros() //Debes ingresar un arreglo de números
objetoNumeros("   ") //Solo se permiten arreglos
objetoNumeros("") //Solo se permiten arreglos
objetoNumeros(23) //Solo se permiten arreglos
objetoNumeros([7]) //Se requieren minimo 2 valores en el arreglo
objetoNumeros([7,"hola", 3]) //El elemento "hola" no es un número
objetoNumeros([7, 2, 3, "hey"]) //El elemento "hey" no es un número
objetoNumeros([7,5,7,8,6]) 
/*
    {asc: Array(5), desc: Array(5)}
    asc: (5) [5, 6, 7, 7, 8]
    desc: (5) [8, 7, 7, 6, 5]
*/
objetoNumeros([12, 554, 12, 45, 02, 49, 13, 90, 3])
/*
    {asc: Array(9), desc: Array(9)}
    asc: (9) [2, 3, 12, 12, 13, 45, 49, 90, 554]
    desc: (9) [554, 90, 49, 45, 13, 12, 12, 3, 2]
*/
console.groupEnd()





/*
    25) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
    pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) 
    devolverá ["x", 10, 2, "10", true].
*/
const eliminarDuplicados = (array = undefined) => {
    if (array === undefined) return console.warn("Debes ingresar un arreglo de números")
    if (!(array instanceof Array)) return console.warn("Solo se permiten arreglos")
    if (array.length <=1) return console.warn("Se requieren minimo 2 valores en el arreglo")
    
    return console.log(array.filter((ele, index, array) => array.indexOf(ele) === index))
}

console.group("Ejercicio #25")
eliminarDuplicados() //Debes ingresar un arreglo de números
eliminarDuplicados("") //Solo se permiten arreglos
eliminarDuplicados("   ") //Solo se permiten arreglos
eliminarDuplicados(782) //Solo se permiten arreglos
eliminarDuplicados([1]) //Se requieren minimo 2 valores en el arreglo
eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true]) //(5) ["x", 10, 2, "10", true]
console.groupEnd()





/*
    26) Programa una función que dado un arreglo de números obtenga el promedio, 
    pe. promedio([9,8,7,6,5,4,3,2,1,0]) 
    devolverá 4.5.
*/

const promedioNumeros = (array = undefined) => {
    if (array === undefined) return console.warn("No se ha ingresado el arreglo")
    if (!(array instanceof Array)) return console.warn("Solo se permite ingresar un arreglo de numeros")
    if (array.length <=0) return console.warn("No se puede obtener el promedio de un arreglo vacio")

    for(let ele of array){
        if (typeof ele !== 'number') return console.error(`El elemento "${ele}" no es un número`)
    }

    let sumatoria = array.reduce((acumulador, valor) =>{
        return acumulador + valor
    })

    return console.log(`El promedio de [${array}], es: ${sumatoria / array.length}`)
}

console.group("Ejercicio #26")
promedioNumeros() //No se ha ingresado el arreglo
promedioNumeros("") //Solo se permite ingresar un arreglo de numeros
promedioNumeros("  ") //Solo se permite ingresar un arreglo de numeros
promedioNumeros({}) //Solo se permite ingresar un arreglo de numeros
promedioNumeros(123) //Solo se permite ingresar un arreglo de numeros
promedioNumeros([]) //No se puede obtener el promedio de un arreglo vacio
promedioNumeros([12, 44, "hola", 4]) //El elemento "hola" no es un número
promedioNumeros([9,8,7,6,5,4,3,2,1,0]) //El promedio de [9,8,7,6,5,4,3,2,1,0], es: 4.5
console.groupEnd()