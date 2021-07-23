/*
    Objetos Literales en Js.
    Los objetos literales no es mas que una nueva forma de escribir objetos a partir de ES6.
    Esta forma de escirbir objetos nos sirve principalmente para tener una estructura mas limpia.
*/


//Variables que usaremos dentro del objeto
let nombre = "Joel";
let edad = 21;

//Creando un Objeto antes:

const persona1 = {
    nombre: nombre,
    apellido: "DoMe",
    edad: edad,
    saludar: function(){
        console.log(`Hola, Bienvenido ${this.nombre}!`)
    },
    colorFav: "Morado"
}

console.log(persona1); //{nombre: "Joel", apellido: "DoMe", edad: 21, colorFav: "Morado", saludar: ƒ}

persona1.saludar(); //Hola, Bienvenido Joel!


/*
    Como vemos no es una estructura muy compleja ni dificil de entender.
    Pero a partir de 2015 tenemos la implementación de Objetos literales que nos facilitan la sintaxis.
*/

/*
  Creando un Objeto con esta nueva estructura.
  Puntos clave:
  - Si el nombre de la variable coincide con el de la propiedad podemos solo escribir el nombre una vez sin necesidad de los : seguida del nombre.
  - Podemos solo escribir  
        nombre_de_la_función() { 
            lo que hara 
        }, 
    asi evitamos crear la función anonima.
*/

const persona2 = {
    nombre,
    apellido: "DoMe",
    edad,
    saludar(){
        console.log(`Hola, ${nombre}, tienes ${edad} años!`)
    },
    colorFav: "Morado"
}

console.log(persona2); //{nombre: "Joel", apellido: "DoMe", edad: 21, colorFav: "Morado", saludar: ƒ}

persona2.saludar(); //Hola, Joel, tienes 21 años!
