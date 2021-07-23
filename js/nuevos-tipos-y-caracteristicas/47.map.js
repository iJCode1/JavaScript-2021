/*
    Objeto Map en Javascript 'Diccionario'
    El objeto Map es muy similar a los objetos de Javascript.
    Se compone por clave valor
    clave, valor.
    Con la diferencia de que se separa por comas y de que la clave puede ser cualquier cosa. No solo 
    cadenas de texto como lo solicitan los objetos.
    Los principales métodos son:

    get: Obtener el valor de una clave dada
    set: Establecer una clave, valor
    delete: Eliminar una clave y su valor
    has: Comprobar si existe una clave dentro del objeto map
*/

//Declarando un objeto map
const mapa = new Map([
    ["nombre", "Joel"], 
    ["apellido", "DoMe"],
    ["edad", 21],
    [4, "Estudiante"]
])

//Imprimiendo un mapa
console.log(mapa);
/*
    Map(4) {"nombre" => "Joel", "apellido" => "DoMe", "edad" => 21, 4 => "Estudiante"}
    [[Entries]]
    0: {"nombre" => "Joel"}
    1: {"apellido" => "DoMe"}
    2: {"edad" => 21}
    3: {4 => "Estudiante"}
    size: (...)
    __proto__: Map
*/

//Declarando una constante de tipo Simbolo
const NACIONALIDAD = Symbol("nacionalidad")

//Agregando valores al objeto map
mapa.set(NACIONALIDAD, "MX")
mapa.set("carrera", "ING. Sistemas Computacionales")

//Imprimiendo un mapa
console.log(mapa);
/*
    Map(6) {"nombre" => "Joel", "apellido" => "DoMe", "edad" => 21, 4 => "Estudiante", …}
    [[Entries]]
    0: {"nombre" => "Joel"}
    1: {"apellido" => "DoMe"}
    2: {"edad" => 21}
    3: {4 => "Estudiante"}
    4: "MX"
    5: {"carrera" => "ING. Sistemas Computacionales"}
    size: (...)
    __proto__: Map
*/

//Obteniendo el tamaño de un mapa
console.log(`La cantidad de elementos del mapa es: ${mapa.size}`); //La cantidad de elementos del mapa es: 6

//Comprobar si existe una clave dentro del mapa
console.group("Comprobando si existe clave dentro del mapa 'has'")
console.log(`Existe dentro del mapa la clave 'saludo'?: ${mapa.has("saludo")}`); //Existe dentro del mapa la clave 'saludo'?: false
console.log(`Existe dentro del mapa la clave 'edad'?: ${mapa.has("edad")}`); //Existe dentro del mapa la clave 'edad'?: true
console.log(`Existe dentro del mapa la clave NACIONALIDAD?: ${mapa.has(NACIONALIDAD)}`); //Existe dentro del mapa la clave NACIONALIDAD?: true
console.groupEnd()


//Obtener el valor de una clave dada
console.group("Obteniendo el valor de una clave dada 'get")
console.log(`El valor de la clave 'apellido' es: ${mapa.get("apellido")}`); //El valor de la clave 'apellido' es: DoMe
console.log(`El valor de la clave 'carrera' es: ${mapa.get("carrera")}`); //El valor de la clave 'carrera' es: ING. Sistemas Computacionales
console.log(`El valor de la clave NACIONALIDAD es: ${mapa.get(NACIONALIDAD)}`); //El valor de la clave NACIONALIDAD es: MX
console.groupEnd()


//Mapa actual
console.group("Mapa antes del 'delete' y 'clear'")
console.log(mapa);
console.groupEnd()
/*
    Map(6) {"nombre" => "Joel", "apellido" => "DoMe", "edad" => 21, 4 => "Estudiante", …}
    [[Entries]]
    0: {"nombre" => "Joel"}
    1: {"edad" => 21}
    2: {4 => "Estudiante"}
    3: {"carrera" => "ING. Sistemas Computacionales"}
    size: (...)
    __proto__: Map
*/

//Eliminando una clave, valor de un mapa
mapa.delete("apellido")
mapa.delete(NACIONALIDAD)

console.group("Mapa al usar 'delete'")
console.log(mapa);
console.groupEnd()
/*
    Map(4) {"nombre" => "Joel", "edad" => 21, 4 => "Estudiante", "carrera" => "ING. Sistemas Computacionales"}
    [[Entries]]
    0: {"nombre" => "Joel"}
    1: {"edad" => 21}
    2: {4 => "Estudiante"}
    3: {"carrera" => "ING. Sistemas Computacionales"}
    size: (...)
    __proto__: Map
*/


//limpiando todo el mapa
mapa.clear()

console.group("Mapa al usar 'clear'")
console.log(mapa);
console.groupEnd()
/*
    Map(0) {}
    [[Entries]]
    No properties
    size: (...)
    __proto__: Map
*/

const SALUDO = Symbol()

//Creando nuevo mapa
const mapa2 = new Map();

mapa2.set("nombre", "Joel")
mapa2.set("edad", 21)
mapa2.set(SALUDO, ()=>{
    console.log(`Hola, mi nombre es: ${mapa2.get("nombre")}`);
})

console.log(mapa2);
/*
    Map(3) {"nombre" => "Joel", "edad" => 21}
    [[Entries]]
    0: {"nombre" => "Joel"}
    1: {"edad" => 21}
    2: ()=>{ console.log(`Hola, mi nombre es: ${mapa2.nombre}`); }
    size: (...)
    __proto__: Map
*/

console.log(`La cantidad de elementos del mapa es: ${mapa2.size}`); //La cantidad de elementos del mapa es: 3

//Ejecutando el método Saludo
mapa2.get(SALUDO)(); //Hola, mi nombre es: Joel

//Eliminando la clave, valor de tipo simbolo para que se pueda recorrer el objeto
mapa2.delete(SALUDO)

//Agregando nuevos valores
mapa2.set("nacionalidad", "MX")
mapa2.set("nombre", "Julieta")
mapa2.set("carrera", "Ing. Sistemas Computacionales")
mapa2.set(9, "Noveno Semestre")

//Recorriendo las claves de un mapa
console.group("Imprimiendo las llaves, valor del mapa")
for(let [llave, valor] of mapa2){
    console.log(`Llave: ${llave}, valor: ${valor}`);
}
console.groupEnd()
/*
    Llave: nombre, valor: Julieta
    Llave: edad, valor: 21
    Llave: nacionalidad, valor: MX
    Llave: carrera, valor: Ing. Sistemas Computacionales
    Llave: 9, valor: Noveno Semestre
*/
