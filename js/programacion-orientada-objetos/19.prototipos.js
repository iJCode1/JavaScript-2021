/*
    Prototipos en Js.
    Veamos el uso de la función constructora.
    Y esto no es mas que una forma de indicar como un molde de algo.
    Es decir a partir de una función constructora podemos crear instancias (objetos) que tengan los 
    mismos atributos y métodos con los que ya cuenta la función constructora y que se los hereda al objeto creado.
*/

// La forma convencional que se hacia eran crear objetos y copiar y pegar por ejemplo:
// Creando 2 objetos similares pero con diferente gato.
/*
    Prototipos en Js.
    Veamos el uso de la función constructora.
    Y esto no es más que una forma de indicar como un molde de algo.
    Es decir a partir de una función constructora podemos crear instancias (objetos) que tengan los 
    mismos atributos y métodos con los que ya cuenta la función constructora y que se los hereda al objeto creado.
*/

// La forma convencional que se hacia eran crear objetos y copiar y pegar por ejemplo:
// Creando 2 objetos similares pero con diferente gato.

const gato1 = {
    nombre: "Garfield",
    edad: 8,
    saludar(){
        console.log(`Miaaauuu, soy ${this.nombre}`)
    }
}

console.log(gato1.nombre);
console.log(gato1.edad);
console.log(gato1.saludar());

const gato2 = {
    nombre: "Garfielda",
    edad: 5,
    saludar(){
        console.log(`Miaaauuu, soy ${this.nombre}`)
    }
}

console.log(gato2.nombre);
console.log(gato2.edad);
console.log(gato2.saludar());

//Pero se puede crear una función constructora

function Gato(nombre, edad, color){
    this.nombre = nombre;
    this.edad = edad;
    this.color = color;
    this.saludar = function(){
        console.log(`Miauuuuu, soy ${this.nombre}!!!`)
    }
}

const garfield = new Gato("Garfield", 2, "Amarillo");
console.log(garfield);
console.log(garfield.saludar())

const garfielda = new Gato("Garfielda", 3, "Blanca");
console.log(garfielda);
console.log(garfielda.saludar());

//Pero lo mejor es hacer meter los metodos en el prototipo

function Persona(nombre, edad, nacionalidad){
    this.nombre = nombre;
    this.edad = edad;
    this.nacionalidad = nacionalidad;
}

Persona.prototype.saludar = function(){
    console.log(`Hola Mundo! Mi nombre es: ${this.nombre}`)
};

const joel = new Persona("Joel", 21, "MX");
const juli = new Persona("Julieta", 20, "ES");

console.log(joel);
joel.saludar()
console.log(joel.edad);

console.log(juli);
console.log(juli.nacionalidad);
juli.saludar()
