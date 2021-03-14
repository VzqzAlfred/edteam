import api from "./helpers/wp_api.js"
import {ajax} from "./helpers/ajax.js"

export function App (){
    document.getElementById("root").innerHTML = `<h1>Welcome to my first SPA with Vanilla JS</h1>`;

    ajax({
        url: api.POSTS,
        cbSuccess: (posts) => {
            console.log(posts);
        }
    });

    ajax({
        url: api.CATEGORIES,
        cbSuccess: (categories) => {
            console.log(categories);
        }
    });
    console.log(api);
}