let snake = document.getElementById("snake");
let positionDeMonSnakeX = 600;
let positionDeMonSnakeY = 100;


let direction = ""; 

document.addEventListener("keydown", function(event) {
    direction = event.key; 
});

setInterval(function() {
    if (direction !== "") {
        mouveSnake(direction); 
    }
}, 100); 


function mouveSnakeDown() {
    positionDeMonSnakeY += 10;
    snake.style.top = positionDeMonSnakeY + "px";
}

function mouveSnakeUp() {
    positionDeMonSnakeY -= 10;
    snake.style.top = positionDeMonSnakeY + "px";
}

function mouveSnakeLeft() {
    positionDeMonSnakeX -= 10;
    snake.style.left = positionDeMonSnakeX + "px";
}

function mouveSnakeRight() {
    positionDeMonSnakeX += 10;
    snake.style.left = positionDeMonSnakeX + "px";
    
}

let keydownSave = "";

document.addEventListener('keydown', function (event) {
    mouveSnake(event.key);
});



function mouveSnake(keydown){
    if (keydown == "ArrowRight") {
        mouveSnakeRight();
        
    }
    if (keydown == "ArrowLeft") {
        mouveSnakeLeft();
        
    }
    if (keydown == "ArrowUp") {
        mouveSnakeUp();
        
    }
    if (keydown == "ArrowDown") {
        mouveSnakeDown();
        
    }
    
}


