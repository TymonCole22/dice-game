function generateNum () {
    return Math.floor(Math.random() * 6 + 1); // returns num 1 - 6 inclusive
}

function compareNums (num1, num2) {
    if(num1 == num2) {
        return "Its a Tie!";
    } else if (num1 > num2) {
        return "Player1 Wins!";
    } else {
        return "Player2 Wins!";
    }
}

// generate random nums for dice selection 
var dice1Num = generateNum();
var dice2Num = generateNum();

// create string used to select dice image for query
var dice1Image = "./resources/images/dice" + dice1Num + ".png";
var dice2Image = "./resources/images/dice" + dice2Num + ".png";

// generate string used to update h2 element after winner determined
var displayWinner = compareNums(dice1Num, dice2Num);

// update dice images
document.querySelector(".img1").setAttribute("src", dice1Image);
document.querySelector(".img2").setAttribute("src", dice2Image);

// update h2 element innerHTML
document.querySelector("h2").innerHTML = displayWinner;