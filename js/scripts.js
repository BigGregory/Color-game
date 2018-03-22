var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
  setupModeButtons();
  setupSquares();
  reset();
}

// Reset and Play Again Button
resetButton.addEventListener("click", function(){
  reset();
});

//---------------------------
function setupModeButtons(){
  // Setup Mode Buttons Listeners
  for(var i=0; i<modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      if (this.textContent === "Easy") {
        numSquares = 3;
      } else {
        numSquares = 6;
      }
      reset();
    });
  }
}
//-----------------------------

function setupSquares(){
  // Setup Squares Listeners
  for(var i=0; i<squares.length; i++) {
    squares[i].addEventListener("click", function(){
      // compare clicked color with picked color
      var clickedColor = this.style.background;
      if(clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.background = clickedColor;
      } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try Again!";
      }
    });
  }
}

//-----------------------------
function reset() {
  // generate new colors
  colors = generateRandomColors(numSquares);
  // pick a new random color from array
  pickedColor = pickColor();
  // change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  // change colors of squares
  for (var i=0; i<squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }

  }
  // set h1 background
  h1.style.background = "steelblue";
  messageDisplay.textContent = "";
}
//-------------------------------
function changeColors(color){
  // loop through all sqaures
  for(var i=0; i<squares.length; i++) {
    // change each color to match given color
    squares[i].style.background = color;
  }
}
//-------------------------------
function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
//-------------------------------
function generateRandomColors(num){
  // make an array
  var arr = [];
  // repeat num times
  for(var i=0; i<num; i++){
    //get random color and push into array
    arr.push(randomColor());
  }
  // return that array
  return arr;
}
//-------------------------------
function randomColor(){
  // pick red, green, blue from 0-255
  var red = Math.floor(Math.random()*256);
  var green = Math.floor(Math.random()*256);
  var blue = Math.floor(Math.random()*256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}
