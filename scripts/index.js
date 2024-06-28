import { arrGameGenerator } from "./modules/arrgenerator.js";

/////////////////////////////////////////////////////////////////////////////////////

document.getElementById("rowColumnSubmit").addEventListener("click", () => {
  numberColumn = document.getElementById("numberOfColumn").value;
  numberRow = document.getElementById("numberOfRow").value;
  generatePower4all();
});

function generatePower4Column(numberColumnId) {
  var columnTemp = "";
  for (let i = 0; i < numberRow; i++) {
    columnTemp += `<div class="container"> 
  <div class="item item1"></div>
  <div class="item item2" id="${numberColumnId}item${i}"></div> 
  </div>`;
  }

  return columnTemp;
}

function generatePower4all() {
  var tableTemp = "";
  for (let i = 0; i < numberColumn; i++) {
    tableTemp += `<div id="column${i}">${generatePower4Column(i)}</div>`;
  }
  arrGameGenerator(numberRow, numberColumn);

  power4.innerHTML = `<div class="topButton" > ${generateButton()}</div><div class="table">${tableTemp}</div>`;
  //console.log(power4.innerHTML);
}

function generateButton() {
  var tableTemp2 = "";
  for (let i = 0; i < numberColumn; i++) {
    tableTemp2 += `<div class="topButtonIn" ><button class="P1" id="${arrButtonPlayer1[i]}" name="btnPlayer1" ><i class="arr-down"></i></button>
<button class="P2" id="${arrButtonPlayer2[i]}" name="btnPlayer2"><i class="arr-down"></i></button></div>`;
  }

  return tableTemp2;
}

function lastPlaycoordinate(columnSelect, ivalue) {
  arrCoord = [];
  arrCoord.push(columnSelect);
  arrCoord.push(ivalue - 1);
  console.log(arrCoord);
}

/////////////// get id from generated button

const clickGetId = (event) => {
  if (event.target.name === "btnPlayer1") {
    var columnSelect = parseInt(event.target.id.slice(-1));
    columnSelect += 3;
    cercleDownPlayer1(columnSelect);
  }
  if (event.target.name === "btnPlayer2") {
    var columnSelect = parseInt(event.target.id.slice(-1));
    columnSelect += 3;
    cercleDownPlayer2(columnSelect);
  }
};

/////////cercle down

function cercleDownPlayer1(columnSelect) {
  var i = 0;
  const tempDown = setInterval(() => {
    if (
      arrGame[columnSelect][i] === "x" ||
      arrGame[columnSelect][i] === "o" ||
      arrGame[columnSelect][i] === "B"
    ) {
      arrGame[columnSelect][i - 1] = "x";
      lastPlaycoordinate(columnSelect, i);

      checkhorizontalP1();
      checkVerticalP1();
      checkDiagonalP1();

      clearInterval(tempDown);
    } else if (i < arrZonecolumnId[0].length) {
      document.getElementById(
        arrZonecolumnId[columnSelect - 3][i]
      ).style.backgroundImage = Player1.jetton;
      if (i != 0) {
        document.getElementById(
          arrZonecolumnId[columnSelect - 3][i - 1]
        ).style.backgroundImage = "";
      }
      i++;
    } else {
      arrGame[0][i - 1] = "x";
      lastPlaycoordinate(columnSelect, i);

      checkhorizontalP1();
      checkVerticalP1();
      checkDiagonalP1();

      clearInterval(tempDown);
    }
  }, 200);
}
function cercleDownPlayer2(columnSelect) {
  var i = 0;
  const tempDown = setInterval(() => {
    if (
      arrGame[columnSelect][i] === "x" ||
      arrGame[columnSelect][i] === "o" ||
      arrGame[columnSelect][i] === "B"
    ) {
      arrGame[columnSelect][i - 1] = "o";
      lastPlaycoordinate(columnSelect, i);
      checkhorizontalP2();
      checkVerticalP2();
      checkDiagonalP2();

      clearInterval(tempDown);
    } else if (i < arrZonecolumnId[0].length) {
      document.getElementById(
        arrZonecolumnId[columnSelect - 3][i]
      ).style.backgroundImage = Player2.jetton;
      if (i != 0) {
        document.getElementById(
          arrZonecolumnId[columnSelect - 3][i - 1]
        ).style.backgroundImage = "";
      }
      i++;
    } else {
      arrGame[0][i - 1] = "o";
      lastPlaycoordinate(columnSelect, i);
      checkhorizontalP2();
      checkVerticalP2();
      checkDiagonalP2();

      clearInterval(tempDown);
    }
  }, 200);
}

