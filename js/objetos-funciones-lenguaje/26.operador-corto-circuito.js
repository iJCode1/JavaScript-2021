//Operador de Corto circuito

//Se hace uso de los operadores (|| y &&)

/*

OR (||): Cuando el valor de la izquierda en la expresion siempre valide a true, 
es el valor que se cargará por defecto.

AND (&&): Cuando el valor de la izquierda en la expresion siempre valide a false,
es el valor que se cargará por defecto

*/

console.group("OR ||");
console.log("Valores de la izquierda que validan o tienden a true")
//Valores de la izquierda que validan o tienden a true
console.log(true || false) //true
console.log(true || true) //true
console.log("Hola" || true) //Hola
console.log("Hola" || false) //Hola
console.log(12 || false) //12
console.log(-12 || false) //-12
console.log(" " || false) //
console.log([] || false) //[]
console.log({} || false) //{}
console.log("Valores de la izquierda que validan o tienden a false")
//Valores de la izquierda que validan o tienden a false
console.log(false || "hola") //hola
console.log(false || false) //false
console.log(-0 || true) //true
console.log("" || 34) //34
console.log(-[] || "Falso") //Falso
console.log(-{} || "adios") //adios
console.groupEnd();

console.group("AND &&");
console.log("Valores de la izquierda que validan o tienden a true")
//Valores de la izquierda que validan o tienden a true
console.log(true && "Hola") //hola
console.log(true && "Mundo") //mundo
console.log("Hola" && true) //true
console.log("Hola" && false) //false
console.log(12 && 12) //12
console.log(-12 && -34) //-34
console.log(" " && []) //[]
console.log([] && {}) //{}
console.log({} && true) //true
console.log("Valores de la izquierda que validan o tienden a false")
//Valores de la izquierda que validan o tienden a false
console.log(false && "hola") //false
console.log(false && false) //false
console.log(-0 && true) //-0
console.log("" && 34) //
console.log(-[] && "Falso") //-0
console.log(-{} && "adios") //NAN
console.groupEnd();