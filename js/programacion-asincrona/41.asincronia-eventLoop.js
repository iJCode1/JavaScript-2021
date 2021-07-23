/*
    Asincronia y el Event Loop en Javascript
*/

//Función Sincrona
/*
    Síncrono: La respuesta sucede en el presente, una operación síncrona esperará el resultado.
*/

(()=>{
    console.log("Función sincrona")
    console.log("Inicio")
    
    function dos(){
        console.log("Dos")
    }
    function uno(){
        console.log("Uno")
        dos();
        console.log("Tres");
    }

    uno()
    console.log("Final")
})();
/*
    Función sincrona
    Inicio
    Uno
    Dos
    Tres
    Final
*/

/*
    Función Asincrona
    Asíncrono: La respuesta sucede a futuro, una operación asíncrona no esperará el resultado.
*/

console.log("-------------------------");

(()=>{
    console.log("Función Asincrona")
    console.log("Inicio");

    function dos(){
        setTimeout(()=>{
            console.log("Dos")
        },1000)
    }

    function uno(){
        setTimeout(()=>{
            console.log("Uno");
        },0)
        dos()
        console.log("Tres");
    }

    uno()
    console.log("Final");
})();
/*
    Función Asincrona
    Inicio
    Tres
    Final
    Uno
    Dos
*/