let item =
  '<div class="container">' +
  '<div class="item item1">item 1</div>' +
  '<div class="item item2">item 2</div>' +
  "</div>";

let power4 = document.getElementById("power4");

let numberColumn = 0;
let numberRow = 0;

let arrTest = ["item00", "item01", "item02", "item03", "item04", "item05"];

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
}

function cercleDown() {
  var i = 0;
  const tempDown = setInterval(() => {
    if (i < arrTest.length) {
      console.log(i);
      document.getElementById(arrTest[i]).style.backgroundColor = "#ffffff";
      if (i != 0) {
        document.getElementById(arrTest[i - 1]).style.backgroundColor = "";
      }
      i++;
    } else {
      console.log("test");
      clearInterval(tempDown);
    }
  }, 1000);
}

document.getElementById("columnAdd1").addEventListener("click", cercleDown);
