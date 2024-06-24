let item =
  '<div class="container">' +
  '<div class="item item1"></div>' +
  '<div class="item item2"></div>' +
  "</div>";

let power4 = document.getElementById("power4");

let numberColumn = 0;
let numberRow = 0;

let arrGameColumn = [];
let arrGameColumnExtra = [];
let arrGame = [];

let arrTest = ["item00", "item01", "item02", "item03", "item04", "item05"];
let arrTestPosition = [0, 1, 2, 3, 4, 5];

/////////////////////////////////////////////////////////////////////////////////////
//array game generator

//extra column rule for check victory and boundary
function columnExtra() {
  for (let i = 0; i < numberRow; i++) {
    arrGameColumnExtra.push("B");
  }
  arrGameColumnExtra.push("B");
  arrGameColumnExtra.push("B");
  arrGameColumnExtra.push("B");
  console.log(arrGameColumnExtra);
}

function arrGameGeneratorcolumn() {
  for (let i = 0; i < numberRow; i++) {
    arrGameColumn.push("");
  }
  arrGameColumn.push("B");
  arrGameColumn.push("B");
  arrGameColumn.push("B");
  console.log(arrGameColumn);
}

function arrGameGenerator() {
  columnExtra();
  arrGameGeneratorcolumn();
  for (let i = 0; i < numberColumn; i++) {
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

  arrGameGenerator();
}

function cercleDownWhite() {
  var i = 0;
  const tempDown = setInterval(() => {
    if (arrTestPosition[i] === "x" || arrTestPosition[i] === "o") {
      arrTestPosition[i - 1] = "x";
      console.log(arrTestPosition);
      clearInterval(tempDown);
    } else if (i < arrTest.length) {
      document.getElementById(arrTest[i]).style.backgroundImage =
        "url(../images/jetton2.png)";
      if (i != 0) {
        document.getElementById(arrTest[i - 1]).style.backgroundImage = "";
      }
      i++;
    } else {
      arrTestPosition[i - 1] = "x";
      console.log(arrTestPosition);
      clearInterval(tempDown);
    }
  }, 200);
}

function cercleDownBlue() {
  var i = 0;
  const tempDown = setInterval(() => {
    if (arrTestPosition[i] === "x" || arrTestPosition[i] === "o") {
      arrTestPosition[i - 1] = "o";
      console.log(arrTestPosition);
      clearInterval(tempDown);
    } else if (i < arrTest.length) {
      document.getElementById(arrTest[i]).style.backgroundImage =
        "url(../images/jetton3.png)";
      if (i != 0) {
        document.getElementById(arrTest[i - 1]).style.backgroundImage = "";
      }
      i++;
    } else {
      arrTestPosition[i - 1] = "o";
      console.log(arrTestPosition);
      clearInterval(tempDown);
    }
  }, 200);
}

document
  .getElementById("columnAdd1")
  .addEventListener("click", cercleDownWhite);
document.getElementById("columnAdd2").addEventListener("click", cercleDownBlue);
