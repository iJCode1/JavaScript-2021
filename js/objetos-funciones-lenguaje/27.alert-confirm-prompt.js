//Alert, Confirm y Prompt en Javascript

/*

    alert: Muestra un mensaje o una alerta
        - retorna undefined

    confirm: Pide la confirmación de algo. Tiene 2 botones
        - aceptar: Si es presionado, devuelve true
        - cancelar: si es presionado, devuelve false

    prompt: Muestra un mensaje y solicita un valor
        - Si se introduce un valor y se da en aceptar, se retorna dicho valor.
        - Si no se introduce nada, pero se da aceptar. Retorna nada
        - Si se presiona cancelar, se retorna null.
        - Se puede poner un valor inicial y por defecto si no se introduce nada
*/

//Alerta
let mensaje = alert("Esto es una alerta en Javascript");
console.log(`El mensaje es: ${mensaje}`);

//Confirmación
let confirmacion = confirm("Quieres comprar este articulo?");
console.log(`La confirmación es: ${confirmacion}`);

//Solicitud
let peticion = prompt("Ingresa tu edad: ");
console.log(`Tu edad es: ${peticion}`);

let peticion2 = prompt("Ingresa tu edad: ",20);
console.log(`Tu edad es: ${peticion2}`);