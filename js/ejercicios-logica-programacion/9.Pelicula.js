class Pelicula{
    constructor({idPelicula, titulo, director, anioEstreno, paisOrigen, genero, calificacion}){
        this.idPelicula = idPelicula;
        this.titulo = titulo;
        this.director = director;
        this.anioEstreno = anioEstreno;
        this.paisOrigen = paisOrigen;
        this.genero = genero;
        this.calificacion = calificacion;

        //this.validarCadenas("ID", this.idPelicula)
        this.validarIdImdb(this.idPelicula)
        this.validarTitulo(this.titulo)
        this.validarDirector(this.director)
        this.validarAnioEstreno(this.anioEstreno)
        this.validarPais(this.paisOrigen)
        this.validarGeneros(this.genero)
        this.validarCalificacion(this.calificacion)
    }

    //Validaciones Generales

    validarCadenas(propiedad, valor){
        if(!valor) return console.warn(`La propiedad ${propiedad} no puede estar vacia`);
        if(typeof valor !== 'string') return console.warn(`La propiedad ${propiedad} recibio el valor de '${valor}' y solo permite valores de cadena de texto`);
        if(valor.trim() === "") return console.warn(`La propiedad ${propiedad} recibio el valor de '${valor}' y dicho valor no puede estar vacio`);

        return true;
    }

    validarLongitudCadena(propiedad, valor, longitud){
        if (valor.length > longitud) return console.error(`La propiedad ${propiedad} recibio un valor con una longitud de ${valor.length}, cuando la longitud maxima es de ${longitud}`);

        return true
    }

    validarNumero(propiedad, valor){
        if (!valor) return console.warn(`La propiedad ${propiedad} no ha recibido ningun valor`);
        if (typeof valor !== 'number') return console.warn(`La propiedad ${propiedad} recibio el valor de '${valor}' y solo se permiten valores numericos`);

        return true
    }

    validarArreglos(propiedad, valor){
        if (!valor) return console.warn(`La propiedad ${propiedad} no ha recibido ningun valor`);
        if (!(valor instanceof Array)) return console.warn(`La propiedad ${propiedad} ha recibido de valor '${valor}' y solo se permiten arreglos`);
        if (valor.length < 1) return console.warn(`La propiedad ${propiedad} tiene un valor de '${valor}', la cual requiere una longitud minimo de 1`);

        for(let ele of valor){
            if(typeof ele !== 'string') return console.error(`El elemento '${ele}' del arreglo no es un string`);
        }

        return true
    }

    //Validaciones Particulares (Especificas)

    validarIdImdb(id){
        if(this.validarCadenas("ID", id)){
            if(!(/^([a-z]){2}([0-9]){7}$/.test(id))){
                return console.error(`El Id '${id}' debe contener 9 caracteres donde los 2 primeros deben ser letras minusculas y los 7 caracteres restantes deben ser numeros`);
            }
        }
    }

    validarTitulo(titulo) {
        if(this.validarCadenas("Titulo", titulo)){
            this.validarLongitudCadena("Titulo", titulo, 100)
        }
    }

    validarDirector(director){
        if(this.validarCadenas("Director", director)){
            this.validarLongitudCadena("Director", director, 50)
        }
    }

    validarAnioEstreno(anio){
        if(this.validarNumero("Año de Estreno", anio)){
            if(anio.toString().length !== 4) return console.error(`El año ingresado '${anio}' no es correcto, solo se permiten años de 4 digitos`);
        }
    }

    validarPais(pais){
        this.validarArreglos("País", pais)
    }

    validarGeneros(genero){
        if(this.validarArreglos("Géneros", genero)){
            let generosArray = ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
            for (const ele of genero) {
                if(!(generosArray.includes(ele))) return console.error(`El genero '${ele}' no es valido, consulte el método estatico 'generosAceptados()' para observar cuales son los generos validos`);
            }
        }
    }

    validarCalificacion(calificacion){
        if(this.validarNumero("Calificación", calificacion)){
            if(!(calificacion >=0 && calificacion<=10)) return console.error(`La calificación ingresada '${calificacion}' solo puede ser entre 0 y 10`);
        }
    }

    //Método para obtener ficha
    obtenerFicha(){
        return console.log(`La ficha tecnica es:
        idPelicula: ${this.idPelicula},
        Titulo: ${this.titulo}
        Director: ${this.director}
        Año de Estreno: ${this.anioEstreno}
        Pais de Origen: ${this.paisOrigen}
        Genero(s): ${this.genero}
        Calificación: ${this.calificacion.toFixed(1)}`)
    }

    //Método estatico

    static generosAceptados(){
        let generos = ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
        return console.log(`Los generos aceptados son: ${generos}`);
    }
}

// const peli = new Pelicula({idPelicula: 12, titulo:"Buscando a Nemo", "Gilberto", 2017, "EU", "Animación", 7.4});
const peli = new Pelicula({idPelicula: "tt1563738", titulo: "Siempre el mismo día", director: "Lone Scherfig", anioEstreno: 2011 , paisOrigen: ["United States", "United Kingdom"], genero: ["Drama", "Romance"], calificacion: 7.0});
peli.obtenerFicha()
Pelicula.generosAceptados()

//Arreglo con objetos de 3 peliculas diferentes
const misPeliculas = [{
    idPelicula: "tt1440292", 
    titulo: "Submarine", 
    director: "Richard Ayoade", 
    anioEstreno: 2010, 
    paisOrigen: ["United Kingdom"], 
    genero: ["Comedy", "Drama", "Romance"], 
    calificacion: 7.3
},
{
    idPelicula: "tt1670345", 
    titulo: "Los ilusionistas: Nada es lo que parece", 
    director: "Louis Leterrier", 
    anioEstreno: 2013, 
    paisOrigen: ["United States"], 
    genero: ["Crime", "Mystery", "Thriller"], 
    calificacion: 7.2
},
{
    idPelicula: "tt0103064", 
    titulo: "Terminator 2: Juicio Final", 
    director: "James Cameron", 
    anioEstreno: 1991, 
    paisOrigen: ["United States"], 
    genero: ["Action", "Sci-Fi"], 
    calificacion: 8.5
}]

misPeliculas.forEach( pelicula => new Pelicula(pelicula).obtenerFicha())