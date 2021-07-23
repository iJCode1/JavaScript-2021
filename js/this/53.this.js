/*
    This en javascript
    Básicamente con la palabra reservada this podremos acceder al scope.
    Dependera mucho de si estamos en un ambito global o de bloque.
    Tambien dependera de la estructura que usemos.
    
    Tip:
        - Cuando estemos dentro de un objeto, si vamos a declarar un método... se debe usar una función anonima y nunca una arrow function
        ya que estas toman el scope del padre del objeto, es decir window.
        - Tampoco se debe usar var para declarar una función por que estas se van al scope global directamente
*/

//Obteniendo el scope actual de this (window)
console.group("This")
console.log(this); //Window {window: Window, self: Window, document: document, name: "", location: Location, …}
console.groupEnd()


//Declarando una variable el el contexto global == var
console.group("Declarando variable con this")
this.name = "Joel - Ambito Global"
console.log(this.name) // Joel - Ambito Global
console.groupEnd()


//Imprimiendo window
console.group("Window")
console.log(window); //Window {window: Window, self: Window, document: document, name: "", location: Location, …}
console.groupEnd()


console.group("window === this")
//Window es igual que this en este punto?
console.log(`Window === this: ${window === this}`); //Window === this: true
console.groupEnd()


console.group("Función")
//Declarando una función para imprimir nombre
function imprimirNombre() {
    console.log(`El nombre es: ${this.name}`);
}
imprimirNombre() //El nombre es: Joel - Ambito Global
console.groupEnd()


console.group("Objeto de forma correcta")
//Creando un objeto 'Forma correcta'
const persona = {
    name: "Joel - Scope Objeto",
    mostrarNombre(){
        return console.log(`El nombre es: ${this.name}`); 
    }
}

persona.mostrarNombre(); //El nombre es: Joel - Scope Objeto
console.groupEnd()


console.group("Objeto de forma incorrecta 'arrow function'")
//Creando objeto de la forma incorrecta!!! 'arrow function' no crean un scope y toman el scope del padre
const persona2 = {
    name: "Oscar",
    mostrarNombre: ()=>{
        console.log(`El nombre es: ${this.name}`); 
    }
}

persona2.mostrarNombre() //El nombre es: Joel - Ambito Global
console.groupEnd()



console.group("Constructor")
//Generando un constructor
function Alumno(name, qualification){
    this.name = name;
    this.qualification = qualification;

    // return console.log(`Nombre: ${this.nombre}, Calificación: ${this.calificacion}`); // Nombre: Joel, Calificación: 90.7

    //Creando un closure (function retornada por otra función)

    //Forma incorrecta (Declarando una función declarada )
    /*return function(){
        console.log(`El nombre es: ${this.name}, la calificación es: ${this.qualification}`); //El nombre es: Joel - Ambito Global, la calificación es: undefined
    }*/
    
    //En este caso como las arrow function no generan otro scope, es mejor usarlas en estos casos
    return ()=> console.log(`El nombre es: ${this.name}, la calificación es: ${this.qualification}`);
}

const joel = new Alumno("Joel", 90.7); 
joel() //El nombre es: Joel, la calificación es: 90.7
console.groupEnd()