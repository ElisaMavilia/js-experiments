'use strict';

// SCISSORS, ROCK, PAPER

function saveNumsAndConvert() {

    let num = Math.floor((Math.random() * 3) + 1);

    if (num === 1) {
        num = 'scissors'
        console.log('Computer:', num);
    } else if (num === 2) {
        num = 'rock'
        console.log('Computer:', num);
    } else if (num === 3) {
        num = 'paper'
        console.log('Computer:', num);
    }
    return num;
}

let userChoice = '';
const computerChoice = saveNumsAndConvert();

function matchResult() {
    userChoice = prompt('Insert your choise').toLowerCase();

    if (userChoice !== 'rock' && userChoice !== 'scissors' && userChoice !== 'paper') {
        userChoice = prompt('Invalid input. Please insert either "rock", "scissors", or "paper":');
    }
    console.log('User:', userChoice);
    
    if (userChoice === "scissors" && computerChoice === "rock") {
        console.log(`Computer wins! Rock wins over Scissors`);
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        console.log(`User wins! Scissors wins over Paper`);
    } else if (userChoice === "rock" && computerChoice === "paper") {
        console.log(`Computer wins! Paper wins over Rock`);
    } else if (userChoice === "rock" && computerChoice === "scissors") {
        console.log(`User wins! Rock wins over Scissors`);
    } else if (userChoice === "paper" && computerChoice === "scissors") {
        console.log(`Computer wins! Scissors wins over Paper`);
    } else if (userChoice === "paper" && computerChoice === "rock") {
        console.log(`User wins! Paper wins over Rock`);
    } else if (userChoice === computerChoice) {
        console.log('Fair! Try again...');
    }
}

const result = matchResult();







