            /* Clases y Herencia. */

// Las clases no reciben parámetros
class Animal{
    // El constructor es un método especial que se ejecuta en el momento de instanciar la clase
    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
    }

    // Los métodos si pueden recibir parámetros
    sonar(){
        console.log("Hago sonidos porque estoy vivo.");
    }

    saludar(){
        console.log(`Hola me llamo ${this.nombre}`);
    }
}



// Haciendo Herencia

class Perro extends Animal{
    constructor(nombre, genero, tamanio){
        // con el método super(), se manda a llamar el constructor de la clase padre siendo 'Animal'
        super(nombre, genero);
        this.tamanio = tamanio;
    }

    sonar(){
        console.log("Soy un perro y mi sonido es un ladrido. 🐕‍🦺 🦮");
    }

    ladrar(){
        console.log("Guauuu guauuu 🐶");
    }
}

const mimi = new Animal("Mimi", "Hembra"), 
    scooby = new Perro("Scooby Doo", "Macho", "Gigante");

console.log(mimi);
mimi.sonar();
mimi.saludar();
console.log(scooby);
scooby.saludar();
scooby.sonar();
scooby.ladrar();