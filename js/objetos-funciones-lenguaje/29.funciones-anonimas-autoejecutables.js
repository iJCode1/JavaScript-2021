/*
    Funciones anonimas autoejecutables en Javascript.
*/

(function(){
    console.log("Hola Mundo desde Javascript");
})();

//Tambien existen otras formas de declararla, como:
+function(){
    console.log("Esta es una segunda función anonioma autoejecutable");
}();

/*
    Tambien pueden recibir tener parametros
*/
(function(d,w,c){
    c.group("Document");
    console.log(`El documento es: ${d}`);
    console.log(d);
    c.groupEnd();
    c.group("Window");
    console.log(`El window es: ${w}`);
    console.log(w);
    c.groupEnd();
    c.group("Console");
    console.log(`El console es: ${c}`);
    c.log(`Al pasar el objeto console, podemos hacer uso de este...`);
    console.log(c);
    c.groupEnd();
})(document, window, console);
