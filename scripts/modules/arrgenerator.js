/////////////////////////////////////////////////////////////////////////////////////
//array game generator
let arrGameColumn = [];
let arrGameColumnExtra = [];
export let arrGame = [];
export let arrButtonPlayer1 = [];
export let arrButtonPlayer2 = [];

//extra column rule for check victory and boundary

function columnExtra(rowNumber) {
  for (let i = 0; i < rowNumber; i++) {
    arrGameColumnExtra.push("B");
  }
  arrGameColumnExtra.push("B");
  arrGameColumnExtra.push("B");
  arrGameColumnExtra.push("B");
  console.log(arrGameColumnExtra);
}

function arrGameGeneratorcolumn(rowNumber) {
  for (let i = 0; i < rowNumber; i++) {
    arrGameColumn.push("");
  }
  arrGameColumn.push("B");
  arrGameColumn.push("B");
  arrGameColumn.push("B");
  console.log(arrGameColumn);
}

export function arrGameGenerator(rowNumber, columnNumber) {
  columnExtra(rowNumber);
  arrGameGeneratorcolumn(rowNumber);
  for (let i = 0; i < columnNumber; i++) {
    arrGame.push(arrGameColumn);
  }
  arrGame.push(arrGameColumnExtra);
  arrGame.push(arrGameColumnExtra);
  arrGame.push(arrGameColumnExtra);
  arrGame.unshift(arrGameColumnExtra);
  arrGame.unshift(arrGameColumnExtra);
  arrGame.unshift(arrGameColumnExtra);
  arrButtonGenerator(columnNumber);
  console.log(arrGame);
}

//arr for button

function arrButtonGenerator(columnNumber) {
  for (let i = 0; i < columnNumber; i++) {
    arrButtonPlayer1.push(`Button${i}Player1`);
    arrButtonPlayer2.push(`Button${i}Player2`);
  }
  console.log(arrButtonPlayer1);
  console.log(arrButtonPlayer2);
}
