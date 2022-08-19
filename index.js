document.querySelector("#btn").addEventListener("click", rollDice);

function rollDice() {
    let score1 = (Math.floor(Math.random() * 6)) + 1;

    switch (score1) {
        case 1:
            document.querySelector("#dice1").src = "images/dice1.png";
            break;
        case 2:
            document.querySelector("#dice1").src = "images/dice2.png";
            break;
        case 3:
            document.querySelector("#dice1").src = "images/dice3.png";
            break;
        case 4:
            document.querySelector("#dice1").src = "images/dice4.png";
            break;
        case 5:
            document.querySelector("#dice1").src = "images/dice5.png";
            break;
        case 6:
            document.querySelector("#dice1").src = "images/dice6.png";

    }

    let score2 = (Math.floor(Math.random() * 6)) + 1;

    switch (score2) {
        case 1:
            document.querySelector("#dice2").src = "images/dice1.png";
            break;
        case 2:
            document.querySelector("#dice2").src = "images/dice2.png";
            break;
        case 3:
            document.querySelector("#dice2").src = "images/dice3.png";
            break;
        case 4:
            document.querySelector("#dice2").src = "images/dice4.png";
            break;
        case 5:
            document.querySelector("#dice2").src = "images/dice5.png";
            break;
        case 6:
            document.querySelector("#dice2").src = "images/dice6.png";
    }

    if (score1 > score2) {
        let lost = new Audio("tones/lost.wav");
        lost.play();
        document.querySelector(".heading").textContent = "You lost!"
    }
    else if (score2 > score1) {
        document.querySelector(".heading").textContent = "You Win🚩"
        let won = new Audio("tones/won.wav");
        won.play();
    }

    else {
        document.querySelector(".heading").textContent = "Draw!";
        let draw = new Audio("tones/draw.wav");
        draw.play();
    }
}