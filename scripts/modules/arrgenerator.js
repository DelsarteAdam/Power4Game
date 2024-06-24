/////////////////////////////////////////////////////////////////////////////////////
//array game generator
export let arrGameColumn = [];
export let arrGameColumnExtra = [];
export let arrGame = [];
//extra column rule for check victory and boundary
export function columnExtra(rowNumber) {
  for (let i = 0; i < rowNumber; i++) {
    arrGameColumnExtra.push("B");
  }
  arrGameColumnExtra.push("B");
  arrGameColumnExtra.push("B");
  arrGameColumnExtra.push("B");
  console.log(arrGameColumnExtra);
}

export function arrGameGeneratorcolumn(rowNumber) {
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
  console.log(arrGame);
}
