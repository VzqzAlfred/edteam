alert(`Clase 7: POO con JavaScript`)
let paradigma = 'Paradigma' 
document.write(`\n${paradigma}: es un estándar para la realización de tareas para llegar a un objetivo`)


/*          OBJETOS LITERALES        */

const alumno1 = {
        // Atributos del objeto
    name: 'Alfred',
    surname: 'Vzqz',
    age: 24,
    padre: {
        nombre: 'Soy tu padre',
        edad: 50
    },
        // Métodos del objeto
    presentarse() {                                 // alumnos.surname  no es recomendado es mejor utilizar el "this"
        console.log(`Hello, mi name is ${this.name} ${this.surname} and I'm ${this.age} years`);
    },
    whoIsYourFather(){
        console.log(`My father is ${this.padre.nombre} an he's ${this.padre.edad} years.`);
    }
}

console.log(typeof(alumno1))
console.log(alumno1.name)   // ó
console.log(alumno1['age']);


console.log(alumno1.padre.edad)
// ó
console.log(alumno1['padre']['edad']);


const alumno2 = {
    name: 'Santy',
    surname: 'Vzqz',
    age: 5,
    padre: {
        nombre: 'Ricardo',
        edad: 28
    },
    presentarse() {                                 // alumnos.surname  no es recomendado es mejor utilizar el "this"
        console.log(`Hello, mi name is ${this.name} ${this.surname} and I'm ${this.age} years`);
    },
    whoIsYourFather(){
        console.log(`My father is ${this.padre.nombre} an he's ${this.padre.edad} years.`);
    }
}

// Forma de imprimir el método del objeto
alumno1.presentarse()
alumno1.whoIsYourFather()
alumno2.presentarse()
alumno2.whoIsYourFather()
