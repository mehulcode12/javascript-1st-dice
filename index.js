var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

console.log(randomNumber1);
console.log(randomNumber2);

var p1 = "/images/dice"+randomNumber1+".png";
var p2 = "/images/dice"+randomNumber2+".png";

if (randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Won";
    document.querySelectorAll("img")[0].setAttribute("src", p1);
    document.querySelectorAll("img")[1].setAttribute("src", p2);
}
else{
    document.querySelector("h1").textContent = "Player 2 Won";
    document.querySelectorAll("img")[0].setAttribute("src", p1);
    document.querySelectorAll("img")[1].setAttribute("src", p2);
}
if (randomNumber1==randomNumber2){
    document.querySelector("h1").textContent = "Its a tie!";
    document.querySelectorAll("img")[0].setAttribute("src", p1);
    document.querySelectorAll("img")[1].setAttribute("src", p2);
}