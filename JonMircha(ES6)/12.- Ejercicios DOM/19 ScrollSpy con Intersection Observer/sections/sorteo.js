const d = document;

export default function draw(btn, selector){
    const getWinner = selector => {
        const $players = d.querySelectorAll(selector),
        random = Math.floor(Math.random() * $players.length),
        winner = $players[random];

        /*
        console.log($players);
        console.log(random);
        console.log(winner);
        */
        return `${winner.textContent}`;
    }

    d.addEventListener("click", e => {
        if(e.target.matches(btn)){
            let result = getWinner(selector);
            alert(`FELICIDADES, ${result} es el ganador 🎉🎊`);
        }
    })
}