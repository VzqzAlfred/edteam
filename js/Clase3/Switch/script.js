// let answer = prompt(`Escoge un número del 1 al 3`)

// switch (answer) {
//     case '1':
//         alert(`You're very happy my friend`)
//         break;
//     case '2':
//         alert(`You're excited`)
//         break;
    
//     case '3':
//         alert(`You're son sad`)

//     default:
//         alert(`Por favor es un número entre 1 y 3`)
//         break;
// }


let answer = prompt(`La capital de Finlandia es:
a. Oslo
b. Helsinki
c. Nairobi
d. Amsterdam
e. Estocolmo
`).toUpperCase().trim()     //Por si se escribe en mayuscula y con espacios

switch (answer) {
    
    case 'c':
        alert(`The answer is incorrect!`)
        break;

    default:
        alert(`The answer is incorrect!`)
        break;
}