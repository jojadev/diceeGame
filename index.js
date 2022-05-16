var randomnumber1 = Math.floor(Math.random() * 6 + 1);

var dice1 = document.getElementById("dice1");
dice1.setAttribute("src", `images/dice${randomnumber1}.png`);

var randomnumber2 = Math.floor(Math.random() * 6 + 1);


var dice2 = document.getElementById("dice2");
dice2.setAttribute("src", `images/dice${randomnumber2}.png`);

var results = document.getElementById("results-banner");

if (randomnumber1 > randomnumber2) {
  results.innerHTML = "Player 1 Wins!!";
}

if (randomnumber1 < randomnumber2) {
  results.innerHTML = "Player 2 Wins!!";
}

if (randomnumber1 === randomnumber2) {
  results.innerHTML = "Draw Game!!";
}
