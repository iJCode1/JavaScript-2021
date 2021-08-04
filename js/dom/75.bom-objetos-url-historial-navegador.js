/*
    Objetos del BOM
    Entre los objetos principales se tienen
        - location
        - history
        - navigator
*/

//Imprimiendo algunas propiedades del objeto 'location'
console.group("Objeto 'location'");
console.log(location); //objeto location
console.log(location.host); //127.0.0.1:5500
console.log(location.hostname); //127.0.0.1
console.log(location.href); //http://127.0.0.1:5500/index.html
console.log(location.origin); //http://127.0.0.1:5500
console.log(location.pathname); ///index.html
console.log(location.port); //5500
console.log(location.protocol); //http:
console.log(location.hash); //
console.log(location.search); //
// location.reload() //Recarga la página
console.groupEnd();


//Imprimiendo algunas propiedades del objeto 'history'
console.group("Objeto 'history'");
console.log(history); //objeto history
console.log(history.length);
// history.forward(0); //Avanza x páginas en el historial
// history.back(2); //Retrocede x páginas en el historial
// history.go(2); //Avanza y retrocede x páginas en el historial dependiendo el valor si es positivo o negativo
console.groupEnd();


//Imprimiendo algunas propiedades del objeto 'navigator'
console.group("Objeto 'navigator'");
console.log(navigator); //objeto navigator
console.log(navigator.appName);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.language);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.platform);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent);
console.log(navigator.vendor);
console.groupEnd();