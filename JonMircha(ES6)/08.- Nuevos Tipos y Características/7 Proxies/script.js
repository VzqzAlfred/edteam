            /* Proxies */

// Permiten crear un objeto basado en un objeto literal inicial, (es parecido para heredar como una clase)

const persona = {
    nombre: "",
    apellido: "",
    edad: 0
}

// manejador es con el que se auxilia para validar que le permite dar los valores que le asignes
const manejador = {
    set(objeto, props, valor){

        //validando que no se pueden agregar más propiedades al objeto
        // indexOf(): Es un buscador si es -1 es que no existe
        if(Object.keys(objeto).indexOf(props) === -1){
            return console.error(`La propiedad "${props}" no existe en el objeto persona.`)
        }

        if( 
            (props === "nombre" || props === "apellido") && !(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(valor))
        ){
            return console.error(`La propiedad solo acepta "${props}" sólo acepta letras y espacios en blanco.`)
        }

        if((props === "edad") && !(/^[0-9]+$/g.test(valor))){
            return console.error(`El valor "${valor}" asignado NO es un número.`);
        }

        objeto[props] = valor;
    }
}


// Asginando valores
const max = new Proxy(persona, manejador);
max.nombre = "Madds";
max.apellido = "Nielsen";
max.edad = 5;
console.log(max);



// Tratando de agregar una nueva propiedad al proxy
max.twitter = "@maDDs"
console.log(max);