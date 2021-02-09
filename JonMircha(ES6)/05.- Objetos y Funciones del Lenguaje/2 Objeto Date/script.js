            /* Objeto Date */

console.log(Date());

let fecha = new Date();
console.log(fecha);

// El día del mes
console.log(fecha.getDate());

// El día de la semana: D L M M J V S => 0 1 2 3 4 5 6
console.log(fecha.getDay());

// El mes: Ene, Feb, Mar, Abr, May ... Dic => 0 1 2 3 4 ... 11
console.log(fecha.getMonth());

// El año
console.log(fecha.getFullYear());

/* Tiempo */
// Hora
console.log(fecha.getHours());
// Minutos
console.log(fecha.getMinutes());
// Segundos
console.log(fecha.getSeconds());


// Fechas más entendible
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());    //Para sitios web más reconocidos.
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());


// Hora en el meridiano de Grenwich: UTC
console.log(fecha.getUTCHours());

// El timepo en ms que va pasando desde 1700
console.log(Date.now());

let birthday = new Date(1996, 2, 22);
console.log(birthday);