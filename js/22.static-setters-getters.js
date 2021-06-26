//Métodos staticos, getters y setters en Javascript

//Creando clase

class Persona{
    constructor(nombre, apellido, edad, nacionalidad){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.nacionalidad=nacionalidad;
    }

    saludar(){
        console.log(`Hola!, Mi nombre es ${this.nombre} ${this.apellido}.`);
    }

    decirNacionalidad(){
        console.log(`Mi nacionalidad es: ${this.nacionalidad}`);
    }

    //Creación de un método estatico
    static queSoy(){
        console.log(`La palabra persona designa a un individuo de la especie humana, 
        hombre o mujer, que, considerado desde una noción jurídica y moral, 
        es también un sujeto consciente y raciona`)
    }

    //Creando Métodos Setters and Getters
    set setEquipoFavorito(equipo){
        this.equipo = equipo;
    }

    get getEquipoFavorito(){
        return this.equipo;
    }
}


/*
    Los métodos estaticos no requieren la creación de un objeto para ser invocados
*/
//Invocando un método estatico de la clase Persona.
Persona.queSoy();

//Creando objeto de la clase persona
let joel = new Persona();

//Asignando un valor a la variable equipo con el método setter
joel.setEquipoFavorito = "Pumas";

//Obteniendo valor de equipo
console.log(joel.getEquipoFavorito);
