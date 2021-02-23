/*
    Break && Continue en Javascript.
    Son usadas para frenar o saltar la posición actual en la que nos encontramos por ejemplo en un ciclo.
    Digamos que estamos recorriendo X elementos y queremos que cuando se encuentre Y elemento el recorrido se detenga y salga del bucle.
    O siemplemente que salte ese elemento que indicamos.
    Veamos su implementación.
*/

//Implementando Break.

/*
    Al usar break hacemos que en automatico cuando se cumpla la condición dada... salga del bucle.
    Sin importar si no habia terminado de recorrer el arreglo o lo que fuese.
*/

const edades = [12, 45, 75, 34, 76, 89];


console.log("******* Break [Numeros] *******")
//Usando break con arreglo de numeros
for(let i=0; i<edades.length; i++){
    if(edades[i]===34){
        break;
    }
    console.log(edades[i]);
}



console.log("****** Continue [Strings] ******")
//Usando Continue con arreglo de strings

const nombres = ["Joel", "Julieta", "Cesar", "Octavio", "Sandra", "Maria"];

/*
    Con continue lo que hacemos es que de igual manera indicamos de alguna forma una condición.
    Cuando la condición se cumpla como en este caso de que nombres[i] (Nombres en la posición i) sea igual a "Cesar"
    Este lo que hara sera saltar esa posición del arreglo y pasara a la siguiente posición y si no cumple la condición
    ya ejecutara lo que dice el for.
*/

for(let i=0; i<nombres.length; i++){
    if(nombres[i]==="Cesar"){
        continue;
    }
    console.log(nombres[i]);
}