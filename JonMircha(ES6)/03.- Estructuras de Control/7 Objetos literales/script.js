        /* Objetos literales */

let nombre = "Gretchen",
        edad = 8;

const gato = {
    nombre: nombre,
    edad: edad,

    Maullar: function(){
        console.log("Miauu miauu!!! 🐱");
    }
}
console.log(gato);
gato.Maullar();



const cat = {
    nombre,
    edad,
    color: "Cafesita",

    Maullar(){
        console.log("Miauuuu!!! 🐱🐱🐱");
    }
}
console.log(cat);
cat.Maullar();