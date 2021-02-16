            /* this */

// Es una palabra que hace alguna referencia en algún objeto global window (en node window no existe y se llama, global el objeto global)

console.log(global);
console.log(this === global);

this.nombre = "Contexto global";
console.log(this.nombre);

function imprimir(){
    console.log(this.nombre);
}
imprimir();





const obj = {
    nombre: "Contexto objeto",

    imprimir(){
        console.log(this.nombre)
    }
}
obj.imprimir();




const obj2 = {
    nombre: "Contexto objeto 2",
    imprimir
}
obj2.imprimir(); 





const obj3 = {
    nombre: "Contexto objeto 3",

    // arrowfuction hace referencia al objeto global ya de window, no dentro del objeto
    imprimir: ()=>{
        console.log(this.nombre)
    }
}
obj3.imprimir();





function Persona (nombre) {
    this.nombre = nombre
    //return console.log(`${this.nombre}`);

    /*return function(){
        // Como se encapsula ya no imprime el nombre porque ya tiene otro closure
        console.log(`${this.nombre}`)        
    }*/

    // Por lo que es conveniente aquí realizar una arrow function
    return () => console.log(`${this.nombre} del objeto Persona`);
}
let alfred = new Persona("Alfred");
alfred();