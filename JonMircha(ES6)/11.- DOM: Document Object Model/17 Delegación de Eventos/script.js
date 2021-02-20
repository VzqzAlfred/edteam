            /* Delegación de Eventos */



function flujoEventos(e){
    console.log(`Hola, te saluda ${this}, el click lo origino ${e.target.className}`);
} 


document.addEventListener("click", (e) => {
    console.log(`Click en:`, e.target);


    // matches(): evalúa a true si se da click en los links de 'eventos-flujo a', si es true, válida lo de la condición.
    if(e.target.matches(".eventos-flujo div")){
        flujoEventos(e);
    }


    if(e.target.matches(".eventos-flujo a")){
        alert(`Hola, bienvenido a Youtube.`);
        e.preventDefault(); 
    }
});
