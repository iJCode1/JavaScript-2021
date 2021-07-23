/*
    Introducción al DOM 'Document Object Model'
    Con esta API podremos interactuar con el HTML desde Javascript.
    Existen muchas funcionalidad que tenemos a nuestra disposición.
*/

//Imprimiendo el documento actual
console.log(document); //#document
//Es lo mismo que ...
console.log(window.document); //#document

//Accediendo a partes del documento HTML desde Js

//Accediendo al HTML
console.log(document.documentElement); 
//Accediendo al head
console.log(document.head); //<head>...</head>
//Accediendo al Body
console.log(document.body); //<body>...</body>
//Accediendo al tipo de documento
console.log(document.doctype); //<!Doctype html>
//Accediendo al tipo de codificación
console.log(document.charset); //UTF-8
//Accediendo al titulo de la página
console.log(document.title); //iJCode - Aprendiendo JS
//Accediendo a los links
console.log(document.links); //HTMLCollection []
//Accediendo a los scripts del documento
console.log(document.scripts); //HTMLCollection [script]
//Accediendo a las hojas de estilo del documento html
console.log(document.styleSheets); //StyleSheetList {0: CSSStyleSheet, length: 1}




//Accediendo a los elementos del HTML

//Accediendo a las imagenes
console.log(document.images); //HTMLCollection [img]
//Accediendo a los formularios
console.log(document.forms); //HTMLCollection []

//Mostrando el texto que se ha seleccionado
setTimeout(()=>{
    console.log(document.getSelection().toString());
},3000);
/*
    Aprendiendo Javascript
    Hola Mundo
*/

//No recomendado - añadir un elemento a la página
document.write("<p>Soy un Parrafo que se añadio desde Javascript</p>")