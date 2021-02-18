            /* Texto y HTML */

const $whatIsDOM = document.getElementById("que-es");

let text = `
            <p>
                El Modelo de Objetos del Documento (<b><i>Document Object Model</i></b>) es un API para documentos HTML y XML
            </p>
            <p>
                Provee un representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS
            </p>
            <p>
                <mark>
                    El DOM no es parte de la especificación de JavaScript, es una API de los navegadores
                </mark>
            </p>
`;

/* Agregando texto PURO, sin reconocer etiquetas HTML */
// Hecho por Internet Explorer (no muy útil)
$whatIsDOM.innerText = text;

// Que forma parte del estándar.
$whatIsDOM.textContent = text;
/**************************************************************/



// Mejor UTILIZADO para agregar texto con etiquetas HTML
$whatIsDOM.innerHTML = text;


// * MEJOR PRÁCTICA
// propiedad 'outerHTML': Remplaza en esa sección el contenido que queremos poner
$whatIsDOM.outerHTML = text;