//Aplicando la herencia prototipica en Javascript

//Función constructora
const Estudiante = function(nombre, apellido, codigo){
    this.nombre = nombre;
    this.apellido = apellido;
    this.codigo = codigo;
}

//Creando métodos al prototipo Estudiante.
Estudiante.prototype.saludar = function(){
    console.log(`Hola! Soy estudiante y mi nombre es ${this.nombre}`);
}

Estudiante.prototype.despedirse = function(){
    console.log(`Hola!, hasta la proxima!`);
}

//Declarando objetos del prototipo Estudiante
let joel = new Estudiante("Joel", "Dominguez", 20280253);
let julieta = new Estudiante("Julieta", "Hernandez", 20280277);

console.log(joel.nombre)
joel.saludar()
console.log(julieta.apellido)
julieta.despedirse()


//Aplicando la herencia prototipica estudiante > sistemas
const Sistemas = function(nombre, apellido, codigo, semestre){
    this.super = Estudiante;
    this.super(nombre,apellido,codigo);
    this.semestre = semestre;
}

//Herencia Prototipica estudiante > sistemas
Sistemas.prototype = new Estudiante();
Sistemas.prototype.constructor = Sistemas;

//Sobreescribiendo métodos
Sistemas.prototype.saludar = function(){
    console.log(`Hola!, Soy ${this.nombre} y soy estudiante de sistemas`);
}

//Haciendo llamas a prototipo Sistemas
const joel2 = new Sistemas("Joel", "Dominguez", 20280253, "Octavo Semestre");
const regina = new Sistemas("Regina", "Ortiz", 20280242, "Septimo Semestre");

console.log(joel2);
joel2.saludar()

console.log(regina);