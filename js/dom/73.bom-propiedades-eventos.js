/*
    BOM: Browser Object Model

    El Modelo de Objetos del Navegador es un API que permite acceder y 
    modificar las propiedades de las ventanas del propio navegador.

    Mediante el BOM, es posible redimensionar y mover la ventana del navegador y 
    realizar muchas otras manipulaciones no relacionadas con el contenido de la página HTML.

    El mayor inconveniente del BOM es que, a diferencia del DOM, no es un API estándar, 
    cada navegador lo puede interpretar de diferente manera, sin embargo, en los últimos años los navegadores 
    están más estandarizados entre sí.
*/

//Accediendo al objeto Window
console.log(window); //Window {window: Window, self: Window, document: document, name: "", location: Location, …}

//Añadiendo evento de 'resize'
window.addEventListener("resize", (e)=>{
    //Se limpiara la consola antes de efectuar el evento
    console.clear();

    //Se imprimira el tamaño actual de la ventana del navegador (viewport)
    console.group("Inner");
    console.log(window.innerHeight); //Alto
    console.log(window.innerWidth); //Ancho
    console.groupEnd();
    
    //Se imprimira el tamaño total de todo el navegador... (Incluyendo ventanas y barras)
    console.group("Outer");
    console.log(window.outerHeight); //Alto
    console.log(window.outerWidth); //Ancho
    console.groupEnd();


    //Imprimiendo el evento
    console.log(e);
});


//Referencia al primer 'h2' de la pagina
const $h2 = document.querySelector("h2");


//Añadiendo evento de Scroll
window.addEventListener("scroll", (e)=>{

    //Limpiando la consola
    console.clear();

    //Añadiendo un style al 'h2' (width) para generar scroll vertical
    $h2.style.width = "2000px";

    //Imprimiendo el valor actual de scroll
    console.group("Scroll");
    console.log(window.scrollX); //Imprime el valor de scroll en X (Horizontal)
    console.log(window.scrollY); //Imprime el valor de scroll en Y (Vertical)
    console.groupEnd();


    //Imprimiendo evento
    console.log(e);
});



//Añadiendo evento de 'load'
/*
    Aunque se puede utilizar el evento 'load' de la siguiente manera:


    se recomienda usar DOMContentLoaded.
    Esto por que es mucho mas rapido que el evento 'load'

        - El evento DOMContentLoaded es disparado cuando el documento HTML ha sido completamente cargado 
          y parseado, sin esperar hojas de estilo, imágenes y subtramas para finalizar la carga.
        
        - El evento load se dispara cuando se ha detectado la carga completa de la página.

        - Es un error frecuente usar load cuando DOMContentLoaded es mucho más apropiado.

        - Peticiones asíncronas pausan el parseo del DOM.
*/

window.addEventListener("load", (e)=>{
    console.log("** load **");

    //Imprimiendo los valores correpoendientes de la posición de la ventana
    console.log(window.screenX); //Muestra el posicionamiento de la pantalla en el eje horizontal (X)
    console.log(window.screenY); //Muestra el posicionamiento de la pantalla en el eje vertical (Y)

    //Imprimiendo el evento
    console.log(e);
})

window.addEventListener("DOMContentLoaded", (e)=>{
    console.log("** DOMContentLoaded **");

    //Imprimiendo los valores correpoendientes de la posición de la ventana
    console.log(window.screenX); //Muestra el posicionamiento de la pantalla en el eje horizontal (X)
    console.log(window.screenY); //Muestra el posicionamiento de la pantalla en el eje vertical (Y)

    //Imprimiendo el evento
    console.log(e);
});