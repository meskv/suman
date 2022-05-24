const initialColors = [
  "#9ED1B6",
  "#21A0B1",
  "#B1F7B4",
  "#69215F",
  "#D4491B",
  "#45C5F9",
];
const colorArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

// random number generator
random = (maxValue) => {
  return Math.floor(Math.random() * maxValue);
};

// chnage color
const changeColor = () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += colorArray[random(colorArray.length)];
  }
  console.log(color);
  return color;
};

const copyText = (cname) => {
  let text = document.querySelector(cname);
  text.select();
  text.setSelectionRange(0, 8);
  navigator.clipboard.writeText(text.value);
  message = `${text.select()} is copied`;

  alert(message);
};

const change = () => {
  for (index in colorPalletes) {
    colorPalletes[index].style.backgroundColor = changeColor();
    colorInfo[index].innerHTML = changeColor();
  }
};

const changeBtn = document.querySelector(".change-btn");
const colorPalletes = document.querySelectorAll(".pallete");
const palleteInfo = document.querySelectorAll(".pallete-info");
const colorInfo = document.querySelectorAll(".color-info");

// onclick event
changeBtn.addEventListener("click", () => {
  change();
});

// spacebar or enter key
document.body.onkeyup = function (e) {
  if (e.keyCode == 32 || e.keyCode == 13) {
    change();
  }
};
