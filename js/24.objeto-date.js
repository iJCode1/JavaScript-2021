//Objeto Date en JS
console.log(Date());

//Creando objeto
let fecha = new Date();
console.log(fecha);

console.log(fecha.toString());

//Obtener Dia local
console.log(fecha.getDay()); //Dia de la semana
console.log(fecha.getDate()); //Dia del mes

//Obtener Mes local (los meses empiezan en indice = 0)
console.log(fecha.getMonth());

//Obtener Año local
console.log(fecha.getFullYear());

//Obtener la hora local (Formato 24 horas)
console.log(fecha.getHours());

//Obtener minutos local
console.log(fecha.getMinutes());

//Obtener segundos local
console.log(fecha.getSeconds());

//Obtener milisegundos local
console.log(fecha.getMilliseconds());

//Obtener Fecha actual (Dia de la semana  - Mes - Dia - Año)
console.log(fecha.toDateString());

//Obtener la fecha actual (Dia/Mes/Año)
console.log(fecha.toLocaleDateString());

//Obtener la fecha actual (Dia/Mes/Año Hora:Minutos:Segundos)
console.log(fecha.toLocaleString());

//Obtener le hora actual (Hora:Minutos:Segundos)
console.log(fecha.toLocaleTimeString());

//Obtener la fecha y hora que ha pasado desde 1970
console.log(fecha.getTime());

//Obtener la diferencia entre la hora UTC y la hora actual local
console.log(fecha.getTimezoneOffset());

//Obtener dia en hora UTC
console.log(fecha.getUTCDate());

//Obtener la hora actual UTC
console.log(fecha.getUTCHours());

console.log(Date.now());

//Obtener fecha completa a partir de una fecha (Año,Mes,Dia).
let cumpleaños = new Date(1999,10,17);

console.log(cumpleaños); //Wed Nov 17 1999 00:00:00 GMT-0600 (hora estándar central)

