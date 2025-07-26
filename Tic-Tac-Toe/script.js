let boxes = document.querySelectorAll(".box");
let result = document.querySelector(".result");
let message = document.querySelector(".message");
let turnO = true;  // O turn first

const winnerpatterns = [
  [0, 1, 2], [0, 3, 6], [0, 4, 8],
  [1, 4, 7], [2, 5, 8], [2, 4, 6],
    [3, 4, 5], [6, 7, 8]
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = !turnO;
    } else {
      box.innerText = "X";
      turnO = !turnO;
    }
    updateTurnIndicator(); // Update turn indicator after each move
    box.disabled = true;
    checkWinner();
  });
});

let disableboxes = () =>{
    boxes.forEach((box) => {
        box.disabled = true;
        box.style.backgroundColor = "lightgray";
    });
}

let enableboxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
        box.style.backgroundColor = "azure";
    });
}

let checkWinner = () => {
    for(let pattern of winnerpatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText; 
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                message.classList.remove("hide");
                result.innerText = `Player ${pos1val} wins!`;
                disableboxes();
                boxes[pattern[0]].style.backgroundColor = "#8ac926";
                boxes[pattern[1]].style.backgroundColor = "#8ac926";
                boxes[pattern[2]].style.backgroundColor = "#8ac926";
            }
        }
    }
}


let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");

function updateTurnIndicator() {
    if (turnO) {
        player1.classList.add("active");
        player2.classList.remove("active");
    } else {
        player1.classList.remove("active");
        player2.classList.add("active");
    }
}

let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector(".newgame-btn");

resetBtn.addEventListener("click", () => {
    message.classList.add("hide");
    enableboxes();
    turnO = true;
    updateTurnIndicator();
});

newGameBtn.addEventListener("click", () => {
    enableboxes();
    turnO = true;
    message.classList.add("hide");
    updateTurnIndicator();
});

