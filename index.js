var randomNumber1 = Math.floor(Math.random()*6)+1; // genrate a random no. for dice 1

var randomImage1 = "images/dice"+randomNumber1+".png"; // get the image no. of that random no. genreaated

document.querySelectorAll("img")[0].setAttribute("src" , randomImage1); // change the value of dice


var randomNumber2 = Math.floor(Math.random()*6)+1; // genrate a random no. for dice 2

var randomImage2 = "images/dice"+randomNumber2+".png"; // get the image no. of that random no. genreaated

document.querySelectorAll("img")[1].setAttribute("src" , randomImage2); // change the value of dice

// p1 win
if(randomNumber2 < randomNumber1){

    document.querySelector("h1").innerHTML="Player 1 wins";

} else if(randomNumber2 > randomNumber1){

    document.querySelector("h1").innerHTML="Player 2 wins";

}else{

    document.querySelector("h1").innerHTML="draw";
}