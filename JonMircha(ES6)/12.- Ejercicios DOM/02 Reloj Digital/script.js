import hamburgerMenu from "./sections/menu_hamburger.js";
import { digitalClock } from "./sections/reloj.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
})

