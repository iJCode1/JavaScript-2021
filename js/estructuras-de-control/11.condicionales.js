/*
    Condicionales en Javascript.

    Cuando hablamos de condicionales se hablan de estructuras que a partir de una condición 
    pueden o no ejecutar una serie de instrucciones (código).
    Y cuando se habla de esto tenemos que podemos usar:
    - if                - if else
    - if, else if, else
    - switch
    - Operador Ternario
*/

//Declarando una condición simple con un if
/*
En este caso unicamente se esta evaluando una condición.
Si se cumple se ejecuta lo que esta dentro, si no. No se ejecuta nada y el programa sigue su marcha normal de arriba hacia abajo de izquerda a derecha.
*/
let numero = 7;

if((numero > 0) && (numero <= 10)){
    console.log("El numero esta en el rango de 1 a 10"); //El numero esta en el rango de 1 a 10
}


//Declarando una condición con if-else
/*
En este tipo de condicional se evalua una condición (if) si se cumple se ejecuta el código que este dentro de esta.
Si no se cumple la condición se ejecuta lo que se indique en el else.
*/

let dinero = 70;

if(dinero > 150){
    console.log("Tienes el dinero suficiente para comprar el producto!!!");
}else{
    console.log("Lo siento, no tienes suficiente dinero. Sigue ahorrando!!!");
} //Lo siento, no tienes suficiente dinero. Sigue ahorrando!!!



//Declarando una condicional con if aninados es decir usando el else if.

let edad = 21;

if((edad >= 0) && (edad <=8)){
    console.log("Tienes entre 0 y 8 años");
}else if((edad >= 9) && (edad <= 17)){
    console.log("Tienes entre 9 y 17 años");
}else if((edad >=18) && (edad <= 25)){
    console.log("Tienes entre 18 y 25 años");
}else{
    console.log(`Tienes ${edad} años`)
} //Tienes entre 18 y 25 años


//Declarando un Operador Ternario
/*
En este tipo de operador solo se tienen 2 posibles resultados.
Una opción true o una opción false.
La diferencia con los ejemplos anteriores es que esta solo se usa cuando tendremos estos 2 posibles resultados unicamente.
Si requerimos evaluar más casos es aconsejable usar las otras opiones.
Veamos un ejemplo para determinar si la persona es o no mayor de edad.

Estructura:

    let variableAlmacenaResultado = (condición) ? "Valor true" : "Valor False";
*/

let edadPersona = 21;
let mayorEdad = (edadPersona >=18) 
? `Eres mayor de edad con ${edadPersona} años` 
: `No eres mayor!, tiene ${edadPersona} años`;

console.log(mayorEdad); //Eres mayor de edad con 21 años



/*
Ahora veamos el uso de SWITCH que al igual que el if y sus variantes... 
Nos ayudara a evaluar condiciones pero aqui se habla mas de casos.
Por ejemplo un caso podria ser que hoy sea Lunes o Martes...
Cada caso es como una evaluación y si se cumple el caso se ejecutara una instrucción dada.

Estructura: 

    switch(variable a evaluar){
        case 1: 
            instruccion;
            break;

        case n:
            instruccion;
            break;

        default:
            instrucción;
    }

    Es importante colocar el break al finalizar cada caso ya que si entra a ese caso ahí debe terminar.
    Si no se coloca el break y se entra a un caso... al no tener break este entraria en automatico al caso de abajo por lo que seria un funcionamiento incorrecto.
*/

//Declarando un Switch
// Dias:   Sunday  Monday  Tuesday  Wednesday  Thursday  Friday  Saturday
//           0       1        2        3          4        5       6  

let day = 7;

switch(day){
    case 0:
        console.log("It's Sunday!");
        break;
    case 1: 
        console.log("It's Monday!");
        break;
    case 2:
        console.log("It's Tuesday!");
        break;
    case 3: 
        console.log("It's Wednesday!");
        break;
    case 4:
        console.log("It's Thursday");
        break;
    case 5: 
        console.log("It's Friday!");
        break;
    case 6: 
        console.log("It's Saturday!");
        break;
    default: 
        console.log("This day not exists");
} //This day not exists


//Creando un Switch pero con valores de texto

let day2 = "fr";

switch(day2){
    case 'su':
        console.log("It's Sunday!");
        break;
    case 'mo': 
        console.log("It's Monday!");
        break;
    case 'tu':
        console.log("It's Tuesday!");
        break;
    case 'we': 
        console.log("It's Wednesday!");
        break;
    case 'th':
        console.log("It's Thursday");
        break;
    case 'fr': 
        console.log("It's Friday!");
        break;
    case 'sa': 
        console.log("It's Saturday!");
        break;
    default: 
        console.log("This day not exists");
} //It's Friday!