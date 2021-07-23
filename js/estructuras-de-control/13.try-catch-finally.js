/*
    Uso de try-catch y finally en Javascript.
    Se suelen usar estas estrcuturas para el control de los errores que nos encontramos en nuestros programas en Js.
    la estructura es la siguiente:
    try{
        //Código a evaluar
    }catch(){
        //Atrapar errores
    }finally{
        //Se ejecuta siempre
    }
*/

//Atrapando errores con try-catch


//console.log(numero / 6); //Arroja un error por que la variable numero no existe (no esta definida).

//Controlemos ese error...

try{
    console.log("Hola, estamos dentro del try");
    console.log(numero/7);
    console.log("Hola, estamos al final del try")
}catch(error){
    console.log(`El error es: ${error}`)
}finally{
    console.warn("Llego al final del programa con el finally");
}

//Se obtuvo:
/*
    Hola, estamos dentro del try

    El error es: ReferenceError: numero is not defined

    Llego al final del programa con el finally
*/


//Creando un mensaje personalizado de un try-catch


//let numeroTelefonico = "hola";
//console.log(isNaN(numeroTelefonico)); //true

try{
    let numeroTelefonico = 9;

    if(isNaN(numeroTelefonico)){
        throw new Error( "No es un numero, ingrese un valor valido");
    }

    console.log("El numero es correcto!");
}catch(error){
    console.log(error);
}
