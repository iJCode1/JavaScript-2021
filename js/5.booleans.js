/*
    Booleanos en Javascript.
    Estos son un tipo de dato que se caracteriza por tener 2 valores posibles: true (verdadero) o false (falso).
    Solo que tenemos aquellos Trusthy o Falsy que son aquellos valores que dan cierto valor booleano.
    Por ejemplo el 0 y el -0 es false, mientras que el 23 y -23 son true.
    Asi son varios...
    Te los enlisto.
    Trusthy:
    - true                  - {}
    - []                    - 42
    - "0"                   - "false"
    - new date()            -  -42
    - 12n                   - 3.14
    - -3.14                 - Infinity
    - -Infinity


    Falsy:
    - false                 - null
    - undefined             - 0
    - -0                    - 0n
    - NaN                   - ""
*/

console.log("false", Boolean(false));
console.log("true", Boolean(true));
console.log("0", Boolean(0));
console.log("-0", Boolean(-0));
console.log("23", Boolean(23));
console.log("-23", Boolean(-23));
console.log(`" "`, Boolean(" "));
console.log(`""`, Boolean(""));
console.log("-Infinity", Boolean(-Infinity));
console.log("NaN", Boolean(NaN));
console.log("null", Boolean(null));
console.log("undefined", Boolean(undefined));
console.log("{}", Boolean({}));
console.log("[]", Boolean([]));
console.log(`"false"`, Boolean("false"));

