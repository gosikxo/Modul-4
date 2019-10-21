var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

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

function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'paper' && argComputerMove == 'rock') {
        printMessage('You win!');
    } else if (argPlayerMove === 'scissors' && argComputerMove == 'paper') {
        printMessage('You win!');
    } else if (argPlayerMove == 'rock' && argComputerMove == 'scissors') {
        printMessage('You win!');
    } else if (argPlayerMove == argComputerMove) {
        printMessage("It's a tie");
    }
    else {
        printMessage('You lose :(');
    }
    printMessage('I played ' + argComputerMove + ' and you played ' + argPlayerMove);
}



function buttonClicked(argButtonName) {
    clearMessages();
    playerMove = getMoveName(argButtonName);
    console.log('ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
    console.log(argButtonName + ' został kliknięty');
}

document.getElementById('button-rock').addEventListener('click', function () { buttonClicked(1) })
document.getElementById('button-paper').addEventListener('click', function () { buttonClicked(2) })
document.getElementById('button-scissors').addEventListener('click', function () { buttonClicked(3) })

