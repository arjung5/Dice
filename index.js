
var randomNumber1=Math.floor(((Math.random()*6)+1));

var randomNumber2=Math.floor(((Math.random()*6)+1));
if(randomNumber1>randomNumber2){
	document.querySelector("h1").innerText="Player one wins"
}
else if(randomNumber2>randomNumber1){
	document.querySelector("h1").innerText="Player two wins"
}
else if(randomNumber1===randomNumber2)
{
	// if(randomNumber1>randomNumber2){
	document.querySelector("h1").innerText="Draw"
// }
}
var randondiceimage1= "images/dice"+randomNumber1+".png"
var randondiceimage2= "images/dice"+randomNumber2+".png"
document.querySelector(".img1").setAttribute("src",randondiceimage1);
document.querySelector(".img2").setAttribute("src",randondiceimage2);
