            /* Nodos, elementos y Selectores */

// Nodo: Node.ELEMENT_NODE, Node.TEXT_NODE


// Anteriormente 
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("name"));
console.log("\n");
/****************************************************/

console.log(document.getElementById("menu"));



/* 
?Las 3 primeras han sido remplazados por 'querySelector'.
    *- Recibe como parámetro un selector válido de CSS (id, class, etiqueta html) 
    *- Si se específica que es (. # <>)
    *- Es más lento que 'getElementById' porque válida de que tipo es.
*/
console.log(document.querySelector("#menu")); 
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);        
document.querySelectorAll("a").forEach((e)=>console.log(e));

console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelectorAll("#menu li"));