/*
    Call, Apply y Bind en Javascript.
    Estos son 3 mecanismos para controlar el scope donde se mandan a llamar.
    Es muy importante que se les indique el scope. Pueden recibir parametros que la función requiere.
*/

//Imprimiendo el scope actual
console.log(this); //Window {window: Window, self: Window, document: document, name: "", location: Location, …}

//Creando variable en el scope global
this.alcance = "Scope Global";
console.group("Scope Global - 'this y window'");
console.log(this.alcance); //Scope Global
console.log(window.alcance); //Scope Global
console.groupEnd();


//Creando una objeto y dentro un método que genera su propio scope
const objPersonas = {
    nombre: "Personas",
    alcance: "Scope Objeto",
    /*imprimirScope: ()=>{
        return console.log(this.alcance); //Scope Global
    }*/
    imprimirScope: function(){
        return console.log(this.alcance); //Scope Objeto
    }
};

objPersonas.imprimirScope() //Scope Objeto


//Declarar funcion que imprime el alcance 'scope actual'
function imprimirScopeActual(aQuien, dia){
    return console.log(`Hola ${aQuien}, el scope actual es: '${this.alcance}', en el dia '${dia}'`)
}

imprimirScopeActual("Joel", 22); // Hola Joel, el scope actual es: 'Scope Global', en el dia '22'

//Creando objeto que almacene su propio scope
const obj = {
    alcance: "Scope Objeto 'obj'"
}

//Utilizando los mecanismos call y apply para indicar que scope debe utilizar la función 'imprimirScopeActual()'
/* 
    - Primer parametro: Objeto o lugar del cual tomara el scope
    - Segundo parametro: Argumentos que recibe la función
*/
imprimirScopeActual.call(obj, "Julieta", 22) //Hola Julieta, el scope actual es: 'Scope Objeto 'obj'', en el dia '22'

//Para apply es lo mismo, solo que los argumentos los recibe en forma de arreglo: []
imprimirScopeActual.apply(obj, ["Herny", 23]); //Hola Herny, el scope actual es: 'Scope Objeto 'obj'', en el dia '23'


//bind

//Creando un nuevo objeto
const obj3 = {
    alcance: "Scope Objeto 3",
    nombre: "Joel3",
    mensaje: function(){
        console.log(`Hola ${this.nombre}!, Estas en el alcance de '${this.alcance}'`)
    }
}

//Imprimiendo alcance actual
obj3.mensaje() //Hola Joel3!, Estas en el alcance de 'Scope Objeto 3'

const obj4 = {
    // mensaje: obj3.mensaje
    mensaje: obj3.mensaje.bind(obj3)
}

// obj4.mensaje(); //Hola undefined!, Estas en el alcance de 'undefined'
obj4.mensaje(); //Hola Joel3!, Estas en el alcance de 'Scope Objeto 3'