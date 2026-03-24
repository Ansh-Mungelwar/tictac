let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newBTN = document.querySelector(".newGame");
let msg = document.querySelector(".msg");
let msgContainer = document.querySelector(".msg-container");

let turnO = true;

const winPatttern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
      box.style.color = "#6b288b";
    } else {
      box.innerText = "X";
      turnO = true;
      box.style.color = "#6594B1";
    }
    box.disabled = true;
    checkWinner();
    console.log("box was clicked");
  });
});
let checkWinner = () => {
  for (let pattern of winPatttern) {
    if (
      boxes[pattern[0]].innerText === boxes[pattern[1]].innerText &&
      boxes[pattern[1]].innerText === boxes[pattern[2]].innerText &&
      (boxes[pattern[2]].innerText === "O" ||
        boxes[pattern[2]].innerText === "X")
    ) {
      msg.innerText = `Congratulations, Winner is ${boxes[pattern[1]].innerText}`;
      msgContainer.classList.remove("hide");
      for (boxe of boxes) {
        boxe.disabled = true;
      }
    }
  }
  count++;
  if (count === 9 && msg.innerText == "") {
    msg.innerText = "No one WIN's\nDRAW";
    resetBtn.addEventListener("click", enableBtn);
  }
};
let enableBtn = () => {
  for (boxe of boxes) {
    boxe.disabled = false;
    boxe.innerText = "";
  }
  msgContainer.classList.add("hide");
  count = 0;
};
resetBtn.addEventListener("click", enableBtn);
newBTN.addEventListener("click", enableBtn);
