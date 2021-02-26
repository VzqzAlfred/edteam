import scrollTopButton from "./sections/botton_scroll.js";
import countdown from "./sections/cuenta_regresiva.js";
import hamburgerMenu from "./sections/menu_hamburger.js";
import responsiveMedia from "./sections/objeto_responsive.js";
import responsiveTester from "./sections/prueba_responsive.js";
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
    responsiveMedia(
        "youtube", 
        "(min-width: 1024px)", 
        `<a href="https://www.youtube.com/watch?v=iAmbnky3mCE">Ver Video en Youtube 🎞️🎥</a>`, 
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/iAmbnky3mCE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );
    responsiveMedia(
        "gmaps", 
        "(min-width: 1024px)", 
        `<a href="https://goo.gl/maps/kgJuYFQshoMWoaqHA">Ver Mapa en Google Maps 🗺️🌍</a>`, 
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662259.0722591975!2d9.223711495554177!3d49.33582431786689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f9a38c5fd9%3A0x10cb84a7db1987d!2sMunich%2C%20Germany!5e0!3m2!1sen!2smx!4v1614366695202!5m2!1sen!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
    );

    responsiveTester("responsive-tester");
})

d.addEventListener("keydown", e => {
    shortCuts(e);
    moveBall(e, ".ball", ".stage");
})

darkTheme(".dark-theme-btn", "dark-mood");