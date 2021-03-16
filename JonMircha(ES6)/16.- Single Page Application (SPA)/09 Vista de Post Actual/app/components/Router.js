import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js"
import { PostCard } from "./PostCard.js";
import { Post } from "./Post.js";

export async function Router(){
    const d = document,
    w = window,
    $main = d.getElementById("main")

    let {hash} = location;
    console.log(hash);

    $main.innerHTML = null;

    if (!hash || hash === "#/") {
        await ajax({
            url: api.POSTS,
            cbSuccess: (posts) => {
                //console.log(posts);
                let html = "";
                posts.forEach(post => html += PostCard(post)) 
                //d.querySelector(".loader").style.display = "none";
                $main.innerHTML = html;       
            }
        });
    }else if(hash.includes("#/search")){
        $main.innerHTML = "<h2>Search's section</h2>";
        //d.querySelector(".loader").style.display = "none";
    }else if(hash.includes("#/contact")){
        $main.innerHTML = "<h2>Contact's section</h2>";
        //d.querySelector(".loader").style.display = "none";
    }else{
        await ajax({
            url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
            cbSuccess: (post) => {
                console.log(post);  
                $main.innerHTML = Post(post);     
            }
        });
    }
    d.querySelector(".loader").style.display = "none";
}