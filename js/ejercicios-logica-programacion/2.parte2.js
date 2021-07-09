/*
    Segunda parte de los ejercicios de Javascript
*/

/*
    5) Programa una función que invierta las palabras de una cadena de texto, 
    pe. miFuncion("Hola Mundo") 
    devolverá "odnuM aloH".
*/
const invertirTexto = (texto=undefined) =>{
    let mensajeFinal="";
    if(!texto) return console.warn("Debes ingresar un texto");
    if(typeof(texto)==='number') return console.warn("No se puede ingresar un Numero");
    if(texto === " ") return console.warn("No se puede ingresar tetos en blanco");

    for(let i = texto.length-1; i>=0; i--){
        mensajeFinal+=texto[i];
    }
    return console.log(`El texto invertido es: ${mensajeFinal}`);
}
console.group("Ejercicio #5");
invertirTexto(67); //No se puede ingresar un Numero
invertirTexto(-67); //No se puede ingresar un Numero
invertirTexto("Hola Mundo"); //El texto invertido es: odnuM aloH
console.groupEnd();





/*
    6) Programa una función para contar el número de veces que se 
    repite una palabra en un texto largo, 
    pe. miFuncion("hola mundo adios mundo", "mundo") 
    devolverá 2.
*/

const repeticionTexto = (texto=undefined, palabra=undefined) => {
    if(texto===undefined) return console.warn("Debes ingresar el texto");
    if(typeof(texto) === 'object' || typeof(palabra) === 'object') return console.warn("No puedes mandar objetos");
    if(typeof(texto) === 'number' || typeof(palabra) === 'number') return console.warn("No puedes mandar numeros");
    if(texto.trim()==="") return console.warn("No puedes dejar el texto vacio");
    if(palabra===undefined) return console.warn("Debes ingresar la palabra");
    if(palabra.trim()==="") return console.warn("No puedes dejar la palabra vacia");

    let contador=0;
    let palabrasSeparadas = texto.split(" ");
    for(let i=0; i<palabrasSeparadas.length;i++){
        if(palabrasSeparadas[i].includes(palabra)){
            contador ++;
        }
    }
    return console.log(`La palabra ${palabra}, aparece en el texto ${contador} veces`);
}

console.group("Ejercicio #6");
repeticionTexto(); //Debes ingresar el texto
repeticionTexto(["hola", "Mundo"]); //No puedes mandar objetos
repeticionTexto(23); //No puedes mandar numeros
repeticionTexto("Hola Mundo adios Mundo"); //Debes ingresar la palabra
repeticionTexto("    ","Mundo"); //No puedes dejar el texto vacio
repeticionTexto("Hola","     "); //No puedes dejar la palabra vacia
repeticionTexto("hola mundo adios mundo", "mundo"); //La palabra mundo, aparece en el texto 2 veces
console.groupEnd();





/*
    7) Programa una función que valide si una palabra o frase dada, 
    es un palíndromo (que se lee igual en un sentido que en otro), 
    pe. mifuncion("Salas") 
    devolverá true. 
*/
const palindromo = (palabra="") =>{
    if(!palabra) return console.warn("Debes ingresar una palabra");
    if(typeof(palabra) !== 'string') return console.warn("Debes ingresar un plabra de tipo string");

    let palabraVolteada = "";
    for(let i=palabra.length-1; i>=0; i--){
        palabraVolteada+=palabra[i];
    }
    //console.log(palabraVolteada);
    return (palabra.toLowerCase() === palabraVolteada.toLowerCase() ? console.log(`La palabra ${palabra} si es palindromo`) 
    : console.log(`La palabra ${palabra} no es palindromo`));
}

console.group("Ejercicio #7");
palindromo(); //Debes ingresar una palabra
palindromo(45); //Debes ingresar un plabra de tipo string
palindromo("Salas"); //La palabra Salas si es palindromo
palindromo("Dado"); //La palabra Dado si es palindromo
palindromo("ANA"); //La palabra Ana si es palindromo
console.groupEnd();





/*
    8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
    pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") 
    devolverá  "1, 2, 3, 4 y 5.
*/

const eliminarPatron = (texto="", patron="") => {
    if (!texto) return console.warn("Debes ingresar un texto");
    if (!patron) return console.warn("Debes ingresar un patron");
    if (typeof(texto) !== 'string' || typeof(patron) !== 'string') return console.warn("Solo se permiten valores de tipo string");
    if (texto.trim() === "" ) return console.warn("No puedes dejar el texto vacio");
    if (patron.trim() === "") return console.warn("No puedes dejar el patron vacio");

    let aplicandoPatron = texto.replaceAll(patron, "");
    return console.log(`El texto es: ${aplicandoPatron}`);
}

console.group("Ejercicio #8");
eliminarPatron("  ", "    "); //No puedes dejar le texto vacio
eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "     "); //No puedes dejar el patron vacio
eliminarPatron("  ", "xyz"); //No puedes dejar el texto vacio
eliminarPatron(67, "xyz"); //Solo se permiten valores de tipo string
eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"); //El texto es: 1, 2, 3, 4 y 5
console.groupEnd();