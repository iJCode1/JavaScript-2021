/*
    Bucles en Javascript
    Los bucles en todo lenguaje de programación son bloques de código que se ejecutaran x veces unicamente cuando se cumpla una condición dada.
    Por ejemplo podriamos decir que se sume un numero a si mismo mientras que este numero sea menor a 100.
    Este es un ejemplo simple pero los bucles tienen muchos usos para no tener que escribir codigo repetidamente si no indicarle uno cuantas veces debe ejecutarlo.
    En el tema de los bucles podemos usar:

    - for                - forin
    - forof 
    - while              - dowhile
*/

//Declarando un bucle for
/*
Usamos for cuando sabemos el numero de veces que queremos que se ejecuten o iteren en una instrucción.
*/

//Pedimos un numero al usuario (Para hacer tabla de multiplicar de ese numero).

// let tablaMult = parseInt(prompt("Ingresa un numero: "));
console.log("****** for ******")

let tablaMult = 7;
for(let i=1; i<=10; i++){
    console.log(`${tablaMult} * ${i} = ${tablaMult*i}`);
}

/*
    Ejemplo de ejecución con numero 7:
    7 * 1 = 7
    7 * 2 = 14
    7 * 3 = 21
    7 * 4 = 28
    7 * 5 = 35
    7 * 6 = 42
    7 * 7 = 49
    7 * 8 = 56
    7 * 9 = 63
    7 * 10 = 70
*/


/*
El uso de forin y forof es muy similar y sirve pata iterar sobre los elementos.
Pero lo que los hace diferentes es que forof se usa mas sobre elementos iterables como lo son los strings y los arreglos ya que se pueden descomponer en elementos.
Mientras que forin se usa mas sobre objetos compuestos.
*/


console.log("****** forof ******")


//Haciendo uso de forof
let edades = [12, 34, 54, 38, 9];

for (const propiedad of edades) {
    console.log(propiedad);
}


let saludo = "Hola Mundo!";

for(const i of saludo){
    console.log(i);
}


console.log("****** forin ******")

const objeto = {
    name: "Joel",
    last_name: "DoMe",
    age: 21,
    nationality: "MX",
    country: "Mexico",
    job: "Programmer"
}

for(const propiedad in objeto){
    console.log(propiedad);
}



//Declarando un while:
/*
    Usamos el while cuando queremos que se ejecute un código mientras se cumpla determinada condición.
*/
//Multipliquemos el valor de i * 5 mientras que i sea menor o igual qué 10
console.log("****** While ******")

let i = 1;

while(i<=10){
    console.log(`While: ${i*5}`);
    i++;
}



//Declarando DoWhile
console.log("****** DoWhile ******")

/*
    DoWhile tiene la misma explicación y uso que while pero en while si la condición no se cumple... jamas se ejecuta nada dentro de el.
    En el bucle doWhile minimo se ejecuta el código se cumpla o no la condición. Ya que aqui primero se ejecuta una vez y luego evalua la condición dada.
*/

//SI un numero es menor a 10, mostraremos ese numero decrementado en 1 en cada iteración.
let numero = 10;
do{
    console.log(numero);
    numero--;
}while(numero>0);



console.log("****** DoWhile 2******")

//Hagamos el mismo caso pero ahora qué evalue que el numero sea mayor a 15
//Como veremos solo imprime 10 ya que es el valor inicial y depsues valida y se da cuenta que no cumple la condición por lo que sale del bucle.
let numero2 = 10;
do{
    console.log(numero2);
    numero2--;
}while(numero2>15);