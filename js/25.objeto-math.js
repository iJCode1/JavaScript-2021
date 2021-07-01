//Objeto Math en Javascript

/*
    El objeto Math nos ofrece varos métodos los cuales podemos usar cuando estemos haciendo
    calculos mátematicos. Tambien ofrece algunos valores constantes los cuales podemos
    hacer uso.
*/

//Valor de PI
console.group("Math.PI");
console.log(Math.PI); //3.141592653589793
console.groupEnd();

//Valor de Euler
console.group("Math.E");
console.log(Math.E); //2.718281828459045
console.groupEnd();

//Raiz cuadrada de 2
console.group("Math.sqrt2");
console.log(Math.SQRT2); //1.4142135623730951
console.groupEnd();

//Obtener el valor absoluto (Sin importar si es positivo o negativo)
console.group("Math.abs()");
console.log(Math.abs(5.8));
console.log(Math.abs(-8.2));
console.groupEnd();

//Seno, Coseno, Tangente y Logaritmo de un número
console.group("Math.tan()");
console.log(Math.sin(45)); //0.8509035245341184
console.log(Math.cos(45)); //0.5253219888177297
console.log(Math.tan(45)); //1.6197751905438615
console.log(Math.log(45)); //3.8066624897703196
console.groupEnd();

//Hacer raices cuadradas
console.group("Math.sqrt()");
console.log(Math.sqrt(12)); //3.4641016151377544
console.log(Math.sqrt(53)); //7.280109889280518
console.log(Math.sqrt(1)); //1
console.log(Math.sqrt(0)); //0
console.groupEnd();

//Hacer raices con valores negativos
console.group("Math.sqrt()");
console.log(Math.sqrt(-12)); //NAN
console.log(Math.sqrt(-53)); //NAN
console.log(Math.sqrt(-1)); //NAN
console.log(Math.sqrt(-0)); //-0
console.groupEnd();

//Hacer potencias en Javascript
console.group("Math.pow()");
console.log(Math.pow(2,2)); //4
console.log(Math.pow(5,4)); //625
console.log(Math.pow(4,12)); //16777216
console.groupEnd();

//Hacer redondeos a la alsa en Javascript
console.group("Math.ceil()");
console.log(Math.ceil(12.89)); //13
console.log(Math.ceil(12.34)); //13
console.log(Math.ceil(89.23)); //89
console.groupEnd();

//Hacer redondeos a la baja en Javascript
console.group("Math.floor()");
console.log(Math.floor(12.89)); //12
console.log(Math.floor(12.34)); //12
console.log(Math.floor(89.23)); //89
console.groupEnd();

//Hacer redondeos más justos en Javascript
console.group("Math.round()");
console.log(Math.round(12.89)); //13
console.log(Math.round(12.34)); //12
console.log(Math.round(89.23)); //89
console.groupEnd();

//Otro tipo de redondeos (Sin onjeto math)
console.group(".toFixed()");
console.log(12.89.toFixed(1)); //12.9
console.log(12.85182.toFixed(1)); //12.9
console.log(12.84937.toFixed(1)); //12.8
console.log(9.1432.toFixed(2)); //9.14
console.log(9.567.toFixed(2)); //9.57
console.groupEnd();