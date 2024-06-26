/////////////////////////////////////////////////////////////////////////////////////

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
  arrGameColumn = [];
  arrZoneGenerator(rowNumber, columnNumber);
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

  arrButtonGenerator(columnNumber);
  console.log(arrGame);
}

//arr for button

function arrButtonGenerator(columnNumber) {
  for (let i = 0; i < columnNumber; i++) {
    arrButtonPlayer1.push(`Button${i}`);
    arrButtonPlayer2.push(`Button${i}`);
  }
  console.log(arrButtonPlayer1);
  console.log(arrButtonPlayer2);
}

function arrZoneGenerator(columnNumber, rowNumber) {
  console.log(rowNumber);
  for (let a = 0; a < columnNumber; a++) {
    arrZonecolumnId.push(arrZoneGeneratorRow(a, rowNumber));
  }
  console.log(arrZonecolumnId);
}

function arrZoneGeneratorRow(columnID, rowNumber) {
  var tempArrZone = [];
  for (let i = 0; i < rowNumber; i++) {
    tempArrZone.push(`${columnID}item${i}`);
  }
  return tempArrZone;
}
