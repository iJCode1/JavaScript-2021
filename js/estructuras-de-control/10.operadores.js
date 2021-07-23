/*
    Operadores en Js.
    En cualquier lenguaje de programación tenemos diferentes operadores con los que podemos trabajar.
    
    Tenemos los 
    Operadores Aritmeticos:
    - Suma (+)              - Multiplicación (*)
    - Resta (-)             - División (/)
    - Resto o residuo (%)   - Potencia (**)


    Opetadores Relacionales
    - Menor qué (<)             - Mayor qué (>)
    - Menor o igual qué (<=)    - Mayor o igual qué (>=)
    - Igualdad (=)              - Igual qué (Valor) (==)
    - Estrictamente igual qué (Tipo de dato y valor) (===)
    - Diferente qué (!=)        - Estrictamente distinto qué (!==)


    Operadores Lógicos:
    - AND (&&)                  - OR (&&)
    - Not (!)


    Operadores de incremento y decremento
    - Incrementa en 1 (++)             - Decrementa en 1 (--)
*/

//Utilizando operadores aritmeticos:
console.log(5+1); //6
console.log(13-2); //11
console.log(5*3); //15
console.log(133/2); //66.5
console.log(133%2); //1 (Resto)
console.log(9**2); //81

console.log("****************************");

//Utilizando operadores Relacionales
//Estos operadores se usan mas en condiciones para evaluar x condición.
console.log(5 > 1); //true
console.log(45 < 12); //false
console.log(45 <= 76); //true
console.log(56 >= 90) //false
console.log(7 > 7); //false
console.log(7 >= 7); //true

console.log("7" == 7); //true por que son el mismo valor.
console.log("7" === 7); //false por que son el mismo valor pero diferente tipo de dato.

console.log("****************************");

//Utilizando operadores lógicos
console.log((7 == "7") && ("hola" == "hola")); //true
console.log((7 === "7") && ("hola" == "hola")); //false

console.log((4 < 70) || (89 > 120)); //true

console.log(true); //true
console.log(!true); //false

console.log(false); //false
console.log(!false); //true

console.log((4 < 5) && (6 > 2)); //true
console.log(!(4 < 5) && (6 > 2)); //false

console.log(( (6 === 4) || (4 > 90) )); //false
console.log(!( (6 === 4) || (4 > 90) )); //true


console.log("****************************");

//Utilizando operadores de incremento y decremento

let i = 0;

console.log(i); //0

i++; 
console.log(i); //1

i++;
console.log(i); //2

i--;
console.log(i); //1

i+= 10; // Es lo mismo que i = i + 10;
console.log(i)//11

//Pero hay que tener cuidado por que depende si usamos antes los operadores de incremento o decremento que puede cambiar el resultado...
console.log(i); //11

console.log(i++); //11 : Se esperaria que se incremente y el resultado fuera 12... pero imprime 11 por que primero imprime i y luego la incrementa.

console.log(i); //12
console.log(++i); //13 : Primero la incrementa en 1 y luego la imprime.