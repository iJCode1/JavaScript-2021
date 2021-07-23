//Clases en Javascript.

class Animal{
    constructor(nombre, genero, edad){
        this.nombre = nombre;
        this.genero = genero;
        this.edad = edad;
    }

    saludar(){
        console.log(`Hola, soy ${this.nombre} y soy un Animal`);
    }

}

class Gato extends Animal{
    constructor(nombre, genero, edad, color){
        super(nombre, genero, edad);
        this.color = color;
    }

    saludar(){
        console.log(`Hola, soy ${this.nombre} y soy un Gato`);
    }

    maullar(){
        console.log(`Soy ${this.nombre} y hago Miuauuuuuu`);
    
    }
}

let animal1 = new Animal("Gatito", "Macho", "1");
animal1.saludar();
console.log(animal1);

let gato1 = new Gato("Gatuna", "Hembra", 1, "Amarillo");
gato1.saludar();
console.log(gato1.color);
console.log(gato1);
gato1.maullar();
