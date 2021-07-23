/*
    Objetos en Js.
    Los objetos en Js es un tipo de dato compuesto en js que se caracteriza por estar formado de 
    llave y valor.
    Por ejemplo:
    const persona = {
        nombre: "Joel",
        edad: 21,
        nacionalidad: "Mx"
    }

    Cómo se puede apreciar se recomienda usar const para este tipo de datos, seguido del nombre del onjeto,
    seguido del operador de asignación (=), seguido de las llaves que abren y cierran el objeto.
    Dentro de estas se colocan las llaves (key) seguido de dos puntos (:) y el valor.
    El valor puede ser cualquier tipo de dato.
*/


//Declarando un objeto
const carro = {
    modelo: "Mini Cooper SPlus",
    año: 2021,
    origen: "México",
    costo: "Gratis"
}

//Accediendo a una key (propiedad)
//La notación del objeto.propiedad es la mas usada.
console.log(carro.modelo); //Mini Cooper SPlus

//Tambien podemos acceder a la propiedad con el uso de [] (Pero no es muy recomendada o usada ya)
console.log(carro["año"]); //2021


//Obteniendo un arreglo con las diferentes propiedades (keys) del objeto
//Haciendo uso del prototipo Object y del método .keys(objeto)
console.log(Object.keys(carro)); //(4) ["modelo", "año", "origen", "costo"]

//Obteniendo un arreglo con los valores de las propiedades.
console.log(Object.values(carro)); //(4) ["Mini Cooper SPlus", 2021, "México", "Gratis"]


//Creando objeto nuevo que tenga dentro de este funciones y objetos mismos.
const joel = {
    nombre: "Joel",
    edad: 21,
    nacionalidad: "MX",
    añoNacimiento: 1999,
    saludar(){
        console.log(`Hola! mi nombre es: ${this.nombre} y tengo ${this.edad} años`);
    }, 
    materiaFav : "Programación",
    contacto: {
        facebook: "Joel Face",
        twitter: "@iJCode1",
        telefono: "4783784278347",
        instagram: "Joel Insta"
    },
    despedirse(){
        return `Bueno, gracias por visitarnos ${this.nombre} que tengas buen día!`
    },
    colorFav: "Morado",
    hacerSuma(n1, n2){
        return console.log(`La suma es: ${n1+n2}`);
    }
}

//Accediendo a una propiedad
console.log(joel.nacionalidad); //MX

//Accediendo a la función
joel.saludar(); //Hola! mi nombre es: Joel y tengo 21 años

//Accediendo a otra propiedad más
console.log(joel.materiaFav); //Programación

//Accediendo a un valor de un objeto dentro de otro objeto.
console.log(`El tiwtter es: ${joel.contacto.twitter}!`); //El tiwtter es: @iJCode1!

//Ejecutando una función con retorno.
console.log(joel.despedirse()); //Bueno, gracias por visitarnos Joel que tengas buen día!

//Ejecutando una función con argumentos.
joel.hacerSuma(4, 90); //La suma es: 94