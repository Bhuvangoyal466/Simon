const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];

let userClickedPattern = [];
let gameStarted = false;
let level = 0;

document.addEventListener("keydown", function () {
    if (!gameStarted) {
        startGame();
    }
});

function nextSequence() {
    userClickedPattern = [];
    level++;
    document.getElementById("status").textContent = "Level " + level;

    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColor = buttonColors[randomNumber];
    console.log(randomChosenColor);
    gamePattern.push(randomChosenColor);

    animateButton(randomChosenColor);
}

function animateButton(color) {
    const button = document.getElementById(color);
    button.style.backgroundColor = "black";
    setTimeout(function () {
        button.style.backgroundColor = color;
    }, 300);
}

function checkInput(userChosenColor) {
    if (gameStarted) {
        userClickedPattern.push(userChosenColor);
        animateButton(userChosenColor);

        const lastIndex = userClickedPattern.length - 1;
        if (userClickedPattern[lastIndex] !== gamePattern[lastIndex]) {
            gameOver();
        }

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 500);
        }
    }
}

function startGame() {
    if (!gameStarted) {
        gameStarted = true;
        level = 0;
        gamePattern = [];
        nextSequence();
        document.getElementById("status").textContent = "Level " + level;
    }
}

function gameOver() {
    gameStarted = false;
    document.body.classList.add("game-over");
    setTimeout(function () {
        document.body.classList.remove("game-over");
    }, 200);
    document.getElementById("status").textContent =
        "Game Over!! Press Any Key to Restart the Game.";
}
