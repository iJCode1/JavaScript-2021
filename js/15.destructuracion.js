/*
    Destructuración en Javascript
    Es una forma nueva de destructurar u obtener los valores que se encuentran en los objetos de tipo array u objeto.
    Es decir obtener cada uno de los valores del arreglo y almacenarlo en variables que nosotros indiquemos o bien obtener las propiedades de un objeto compuesto.
*/

//Declarando Arraglo
const edades = [17, 21, 20, 13, 34, 23];

/*
¿Como se obtenian antes los valores y se almacenaban en variables?
*/

let 
    age1 = edades[0],
    age2 = edades[1],
    age3 = edades[2],
    age4 = edades[3],
    age5 = edades[4],
    age6 = edades[5];

console.log(age1, age2, age3, age4, age5, age6); // 17 21 20 13 34 23

/*
    La anterior forma es la que se usaba para destructurar nuestro objeto y poder guardar los valores en las variables deseadas.
    La nueva forma que llego en ES6 es:
    Crear las variables dentro de [] e igualarlo al arreglo u objeto de donde se obtendran los valores.
    Estructura:

    let [var1, var2, varn...] = objeto;
*/

let [edad1, edad2, edad3, edad4, edad5, edad6] = edades;

console.log(edad1, edad2, edad3, edad4, edad5, edad6); //17 21 20 13 34 23





console.log("*** Destructurando Objeto ***");
/*
    Ahora veamos como destructurar las propiedades-valor de un objeto en JS
*/

const persona = {
    nombre: "Joel",
    apellido: "DoMe",
    edad: 21,
    nacionalidad: "MX",
    colorFavorito: "Morado"
}

//Destructurando Objeto.

let {edad, nombre, colorFavorito, apellido, nacionalidad} = persona;

console.log(nombre, apellido, edad, nacionalidad, colorFavorito);

/*
    Es importante que el nombre de las variables que creamos dentro de {} sea el mismo nombre que tienen las propiedades.
    Ya que realmente no importa el orden en el que las indiquemos si no el nombre de la propiedades dentro del objeto.
    Como podemos ver en el ejemplo anterior lo que se hizo fue obtener los valores indicados con el mismo nombre.
    Y aunque los pedimos de forma desordenada eso no importo.
    Lo que importa es que tengan los mismos nombres tanto variable como propiedad para que logremos obtener cada uno de los valores.
*/