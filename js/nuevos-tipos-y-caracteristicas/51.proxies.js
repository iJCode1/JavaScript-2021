/*
    Proxies en Javascript
    Basicamente es una forma de crear una copia de un objeto y que estos esten vinculados.
    Es como cuando se trabajaba en POO con las instancias de una clase.
    Al crear el proxy se requiere pasar como argumento el objeto y un manejador
*/

//Creando objeto literal
const estudiante = {
    nombre: "",
    apellido: "",
    carrera: "",
    edad: ""
};

//Creando manejador
const manejador = {
    //Recibe el objeto, propriedad y valor
    set(obj, prop, value){

        //Validaciones antes de asignar nuevas propiedades o valores a propiedades existentes
        //Si el objeto del cual se hace la copia no tiene la propiedad que se esta pasando... se retorna un error
        if(Object.keys(obj).indexOf(prop) === -1){
            return console.error(`La propiedad '${prop}' no es permitida`); //La propiedad 'promedio' no es permitida
        }

        //Validando que la edad sea un numerico y mayor a 0
        if(prop === 'edad' && (typeof value !== 'number' || value<=0)){
            return console.error(`La propiedad '${prop}' solo recibe valores numericos mayores a 0`);
        }

        //Validando que el nombre y apellido sea valido
        if((prop === 'nombre' || prop === 'apellido') && !(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(value))){
            return console.error(`El valor de '${value}' no es un una cadena de texto correcta`);
        }

        //Si pasa todas las validaciones, se le asigna el valor a la propiedad en especifico
        obj[prop] = value;
    }
}


//Creando proxie
const joel = new Proxy(estudiante, manejador);
joel.nombre = "Joel12"; //El valor de 'Joel12' no es un una cadena de texto correcta
joel.nombre = "Joel"; 
joel.apellido = "Dominguez";
joel.carrera = "Ingenieria en Sistemas Computacionales";
joel.edad = 21;

//Si no hubiera validaciones... Podriamos incorporar nuevas propiedades al objeto y estas se verian tambien en el objeto del cual se hace el proxy
joel.promedio = 90.7;
console.log(joel); //Proxy {nombre: "Joel", apellido: "Dominguez", carrera: "Ingenieria en Sistemas Computacionales", edad: 21, promedio: 90.7}
console.log(estudiante);
/*
    {nombre: "Joel", apellido: "Dominguez", carrera: "Ingenieria en Sistemas Computacionales", edad: 21, promedio: 90.7}
        apellido: "Dominguez"
        carrera: "Ingenieria en Sistemas Computacionales"
        edad: 21
        nombre: "Joel"
        promedio: 90.7
        __proto__: Object
*/

//Imprimiendo el proxy
console.log(joel); //Proxy {nombre: "Joel", apellido: "Dominguez", carrera: "Ingenieria en Sistemas Computacionales", edad: 21}

//Creando un nuevo proxy
const julieta = new Proxy(estudiante, manejador);
console.log(julieta); //Proxy {nombre: "Joel", apellido: "Dominguez", carrera: "Ingenieria en Sistemas Computacionales", edad: 1}

julieta.nombre = "Julieta"
julieta.apellido = "Cortez"
julieta.carrera = "Contaduria"
julieta.edad = 20

julieta.matricula = "201723030" //La propiedad 'matricula' no es permitida

console.log(julieta); //Proxy {nombre: "Julieta", apellido: "Cortez", carrera: "Contaduria", edad: 20}