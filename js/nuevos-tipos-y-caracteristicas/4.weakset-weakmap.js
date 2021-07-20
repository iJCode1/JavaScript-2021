/*
    WeakSet y WeakMap en Javascript
    Estos 2 son muy similares a set y map.
    La diferencia es que estan mas restringidos pero ayudan a que cuando una de sus propiedades es null o undefined.
    El garbage collector de js elimina las referencias de las propiedades.
    La forma de incorporar nuevas propiedades es un poco diferente. Solo aceptan objetos.
    
    Para WeakMap solo se tienene estas propiedades:
    get: Obtener el valor de una clave
    set: Establecer una nueva propiedad clave, valor
    delete: Eliminar una clave y su valor
    has: Comprobar si existe un elemento dentro del objeto

    Para WeakSet solo se tienene estas propiedades:
    add: Añadir un nuevo elemento
    delete: Borrar el elemento indicado
    has: Comprobar si existe un elemento en el objeto

    Cabe mencionar que no se puede obtener el tamaño o el numero de elementos en ambos 
    Tampoco se puede iterar en sus elementos por lo que no se pueden usar bucles
*/

//Declarando un objeto weakset
const weakset = new WeakSet();

//Declarando los objetos para asignarlos al WeakSet
let obj1 = {objeto1: 1};
let obj2 = {objeto2: 2};
let obj3 = {objeto3: 3};

//Añadiendo los objetos al objeto WeakSet 'add'
weakset.add(obj1);
weakset.add(obj2);
weakset.add(obj3);

console.log("WeakSet")

console.log(weakset);
/*
    WeakSet {{…}, {…}, {…}}
    [[Entries]]
    0: Object
    1: Object
    2: Object
    __proto__: WeakSet
*/

//Comprobando si un elemento pertenece al objeto weakset 'has'
console.log(`El elemento 'objeto11' pertenece al objeto weakset?: ${weakset.has("objeto11")}`); //El elemento 'objeto11' pertenece al objeto weakset?: false
console.log(`El elemento 'obj2' pertenece al objeto weakset?: ${weakset.has(obj2)}`); //El elemento 'obj2' pertenece al objeto weakset?: true

//Eliminando un elemento del objeto weakset 'delete'
weakset.delete(obj1);

console.log(weakset);
/*
    WeakSet {{…}, {…}}
    [[Entries]]
    0: Object
    1: Object
    __proto__: WeakSet
*/

console.group("Intervalo de 1s")
//Imprimiendo con intervalo los elementos del objeto weakset
setInterval(()=>{
    console.log(weakset);
},1000)
console.groupEnd()

//Weakset en este momento: WeakSet {{…}, {…}}

//Pasados 5 segundos las 3 propiedades seran igualas a null o undefined
//Por lo que el garbage collector las limpiara y dejara vacio el objeto

setTimeout(()=>{
    obj1 = null;
    obj2 = null;
    obj3 = undefined;
},5000)
//Weakset en este momento: WeakSet {}

console.log("----------------------")
console.log("WeakMap")

//Declarando el objeto WeakMap
const weakmap = new WeakMap();

//Declarando objetos para añadirlos al objeto weakmap
let llave1 = {}
let llave2 = {}
let llave3 = {}

//Añadiendo objetos al objeto WeakMap 'add'
weakmap.set(llave1, "Hola")
weakmap.set(llave2, "Mundo")
weakmap.set(llave3, 17)

//Imprimiendo el objeto WeakMap
console.log(weakmap);
/*
    WeakMap {{…} => 17, {…} => "Hola", {…} => "Mundo"}
    [[Entries]]
    0: {Object => 17}
    1: {Object => "Hola"}
    2: {Object => "Mundo"}
    __proto__: WeakMap
*/

//Comprobando si un elemento pertenece al objeto weakmap 'has'
console.log(`El elemento 'llave1' pertenece al objeto weakset?: ${weakmap.has(llave1)}`); //El elemento 'llave1' pertenece al objeto weakset?: true

console.group("Obteniendo valores con 'get'")
console.log(weakmap.get(llave1))
console.log(weakmap.get(llave2))
console.log(weakmap.get(llave3))
console.groupEnd()
/*
    Hola
    Mundo
    17
*/

//Eliminando un objeto del objeto weakmap 'delete'
weakmap.delete(llave1)
weakmap.delete(llave3)

//Imprimiendo el objeto WeakMap
console.log(weakmap);
    /*
    WeakMap {{…} => "Mundo"}
    [[Entries]]
    0: {Object => "Mundo"}
    __proto__: WeakMap
*/

//Añadiendo de nuevo los objetos 
weakmap.set(llave1, "Hey")
weakmap.set(llave2, 17)
weakmap.set(llave3, "Hola Mundo")

//Imprimiendo el objeto WeakMap
console.log(weakmap); //WeakMap {{…} => "Hey", {…} => 17, {…} => "Hola Mundo"}

//Imprimiendo los valores del objeto
console.group("OIntervalo de 1s")
setInterval(()=>{
    console.log(weakmap); //WeakMap {{…} => 17, {…} => "Hey", {…} => "Hola Mundo"}
},1000)
console.groupEnd()

setTimeout(()=>{
    llave1 = null
    llave2 = undefined
    llave3 = null
}, 5000)

/*
    WeakMap {}
    [[Entries]]
    No properties
    __proto__: WeakMap
*/