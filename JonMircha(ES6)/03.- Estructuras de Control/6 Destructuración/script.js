        /* Destructuración */

const numeros = [1,2,3];

// Sin destructuración.
let uno = numeros[0], 
    dos = numeros[1],
    tres = numeros[2]; 

console.log(uno, dos, tres);


// Con destructuración
const [one, two, three] = numeros;
console.log(one, two, three);


const person = {  
    nombre: "Alfred",
    apellido: "Vzqz",
    edad: 24
}

// Los nombres de las variables tienen que llamarse igual que los atributos del objeto, no importa el orden
const {nombre, edad, apellido} = person;
console.log(nombre, apellido, edad);