'use strict'; 

// SCISSORS, ROCK, PAPER

function saveNumsAndConvert(){

    let num =  Math.floor((Math.random()*3)+1);

    if (num === 1){
        num = 'scissors'
        console.log(num);
    } else if(num === 2){
        num = 'rock'
        console.log(num);
    } else if(num === 3){
        num = 'paper'
        console.log(num);
    }

    return num;
}

/* const conversion = saveNumsAndConvert(); */


function userMatch(){

    const userOne = saveNumsAndConvert();
    const userTwo = saveNumsAndConvert();

   if(userOne === "scissors" && userTwo === "rock"){
    console.log(`User 2 wins! Rock wins over the Scissors`);
   } else if (userOne === "scissors" && userTwo=== "paper"){
    console.log(`User 1 wins! Scissors wins over the Paper`);
   } else if (userOne === "rock" && userTwo === "paper"){
    console.log(`User 2 wins! Paper wins over the rock`);
    } else if (userOne === "rock" && userTwo === "scissors"){
        console.log(`User 1 wins! Rock wins over the Scissors`);
    } else if(userOne === "paper" && userTwo === "scissors"){
        console.log(`User 2 wins! Scissors wins over the Paper`);
    } else if (userOne === "paper" && userTwo === "rock"){
        console.log(`User 1 wins! Paper wins over the rock`);
    } else if (userOne === userTwo){
        console.log('Pareggio! Try again...');
    }
}

const result = userMatch();




