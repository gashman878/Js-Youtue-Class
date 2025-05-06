let score = JSON.parse(localStorage.getItem('score'));

if (score === null){
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
}

function pickComputerMove() {
    const random = Math.random();
    if (random <= 1/3){
        computerMove = "Rock";
    }else if(random > 1/3 && random < 2/3){
        computerMove = "Paper";
    }else{
        computerMove = "Scissors";
    }
    return computerMove;
}

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';
    if (playerMove === "Rock") {
        if (computerMove === "Rock") {
            result = "Tie";
        } else if(computerMove === "Paper"){
            result = "You Lose";
        } else if(computerMove === "Scissors"){
            result = "You Win";
        }

    } else if(playerMove === "Paper") {
        if (computerMove === "Rock") {
            result = "You Win";
        } else if(computerMove === "Paper"){
            result = "Tie";
        } else if(computerMove === "Scissors"){
            result = "You Lose";
        }

    } else if(playerMove === "Scissors"){
        if (computerMove === "Rock") {
            result = "You Lose";
        } else if(computerMove === "Paper"){
            result = "You Win";
        } else if(computerMove === "Scissors"){
            result = "Tie";
        }
    }
    document.getElementById('please').style.display = "block";
    document.getElementById('please').innerHTML = "Computer Picks " + computerMove + ", " + result;

    localStorage.setItem('score', JSON.stringify(score));

    if (result === "You Win") {
        score.wins ++;
        document.getElementById('won').innerHTML = score.wins;
    } else if(result === "You Lose"){
        score.losses ++;
        document.getElementById('lost').innerHTML = score.losses;
    } else if(result === "Tie"){
        score.ties ++;
        document.getElementById('tie').innerHTML = score.ties;
    }
}
function reset() {
    score.losses = 0;
    score.ties = 0;
    score.wins = 0;
    document.getElementById('won').innerHTML = score.wins;
    document.getElementById('lost').innerHTML = score.losses;
    document.getElementById('tie').innerHTML = score.ties;
    document.getElementById('please').style.display = "none";
    localStorage.removeItem('score');
}

























// FOR THE CART
let cartItem = 0;
function addCart() {
    cartItem++;
    document.getElementById('cartItem').innerHTML = "You have " + cartItem + " item(s) in your cart";
}
function plus2() {
    cartItem += 2;
    document.getElementById('cartItem').innerHTML = "You have " + cartItem + " item(s) in your cart";
}
function plus3() {
    cartItem += 3;
    document.getElementById('cartItem').innerHTML = "You have " + cartItem + " item(s) in your cart";
}
function resetCart() {
    cartItem = 0;
    document.getElementById('cartItem').innerHTML = "Your cart has been reset to " + cartItem + " items";
}