            /* Objetos: URL, Historial y Navegador */

console.log("************ Objeto URL (location) ************");
console.log(location);
// 
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
// hash, detecta todo lo que hay después de un gatito
console.log(location.hash);
// search: Almacena lo que hay después del signo '?' 
console.log(location.search);
console.log(location.pathname);
//location.reload()     //Recarga la página
console.log("\n\n\n\n\n");





console.log("************ Objeto History (Historial) ************");
console.log(history);
// Guarda la cantidad de páginas que ha pasado en ese url
console.log(history.length);
//back(2): regresa a la cantidad de páginas asignadas
//console.log(history.back(2));
//forward(2): te lleva a cuantas paginas quieres ir hacia adelante
//console.log(history.forward(1));

// go(): especifica con + paginas hacia adelante y - paginas hacia atrás.
//console.log(history.go(-2));
console.log("\n\n\n\n\n");





console.log("************ Objeto Navigator (Navegador) ************");
console.log(navigator);
// Nos da información de conexión
console.log(navigator.connection);
console.log(navigator.geolocation);
// Son los dispositivos como: cámaras, microfonos
console.log(navigator.mediaDevices);
// Son los tipos de formatos que acepta el navegador (png,pdf,docx)
console.log(navigator.mimeTypes);
// verifica si esta en conectado (true: si conectado)
console.log(navigator.onLine);

//? Es una API, para que se hagan del sitio a aplicación 
console.log(navigator.serviceWorker);

// API de almacenamiento de localstorage
console.log(navigator.storage);
// La capacidad de detectar dispositivos usb
console.log(navigator.usb);
// Nos da información de la computadora y del navegador
console.log(navigator.userAgent);