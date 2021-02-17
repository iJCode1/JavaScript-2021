/*
    const: Se usa en Javascript al momento de utilizar una constante.
    Es decir un valor que siempre se mantendrá así y no cambiara con el tiempo.
    Podemos pensar en esto como el nombre de una persona.
    const NAME = "joel"; Ya que lo mas lógico es que siempre me llame así.

    También podríamos pensar en el valor constante de π.
    const PI = 3.1416
*/

//Declarando variable de tipo constante.
const PI = 3.1416;
console.log(PI);

//A una variable constante no se le puede cambiar su valor o su tipo de dato.
//PI = 34; // Uncaught TypeError: Assignment to constant variable.
//PI = "Hola"; // Uncaught TypeError: Assignment to constant variable.


//Tampoco podemos crear una constante sin asignarle un valor en la declaración.
//const lenguaje; //Uncaught SyntaxError: Missing initializer in const declaration

/*
    Las constante son usadas sobretodo en tipos de datos compuestos como lo són:
    - Arreglos
    - Objetos
    - Funciones
    - Clases
*/

const persona = {
    name: "Carlos",
    edad: 22,
    estatura: 1.80
}

const edades = [12, 23, 78, 34, 23, 7];

/*
    En las constantes de tipo de dato compuesto ocurre algo interesante.
    Mientras que en las variables const no podemos cambiar su valor (Por que accesamos al valor) directo ahí.
    Aqui si se puede ya que no accesamos a los valores, si no a la posición de esta.
    Por ejemplo podemos agregar o eliminar elementos de estos elementos compuestos.
*/

//Agregando un valor al objeto
persona.job = "Programador";
console.log(persona); //{name: "Carlos", edad: 22, estatura: 1.8, job: "Programador"}


//Cambiando el tipo de dato a primitivo (Obviamente nos dara un error)
//persona = 12;
//console.log(persona); // Uncaught TypeError: Assignment to constant variable



//Agregando un valor a un arreglo:
edades.push(21);
console.log(edades); //(7) [12, 23, 78, 34, 23, 7, 21]


//Eliminando un valor del arreglo:
edades.pop();
console.log(edades); //(6) [12, 23, 78, 34, 23, 7]