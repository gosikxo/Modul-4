var playerWins = 0, computerWins = 0;

function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
        return 'rock';
    } else if (argMoveId == 2) {
        return 'paper';
    } else if (argMoveId == 3) {
        return 'scissors';
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
        return 'kamień';
    }
}

function displayResult(result, computerMove, playerMove) {
    switch(result) {
        case 'player':
            printMessage('You win!');
            break;
        case 'computer': 
            printMessage('You lose :(');
            break;
        case 'tie':
            printMessage("It's a tie");
            break;
    }
    printMessage('I played ' + computerMove + ' and you played ' + playerMove);
}

function getResult(playerMove, computerMove) {
    if (playerMove == 'paper' && computerMove == 'rock') {
        return 'player';
    } else if (playerMove === 'scissors' && computerMove == 'paper') {
        return 'player';
    } else if (playerMove == 'rock' && computerMove == 'scissors') {
        return 'player';
    } else if (playerMove == computerMove) {
        return 'tie';
    } else {
        return 'computer';
    }
}



function buttonClicked(buttonOfChoice) {
    clearMessages();
    var playerMove = getMoveName(buttonOfChoice);
    var randomNumber = Math.floor(Math.random() * 3 + 1);
    var computerMove = getMoveName(randomNumber);
    var result = getResult(playerMove, computerMove);
    changeScore(result);
    displayResult(result, computerMove, playerMove);
    printScore('Player: ' +playerWins + ' - Computer: ' + computerWins);
}

function printScore(score) {
    document.getElementById('results').innerText = score;
}

function changeScore(whoWon) {
    if (whoWon === 'computer') {
        // computerWins = computerWins + 1
        computerWins += 1;
    }

    if (whoWon === 'player') {
        playerWins += 1;
    }
}

document.getElementById('button-rock').addEventListener('click', function () { buttonClicked(1) })
document.getElementById('button-paper').addEventListener('click', function () { buttonClicked(2) })
document.getElementById('button-scissors').addEventListener('click', function () { buttonClicked(3) })

