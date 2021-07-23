/*
    Callbacks en Javascript

    Un callback (llamada de vuelta) es una función que recibe como argumento otra función y la ejecuta. 
    En el siguiente ejemplo, la función foo recibe por parámetro otra función, que es el callback. 
    La función foo es la encargada de ejecutar el callback.
    function foo(callback) { 
        //do something
        callback();
    }
*/

function cuadradoCallback(valor, callback){
    setTimeout(()=>{
        callback(valor, valor * valor);
    }, 0 | Math.random() * 1000)
}

cuadradoCallback(0, (valor, resultado)=>{
    console.log("Inicio de la Callback");
    console.log(`El valor es: ${valor} y el resultado es: ${resultado}`)
    cuadradoCallback(1, (valor, resultado)=>{
        console.log(`El valor es: ${valor} y el resultado es: ${resultado}`)
        cuadradoCallback(2, (valor, resultado)=>{
            console.log(`El valor es: ${valor} y el resultado es: ${resultado}`)
            cuadradoCallback(3, (valor, resultado)=>{
                console.log(`El valor es: ${valor} y el resultado es: ${resultado}`)
                cuadradoCallback(4, (valor, resultado)=>{
                    console.log(`El valor es: ${valor} y el resultado es: ${resultado}`)
                    cuadradoCallback(5, (valor, resultado)=>{
                        console.log(`El valor es: ${valor} y el resultado es: ${resultado}`)
                        cuadradoCallback(6, (valor, resultado)=>{
                            console.log(`El valor es: ${valor} y el resultado es: ${resultado}`)
                            cuadradoCallback(7, (valor, resultado)=>{
                                console.log(`El valor es: ${valor} y el resultado es: ${resultado}`)
                                cuadradoCallback(8, (valor, resultado)=>{
                                    console.log(`El valor es: ${valor} y el resultado es: ${resultado}`)
                                    cuadradoCallback(9, (valor, resultado)=>{
                                        console.log(`El valor es: ${valor} y el resultado es: ${resultado}`)
                                        console.log("Fin de la Callback !");
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})