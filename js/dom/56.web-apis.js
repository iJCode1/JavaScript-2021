/*
    Web Api´s en Javascript
    Estas proveen de funcionalidad a nuestra aplicación en Javascript.
    Las api's no estan dentro del lenguaje en si, son complementarias por asi decirlo.
    Cada una de ellas estan hechas para realizar una determinada acción.
    Se tienen demasiadas y su uso puede variar.

    Las mas conocidas que se tienen son:
    - DOM: Document Object Model 'Manipular el HTML desde Javascript'
    - CSSOM: CSS Object Model 'Manipular el CSS desde Javascript'
    - BOM: Browser Object Model 'Manipular cosas del navegador desde Javascript'

    Otras Api's que se tienen son:
    - Eventos
    - Forms
    - Ajax - Fetch
    - History
    - Web storage
    - Geolocation
    - Drag & Drop
    - Indexed DB
    - Canvas
    - MatchMedia
    - etc...
*/

//Accediendo al api del dom
console.log(document);

//Cambiando el texto del H1 de HTML desde Javascript
let h1 = document.getElementById("h1");
h1.innerHTML = "Hola Mundo desde Javascript";

//Api para sintexis de voz desde Javascript
let texto = "Hola Mundo desde Javascript"
let speech = new SpeechSynthesisUtterance(texto);
speechSynthesis.speak(speech);