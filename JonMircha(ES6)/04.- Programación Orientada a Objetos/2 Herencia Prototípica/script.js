        /* Herencia Prototípica */

function Animal(nombre, genero){
    this.nombre = nombre;
    this.genero = genero;
}

Animal.prototype.sonar = function(){
    console.log("Hago sonidos porque esta vivo.");
}

Animal.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre}`);
}



function Perro(nombre, genero, tamanio){
    this.super = Animal;        // Hereda los atributos de Animal
    this.super(nombre, genero); // 
    this.tamanio = tamanio;
}

// Perro esta heredando de Animal()
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

// Sobreescritura de Métodos del Prototipo padre en el hijo.
Perro.prototype.sonar = function(){
    console.log("Soy un perro y mis sonido es un ladrido");
}

Perro.prototype.ladrar = function(){
    console.log("Guau guau!!!");
}

// Creando los objetos Peero y Animal.
const snoopy = new Perro("Snoopy", "Macho", "Medio");
const lolaBunny = new Animal("Lola Bunny", "Hembra");

console.log(snoopy);
snoopy.ladrar();
snoopy.sonar();
snoopy.saludar();
console.log(lolaBunny);