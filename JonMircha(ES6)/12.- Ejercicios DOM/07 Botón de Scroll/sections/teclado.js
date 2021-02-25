const d = document;

let x = 0,
    y = 0;

export function moveBall(e, ball, stage){
    const $ball = d.querySelector(ball),
         $stage = d.querySelector(stage),
      limitBall = $ball.getBoundingClientRect(),
     limitStage = $stage.getBoundingClientRect();
    // Los límits son para ver que distancia hay entre la pared y la pelota. 

// preventDefault(): es para que cada que no se mueva el scroll
    switch (e.keyCode) {
        // Izquierda
        case 37:
            if(Math.ceil(limitBall.left - 2) > Math.round(limitStage.left)){
                e.preventDefault();
                x--;
            }
            break;

        // Arriba
        case 38:
            if(Math.ceil(limitBall.top - 2) > Math.round(limitStage.top)){
                e.preventDefault();
                y--;    
            } 
            break;

        // Derecha
        case 39:
            if(Math.round(limitBall.right) < Math.ceil(limitStage.right - 2)){
                e.preventDefault();
                x++;
            }
            break;

        //Abajo
        case 40:
            if(Math.round(limitBall.bottom) < Math.ceil(limitStage.bottom - 2)){
                e.preventDefault();
                y++;
            }
            break;
    
        default:
            break;
    }
    // Para que se haga el movimiento cada que multiplicación de 'x' & 'y'     
    $ball.style.transform = `translate(${x*5}px, ${y*5}px)`;
}



export function shortCuts(e){
    /*shortCuts(e);
    console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);

    Para ver si presionas esos 3 botones
    console.log(`ctrl: ${e.ctrlKey}`);
    console.log(`shift: ${e.shiftKey}`);
    console.log(`alt: ${e.altKey}`);
    */

    if(e.key === "a" && e.altKey){
        alert(`Haz lanzado una alerta con el teclado`);
    }

    if(e.key === "c" && e.altKey){
        confirm(`Haz lanzado una confirmación con el teclado`);
    }

    if(e.key === "p" && e.altKey){
        prompt(`Haz lanzado un aviso co el teclado`);
    }
}