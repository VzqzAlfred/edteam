        /* Prototipos */

/* POO:
        - Clases: Es un modelo a seguir.
        - Objetos: Es una instancia de un objeto. 
            - Atributos: Es una característica o porpiedad del objeto (Son variables dentro de un objeto).
            - Métodos: Son las acciones que un objeto puede realizar (Son funciones dentro de un objeto).
*/
/* Prototipos: Son un mecanismo por el cual un objeto puede heredar atributos y métodos de su objeto padre */

const animal = {
    animal: "Snoopy",
    sonar(){
        console.log("Hago sonidos porque esta vivo.");
    }
}
console.log(animal);


const animal2 = {
    animal: "Lola Bunny",
    sonar(){
        console.log("Hago sonidos porque esta vivo.");
    }
}
console.log(animal2);


// Función constructura (Antes de ES6+)
/*
function Animal(nombre, genero){
    //Atributos
    this.nombre = nombre;
    this.genero = genero;

    // Métodos
    this.sonar = function(){
        console.log("Hago sonidos porque esta vivo.");
    }

    this.saludar = function(){
        console.log(`Hola me llamo ${this.nombre}`);
    }
}

const snoopy = new Animal("Snoopy", "Macho"),
   lolaBunny = new Animal("Lola Bunny", "Hembra");

console.log(snoopy);
console.log(lolaBunny);
snoopy.saludar();
lolaBunny.saludar();
*/



// Función constructora más conveniente.
function Animal(nombre, genero){
    //Atributos
    this.nombre = nombre;
    this.genero = genero;
}

    // Métodos agregados al prototipo de la función constructura
    Animal.prototype.sonar = function(){
        console.log("Hago sonidos porque esta vivo.");
    }

    Animal.prototype.saludar = function(){
        console.log(`Hola me llamo ${this.nombre}`);
    }


const snoopy = new Animal("Snoopy", "Macho"),
   lolaBunny = new Animal("Lola Bunny", "Hembra");

console.log(snoopy);
console.log(lolaBunny);
snoopy.saludar();
lolaBunny.saludar();