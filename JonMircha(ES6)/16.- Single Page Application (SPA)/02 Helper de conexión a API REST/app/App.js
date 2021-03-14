import api from "./helpers/wp_api.js"


export function App (){
    document.getElementById("root").innerHTML = `<h1>Welcome to my first SPA with Vanilla JS</h1>`;

    console.log(api);
}