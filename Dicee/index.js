var randomnumber1 = Math.floor(Math.random() * 6 + 1);

var dice1 = document.getElementById("dice1");
dice1.setAttribute("src", `images/dice${randomnumber1}.png`);

var randomnumber2 = Math.floor(Math.random() * 6 + 1);


var dice2 = document.getElementById("dice2");
dice2.setAttribute("src", `images/dice${randomnumber2}.png`);
