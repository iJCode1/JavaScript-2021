/*
    Propiedades dinamicas en Javascript.
    Javascript ofrece una nueva forma de crear propiedades dinamicas en objetos.
*/

//Creando objeto
const alumnos = {
    //Asignando las propiedades dinamicas
    [`id_${Math.round(Math.random() * 100 + 7)}`]: "Propiedad aleatoria"
}

//Creando un array de 5 alumnos
const array = ["Joel", "Julieta", "Jon", "Samuel", "Liam"];

//Forma vieja de crear propiedades dinamicas en un objeto
array.forEach((ele, index) =>{
    alumnos[`id_${index}`] = ele 
});

//Imprimiendo el objeto una vez que se crearon las propiedades dinamicas
console.log(alumnos);

/*
    {id_0: "Joel", id_1: "Julieta", id_2: "Jon", id_3: "Samuel", id_4: "Liam"}
    id_0: "Joel"
    id_1: "Julieta"
    id_2: "Jon"
    id_3: "Samuel"
    id_4: "Liam"
    __proto__: Object
*/

//Recorriendo propiedades y valor de un objeto
for(const alumno in alumnos){
    console.log(`La propiedad es: '${alumno}' y el valor es: '${alumnos[alumno]}'`);
};
/*
    La propiedad es: 'id_0' y el valor es: 'Joel'
    La propiedad es: 'id_1' y el valor es: 'Julieta'
    La propiedad es: 'id_2' y el valor es: 'Jon'
    La propiedad es: 'id_3' y el valor es: 'Samuel'
    La propiedad es: 'id_4' y el valor es: 'Liam'
*/