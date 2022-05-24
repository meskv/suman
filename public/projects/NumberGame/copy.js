// functions
const appChild = (element, parent) => {
    parent.appendChild(element);
  };
  
  const getRandomNumber = (maxValue) => {
    return Math.floor(Math.random() * maxValue + 1);
  };
  
  const createTable = (tableSize) => {
    let k = 1;
    var table = document.createElement("table");
    for (var i = 1; i <= tableSize; i++) {
      var tr = document.createElement("tr");
      for (var j = 1; j <= tableSize; j++) {
        var td = document.createElement("td");
        td.classList.add("box");
        td.innerHTML = k;
        tr.appendChild(td);
  
        k++;
      }
      table.appendChild(tr);
    }
    document.body.appendChild(table);
  };
  
  // message
  const winMessage = (bool, val) => {
    document.body.innerHTML = "";
  
    const container = document.createElement("div");
    container.classList.add("container");
    const winHeading = document.createElement("h1");
    winHeading.classList.add("page-title");
    appChild(container, body);
    appChild(winHeading, body);
  
  
    const btn = document.createElement('button');
    btn.classList.add('btn, play-again');
    btn.innerHTML = "Play Again";
    appChild(btn, body);
  
    if (bool) {
      winHeading.innerHTML = "Congrats!! You won the Game!";
    } else {
      message = `"Oops!! Better luck next time \n! ${val} is correct number !`;
      winHeading.innerHTML = message;
  
    }
    
  
  };
  
  
  startGame :
  // selectors and create Element
  const body = document.querySelector("body");
  const pageTitle = document.createElement("h1");
  const container = document.createElement("div");
  const box = document.createElement("div");
  container.classList.add("container");
  
  // code
  pageTitle.innerHTML = "Number Guessing game";
  appChild(pageTitle, body);
  appChild(container, body);
  
  // creating table
  const tableSize = 8;
  var userValue;
  const randomNumber = getRandomNumber(tableSize * tableSize);
  console.log(randomNumber);
  
  const randomMsgText = document.createElement("h1");
  randomMsgText.classList.add("page-title");
  appChild(randomMsgText, body);
  
  // create table
  createTable(tableSize);
  
  const boxes = document.querySelectorAll(".box");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", (e) => {
      userValue = parseInt(e.target.innerHTML);
      if (userValue == randomNumber) {
        winMessage(true);
      } else {
        winMessage(false, randomNumber);
      }
    });
  }
  
  
  