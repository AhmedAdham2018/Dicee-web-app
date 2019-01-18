
var randomNum1 = Math.random() * 6 + 1;
randomNum1 = Math.floor(randomNum1);
console.log("Num1 : " + randomNum1);


var randomNum2 = Math.random() * 6 + 1;
randomNum2 = Math.floor(randomNum2);
console.log("Num2 : " + randomNum2);
//change img number 1.

var imgName1 = "images/dice" + randomNum1 + ".png";
var element = document.getElementsByClassName('img1');
element[0].src = imgName1;

//change img number 2.

var imgName2 = "images/dice" + randomNum2 + ".png";
var element = document.getElementsByClassName('img2');
element[0].src = imgName2;

//Check who player had won.

var headElement = document.getElementById('headElement');
if (randomNum1 > randomNum2){
  headElement.innerHTML = "🚩 Player 1 win";

} else if (randomNum1 < randomNum2){
  headElement.textContent = "Player 2 win 🚩";
} else {
  headElement.textContent = "Draw!";
}
