/*
    Ejercicios de Lógica de programación en Javascript #6
*/
/*
    21) Programa una función que dado un array numérico devuelve otro array con 
    los números elevados al cuadrado, 
    pe. mi_funcion([1, 4, 5]) 
    devolverá [1, 16, 25].

*/
const numerosElevados = (array = undefined) =>{
    if (array === undefined) return console.warn("Ingrese un arreglo de numeros");
    if (!(array instanceof Array)) return console.warn("Solo se permiten arreglos de numeros");
    if(array.length === 0) return console.warn("No se permiten arreglos vacios");

    for(let ele of array){
        if(typeof ele !== 'number') return console.error(`El elemento '${ele}' no es un número`);
    }

    let elevadosAlCuadrado = [];
    
    array.forEach((ele, index) =>{
        elevadosAlCuadrado[index] = ele ** 2
    })

    return console.log(`El nuevo array es: ${elevadosAlCuadrado}`);
}

console.group("Ejercicio #21")
numerosElevados() //Ingrese un arreglo de numeros
numerosElevados({nombre: "joel", edad: 21}) //Solo se permiten arreglos de numeros
numerosElevados("") //Solo se permiten arreglos de numeros
numerosElevados(" ") //Solo se permiten arreglos de numeros
numerosElevados([]) //No se permiten arreglos vacios
numerosElevados([1, "hola", 5]) //El elemento 'hola' no es un número
numerosElevados([1, 4, 5]) //El nuevo array es: 1,16,25
console.groupEnd()





/*
    22) Programa una función que dado un array devuelva el número mas alto y
    el más bajo de dicho array, 
    pe. miFuncion([1, 4, 5, 99, -60]) 
    devolverá [99, -60].
*/
const numeroAltoBajo = (array = undefined) => {
    if (array === undefined) return console.warn("No se ha ingresado ningun arreglo");
    if (!(array instanceof Array)) return console.warn("Solo se reciben arreglos de numeros");
    if (array.length <= 1) return console.warn("No se permiten arreglos de menos de 2 valores");

    for(let ele of array){
        if(typeof ele !== 'number') return console.error(`El elemento '${ele}' no es un número`);
    }

    let arregloOrdenado = array.sort((eleA, eleB) =>{
        return eleA - eleB
    })

    let numeroMasAlto = arregloOrdenado[arregloOrdenado.length-1]
    let numeroMasBajo = arregloOrdenado[0]

    return console.log(`El arreglo ordenado es: ${arregloOrdenado}\nEl número mas alto es: ${numeroMasAlto} y el número mas bajo es: ${numeroMasBajo}\n[${[numeroMasAlto,numeroMasBajo]}]`);
}

console.group("Ejercicio #22")
numeroAltoBajo(); //No se ha ingresado ningun arreglo
numeroAltoBajo(""); //Solo se reciben arreglos de numeros
numeroAltoBajo("   "); //Solo se reciben arreglos de numeros
numeroAltoBajo(2345); //Solo se reciben arreglos de numeros
numeroAltoBajo({nombre: "joel", edad: 21}); //Solo se reciben arreglos de numeros
numeroAltoBajo([8]); //No se permiten arreglos de menos de 2 valores
numeroAltoBajo([1, "hey", 6]); //El elemento 'hey' no es un número
numeroAltoBajo([1, 4, 5, 99, -60]); /*El arreglo ordenado es: -60,1,4,5,99
El número mas alto es: 99 y el número mas bajo es: 
[99,-60]*/
numeroAltoBajo([12, 65, 90, 04, 63, 15, 67, 33, 23, 65, 23, 01]);
/*El arreglo ordenado es: 1,4,12,15,23,23,33,63,65,65,67,90
El número mas alto es: 90 y el número mas bajo es: 1
[90,1]*/
console.groupEnd()





/*
    23) Programa una función que dado un array de números devuelva un objeto 
    con 2 arreglos en el primero almacena los números pares y en el segundo los impares, 
    pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) 
    devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/
const numerosParesImpares = (array = undefined) => {
    if (array === undefined) return console.warn("No se ha ingresado ningun arreglo");
    if (!(array instanceof Array)) return console.warn("Solo se reciben arreglos de numeros");
    if (array.length <= 1) return console.warn("No se permiten arreglos de menos de 2 valores");

    for(let ele of array){
        if(typeof ele !== 'number') return console.error(`El elemento '${ele}' no es un número`);
    }

    let numerosPares = []
    let numerosImpares = []

    array.forEach(ele =>{
        if(ele %2 === 0){
            numerosPares.push(ele)
        }else{
            numerosImpares.push(ele)
        }
    })

    let objetoFinal = {pares: numerosPares, impares: numerosImpares}

    return console.log(objetoFinal);
}

console.group("Ejercicio #23")
numerosParesImpares() //No se ha ingresado ningun arreglo
numerosParesImpares("") //Solo se reciben arreglos de numeros
numerosParesImpares("  ") //Solo se reciben arreglos de numeros
numerosParesImpares({name: "Joel", age:21}) //Solo se reciben arreglos de numeros
numerosParesImpares(34) //Solo se reciben arreglos de numeros
numerosParesImpares([8]) //No se permiten arreglos de menos de 2 valores
numerosParesImpares([2,3, "mundo"]) //El elemento 'mundo' no es un número
numerosParesImpares([2,3]) //{pares: Array(1), impares: Array(1)}
numerosParesImpares([1,2,3,4,5,6,7,8,9,0]) //{pares: Array(5), impares: Array(5)}
console.groupEnd()