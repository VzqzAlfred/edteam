        /* Condicionales */

/* 
    Estructura de Control: Es aquel mecanismo que permite controlar el flujo de tú programación. 
*/


// if - else if - else
/*   mañana = 6 - 11,
     tarde = 12 - 18,
     noche = 19 - 23, 
     dormir = 0 - 5;*/

let hora = 23;
if(hora >= 6 && hora <= 11){
    console.log("Say: Good Morning. 😃");
} else if(hora >= 12 && hora <= 18){
    console.log("Say: Good Afternoon. 😀");
} else if (hora >= 19 && hora <=23){
    console.log("Say: Good night. 🥱");
} else if (hora >= 0 && hora <= 5){
    console.log("Déjame dormir. 😴");
} else {
    console.log("La hora ingresada es incorrecta. 🤨");
}



/* Operador ternario.

    (condicion) ? verdadero : falso ;
*/
edad = 5;
let eresMayor = (edad >= 18) 
 ? "Eres mayor de edad" 
 : "Eres menor de edad";

console.log(eresMayor);



// switch - case
/* 
    Domingo: 0,
    Lunes: 1,
    Martes: 2,
    Miércoles: 3,
    Jueves: 4,
    Viernes: 5,
    Sábado: 6
*/

let dia = 45;
switch (dia) {
    case 0: 
        console.log(`El día es Domingo.`); 
        break;

    case 1: 
        console.log(`El día es Lunes.`); 
        break;
    
    case 2: 
        console.log(`El día es Martes.`); 
        break;

    case 3: 
        console.log(`El día es Miércoles.`); 
        break;

    case 4: 
        console.log(`El día es Jueves.`); 
        break;

    case 5: 
        console.log(`El día es Viernes.`); 
        break;

    case 6: 
        console.log(`El día es Sábado.`); 
        break;

    default:
        console.log("El día no existe. :C");
        break;
}