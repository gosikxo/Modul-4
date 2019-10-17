var randomNumber;
randomNumber = Math.floor(Math.random() * 3  + 1);

if (randomNumber==1) {
    printMessage('kamień');
} else if (randomNumber==2) {
    printMessage('papier');
} else {
    printMessage('nożyce');
}
