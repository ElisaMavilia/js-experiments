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

let userChoise = '';
const computerChoise = saveNumsAndConvert();

function matchResult() {
    userChoise = prompt('Insert your choise').toLowerCase();

    if (userChoise !== 'rock' && userChoise !== 'scissors' && userChoise !== 'paper') {
        userChoise = prompt('Invalid input. Please insert either "rock", "scissors", or "paper":');
    }
    console.log('User:', userChoise);
    
    if (userChoise === "scissors" && computerChoise === "rock") {
        console.log(`Computer wins! Rock wins over Scissors`);
    } else if (userChoise === "scissors" && computerChoise === "paper") {
        console.log(`User wins! Scissors wins over Paper`);
    } else if (userChoise === "rock" && computerChoise === "paper") {
        console.log(`Computer wins! Paper wins over Rock`);
    } else if (userChoise === "rock" && computerChoise === "scissors") {
        console.log(`User wins! Rock wins over Scissors`);
    } else if (userChoise === "paper" && computerChoise === "scissors") {
        console.log(`Computer wins! Scissors wins over Paper`);
    } else if (userChoise === "paper" && computerChoise === "rock") {
        console.log(`User wins! Paper wins over Rock`);
    } else if (userChoise === computerChoise) {
        console.log('Fair! Try again...');
    }

}

const result = matchResult();







