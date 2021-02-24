/*
    Prototipos en Js.
    Veamos el uso de la función constructora.
    Y esto no es mas que una forma de indicar como un molde de algo.
    Es decir a partir de una función constructora podemos crear instancias (objetos) que tengan los 
    mismos atributos y métodos con los que ya cuenta la función constructora y que se los hereda al objeto creado.
*/

// La forma convencional que se hacia eran crear objetos y copiar y pegar por ejemplo:
// Creando 2 objetos similares pero con diferente gato.
const gatoBlanco = {
    nombre: "Gato Blanco",
    color: "Blanco",
    saludar: function(){
        console.log(`GRRR Soy el ${this.nombre}`);
    }
}

gatoBlanco.saludar(); //GRRR Soy el Gato Blanco

// Creando un mismo objeto pero de otro gato

const gatoNegro = {
    nombre: "Gato Negro",
    color: "Negro",
    saludar: function(){
        console.log(`GRRR Soy el ${this.nombre}`);
    }
}

gatoNegro.saludar(); //GRRR Soy el Gato Negro

/*
    Podemos ver que tienen 2 propiedades que se repiten...
    nombre y color. Aunque si, son diferentes valores. Las propiedades (nombre de estas) son las mismas y una función que hace lo mismo.
    Entonces por que no mejor crear una función constructira por ejemplo llamada gato y que estos 2 gatos puedan ser instancias (objetos) de esta función constructora.
    Al ser instancias de la constructora estos heredaran sus atributos y métodos que tenga la constructora.
*/


//Creando función constructora.
function gato(nombre, color, edad){
    this.nombre = nombre;
    this.color = color;
    this.saludar = function(){
        console.log(`GRRRR! Soy el gato de color ${color}`);
    }
    this.edad = edad;
}

//Creando instancias (objetos) de esta función cosntructora.
const gatoBlanco1 = new gato("Gato Blanco", "Blanco", "2 Meses");
const gatoGris = new gato("Gato Gris", "Gris", "1 Mes");

// Accediendo a la función.
gatoGris.saludar(); //GRRRR! Soy el gato de color Gris

//Imprimiendo lo que contiene la instancia objetoGris
console.log(gatoGris);

/*
    gato {nombre: "Gato Gris", color: "Gris", edad: "1 Mes", saludar: ƒ}

    Como se podra ver tiene 3 atributos (color, edad y nombre) pero tambien tiene el método saludar.
    Al crear el método dentro de la función constructora lo que se hace es cargar de atributos y métodos todos los objetos que creemos.
    Esto no es bueno por que no es una forma optima de hacer las cosas.
    Lo que debemos hacer es cargar los métodos en el prototipo de la función constructora.
    Veamos el uso correcto de esto.
*/


//Creando función constructora eficiente. (Solo incorporar atributos)

function alumno(nombre, apellido, edad, matricula, materia){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.matricula = matricula;
    this.materia = materia;
}

//Agregando al prototipo el método saludar y aprobar.

alumno.prototype.saludar = function(){
    console.log(`Hola, soy ${this.nombre} y estoy cursando la materia de ${this.materia}`);
}

alumno.prototype.aprobar = function(){
    console.log(`Soy ${this.nombre} y aprobe la materia!!!!`);
}


//Creando objetos.
const joel = new alumno("Joel", "DoMe", 21, "74747D", "Redes");
const saul = new alumno("Saul", "Perez", 22, "538G3", "Investigación 1");

//Accediendo a el método.
joel.saludar(); //Hola, soy Joel y estoy cursando la materia de Redes

saul.aprobar(); //Soy Saul y aprobe la materia!!!!
joel.aprobar(); //Soy Joel y aprobe la materia!!!!

/*
    Pero la diferencia es que las instancias no tienen los métodos. mas bien lo tiene el prototipo.
    Esto hace que no carguemos de código inecesario a u¡nuestras instancias y es la forma correcta de trabajar con los métodos.
*/

//Imprimiendo lo que contienen los obejtos (Instancias)
console.log(joel); //alumno {nombre: "Joel", apellido: "DoMe", edad: 21, matricula: "74747D", materia: "Redes"}