alert('Clase 8: Retro alimentacion.')

document.write(`
    <h1 class="title">Welcome to the Feedback!</h1>
`)

    //      CONDICIONES
let password = prompt('Ingrese la contraseña:')

if (password === 'EDteam'){
    alert('Welcome to the side.')
} else {
    alert('Try again.')
}


//      CICLOS
let number=15
for (let i=1; i<=number; i++){
    document.write(`
        <div>${i}</div>
    `)
}


let names = ['Messi', 'Ronaldo', 'Puppe']
for(let name of names){
    document.write(`
    <div>
        <i>Hola ${name}</i>
    </div>
    `)
}

/*  FUNCIONES  */

const greeting = (saludo) => {
    document.write(`
    <div class="div">
        \n Hello <strong> ${saludo} </strong>to a new section.
    </div>
    `)
}
greeting('Gretchen')