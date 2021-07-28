/*
    Texto HTML desde Javascript
*/

//Accediendo al texto que tiene el parrafo del html con el id 'que-es'
let $paragraph = document.getElementById("que-es");
console.log($paragraph); //<p id="que-es">...</p>

//Creando nuevo texto
let texto = "Modelo de objeto de documento"

//Forma vieja de incorporar un texto al elemento de HTML 
//Esta forma no respeta el formato o las etiquetas html y coloca todo como texto plano (Se creo esto principalmente para internet explorer)
$paragraph.innerText = "hola mundo desde innerText";
$paragraph.innerText = texto;

//Creando nuevo texto
let text = `
    <p>
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
API para documentos HTML y XML.
    </p>
    <p>
    Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
`
$paragraph.innerText = text;


//Forma recomendada (tambien ignora el formato)
//Se recomienda usar cuando se tiene solo texto plano
$paragraph.textContent = texto;
$paragraph.textContent = text;

//Cuando se tienen etiquetaa html dentro del texto se recomienda usar 'innerHTML'
$paragraph.innerHTML = texto;
$paragraph.innerHTML = text;

/*
    En este caso por semántica no es bien visto tener 3 parrafos dentro de otro parrafo.
    Por lo cual en estos casos se recomienda usar el método 'outerHTML'
    (Es importante entender que este ultimo método borrara el elemento en cuestión... por lo cual se pierde la referencia creada en la variable previamente)
*/

$paragraph.outerHTML = text;
