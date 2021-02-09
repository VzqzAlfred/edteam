        /* Métodos estáticos: Getters & Setters */

class Animal{
    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
    }

    sonar(){
        console.log("Hago sonidos porque estoy vivo.");
    }

    saludar(){
        console.log(`Hola me llamo ${this.nombre}`);
    }
}


class Perro extends Animal{
    constructor(nombre, genero, tamanio){
        super(nombre, genero);
        this.tamanio = tamanio;
        this.raza = null;
    }

    sonar(){
        console.log("Soy un perro y mi sonido es un ladrido. 🐕‍🦺 🦮");
    }

    ladrar(){
        console.log("Guauuu guauuu 🐶");
    }

    // Un método estático se puede ejecutar sin necesidad de instanciar la clase.
    static queEres(){
        console.log("Los perro somos animales mamíferos que pertenecemos a la familia de los caninos, siendo los mejores amigos del hombre.");
    }

    // Setters & Getters: Son métodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase.
    get getRaza(){
        return this.raza; 
    }

    set setRaza(raza){
        this.raza = raza;
    }
}


const scoobyDoo = new Perro("Scooby Doo", "Macho", "Gigante");
console.log(scoobyDoo);


// Invocamos set y get como 'PROPIEDADES', no como métodos
console.log(scoobyDoo.getRaza);
// Ajustamos el valor de la raza.
scoobyDoo.setRaza = "Gran Danés";
console.log(scoobyDoo.getRaza);
console.log(scoobyDoo);