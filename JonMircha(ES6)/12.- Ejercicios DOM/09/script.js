import scrollTopButton from "./sections/botton_scroll.js";
import countdown from "./sections/cuenta_regresiva.js";
import hamburgerMenu from "./sections/menu_hamburger.js";
import { digitalClock, alarm } from "./sections/reloj.js";
import { moveBall, shortCuts } from "./sections/teclado.js"
import darkTheme from "./sections/tema_oscuro.js";



const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("./assets/mario-bros.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown("countdown", 
    "Dec 25, 2021 00:00:00", 
    "Merry Christmas 🎅🏻");
    scrollTopButton(".scroll-top-btn");
})

d.addEventListener("keydown", e => {
    shortCuts(e);
    moveBall(e, ".ball", ".stage");
})

darkTheme(".dark-theme-btn", "dark-mood");