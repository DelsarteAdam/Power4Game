import { arrGameGenerator } from "./modules/arrgenerator.js";

let arrTest = ["item00", "item01", "item02", "item03", "item04", "item05"];
let arrTestPosition = [[0, 1, 2, 3, 4, 5]];
let arrStockTest = [];

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
    tableTemp2 += `<div class="topButtonIn" ><button id="${arrButtonPlayer1[i]}" name="btnPlayer1" >add1</button>
<button id="${arrButtonPlayer2[i]}" name="btnPlayer2">add2</button></div>`;
  }

  return tableTemp2;
}

function cercleDownPlayer1temp() {
  var i = 0;
  const tempDown = setInterval(() => {
    if (arrTestPosition[0][i] === "x" || arrTestPosition[0][i] === "o") {
      arrTestPosition[0][i - 1] = "x";
      lastPlaycoordinate(i);
      console.log(arrTestPosition);
      clearInterval(tempDown);
    } else if (i < arrTest.length) {
      document.getElementById(arrTest[i]).style.backgroundImage =
        Player1.jetton;
      if (i != 0) {
        document.getElementById(arrTest[i - 1]).style.backgroundImage = "";
      }
      i++;
    } else {
      arrTestPosition[0][i - 1] = "x";
      lastPlaycoordinate(i);
      console.log(arrTestPosition);
      clearInterval(tempDown);
    }
  }, 200);
}

function cercleDownPlayer2temp() {
  var i = 0;
  const tempDown = setInterval(() => {
    if (arrTestPosition[0][i] === "x" || arrTestPosition[0][i] === "o") {
      arrTestPosition[0][i - 1] = "o";
      lastPlaycoordinate(i);
      console.log(arrTestPosition);
      clearInterval(tempDown);
    } else if (i < arrTest.length) {
      document.getElementById(arrTest[i]).style.backgroundImage =
        Player2.jetton;
      if (i != 0) {
        document.getElementById(arrTest[i - 1]).style.backgroundImage = "";
      }
      i++;
    } else {
      arrTestPosition[0][i - 1] = "o";
      lastPlaycoordinate(i);
      console.log(arrTestPosition);
      clearInterval(tempDown);
    }
  }, 200);
}

document
  .getElementById("columnAdd1")
  .addEventListener("click", cercleDownPlayer1temp);
document
  .getElementById("columnAdd2")
  .addEventListener("click", cercleDownPlayer2temp);

function lastPlaycoordinate(columnSelect, ivalue) {
  arrStockTest = [];
  arrStockTest.push(columnSelect);
  arrStockTest.push(ivalue - 1);
  console.log(arrStockTest);
}

/////////////// get id from generated button

const clickGetId = (event) => {
  if (event.target.name === "btnPlayer1") {
    var columnSelect = parseInt(event.target.id.slice(-1));
    columnSelect += 3;
    console.log(columnSelect);
    cercleDownPlayer1(columnSelect);
  }
  if (event.target.name === "btnPlayer2") {
    var columnSelect = parseInt(event.target.id.slice(-1));
    columnSelect += 3;
    console.log(columnSelect);
    cercleDownPlayer2(columnSelect);
  }
};
window.addEventListener("click", clickGetId);

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
      console.log(arrGame);
      clearInterval(tempDown);
    } else if (i < arrTest.length) {
      document.getElementById(arrZonecolumnId[i]).style.backgroundImage =
        Player1.jetton;
      if (i != 0) {
        document.getElementById(arrZonecolumnId[i - 1]).style.backgroundImage =
          "";
      }
      i++;
    } else {
      arrGame[0][i - 1] = "x";
      lastPlaycoordinate(columnSelect, i);
      console.log(arrGame);
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
      console.log(arrGame);
      clearInterval(tempDown);
    } else if (i < arrTest.length) {
      document.getElementById(arrZonecolumnId[i]).style.backgroundImage =
        Player2.jetton;
      if (i != 0) {
        document.getElementById(arrZonecolumnId[i - 1]).style.backgroundImage =
          "";
      }
      i++;
    } else {
      arrGame[0][i - 1] = "o";
      lastPlaycoordinate(columnSelect, i);
      console.log(arrGame);
      clearInterval(tempDown);
    }
  }, 200);
}
