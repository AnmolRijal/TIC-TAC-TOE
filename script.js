let boxs = document.querySelectorAll(".box")
let reset = document.querySelector(".reset")
let newGameBtn = document.querySelector(".newGame")
let Message = document.querySelector(".Message")
let message = document.querySelector("#message")

let turnO = true;

let winningPattern = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]]

const resetGame = () => {
    turnO = true;
    enableBoxes();
    Message.classList.add("hide")
}

boxs.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("The box was clicked")
        if (turnO === true) {
            box.innerText = "O"
            turnO = false
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        
        checkWinner();
    })
})

const disableBox = () => {
    for (let box of boxs) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxs) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    message.innerText = `Congratulation, Winnere is ${winner} `
    Message.classList.remove("hide");
    disableBox();
}

const checkWinner = () => {
    for (let pattern of winningPattern) {
    
    let post1Val = boxs[pattern[0]].innerText
    let post2Val = boxs[pattern[1]].innerText
    let post3Val = boxs[pattern[2]].innerText

    if (post1Val != "" && post2Val != "" && post3Val != "") {
        if (post1Val === post2Val && post2Val === post3Val) {
            console.log("Winner", post1Val);
            showWinner(post1Val);
        }
    }

 }   
}

newGameBtn.addEventListener("click", resetGame)
reset.addEventListener("click", resetGame)

