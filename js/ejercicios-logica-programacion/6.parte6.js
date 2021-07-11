/*
    Ejercicios de Lógica de programación en Javascript #6
*/

/*
    18) Programa una función que dada una cadena de texto cuente 
    el número de vocales y consonantes, 
    pe. miFuncion("Hola Mundo") 
    devuelva Vocales: 4, Consonantes: 5.
*/
const vocalesConsonantes = (texto = undefined) =>{
    if(texto === undefined) return console.warn("Debe ingresar un texto");
    if(typeof texto !== 'string') return console.warn("Solo se permite texto de tipo String");
    if(texto.trim() === "") return console.warn("No puede enviar texto vacio");

    texto = texto.toLowerCase()

    let patronVocal = /a|e|i|o|u|á|é|í|ó|ú|ü/;
    let patronConsonante = /[A-z]|ñ/;
    let contadorVocales = 0;
    let contadorConsonantes = 0;

    for(let i=0; i<texto.length; i++){
        if(patronVocal.test(texto[i])){
            contadorVocales++;
            // console.log(texto[i]);
        }else if(patronConsonante.test(texto[i])){
            contadorConsonantes ++;
        }
    }
    return console.log(`Se han encontrado: ${contadorVocales} vocales y ${contadorConsonantes} consonantes`)
}

console.group("Ejercicio #18");
vocalesConsonantes(); //Debe ingresar un texto
vocalesConsonantes(23); //Solo se permite texto de tipo String
vocalesConsonantes("  "); //No puede enviar texto vacio
vocalesConsonantes("Hola Mundo"); //Se han encontrado: 4 vocales y 5 consonantes
vocalesConsonantes("Javascript un lenguaje de Programacion"); //Se han encontrado: 14 vocales y 20 consonantes
console.groupEnd();





/*
    19) Programa una función que valide que un texto sea un nombre válido, 
    pe. miFuncion("Jonathan MirCha") 
    devolverá verdadero.

    Expresion Regular Profesor:
    /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g
*/
const validarNombre = (nombre=undefined) =>{
    if(nombre === undefined) return console.warn("Debe ingresar un nombre");
    if(typeof nombre !== 'string') return console.warn("El nombre debe ser de tipo String");
    if(nombre.trim() === "") return console.warn("No puede enviar un nombre vacio");

    let nombreAux = nombre.replaceAll(" ","");
    let patronNombre = /[A-z]/;
    let esNombreValido = true;

    for(let i=0; i<nombreAux.length; i++){
        if(patronNombre.test(nombreAux[i]) === false){
            esNombreValido = false;
            break;
        }
    }

    return (esNombreValido ? console.log(`El nombre "${nombre}" si es un nombre`) 
    : console.log(`El texto "${nombre}" no es un nombre`));
}
console.group("Ejercicio #19");
validarNombre(); //Debe ingresar un nombre
validarNombre(23); //El nombre debe ser de tipo String
validarNombre("  "); //No puede enviar un nombre vacio
validarNombre("Jonathan MirCha"); //El nombre "Jonathan MirCha" si es un nombre
validarNombre("Joel DoMe"); //El nombre "Joel DoMe" si es un nombre
validarNombre("198"); //El texto "198" no es un nombre
validarNombre("Julieta Ortiz Cruz"); //El nombre "Julieta Ortiz Cruz" si es un nombre
console.groupEnd();


/*
    20) Programa una función que valide que un texto sea un email válido, 
    pe. miFuncion("jonmircha@gmail.com") 
    devolverá verdadero.

    Expresion Regular Profesor: 
    /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i
*/
const validarEmail = (email = undefined) =>{
    if (email === undefined) return console.warn("Debes ingresar un email");
    if (typeof email !== 'string') return console.warn("Solo se permiten valores de tipo string");
    if (email.trim() === "") return console.warn("No se permiten valores vacios");

    let patronCorreo = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

    return (patronCorreo.test(email)) 
    ? console.log(`El correo '${email}', es valido!`)
    : console.log(`El correo '${email}', no es valido!`);
    
}

console.group("Ejercicio #19");
validarEmail(23.23); //Solo se permiten valores de tipo string
validarEmail(""); //No se permiten valores vacios
validarEmail(" "); //No se permiten valores vacios
validarEmail("jonmircha@gmail.com");
validarEmail("jonmircha@.com");
validarEmail("jonmircha@gmail.comuni");
validarEmail("jonmircha@gmail.comunicate");
console.groupEnd();