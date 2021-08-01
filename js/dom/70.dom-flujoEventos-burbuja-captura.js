/*
    Flujo de eventos del DOM

    El método addEventListener() tiene un tercer párametro que puede ser de tipo boolean, si no se especifica, el valor por defecto es false.

    Si el parámetro es false se ejecuta la fase de burbuja (ir del elemento más interno al más externo).

    Si el parámetro es true se ejecuta la fase de captura (ir del elemento más externo al más interno).
*/

//Referencia a las div's
const $divs = document.querySelectorAll(".flujo-eventos div");
console.log($divs);

//declarando una función que itere por cada elemento 'div' del 'section'
function imprimirMensaje (e){
        console.log(`Hola, soy '${this.className}' y fui invocado en el '${e.target.className}'`);
}

//Añadiendo evento a cada 'div' de la sección 
$divs.forEach((div)=>{
    // ------------- Fase de burbuja 'false' (del elemento más interno al más externo) -------------
    //Por defecto
    /*div.addEventListener("click", imprimirMensaje);*/
    
    //Indicando manualmente el 'false'
    /*div.addEventListener("click", imprimirMensaje, false);*/

    /*
        Resultados
        - Si se presiona el tercer div
        Hola, soy 'tres' y fui invocado en el 'tres'
        Hola, soy 'dos' y fui invocado en el 'tres'
        Hola, soy 'uno' y fui invocado en el 'tres'

        - Si se presiona el segundo div
        Hola, soy 'dos' y fui invocado en el 'dos'
        Hola, soy 'uno' y fui invocado en el 'dos'

        - Si se presiona el primer div
        Hola, soy 'uno' y fui invocado en el 'uno'
    */

    // ------------- Fase de captura (del elemento más externo al más interno) -------------
    //Declarando evento con flujo de captura
    /*div.addEventListener("click", imprimirMensaje, true);*/

    /*
        Resultados
        - Si se presiona el tercer div
        Hola, soy 'uno' y fui invocado en el 'tres'
        Hola, soy 'dos' y fui invocado en el 'tres'
        Hola, soy 'tres' y fui invocado en el 'tres'

        - Si se presiona el segundo div
        Hola, soy 'uno' y fui invocado en el 'dos'
        Hola, soy 'dos' y fui invocado en el 'dos'

        - Si se presiona el primer div
        Hola, soy 'uno' y fui invocado en el 'uno'
    */

    /*
        Al añadir los eventos no solo se tienen esos tres paraemtros, hay muchos más.
        Por ejemplo se puede indicar si el evento solo se ejecutara 1 unica vez
    */
    //Creando evento en burbuja indicando que solo se ejecutara una vez
    div.addEventListener("click", imprimirMensaje,{
        capture: false, //Se indica false que sea en flujo de captura, por lo cual el flujo sera de burbuja
        once: true //Solo se invoca una unica vez
    })
})