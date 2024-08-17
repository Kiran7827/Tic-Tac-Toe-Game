let hide = document.querySelector(".hide");
let msg = document.querySelector(".msg");
let newGame = document.querySelector(".newGame");
let content = document.querySelector(".content");
let game = document.querySelector(".game");
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let hidden = document.querySelectorAll(".hidden");

let winPattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

let Count = 0;

let turnO = true;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
            console.log(box.innerText);
        } else {
            box.innerText = "X";
            console.log(box.innerText);
            turnO = true;
        }
        if (box.innerText != "") {
            Count++
            console.log(Count);
            if(Count == 9) {
                msg.innerText = "Draw Match";
                hide.classList.remove("hide");
            };
        };
        box.disabled = true;
        checkWinner();
    });

})

let enable = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = ""
        Count = 0;
    }
}

let resetBtn = () => {
    turnO = true;
    enable();
    hide.classList.add("hide");
}

let disabledBoxes = () => {
    for (box of boxes) {
        box.disabled = true;
    };
};



let showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    hide.classList.remove("hide");
    disabledBoxes();
}

let checkWinner = () => {
    for (pattern of winPattern) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 == val2 && val2 == val3) {
                showWinner(val1);
            };
        };
    };
};
newGame.addEventListener("click", resetBtn);
reset.addEventListener("click", resetBtn)
