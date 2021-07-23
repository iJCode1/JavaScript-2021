/*
    Arrow Function en Javascript.
    Las arrow function son una forma nueva de escribir funciones.
    Su principal caracteristica es que reducen la estructura en la que uno escribe una funcion.
    Aunque dependiendo donde las usemos pueden alterarnos al scope.
    Se recomienda no usar arrow function dentro de objetos. Es decir en un metodo (función de un objeto compuesto).

    Ademas hay ciertos puntos importantes.
    - Con las arrow function podemos omitir el return cuando es solo una linea.
    - Si solo recibimos un parametro podemos omitir los parentesis que engloban a los parametros de una función.
    - Si solo tenemos una línea de código podemos omitir las llaves ({}) y escribir la linea enfrente de la arrow function.
    - Se usa => para indicar la sintaxis de una arrow function.
*/  

//Declarando una función de la forma declarada.

function imprimir(n1=1){
    console.log(`El numero es: ${n1}!`);
}

imprimir(7); //El numero es: 7!


//Pasando la anterior función a una arrow function
const imprimir2 = n1 => console.log(`El numero es: ${n1}!!`);

imprimir2(4); //El numero es: 4!!

/*
    Lo que se hizo en el ejemplo anterior fue:
    - Pasar de función declarada a expresada.
    - Como solo recibia (n1) se quitaron los parentesis del parametro.
    - Se indica que es una arrow functión (=>)
    - Como solo tiene una linea de código se quitan las llaves y se deja enfrente de =>
*/



//Creando una función expresiva 

const determinarEdad = function(nombre, añoActual, añoNacimiento){
    console.log(`Hola ${nombre}, nos encontramos en el año ${añoActual}`);
    let edad = añoActual - añoNacimiento;
    console.log(`${nombre} tu edad es: ${edad}`);
}

determinarEdad("Joel", 2021, 1999); //Joel tu edad es: 22



//Pasando la anterior función a un Arrow Function.

const determinarEdad2 = (nombre, añoActual, añoNacimiento) => {
    console.log(`Hola ${nombre}, nos encontramos en el año ${añoActual}`);
    let edad = añoActual - añoNacimiento;
    console.log(`${nombre} tu edad es: ${edad}!`);
}

determinarEdad2("Julieta", 2021, 2008);