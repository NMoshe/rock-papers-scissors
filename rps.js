let countWin = 0;
let countLose = 0;

function restartGame(click) {
    /*if start is clicked everything is visible, set to 0 and request a name*/
    if (click === "start") {
        countLose = 0;
        document.getElementById("playerCount").innerHTML = countLose;
        countWin = 0;
        document.getElementById("computerCount").innerHTML = countWin;
        document.getElementById("iconsPlayer").style.display = "block";
        document.getElementById("iconsComputer").style.display = "block";
        document.getElementById("result").style.fontSize = "20px";
        document.getElementById("result").innerHTML = "";
        r = 0;
    } else {
        if (countWin > countLose) {
            showResult("You Win!");
        } else if (countWin < countLose) {
            showResult("You Lose!");
        } else {
            showResult("Draw!");
        }
    }
}

function randomComp(get) {
    let userSelection = get;
    let compSelection = "";
    let i = Math.floor(Math.random() * 30);
    if (i < 30 && i > 19) {
        compSelection = "Rock";
    } else if (i < 20 && i > 9) {
        compSelection = "Paper";
    } else {
        compSelection = "Scissors";
    }
    playGame(userSelection, compSelection);
}

function playGame(user, computer) {
    if (user === computer) {
        funcForAnimation(computer);
        document.getElementById("result").innerHTML = "Draw!<br> Computer selected " + computer;
    } else if (user === "Rock" && computer === "Scissors") {
        funcForAnimation(computer);
        document.getElementById("result").innerHTML = "You Win!<br>" + user + " beats " + computer;
        ++countWin;
        document.getElementById("playerCount").innerHTML = countWin;
    } else if (user === "Rock" && computer === "Paper") {
        funcForAnimation(computer);
        document.getElementById("result").innerHTML = "You Lose!<br>" + computer + " beats " + user;
        ++countLose;
        document.getElementById("computerCount").innerHTML = countLose;
    } else if (user === "Scissors" && computer === "Rock") {
        funcForAnimation(computer);
        document.getElementById("result").innerHTML = "You Lose!<br>" + computer + " beats " + user;
        ++countLose;
        document.getElementById("computerCount").innerHTML = countLose;
    } else if (user === "Scissors" && computer === "Paper") {
        funcForAnimation(computer);
        document.getElementById("result").innerHTML = "You Win!<br>" + user + " beats " + computer;
        ++countWin;
        document.getElementById("playerCount").innerHTML = countWin;
    } else if (user === "Paper" && computer === "Rock") {
        funcForAnimation(computer);
        document.getElementById("result").innerHTML = "You Win!<br>" + user + " beats " + computer;
        ++countWin;
        document.getElementById("playerCount").innerHTML = countWin;
    } else {
        funcForAnimation(computer);
        document.getElementById("result").innerHTML = "You Lose!<br>" + computer + " beats " + user;
        ++countLose;
        document.getElementById("computerCount").innerHTML = countLose;
    }
}

function gameOver() {
    if (countWin = 5 || (countLose = 5)) {
        setTimeout(restartGame, 1800);
    }
}

function funcForAnimation(funcTarget) {
    document.getElementById(funcTarget).classList.add("animClass");
    setTimeout(classRemover, 1100, funcTarget);
}

function classRemover(funcTarget) {
    document.getElementById(funcTarget).classList.remove("animClass");
}