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
  arrToObject(columnNumber);
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

/// arr on object

function arrToObject(columnNumber) {
  arrGameObject = {};
  arrGameObject.column1 = arrGameColumnExtra;
  arrGameObject.column2 = arrGameColumnExtra;
  arrGameObject.column3 = arrGameColumnExtra;
  for (let i = 0; i < columnNumber; i++) {
    var index = 0;
    index = i + 4;
    console.log(index);
    columnObjectin(`column${index}`);
  }
  var index2 = parseInt(columnNumber);
  index2 += 4;
  columnObjectextra(`column${index2}`);
  index2++;
  columnObjectextra(`column${index2}`);
  index2++;
  columnObjectextra(`column${index2}`);
  console.log(arrGameObject);
}

var columnObjectextra = function (propertyName) {
  return (arrGameObject[propertyName] = arrGameColumnExtra);
};

var columnObjectin = function (propertyName) {
  return (arrGameObject[propertyName] = arrGameColumn);
};
