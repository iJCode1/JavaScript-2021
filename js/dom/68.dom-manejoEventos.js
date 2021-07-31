/*
    Manejo de eventos de Javascript en elementos de HTML
    Se pueden agregar eventos de la siguiente manera.
        - Eventos por atributo (No tan recomendado).
        - Eventos Semánticos
        - Eventos Multiples
    Los ultimos 2, los más recomendados
    
    Los eventos Semánticos solo se permite 1 evento por elemento. si se agregan más al mismo elemento, 
    se soobrescriben.

    Los eventos multiples permiten que a un mismo elemento se le apliquen mas eventos.

    En los ultimos 2 tipos de manejadores de eventos se permite ingresar ya sea una referencia de una función...
    O simplemente crear ahí mismo una función anonima o arrow function.
*/


//Creando función que mostrara un alert con un saludo
function holaMundo (){
    alert("Hola Mundo")
}


//Evento por atributo
//Creando una referencia del bóton
const $botonAtributo = document.getElementById("evento-atributo");
console.log($botonAtributo);


//Evento Semántico 
/*
    Solo se permite 1 evento.
    Si se agregan más de 1 evento al mismo elemento... se sobreescribe y se queda el ultimo evento en cascada.
*/
const $botonSemantico = document.getElementById("evento-semantico");
$botonSemantico.onclick = holaMundo;
$botonSemantico.onclick = function(){
    alert("Hola Mundo 2");
};
$botonSemantico.onclick = (ev)=> {
    alert("Hola Mundo desde el botón semántico");
    console.log(ev);
    console.log(ev.target);
    console.log(ev.type);
};

console.log($botonSemantico);


//Eventos multiples a un mismo elemento
const $botonMultiple = document.getElementById("evento-multiple");
$botonMultiple.addEventListener("click",holaMundo);
$botonMultiple.addEventListener("click", function(ev){
    alert("Estamos en el tercer botón con eventos multiples");
    console.log(ev);
    console.log(ev.type);
    console.log(ev.target);
});
$botonMultiple.addEventListener("click",()=>{
    console.log("Ultimo evento multiple al botón");
});

console.log($botonMultiple);