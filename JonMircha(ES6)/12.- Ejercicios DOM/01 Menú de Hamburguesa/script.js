import hamburgerMenu from "./menu_hamburger.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
})
