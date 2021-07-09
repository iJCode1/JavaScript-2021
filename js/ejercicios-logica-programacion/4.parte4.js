/*
    Ejercicios de programación en Javascript, Parte #4
*/

/*
    12) Programa una función que determine si un número es primo 
    (aquel que solo es divisible por sí mismo y 1) o no, 
    pe. miFuncion(7) 
    devolverá true.
*/
const numeroPrimo = (numero=0) =>{
    if (!numero) return console.warn("Debes ingresar un numero");
    if (typeof numero !== 'number') return console.warn("Solo se permiten numeros");
    if (numero <= 1) return console.warn("Solo se permiten numeros mayores a 1");

    let contadorPrimo = 0;

    for(let i=1; i<=numero; i++){
        if(numero % i === 0){
            contadorPrimo ++;
        }
    }

    return ((contadorPrimo === 2) ? console.log(`El numero: ${numero}, si es primo`) 
    : console.log(`El numero: ${numero}, no es primo`));
}


console.group("Ejercicio #12");
numeroPrimo("  "); //Solo se permiten numeros
numeroPrimo(""); //Debes ingresar un numero
numeroPrimo(); //Debes ingresar un numero
numeroPrimo(1); //Solo se permiten numeros mayores a 1
numeroPrimo(2); //El numero: 2, si es primo
numeroPrimo(3); //El numero: 3, si es primo
numeroPrimo(4); //El numero: 4, no es primo
numeroPrimo(5); //El numero: 5, si es primo
numeroPrimo(6); //El numero: 6, no es primo
numeroPrimo(7); //El numero: 7, si es primo
numeroPrimo(8); //El numero: 8, no es primo
numeroPrimo(9); //El numero: 9, no es primo
numeroPrimo(10); //El numero: 10, no es primo
numeroPrimo(11); //El numero: 11, si es primo
numeroPrimo(12); //El numero: 12, no es primo
numeroPrimo(13); //El numero: 13, si es primo
numeroPrimo(14); //El numero: 14, no es primo
numeroPrimo(15); //El numero: 15, no es primo
numeroPrimo(16); //El numero: 16, no es primo
numeroPrimo(17); //El numero: 17, si es primo
console.groupEnd()





/*
    13) Programa una función que determine si un número es par o impar, 
    pe. miFuncion(29) 
    devolverá Impar.
*/
const esParOImpar = (numero=0)=>{
    if (!numero) return console.warn("Debes ingresar un numero");
    if (typeof numero !== 'number') return console.warn("Solo se aceptan numeros");
    
    return (numero%2 === 0 ? console.log(`El numero: ${numero} es par`)
        : console.log(`El numero: ${numero} es impar`));
}

console.group("Ejercicio #13");
esParOImpar(); //Debes ingresar un numero
esParOImpar("   "); //Solo se aceptan numeros
esParOImpar(""); //Solo se aceptan numeros
esParOImpar(12) //El numero: 12 es par
esParOImpar(7) //El numero: 7 es impar
console.groupEnd()





/*
    14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, 
    pe. miFuncion(0,"C") 
    devolverá 32°F.
*/
const conversionGrados = (valor=0, tipoGrado="") => {
    if (!valor) return console.warn("Debes ingresar un valor de grado");
    if (typeof valor !== 'number') return console.warn("El valor de grados debe ser numerico");
    if (!tipoGrado) return console.warn("Debes ingresar el tipo de grado");
    if (typeof tipoGrado !== 'string') return console.warn("El tipo de grado debe ser un string");

    if(tipoGrado.toUpperCase() === 'C'){
        let gradoF = (valor * 1.8) + 32;
        return console.log(`${valor}ºC = ${gradoF}ºF`)
    }else if(tipoGrado.toUpperCase() === 'F'){
        let gradoC = (valor - 32) / 1.8;
        return console.log(`${valor}ºF = ${gradoC}ºC`)
    }else{
        return console.error(`La unidad '${tipoGrado}', no es valida!`);
    }
}

console.group("Ejercicio #14");
conversionGrados(); //Debes ingresar un valor de grado
conversionGrados(" "," "); //El valor de grados debe ser numerico
conversionGrados(12, ); //Debes ingresar el tipo de grado
conversionGrados(12, 34); //El tipo de grado debe ser un string
conversionGrados(30, 'C'); //30ºC = 86ºF
conversionGrados(86, 'F'); //86ºF = 30ºC
conversionGrados(86, 'Fa'); //La unidad 'Fa', no es valida!
console.groupEnd()