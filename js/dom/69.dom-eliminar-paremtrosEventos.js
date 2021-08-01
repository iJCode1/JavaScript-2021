/*
    Eventos con paso de parametros y eliminación de eventos.
    De forma nativa un evento 'función' no puede recibir parametros. Pero existe una forma de logarlo.
    Esta es que la función manejadora invoque a otra función la cual sea la que recibe dichos parametros.
    Tambien al declarar los eventos multiples (Solo de esta manera) se puede eliminar algun evento previamente declarado.
*/

//Referencia al botón
const $boton = document.getElementById("evento-parametro")
console.log($boton); //<button id="evento-parametro">Evento con Parametro y Eliminación de Eventos</button>


//Creando función que reciba un parametro
function saludar(nombre = "Desconocido"){
    alert(`Hola, ${nombre}!`);
}
/*
    La función tambien podria ser una arrow function
    const saludar = (nombre = "Desconocido") => {
    alert(`Hola, ${nombre}!`);
}
*/

//Agregando evento al hacer doble clic
$boton.addEventListener("dblclick", saludar);

/*
    En este punto al hacer doble clic sobre el botón...
    La alerta muestra lo siguiente:
    Hola, [object MouseEvent]!
*/

/*
    Para que se pueda recibir un parametro, en el EventListener se debe crear una arrow function
    que dentro invoque a la función que recibe el parametro... 
*/

//Primero se eliminara el evento actual
$boton.removeEventListener("dblclick", saludar);


//Agregando el nuevo evento con paso de parametro
$boton.addEventListener("dblclick", ()=>{
    saludar("Joel");
});

/*
    Al hacer doble clic sobre el botón, la alerta muestra lo siguiente:
    Hola, Joel!
*/