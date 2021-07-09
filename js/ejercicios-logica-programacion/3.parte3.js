/*
    Ejercicios de Javascript Parte #3
*/

/*
    9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
*/
const numeroAleatorio = (rangoInicio = undefined, rangoFinal = undefined) => {
    if (rangoInicio === undefined) return console.warn("Se sebe ingresar el rango incial");
    if (rangoFinal === undefined) return console.warn("Se sebe ingresar el rango final");
    if (typeof(rangoInicio) !== 'number' || typeof(rangoFinal) !== 'number') return console.warn("Solo se aceptan valores numericos");

    let numeroGenerado = parseInt(Math.random() * (rangoFinal - rangoInicio) + rangoInicio);
    return console.log(`El numero generado es: ${numeroGenerado}`);
}

console.group("Ejercicio #9");
numeroAleatorio(); //Se sebe ingresar el rango incial
numeroAleatorio(13); //Se sebe ingresar el rango final
numeroAleatorio(" "," "); //Solo se aceptan valores numericos
numeroAleatorio(501,600); // El numero generado es: 575 (random)
numeroAleatorio(1,137); // El numero generado es: 68 (random)
console.groupEnd();





/*
    10) Programa una función que reciba un número y evalúe si es
    capicúa o no (que se lee igual en un sentido que en otro), 
    pe. miFuncion(2002) 
    devolverá true.
*/
const esCapicua = (numero = undefined) =>{
    if (!numero) return console.warn("Debes ingresar un numero");
    if (Math.sign(numero) === -1) return console.error("No se puede sacar el factorial de un numero negativo");
    if (typeof(numero) !== 'number') return console.warn("Solo se reciben valores numericos");

    let numeroString = numero.toString();
    let numeroInvertido = numeroString.split("").reverse().join("");

    return (numeroInvertido === numeroString ? console.log(`El numero: ${numero}, al ser invertido como ${numeroInvertido}, es Capicúa`)
    : console.log(`El numero: ${numero}, al ser invertido como ${numeroInvertido}, no es Capicúa`));
}

console.group("Ejercicio #10");
esCapicua(); //Debes ingresar un numero
esCapicua("   "); //Debes ingresar un numero
esCapicua(-21); //No se puede sacar el factorial de un numero negativo
esCapicua(1202); //El numero: 1202, al ser invertido como 2021, no es Capicúa
esCapicua(2002); //El numero: 2002, al ser invertido como 2002, es Capicúa
esCapicua(181); //El numero: 181, al ser invertido como 181, es Capicúa
esCapicua(212.212); //El numero: 212.212, al ser invertido como 212.212, es Capicúa
console.groupEnd();





/*
    11) Programa una función que calcule el factorial de un número 
    (El factorial de un entero positivo n, se define como el producto de todos
    los números enteros positivos desde 1 hasta n), 
    pe. miFuncion(5) 
    devolverá 120.
*/
const factorial = (numero = undefined) => {
    if (numero === 0) return console.log(`El factorial de ${numero} es: ${1}`);
    if (!numero) return console.warn("Debes ingresar un numero");
    if (typeof(numero) !== 'number') return console.warn("Solo se permiten valores numericos");

    let valorFinal = 1;
    for(let i=1; i<=numero; i++){
        valorFinal*= i;
    }

    return console.log(`El factorial de ${numero} es: ${valorFinal}`);
}

console.group("Ejercicio #11");
factorial(); //Debes ingresar un numero
factorial("   "); //Solo se permiten valores numericos
factorial("Hola Mundo"); //Solo se permiten valores numericos
factorial(5); //El factorial de 5 es: 120
factorial(0); //El factorial de 5 es: 120
factorial(8); //El factorial de 8 es: 40320
console.groupEnd();