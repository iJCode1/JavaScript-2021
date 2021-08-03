/*
    stopPropagation y preventDefault
    Se tienen 2 métodos principales por asi decirlo, estos métodos se pueden aplicar sobre los elementos del DOM.
    Dichos métodos son:
    - Detener Propagación
    - Prevenir el comportamiento por default de un elemento.

    Al detener la propagación nos referimos a que bloquearemos por asi decirlo el flujo de eventos tanto de burbuja y de captura.
    
    Al prevenir el comporatmiento por default nos referimos al comportamiento de eventos que tienene algunos elementos de html por defecto.
    Como lo es una etiqueta 'a' que por defecto al darle clic, esta habre la pagina a la cual apunta en su atributo 'href'. Es un evento
    que no se ha declarado manualmente, pero sin embargo ya lo tiene por defecto.
*/

//Referencia a las 'div' dentro del elemento con la clase indicada
const $divs = document.querySelectorAll(".flujo-eventos div");
console.log($divs); //NodeList(3) [div.uno, div.dos, div.tres]


//Creando función para asignarla como evento
/*
    Por defecto el evento tiene habilitada la propagación de burbuja.
    Para desactivarla se tiene que indicar manualmente
*/
function mostrarMensaje(e){
    console.log(`Hola, Soy el elemento '${this.className}' y fui invocado en '${e.target.className}'`);

    //Deteniendo la propagación de eventos
    e.stopPropagation(true);

    /*
        Resultados:
        - Al presionar 3
            Hola, Soy el elemento 'tres' y fui invocado en 'tres'
        - Al presionar 2
            Hola, Soy el elemento 'dos' y fui invocado en 'dos'
        - Al presionar 1
            Hola, Soy el elemento 'uno' y fui invocado en 'uno'
    */
}

//Añadiendo un evento al selector
$divs.forEach((div) =>{
    div.addEventListener("click", mostrarMensaje);
})


//Prevenir el evento por defecto de un elemento html

//Creando referencia del elemento 'a'
const $anchor = document.querySelector(".link-dom");
console.log($anchor); //<a class="link-dom" href="index.html" data-description="Document Object Model" style="background-color: #fca311; color: #14213d">DOM</a>

//Eliminando la acción que tiene por defecto el anchor seleccionado
$anchor.addEventListener("click", (e) =>{
    e.preventDefault(true);
});