var randomNumber;
randomNumber = Math.floor(Math.random() * 3  + 1);

if (randomNumber==1) {
    printMessage('kamień');
} else if (randomNumber==2) {
    printMessage('papier');
} else {
    printMessage('nożyce');
}
var playerMove, playerInput;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
  playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'papier';
} else if (playerInput == '3') {
    playerMove = 'nożyce';
} else {
    playerMove = 'nieznany ruch';
}

if(playerMove !== 'nieznany ruch') {
    printMessage('Twój ruch: ' + playerMove);
} else {
    printMessage('Wpisana wartość jest błędna')
}