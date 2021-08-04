/*
    Métodos del BOM (Browser Object Model)
    Se tienen varios métodos en el BOM y algunos de ellos muy conocidos como
        - alert
        - confirm
        - prompt
    Algunos otros como
        - open
        - close
        - imprimir
*/

//Creando las referencias de los botones
const $abrir = document.getElementById("boton-abrir");
const $cerrar = document.getElementById("boton-cerrar");
const $imprimir = document.getElementById("boton-imprimir");

//Variable para almacenar la página actual
let ventana;

//Añadiendo método 'click' y evento 'open'
$abrir.addEventListener("click", (e)=>{
    
    //Abriendo la página indicada
    ventana = window.open("https://google.com");
    
    //Imprimiendo evento
    console.log(e);
});


//Añadiendo evento 'click' y método 'close'
$cerrar.addEventListener("click", (e)=>{
    /*
        En algunos navegadores si no se le pasa un parametro al método 'close',
        cierra automaticamente la página actual.

        window.close();
    */

    window.close(ventana);

    //Imprimiendo evento
    console.log(e);
});


//Añadiendo evento 'click' y método 'print'
$imprimir.addEventListener("click", (e)=>{

    window.print();

    //Imprimiendo evento
    console.log(e);
});