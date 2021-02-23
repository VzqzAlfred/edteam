import hamburgerMenu from "./sections/menu_hamburger.js";
import { digitalClock, alarm } from "./sections/reloj.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("./assets/mario-bros.mp3", "#activar-alarma", "#desactivar-alarma");
})

d.addEventListener("keydown", e => {
    /*shortCuts(e);
    console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);

    Para ver si presionas esos 3 botones
    console.log(`ctrl: ${e.ctrlKey}`);
    console.log(`shift: ${e.shiftKey}`);
    console.log(`alt: ${e.altKey}`);
    */

    if(e.key === "a" && e.altKey){
        alert(`Haz lanzado una alerta con el teclado`);
    }

    if(e.key === "c" && e.altKey){
        confirm(`Haz lanzado una confirmación con el teclado`);
    }

    if(e.key === "p" && e.altKey){
        prompt(`Haz lanzado un aviso co el teclado`);
    }
})