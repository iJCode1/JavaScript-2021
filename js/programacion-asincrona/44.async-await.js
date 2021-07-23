/*
    Async Await en Javascript
*/

function cuadradoAsync(valor){

    if(typeof valor !== 'number') return Promise.reject(`El valor '${valor}' no es de tipo number`)

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                valor,
                resultado: valor * valor
            })
        }, 0 | Math.random() * 1000)
    })
}

const funcionAsincrona = async () =>{
    try{
        console.log("Inicio del Async Await")
        
        let obj = cuadradoAsync(0);
        console.log(`Valor: '${obj.valor}', Resultado: '${obj.resultado}'`) //Valor: 'undefined', Resultado: 'undefined'

        /*
            Se debe especificar el await para que espere a ejecutar lo siguiente hasta que obtenga el resultado
        */

        obj = await cuadradoAsync(1);
        console.log(`Valor: '${obj.valor}', Resultado: '${obj.resultado}'`)

        obj = await cuadradoAsync(2);
        console.log(`Valor: '${obj.valor}', Resultado: '${obj.resultado}'`)

        obj = await cuadradoAsync(3);
        console.log(`Valor: '${obj.valor}', Resultado: '${obj.resultado}'`)

        obj = await cuadradoAsync(4);
        console.log(`Valor: '${obj.valor}', Resultado: '${obj.resultado}'`)

        obj = await cuadradoAsync(5);
        console.log(`Valor: '${obj.valor}', Resultado: '${obj.resultado}'`)

        obj = await cuadradoAsync(6);
        console.log(`Valor: '${obj.valor}', Resultado: '${obj.resultado}'`)

        obj = await cuadradoAsync(7);
        console.log(`Valor: '${obj.valor}', Resultado: '${obj.resultado}'`)

        obj = await cuadradoAsync(8);
        console.log(`Valor: '${obj.valor}', Resultado: '${obj.resultado}'`)

        obj = await cuadradoAsync(9);
        console.log(`Valor: '${obj.valor}', Resultado: '${obj.resultado}'`)
    }catch(error){
        console.error(error);
    }
}

funcionAsincrona()