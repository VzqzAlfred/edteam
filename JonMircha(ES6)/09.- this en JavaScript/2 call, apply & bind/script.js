            /* call, apply, bind */

console.log(this);
this.lugar = "Contexto Global"

function saludar(saludo, aQuien){
    console.log(`${saludo} ${aQuien} desde el: '${this.lugar}'`);
}
saludar("Hola", "Bell");

const obj = {
    lugar: "Contexto Objeto"
}





/*
    ?1. 'call': Recibe los parámetros de la función de manera normal (separados por coma).


    !2. 'apply': Recibe los parámetros de manera de arreglo.
*/

//* En lugar de ejecutar contexto global llama el lugar del objeto

saludar.call(obj, "Hola", "Alfred")
saludar.apply(obj, ["Adiós", "Vzqz"])





/* bind (enlace): Hace un enlace, utilizando el scope en la ha sido creada. */

const persona = {
    nombre: "Tomm",

    saludar: function(){
        console.log(`Hola ${this.nombre}`);
    }
}
persona.saludar();



/* Si colocamos this dentro del bind, estaría enlazando al objeto global y seria window */
//this.nombre="Window"

const otraPersona = {
    saludar: persona.saludar.bind()
}
otraPersona.saludar();