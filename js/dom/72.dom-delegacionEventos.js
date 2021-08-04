/*
    Delegación de Eventos
    La delegación de eventos lo que hace es definir eventos de una mejor manera.
    De lugar de definir un evento por cada tipo. Por ejemplo el evento click declararlo 5 veces, 1 para cada elemento...
    Es mejor declararlo a el 'document' y con condicionales asignar la función manejadora en especifico a un selector gracias 
    al método 'matches()' del evento.
    Ademas de esta manera se evita la propagación de eventos que existe (Burbuja y captura)
*/


//Declarando un evento nuevo
const saludar = (e)=>{
    return console.log(`Hola!, Te saluda '${this}', fui incovado desde el elemento '${e.target.className}'`);
}

//Asignando el evento 'click' al 'document'
document.addEventListener("click", (e)=>{

    //Asignando la función saludar a cada uno de los divs que estan dentro de la clase 'flujo-eventos'
    if(e.target.matches(".flujo-eventos div")){
        saludar(e);
    }

    if(e.target.matches("#evento-semantico")){
        saludar(e);
        console.log(e.target.className);
    }
})