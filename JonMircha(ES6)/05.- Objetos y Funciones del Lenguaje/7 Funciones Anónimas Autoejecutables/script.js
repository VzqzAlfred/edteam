            /* Funciones Anónimas Autoejecutables */

// Siempre que tengas una Función anónima auto ejecutable, es indispensable usar ';'
(function (){
    console.log("Mi primer IIFE 🤓");
})();

(function (/*d, w, */c){
    console.log("Mi segunda IIFE 😲");
    //console.log(document);
    //console.log(window);
    c.log("Holaaa!!!")
})(/*document, window,*/ console);



/* Formas de escribir las funciones Anónimas Autoejecutables */
// Clásica
(function(){
    console.log("Versión clásica.");
})();


// La Crockford (JavaScript The Good Parts)
((function(){
    console.log("Version Crockford");
})());


// Unaria
+function(){
    console.log("Versión Unaria");
}();


// Facebook
!function(){
    console.log("Versión Facebook");
}();