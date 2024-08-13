'use strict'; 

// SCISSORS, ROCK, PAPER

function saveNumsAndConvert(){

    const num =  Math.floor((Math.random()*3)+1);

    if (num === 1){
        console.log('scissors');
    } else if(num === 2){
        console.log('rock');
    } else if(num === 3){
        console.log('paper');
    }

    return num;
}

const conversion = saveNumsAndConvert();





