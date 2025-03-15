const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1);

    switch(randomNumber) {
        case 1:
            computerChoice = 'rock';
            break; 
        case 2:
            computerChoice = 'scissors'; 
            break;
        case 3:
            computerChoice = 'paper';
            break;
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw!';
    } else if (
        (computerChoice === 'rock' && userChoice === 'paper') ||
        (computerChoice === 'scissors' && userChoice === 'rock') ||
        (computerChoice === 'paper' && userChoice === 'scissors')
    ) {
        result = 'you win!';
    } else {
        result = 'you lose';
    }

    resultDisplay.innerHTML = result;
}
