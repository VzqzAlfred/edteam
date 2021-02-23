import hamburgerMenu from "./sections/menu_hamburger.js";
import { digitalClock, alarm } from "./sections/reloj.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("./assets/mario-bros.mp3", "#activar-alarma", "#desactivar-alarma");
})

