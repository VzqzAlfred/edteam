            /* DOM: Document Object Model */

console.log("********** Elementos del Documento **********");

console.log(document);

console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.styleSheets);
console.log(document.scripts);

// Seleccion de texto y mostrardo en la consola
setTimeout(() => {
    console.log(document.getSelection().toString());
}, 5000);
//*********************************/
document.write(`<h2>Hola mundo desde el DOM</h2>`);