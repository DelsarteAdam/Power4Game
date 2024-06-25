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

function generatePower4Column() {
  var columnTemp = "";
  for (let i = 0; i < numberRow; i++) {
    columnTemp += item;
  }

  return columnTemp;
}

function generatePower4all() {
  var tableTemp = "";
  for (let i = 0; i < numberColumn; i++) {
    tableTemp += `<div class="column${i}">${generatePower4Column()}</div>`;
  }

  power4.innerHTML = `<div class="table">${tableTemp}</div>`;
  console.log(power4.innerHTML);

  arrGameGenerator(numberRow, numberColumn);
}

function cercleDownPlayer1() {
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

function cercleDownPlayer2() {
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
  .addEventListener("click", cercleDownPlayer1);
document
  .getElementById("columnAdd2")
  .addEventListener("click", cercleDownPlayer2);

function lastPlaycoordinate(ivalue) {
  arrStockTest = [];
  arrStockTest.push("column");
  arrStockTest.push(ivalue - 1);
  console.log(arrStockTest);
}
