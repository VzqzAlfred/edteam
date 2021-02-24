import hamburgerMenu from "./sections/menu_hamburger.js";
import { digitalClock, alarm } from "./sections/reloj.js";
import { moveBall, shortCuts } from "./sections/teclado.js"

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("./assets/mario-bros.mp3", "#activar-alarma", "#desactivar-alarma");
})

d.addEventListener("keydown", e => {
    shortCuts(e);
    moveBall(e, ".ball", ".stage")
})