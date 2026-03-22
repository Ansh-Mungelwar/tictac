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
