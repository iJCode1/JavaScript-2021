/*
    Modulos en Javascript.
    Con los modulos vamos a poder exportar e importar variables, constantes, 
    funciones, classes de un archivo de javascript a otro.

    - Para exportar debemos usar la palabra reservada export en el archivo origen.
    - Para importar debemos usar la palabra reservada import en el archivo destino.

    - Se aplica la destructuración.
    - Se puede exportar una función, clase, variable o constante para que se ejecute por defecto con la palabra reservada export default.
    - Si se tiene importada una por defecto, esta va fuera de la destructuración.
*/

// Importante desde un archivo que a su vez exporta variables, constantes, funciones o clases
// Se aplica la destructuración.
//Los valores dentro de {} deben ser igual el nombre a las propiedades originales
// Los valores no lllevan un orden, la referencia es el nombre que coincida en el archivo donde se exportan
import bienvenida, {edad, saludo, PI, multiplicacion, despedida} from './30.1.modulo-export.js';

//Imprimiendo el valor que hemos importado de la clase '30.1.modulo-export'
console.log(`La edad es: ${edad}`); //La edad es: 21

//Imprimiendo una constante que ha sido importada del mismo archivo.
console.log(`El valor de PI es: ${PI}`); //El valor de PI es: 3.141592653589793

//Imprimiendo el retorno de una función importada
console.log(`La multiplicación de 7 * 4 es: ${multiplicacion(7, 4)}`); //La multiplicación de 7 * 4 es: 28

//Haciendo el llamado de una función anonima importada
saludo("Julieta"); //Hola, Julieta, Saludos!

//Haciendo el llamado de una función flecha importada
despedida("Joel"); //Adios Joel!

//Imprimiendo una variable/constante exportada por default
bienvenida("Joel"); //Bienvenido a mi programa, Joel