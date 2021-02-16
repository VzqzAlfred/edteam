            /* Propiedades Dinámicas de los Objetos */


let numAleatorio = Math.round(Math.random() * 100 + 5);
const objetoUsuarios = {
    [`id_${numAleatorio}`]: "Valor aleatorio."
}
const usuarios = ["Alfred", "Marianita", "Gretchen", "Tomm", "Madds"];
console.log(objetoUsuarios);



usuarios.forEach((usuario, posicion)=>{objetoUsuarios[`id_${posicion}`] = usuario});
console.log(objetoUsuarios);