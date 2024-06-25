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
    tableTemp += `<div id="column${i}">${generatePower4Column()}</div>`;
  }
  arrGameGenerator(numberRow, numberColumn);
  power4.innerHTML = `<div class="topButton" > ${generateButton()}</div><div class="table">${tableTemp}</div>`;
  console.log(power4.innerHTML);
}

function generateButton() {
  var tableTemp2 = "";
  for (let i = 0; i < numberColumn; i++) {
    tableTemp2 += `<div class="topButtonIn" ><button id="${arrButtonPlayer1[i]}" name="btnPlayer" >add1</button>
<button id="${arrButtonPlayer2[i]}" name="btnPlayer">add2</button></div>`;
  }

  return tableTemp2;
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

/////////////// get id from generated button

const onClick = (event) => {
  if (event.target.name === "btnPlayer") {
    console.log(event.target.id);
  }
};
window.addEventListener("click", onClick);
