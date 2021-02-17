            /* Web API */

//? API: Application Programming Interface (Interfaz de Programación de Aplicación).
// Variabe global
console.log(window);

// Árbol del codumento que mapea la estructura del HTML
console.log(document);



let texto = "Hi, I'm your friend Alfred :D"
const hablar = texto => speechSynthesis.speak(new SpeechSynthesisUtterance(texto))

hablar(texto);