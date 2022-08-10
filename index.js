document.querySelector("#btn").onclick = function () { rollDice() };

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
            console.log("one");
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

    if (score1 > score2)
        document.querySelector(".heading").textContent = "🚩Player 1 Wins!"
    else if (score2 > score1)
        document.querySelector(".heading").textContent = "Player 2 Wins!🚩"
    else
        document.querySelector(".heading").textContent = "Draw!"
}