window.addEventListener("click", clickGetId);

//////////////////////check victory section

function arrHorizontal() {
  var x = arrCoord[0];
  var y = arrCoord[1];
  var arrhorizontaltemp = [];

  arrhorizontaltemp = [
    arrGame[x - 3][y],
    arrGame[x - 2][y],
    arrGame[x - 1][y],
    arrGame[x][y],
    arrGame[x + 1][y],
    arrGame[x + 2][y],
    arrGame[x + 3][y],
  ];
  arrhorizontaltemp = JSON.parse(JSON.stringify(arrhorizontaltemp));

  return arrhorizontaltemp;
}

function arrVertical() {
  var x = arrCoord[0];
  var y = arrCoord[1];
  var arrVerticaltemp = [];

  arrVerticaltemp = [
    arrGame[x][y],
    arrGame[x][y + 1],
    arrGame[x][y + 2],
    arrGame[x][y + 3],
  ];

  arrVerticaltemp = JSON.parse(JSON.stringify(arrVerticaltemp));

  return arrVerticaltemp;
}

function arrDiagonal1() {
  var x = arrCoord[0];
  var y = arrCoord[1];
  var arrDiagonal1temp = [];

  arrDiagonal1temp = [
    arrGame[x - 3][y - 3],
    arrGame[x - 2][y - 2],
    arrGame[x - 1][y - 1],
    arrGame[x][y],
    arrGame[x + 1][y + 1],
    arrGame[x + 2][y + 2],
    arrGame[x + 3][y + 3],
  ];

  arrDiagonal1temp = JSON.parse(JSON.stringify(arrDiagonal1temp));
  return arrDiagonal1temp;
}

function arrDiagonal2() {
  var x = arrCoord[0];
  var y = arrCoord[1];
  var arrDiagonal2temp = [];

  arrDiagonal2temp = [
    arrGame[x - 3][y + 3],
    arrGame[x - 2][y + 2],
    arrGame[x - 1][y + 1],
    arrGame[x][y],
    arrGame[x + 1][y - 1],
    arrGame[x + 2][y - 2],
    arrGame[x + 3][y - 3],
  ];

  arrDiagonal2temp = JSON.parse(JSON.stringify(arrDiagonal2temp));
  return arrDiagonal2temp;
}

//////check horizontal

function checkhorizontalP1() {
  var arrtemp = arrHorizontal();

  if (
    arrtemp[0] === "x" &&
    arrtemp[1] === "x" &&
    arrtemp[2] === "x" &&
    arrtemp[3] === "x"
  ) {
    console.log("win P1");
  } else if (
    arrtemp[1] === "x" &&
    arrtemp[2] === "x" &&
    arrtemp[3] === "x" &&
    arrtemp[4] === "x"
  ) {
    console.log("win P1");
  } else if (
    arrtemp[2] === "x" &&
    arrtemp[3] === "x" &&
    arrtemp[4] === "x" &&
    arrtemp[5] === "x"
  ) {
    console.log("win P1");
  } else if (
    arrtemp[3] === "x" &&
    arrtemp[4] === "x" &&
    arrtemp[5] === "x" &&
    arrtemp[6] === "x"
  ) {
    console.log("win P1");
  }
}

function checkhorizontalP2() {
  var arrtemp = arrHorizontal();

  if (
    arrtemp[0] === "o" &&
    arrtemp[1] === "o" &&
    arrtemp[2] === "o" &&
    arrtemp[3] === "o"
  ) {
    console.log("win P2");
  } else if (
    arrtemp[1] === "o" &&
    arrtemp[2] === "o" &&
    arrtemp[3] === "o" &&
    arrtemp[4] === "o"
  ) {
    console.log("win P2");
  } else if (
    arrtemp[2] === "o" &&
    arrtemp[3] === "o" &&
    arrtemp[4] === "o" &&
    arrtemp[5] === "o"
  ) {
    console.log("win P2");
  } else if (
    arrtemp[3] === "o" &&
    arrtemp[4] === "o" &&
    arrtemp[5] === "o" &&
    arrtemp[6] === "o"
  ) {
    console.log("win P2");
  }
}

