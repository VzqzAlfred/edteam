export function Menu(){
    const $menu = document.createElement("nav");
    $menu.classList.add("menu");
    $menu.innerHTML = `
        <a href="#/">Home</a>
        <span>-</span>
        <a href="#/search">Search</a>
        <span>-</span>
        <a href="#/contact">Contact me</a>
    `;
    return $menu;
}