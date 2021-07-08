/*
    Ejercicio #1.
    1) Programa una función que cuente el número de caracteres 
    de una cadena de texto.
    pe. miFuncion("Hola Mundo") devolverá 10.
*/

let numeroCaracteres = (cadena)=>{
    try{
        if(cadena === ""){
            throw 'No se aceptan cadenas vacias';
        }else if(cadena === true | false){
            throw 'No se aceptan valores booleanos (true | false)';
        }else if(typeof(cadena) === 'object'){
            throw 'No se aceptan objetos o arreglos';
        }else if(typeof(cadena) == 'number'){
            throw 'No se aceptan valores numericos';
        }
        let caracteres = cadena.length;
            return console.log(`El numero de caracteres de "${cadena}" es: ${caracteres}`);
    }catch(err){
        console.error(err);
    }
}

console.group("Ejercicio #1");
numeroCaracteres("Hola Mundo"); //El numero de caracteres de "Hola Mundo" es: 10
numeroCaracteres("Pumas de la Universidad"); //El numero de caracteres de "Pumas de la Universidad" es: 23
numeroCaracteres(434); //No se aceptan valores numericos
numeroCaracteres(12.675); //No se aceptan valores numericos
numeroCaracteres(["Hola", "Mundo", 12]); //No se aceptan objetos o arreglos
numeroCaracteres({nombre: "Joel", edad: 21, nacionalidad: "MX"}); //No se aceptan objetos o arreglos
numeroCaracteres(""); //No se aceptan cadenas vacias
numeroCaracteres(true); //No se aceptan valores booleanos (true | false)
console.groupEnd();





/*
    Ejercicio #2.
    2) Programa una función que te devuelva el texto recortado según
    el número de caracteres indicados, 
    pe. miFuncion("Hola Mundo",4) 
    devolverá "Hola".
*/

let textoRecortado = (texto, numeroCaracteres)=>{
    if(typeof(texto)!= 'string'){
        return console.error("Debes ingresar un texto");
    }else{
        return console.log(`El texto recortado con ${numeroCaracteres} caracteres es: ${texto.slice(0, numeroCaracteres)}`);
    }
}

console.group("Ejercicio #2");
textoRecortado("Hola Mundo", 4); //El texto recortado con 4 caracteres es: Hola
textoRecortado("Jon Mircha", 5); //El texto recortado con 5 caracteres es: Jon M
textoRecortado(638747, 5); //Debes ingresar un texto
console.groupEnd();





/*
    Ejercicio #3
    3) Programa una función que dada una String te devuelva un Array
    de textos separados por cierto caracter, 
    pe. miFuncion('hola que tal', ' ') 
    devolverá ['hola', 'que', 'tal'].
*/

let textoSeparado = texto =>{
    if(typeof(texto)!== 'string'){
        return console.error("Debes ingresar un texto");
    }else{
        return console.log(texto.split(" "));
    }
}

console.group("Ejercicio #3");
textoSeparado("hola que tal"); //(3) ["Hola", "que", "tal"]
textoSeparado(["Hola", ["que"], 27]); //Debes ingresar un texto
console.groupEnd();





/*
    Ejercicio #4
    4) Programa una función que repita un texto X veces, 
    pe. miFuncion('Hola Mundo', 3) 
    devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

let repetirTexto = (texto, repeticiones)=>{
    if(typeof(texto)!== 'string'){
        return console.error("Debes ingresar un texto");
    }else{
        return console.log(texto.repeat(repeticiones));
    }
}

console.group("Ejercicio #4");
repetirTexto("Hola Mundo ", 3); //Hola Mundo Hola Mundo Hola Mundo 
repetirTexto("Jon Mircha ", 3); //Jon Mircha Jon Mircha Jon Mircha 
repetirTexto(172, 3); //Debes ingresar un texto
console.groupEnd();