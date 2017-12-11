var squareNb;
var timerNb;
var turnNb;
var squareIntru;
var intruIndex;
var index;
var tabColor = ["#f2dec1","#400d8a","#786f47","#251827","#1ae4a1","#5f26a9",
                "#227bbe","#0a7b9a","#c86eb9","#0afa0f","#f39c12",
                "#e67e22","#d35400",
                "#e74c3c","#c0392b",
                "#ecf0f1","#bdc3c7",
                "#95a5a6","#7f8c8d"]


function userSettings() {
  squareNb = document.querySelector("#settings__SquareNb").value;
  timerNb = document.querySelector("#settings__TimerNb").value;
  turnNb = document.querySelector("#settings__TurnNb").value;
}

function log() {
  console.log(squareNb);
  console.log(timerNb);
  console.log(turnNb);
}

// Générer des index aléatoires
function getRandomIndex() {
  intruIndex = Math.floor(Math.random()*squareNb);
  index = Math.floor(Math.random()*squareNb);

  while(intruIndex === index) {
    intruIndex = Math.floor(Math.random()*squareNb);
  }

  console.log(intruIndex);
  console.log(index);
}


// Générer un carré
function createSquare() {
    var newSquare = document.querySelector("#carre");
    newSquare.innerHTML = "";

    for(var i = 0; i < squareNb; i++) {
      var enfant = document.createElement("div");
      enfant.style.background = tabColor[index];
      newSquare.appendChild(enfant);
      //document.getElementById('carre').style.background = tabColor[intruIndex];
      //intru.setAttribute("id", "intruC");
      if(i == intruIndex) {
        enfant.style.background = tabColor[intruIndex];
      }
      }




  /*var intru = document.createElement("div");
    intru.style.background = tabColor[intruIndex];
    newSquare.appendChild(intru);*/


  }

  // addEventListener
