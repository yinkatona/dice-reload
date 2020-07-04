
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImageSource = "images/dice" +randomNumber1+ ".png";//dice1.png-dice6.png

document.querySelectorAll("img")[0].setAttribute("src" , randomImageSource); 

var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;

var randomImageSource = "images/dice" +randomNumber2+ ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource);  

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="🚩Player1 win!"
}else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML="Player2 win!🚩"
}else{
  document.querySelector("h1").innerHTML= "Its a Draw!!!"
}

