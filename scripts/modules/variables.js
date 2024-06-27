let item =
  '<div class="container">' +
  '<div class="item item1"></div>' +
  '<div class="item item2"></div>' +
  "</div>";

let power4 = document.getElementById("power4");

let numberColumn = 0;
let numberRow = 0;

let arrJetton = [
  "url(../images/jetton1.png)",
  "url(../images/jetton2.png)",
  "url(../images/jetton3.png)",
  "url(../images/jetton4.png)",
];

let Player1 = {
  name: "",
  order: 0,
  jetton: "url(../images/jetton2.png)",
  ia: false,
};
let Player2 = {
  name: "",
  order: 0,
  jetton: "url(../images/jetton3.png)",
  ia: false,
};

//array game generator
let arrGameColumn = [];
let arrGameColumnExtra = [];
let arrGame = [];
let arrButtonPlayer1 = [];
let arrButtonPlayer2 = [];
let arrZonecolumnId = [];

let arrCoord = [];
