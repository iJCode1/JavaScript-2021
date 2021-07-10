/*
    Ejercicios de Logica de programación en Javascript, parte #5
*/

/*
    15) Programa una función para convertir números de base binaria a decimal y viceversa, 
    pe. miFuncion(100,2) 
    devolverá 4 base 10.
*/
const numerosBinarioDecimal = (numero=undefined, base=undefined) => {
    if (numero==undefined) return console.warn("Debes ingresar un numero");
    if (base==undefined) return console.warn("Debes ingresar una base");

    if (typeof numero !== 'number') return console.warn("El numero debe ser de tipo numerico");
    if (typeof base !== 'number') return console.warn("La base debe ser de tipo numerico");
    if ((base !==2 && base !== 10)) return console.warn("Solo se aceptan base binaria (2) o base decimal (10)");
    
    let resultado = 0;

    if(base === 2){
        let numeroVolteado = numero.toString().split("").reverse().join("");
        for(let i=0; i<numeroVolteado.length; i++){
            resultado+= numeroVolteado[i] * Math.pow(2,i);
        }
        return console.log(`El numero ${numero} base(${base}) = ${resultado} base(10)`);
    }else if(base === 10){
        let numeroAux = numero;
        let resultadoDivision = 0;
        let residuos = [];
        let i = 0;
        while(numeroAux>=1){
            resultadoDivision = numeroAux / 2;
            residuos[i] = parseInt(numeroAux % 2);
            numeroAux = resultadoDivision;
            i++;
        }
        residuos = residuos.reverse();
        // return console.log(residuos);
        return console.log(`El numero ${numero} base(${base}) = ${residuos.join("")} base(2)`);
    }
}

console.group("Ejercicio #15");
numerosBinarioDecimal(); //Debes ingresar un numero
numerosBinarioDecimal("",""); //El numero debe ser de tipo numerico
numerosBinarioDecimal(100,); //Debes ingresar una base
numerosBinarioDecimal(100,""); //La base debe ser de tipo numerico
numerosBinarioDecimal(100,3); //Solo se aceptan base binaria (2) o base decimal (10)
numerosBinarioDecimal(10011,2); //El numero 10011 base(2) = 19 base(10)
numerosBinarioDecimal(100,2); //El numero 100 base(2) = 4 base(10)
numerosBinarioDecimal(19,10); //El numero 100 base(2) = 4 base(10)
numerosBinarioDecimal(4,10); //El numero 100 base(2) = 4 base(10)
console.groupEnd();





/*
    16) Programa una función que devuelva el monto final después de aplicar 
    un descuento a una cantidad dada, 
    pe. miFuncion(1000, 20) 
    devolverá 800.
*/
const aplicarDescuento = (precio=undefined, descuento=undefined) => {
    if (precio==undefined) return console.warn("Debes ingresar un precio");
    if (typeof precio !== 'number') return console.warn("El precio debe ser de tipo numerico");
    
    if (descuento==undefined) return console.warn("Debes ingresar un descuento");
    if (typeof descuento !== 'number') return console.warn("El descuento debe ser de tipo numerico");

    if (precio<0 || descuento<0) return console.error("No se aceptan valores negativos");

    let precioConDescuento = (precio * (100 - descuento)) / 100;
    return console.log(`El precio final de ${precio}, con ${descuento}% de descuento es de: ${precioConDescuento}`);
}

console.group("Ejercicio #16");
aplicarDescuento(); //Debes ingresar un precio
aplicarDescuento(12,); //Debes ingresar un descuento
aplicarDescuento(" ",12); //El precio debe ser de tipo numerico
aplicarDescuento("   ","   "); //El precio debe ser de tipo numerico
aplicarDescuento(-1000,20); //No se aceptan valores negativos
aplicarDescuento(1000,20); //El precio final de 7436, con 12% de descuento es de: 6543.68
aplicarDescuento(7436,12); //El precio final de 7436, con 12% de descuento es de: 6543.68
console.groupEnd();





/*
    17) Programa una función que dada una fecha válida determine cuantos años 
    han pasado hasta el día de hoy, 
    pe. miFuncion(new Date(1984,4,23)) 
    devolverá 35 años (en 2020).
*/
const pasoAños = (fecha = undefined) =>{
    if (fecha === undefined) return console.warn("Debes ingresar una fecha");
    if (!fecha) return console.warn("Debes ingresar una fecha");

    let fechaActual = new Date();
    let años = fechaActual.getFullYear() - fecha.getFullYear();
    return console.log(`Han pasado ${años} años`);
}

console.group("Ejercicio #17");
pasoAños(); //Debes ingresar una fecha
pasoAños(""); //Debes ingresar una fecha
pasoAños(new Date(1984,4,23));
pasoAños(new Date(1999,11,17));
console.groupEnd();


/*
    Solución profesor
*/  
const calcularAnio = (fecha=undefined) =>{
    if(fecha === undefined) return console.warn("No ingresaste la fecha");
    if(!(fecha instanceof Date)) return console.warn("El valor que ingresaste no es una fecha");

    let hoyMenosFecha = new Date().getTime - fecha.getTime();
    let aniosEnMilisegundos = 1000 * 60 * 60 * 24 * 365;
    let aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMilisegundos);

    return (Math.sign(aniosHumanos) === -1)
    ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`)
    : (Math.sign(aniosHumanos) === 1)
    ? console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}.`)
    : console.info(`Estamos en el año actual ${fecha.getFullYear()}.`)
}

console.group("Ejercicio #17 - Profesor");
pasoAños(); //Debes ingresar una fecha
pasoAños(""); //Debes ingresar una fecha
pasoAños(new Date(1984,4,23));
pasoAños(new Date(1999,11,17));
console.groupEnd();