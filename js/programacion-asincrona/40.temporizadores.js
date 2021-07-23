/*
    Temporizadores en Javascript
    En este lenguaje existen 2 tipos de temporizadores
    - setTimeout()
    -setInterval()

    setTimeout(): Se ejecutara una unica ocacione en el timepo indicado
    setInterval(): Se ejecutara indefinidamente el tiempo que se le indique

    A ambos se les pasa como argumento un tiempo dado en milisegundos donde 1000ms = 1s
*/

/*
    Imprimira un Hola Mundo en la consola a los 2 segundos (1 unica vez)
*/
setTimeout(()=>{
    console.log("Hola Mundo")
},1000)

/*
    Imprimiendo la hora actual cada segundo, indefinidamente
*/
setInterval(()=>{
    console.log(new Date().toLocaleString())
},1000)

/*
    Por otra parte se pueden limpiar estos intervalos de la siguiente manera.
    (Se deben guardar en una variable los intervalos, previamente)
*/

let despedida = setTimeout(()=>{
    console.log("Adios Mundo")
},1000)

clearTimeout(despedida)

let dia = setInterval(()=>{
    console.log(new Date().toLocaleDateString());
},1000)

clearInterval(dia)
