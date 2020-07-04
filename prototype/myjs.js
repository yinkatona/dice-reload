//For the first dice
//to generate random number for the first dice of six sides
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

//to access the image file that enable each dice image to be render when called. Note also that images are all stored in a folder and so must be included in the string concatenated below
var randomDiceImage = "images/dice" + randomNumber1 + ".png";

//To change each dice image based on the generated random number.
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);

//...and now the second dice
//to generate random number for the first dice of six sides
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//to access the image file that enable each dice image to be render when called. Note also that images are all stored in a folder and so must be included in the string concatenated below
var randomDiceImage = "images/dice" + randomNumber2 + ".png";

//To change each dice image based on the generated random number.
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage);

//At this stage the must be changing but in order to make the heading display the result...we target by if statement

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player1 wins"
}else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML = "Player2 wins🚩"
}else{
  document.querySelector("h1").innerHTML = "Draw!!!🎌"
}