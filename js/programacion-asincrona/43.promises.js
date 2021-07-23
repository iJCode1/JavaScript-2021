/*
    Promesas en Javascript

    Una promesa es un objeto que representa un valor que puede que esté disponible «ahora», 
    en un «futuro» 
    o que «nunca» lo esté.

    Crear promesa:
    Con el constructor promise y pasándole una función con dos parámetros, 
    podremos crear una promesa. 
    Los parámetros son resolve y reject, que nos deja decirle si ha sido resuelta o rechazada.



    Obtenido de: https://www.arsys.es/blog/promesas-javascript/#:~:text=Una%20promesa%20es%20un%20objeto,que%20posponerse%20en%20el%20tiempo.
*/

function cuadradoPromise(valor){
    if(typeof valor !== 'number') return Promise.reject(`'${valor}' no es un valor númerico`)
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                valor,
                resultado: valor * valor
            })
        }, 0 | Math.random() * 1000)
    })
}

cuadradoPromise(0)
    .then(obj=>{
        console.log("Inicio Promesa");
        console.log(`Promesa: ${obj.valor}, ${obj.resultado}`);
        return cuadradoPromise(1)
    })
    .then(obj=>{
        console.log(`Promesa: ${obj.valor}, ${obj.resultado}`);
        return cuadradoPromise(2)
    })
    .then(obj=>{
        console.log(`Promesa: ${obj.valor}, ${obj.resultado}`);
        return cuadradoPromise(3)
    })
    .then(obj=>{
        console.log(`Promesa: ${obj.valor}, ${obj.resultado}`);
        return cuadradoPromise(4)
    })
    .then(obj=>{
        console.log(`Promesa: ${obj.valor}, ${obj.resultado}`);
        return cuadradoPromise(5)
    })
    .then(obj=>{
        console.log(`Promesa: ${obj.valor}, ${obj.resultado}`);
        return cuadradoPromise(6)
    })
    .then(obj=>{
        console.log(`Promesa: ${obj.valor}, ${obj.resultado}`);
        return cuadradoPromise("Hola")
    })
    .then(obj=>{
        console.log(`Promesa: ${obj.valor}, ${obj.resultado}`);
        console.log("Fin de la Promesa");
    })
    .catch((error)=>{
        console.error(error);
    })