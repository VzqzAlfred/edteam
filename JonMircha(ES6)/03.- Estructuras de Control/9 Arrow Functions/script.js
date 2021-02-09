        /* Arrow Fuctions */

const saludar = (nombre, edad) => console.log(`Hola ${nombre} tienes ${edad} años.`);
saludar("Irma", 32);


const suma = (a,b) => a+b;
console.log(suma(15,20));


const animales = ["Perro", "Gato", "Gallina", "Elefante", "León", "Ardilla"];


animales.forEach((elemento, index) => console.log(`El elemento ${elemento}, esta en la posición: ${index}`));



const gato = {
    nombre: "Mads",

    maullar1: () => {      // engloba al objeto window
        console.log(this);
        // No puedo instanciar 'gato.nombre' porque llama a window
    },

    maullar2(){             // engloba a sus atributos y métodos objeto 
        console.log(this);
        // Si puedo instanciar 'gato.nombre'
    }
}

gato.maullar1();
gato.maullar2();

/* Usar Arrow function en métodos no es buena práctica */