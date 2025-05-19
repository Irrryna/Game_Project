let snake = document.getElementById("snake");
let champ = document.getElementById("champ");

let positionDeMonSnakeX = 600;
let positionDeMonSnakeY = 100;

let largeurDuSerpent = 10;
let hauteurDuSerpent = 25;

let direction = "";
let intervalID = null;

document.addEventListener("keydown", function(event) {
    direction = event.key;
});

// Lance une boucle
intervalID = setInterval(function () {
    if (direction !== "") {
        let champWidth = champ.clientWidth;
        let champHeight = champ.clientHeight;

        if (direction === "ArrowRight" && positionDeMonSnakeX + largeurDuSerpent < champWidth) {
            positionDeMonSnakeX += 10;
        } else if (direction === "ArrowLeft" && positionDeMonSnakeX > 0) {
            positionDeMonSnakeX -= 10;
        } else if (direction === "ArrowUp" && positionDeMonSnakeY > 0) {
            positionDeMonSnakeY -= 10;
        } else if (direction === "ArrowDown" && positionDeMonSnakeY + hauteurDuSerpent < champHeight) {
            positionDeMonSnakeY += 10;
        } else {
            clearInterval(intervalID) + alert("GAME OVER");; // Stop si collision
        }

        snake.style.left = positionDeMonSnakeX + "px";
        snake.style.top = positionDeMonSnakeY + "px";
    }
}, 300);
