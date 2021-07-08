/*
    Este archivo servira como ejemplo para exportar algunas variables, constantes y funciones.
    Se puede exportar unicamente lo que se requiera.
*/

//Variable sin exportar...
let nombre = "Joel";

//Variable exportada....
export let edad = 21;

export const PI = Math.PI;

//Función declarada sin exportar
function suma(n1, n2){
    return n1+n2;
}

//Fución declarada exportada
export function multiplicacion(n1, n2){
    return n1*n2;
}

//Funcion anonima exportada
export let saludo = function(nombre){
    return console.log(`Hola, ${nombre}, Saludos!`);
}

//Función flecha exportada
export let despedida = nombre => console.log(`Adios ${nombre}!`);


/*
    Exportaciones por defecto...
    Solo se puede tener 1 exportado por defecto.
*/

//Exportando una función por defecto
export default function bienvenida(nombre){
    console.log(`Bienvenido a mi programa, ${nombre}`);
}

//Exportando una variable/constante por defecto.
/* 
    Primero se debe hacer la declaración y despues la exportación.
*/

/*
    let nacionalidad = "MX";
    export default nacionalidad;
*/