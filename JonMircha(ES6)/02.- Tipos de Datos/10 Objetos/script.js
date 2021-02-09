        /* Objetos */

/*
    Objeto: Es una colección de llaves valores.
*/

const a = {};

/* Los objetos dentro de un objeto a las variables se le mmana 'atributos'. Y a las funciones se le llaman 'métodos'. */
const datos = {
    nombre: "Alfred",
    edad: 24,
    pasatiempos: ["Hacer ejercicio", "Aprender"],
    soltero: true,
    contacto: {
        email: "alfred@gmail.com",
        twitter: "@AlfredVzqzS",
        movil: "521123456789"
    },

    saludar(){
        console.log(`Hola 😜`);
    },

    sayMyName() {
        console.log(`Hola, me llamo: ${this.nombre}, tengo ${this.edad} años me gusta ${datos.pasatiempos[1]} y me puedes seguir en mi Twitter: ${this.contacto.twitter}`);
    }
}

console.log(datos,"\n");
console.log(datos.pasatiempos[1]);
console.log(datos.contacto.twitter);

console.log(`\n\nAccediendo al método o función.`);
datos.saludar();
datos.sayMyName();


// Propiedades y métodos de los Objetos.

console.log(Object.keys(datos));             // keys(): Es un método que enlista todas los atributos y métodos del objeto.

console.log("\n",Object.values(datos));      // values(): Es un método que te da los valores del objeto.

console.log(datos.hasOwnProperty('nombre')); // hasOwnProperty(): Permite saber si existe el atributo en el objeto.