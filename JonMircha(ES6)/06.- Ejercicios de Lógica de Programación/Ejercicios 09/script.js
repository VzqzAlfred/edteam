/*
    27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/

class Pelicula{
  constructor({idPelicula, titulo, director, anioEstreno, paisOrigen, genero, calificacion}){
    this.idPelicula = idPelicula;
    this.titulo = titulo;
    this.director = director;
    this.anioEstreno = anioEstreno;
    this.paisOrigen = paisOrigen;
    this.genero = genero;
    this.calificacion = calificacion;

    this.validarIMBD(idPelicula);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(anioEstreno);
    this.validarPais(paisOrigen);
    this.validarGeneros(genero);
    this.validarCalificacion(calificacion);
  }

  // Método estático
  static get getListaGeneros(){
    return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game - Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
  }
  static generosAceptados(){
    return console.info(`Los generos aceptados son: ${Pelicula.getListaGeneros.join(', ')}`) 
  }


  // Método para validar que sean de tipo cadena
  validarCadena(propiedad, valor){
    if(!valor) return console.warn(`${propiedad}: "${valor}" esta vacío.`)

    if(typeof(valor) !== 'string') return console.error(`${propiedad}: "${valor}" ingresado, NO es una cadena de texto.`)

    return true;
  }


  // Método para válidar el digistos en estreno
  validarNumero(propiedad, valor){
    if(!valor) return console.warn(`${propiedad}: "${valor}" esta vacío.`)

    if(typeof(valor) !== 'number') return console.error(`${propiedad}: "${valor}" ingresado, NO es un número.`)

    return true;
  }


  // Método para validar los arreglos
  validarLongitudCadena(propiedad, valor, longitud){
    if(valor.length > longitud) return console.error(`${propiedad}: "${valor}" escede el número de caracteres permitidos (${longitud}).`);

    return true;
  }


  // Métodos para validar si son arreglos
  validarArreglo(propiedad, valor){
    if(!valor) return console.warn(`${propiedad}: "${valor}" esta vacío.`);

    if(!(valor instanceof Array)) return console.error(`${propiedad}: "${valor}" ingresado, NO es un arreglo`);

    if(valor.length === 0) return console.warn("El arreglo no tiene que estar vacío");
    
    for (let elementos of valor) {
        if(typeof(elementos) !== "string") return console.error(`El valor ${elementos} ingresado, NO es una cadena de texto`);
    }

    return true;
  }




  
  validarIMBD (idPelicula){
    if(this.validarCadena("IMDB id", idPelicula)){
      // ^$ indican que no pude haber nada antes y después.
      if(!(/^([a-z]){2}([0-9]){7}$/.test(idPelicula))) return console.error(`IMDB id '${idPelicula}' no es válido, debe tener 9 caracteres, los 2 primeros letras minúsculas y los 7 restantes números`);
    } 
  }


  validarTitulo(titulo){
    if(this.validarCadena("Título", titulo)){
      this.validarLongitudCadena(`Título`, titulo, 100);
    }  
  }


  validarDirector(director){
    if(this.validarCadena("Director", director)){
      this.validarLongitudCadena(`Director`, director, 50);
    }  
  }


  validarEstreno(anioEstreno){
    if(this.validarNumero("Año de Estreno", anioEstreno)){
      
      if(!(/^([0-9]){4}$/.test(anioEstreno))) return console.error(`Año de Estreno '${anioEstreno}' no es válido, debe ser un número de 4 digítos.`);
    } 
  }

 
  validarPais(paisOrigen){
    this.validarArreglo("País", paisOrigen);
  }


  validarGeneros(genero){
    if (this.validarArreglo("Géneros", genero)) {
      for (let elemento of genero) {
        //Verifica si se incluye el género introducido a la lista
        if (!(Pelicula.getListaGeneros.includes(elemento))){
          console.error(`Género(s) incorrecto(s): '${genero.join(', ')}'`);
          Pelicula.generosAceptados();
        }
      }
    }
  }


  validarCalificacion(calificacion){
    if(this.validarNumero("Calificación", calificacion))
      return (calificacion <0 || calificacion > 10)
      ? console.error("La calificación tiene que ser entre un rango entre 0 - 10")
      : this.calificacion = calificacion.toFixed(1);
  }


  // Generación de la Ficha Técnica
  fichaTecnica(){
    console.info(`Ficha técnica: 
    \nTítulo: "${this.titulo}"
    \nDirector: "${this.director}"
    \nEstreno: "${this.anioEstreno}"
    \nPaís: "${this.paisOrigen.join(', ')}"
    \nGénero(s): "${this.genero.join(', ')}"
    \nCalificación: "${this.calificacion}"
    \nIMDB Id: "${this.idPelicula}"
    `)
  }  
  
}
 

//Pelicula.generosAceptados();
/*
const movie = new Pelicula({
  idPelicula: "tt4578654", 
  titulo: "Título de la Película",
  director: "Director de la Película",
  anioEstreno: 2021,
  paisOrigen: ["México"],
  genero: ["Sport"],
  calificacion: 7.789
})
movie.fichaTecnica();*/

//
const misPelis = [
  {
    idPelicula:"tt07857450",
    titulo: "Info the Wild",
    director: "Sean Penn",
    anioEstreno: 2007,
    paisOrigen: ["USA"],
    genero: ["Adventure","Biography", "Drama"],
    calificacion: 8.1
  },
  {
    idPelicula:"tt1234567",
    titulo: "Rocky Balcboa",
    director: "Sylvester Stallone",
    AnioEstreno: 2006,
    paisOrigen: ["USA"],
    genero: ["Action","Sport", "Drama"],
    calificacion: 7.1
  },
  {
    idPelicula:"tt7456321",
    titulo: "The Dark Knight",
    director: "Christopher Nolan",
    anioEstreno: 2008,
    paisOrigen: ["USA", "UK"],
    genero: ["Action","Crime", "Drama"],
    calificacion: 9.0
  }
]

misPelis.forEach(el => new Pelicula(el).fichaTecnica());