////// check vertical

function checkVerticalP1() {
  var arrtemp = arrVertical();

  if (
    arrtemp[0] === "x" &&
    arrtemp[1] === "x" &&
    arrtemp[2] === "x" &&
    arrtemp[3] === "x"
  ) {
    console.log("win P1");
  }
}

function checkVerticalP2() {
  var arrtemp = arrVertical();

  if (
    arrtemp[0] === "o" &&
    arrtemp[1] === "o" &&
    arrtemp[2] === "o" &&
    arrtemp[3] === "o"
  ) {
    console.log("win P2");
  }
}

//////// Check diagonal
function checkDiagonalP1() {
  var arrtemp = arrDiagonal1();
  var arrtemp2 = arrDiagonal2();
  if (
    arrtemp[0] === "x" &&
    arrtemp[1] === "x" &&
    arrtemp[2] === "x" &&
    arrtemp[3] === "x"
  ) {
    console.log("win P1");
  } else if (
    arrtemp[1] === "x" &&
    arrtemp[2] === "x" &&
    arrtemp[3] === "x" &&
    arrtemp[4] === "x"
  ) {
    console.log("win P1");
  } else if (
    arrtemp[2] === "x" &&
    arrtemp[3] === "x" &&
    arrtemp[4] === "x" &&
    arrtemp[5] === "x"
  ) {
    console.log("win P1");
  } else if (
    arrtemp[3] === "x" &&
    arrtemp[4] === "x" &&
    arrtemp[5] === "x" &&
    arrtemp[6] === "x"
  ) {
    console.log("win P1");
  } else if (
    arrtemp2[0] === "x" &&
    arrtemp2[1] === "x" &&
    arrtemp2[2] === "x" &&
    arrtemp2[3] === "x"
  ) {
    console.log("win P1");
  } else if (
    arrtemp2[1] === "x" &&
    arrtemp2[2] === "x" &&
    arrtemp2[3] === "x" &&
    arrtemp2[4] === "x"
  ) {
    console.log("win P1");
  } else if (
    arrtemp2[2] === "x" &&
    arrtemp2[3] === "x" &&
    arrtemp2[4] === "x" &&
    arrtemp2[5] === "x"
  ) {
    console.log("win P1");
  } else if (
    arrtemp2[3] === "x" &&
    arrtemp2[4] === "x" &&
    arrtemp2[5] === "x" &&
    arrtemp2[6] === "x"
  ) {
    console.log("win P1");
  }
}

function checkDiagonalP2() {
  var arrtemp = arrDiagonal1();
  var arrtemp2 = arrDiagonal2();
  if (
    arrtemp[0] === "o" &&
    arrtemp[1] === "o" &&
    arrtemp[2] === "o" &&
    arrtemp[3] === "o"
  ) {
    console.log("win P2");
  } else if (
    arrtemp[1] === "o" &&
    arrtemp[2] === "o" &&
    arrtemp[3] === "o" &&
    arrtemp[4] === "o"
  ) {
    console.log("win P2");
  } else if (
    arrtemp[2] === "o" &&
    arrtemp[3] === "o" &&
    arrtemp[4] === "o" &&
    arrtemp[5] === "o"
  ) {
    console.log("win P2");
  } else if (
    arrtemp[3] === "o" &&
    arrtemp[4] === "o" &&
    arrtemp[5] === "o" &&
    arrtemp[6] === "o"
  ) {
    console.log("win P2");
  } else if (
    arrtemp2[0] === "o" &&
    arrtemp2[1] === "o" &&
    arrtemp2[2] === "o" &&
    arrtemp2[3] === "o"
  ) {
    console.log("win P2");
  } else if (
    arrtemp2[1] === "o" &&
    arrtemp2[2] === "o" &&
    arrtemp2[3] === "o" &&
    arrtemp2[4] === "o"
  ) {
    console.log("win P2");
  } else if (
    arrtemp2[2] === "o" &&
    arrtemp2[3] === "o" &&
    arrtemp2[4] === "o" &&
    arrtemp2[5] === "o"
  ) {
    console.log("win P2");
  } else if (
    arrtemp2[3] === "o" &&
    arrtemp2[4] === "o" &&
    arrtemp2[5] === "o" &&
    arrtemp2[6] === "o"
  ) {
    console.log("win P2");
  }
}
