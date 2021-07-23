/*
    Parametros rest y Operador spread.
*/

/*
    ¿Qué es el parametro rest?
    Es un parametro que indica que puede que no se ingrese nada (por lo cual no es obligatorio).
    O puede que se ingresen 1, 2, 100, 10000 paramtros.
    Esto quiere decir que la cantidad de parametros "Extras" que se ingresen formaran parte del parametro rest que los guarda como un arreglo.
    Se utiliza el operador spreat (...) Tres puntos antes de la variable.

    Digamos que una funcion dice:

    function suma(n1, n2, ...numeros){
        let sumatoria = n1+n2; // n1=1,  n2=2
        console.log(numeros); // [3,4,5,6,7,8,9,0,10,11]
    }

    y si la mandamos llamar:
    suma(1,2, 3,4,5,6,7,8,9,0,10,11)
*/

// ...numeros : Es nuestro parametro rest.
function suma(numero1, numero2, ...numeros){
    let sumatoria = numero1 + numero2;
    numeros.forEach(function(ele){
        sumatoria +=ele;
    });

    return sumatoria;
}

console.log(`La sumatoria es: ${suma(3, 7)}`); //La sumatoria es: 10
console.log(`La sumatoria es: ${suma(3, 7, 3)}`); //La sumatoria es: 13
console.log(`La sumatoria es: ${suma(3, 7, 1, 5, 4, 7)}`); //La sumatoria es: 27


//--------------------------------------------------
//Opetador spreat.

/*
    Es lo mismo de (...)
    Tambien podriamos usarlo para juntar los valores de 2 arreglos.
*/ 

const arreglo1 = [0,2,4,6,8];
const arreglo2 = [1,3,5,7,9];

//Podriamos concatenar:
const arreglo3 = arreglo1.concat(arreglo2);
console.log(arreglo3); //(10) [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]

//Pero es mejor usar el operador spreat.

const arreglo4 = [...arreglo1, ...arreglo2];
console.log(arreglo4); //(10) [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]