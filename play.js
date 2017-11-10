var inquirer = require('inquirer');
var Word = require('./word');
var word = '';


function play() {
    word = new Word();
    console.log(word.converted());
    game();
}

function game() {
    inquirer.prompt([
        {
        type: 'input',
        name: 'userGuess',
        message: 'Guess a letter: ',
        }
    ]).then(function(guess) {

        var guess = guess.userGuess;

        // check the letter chosen and print out result
        console.log(word.checkLetter(guess));
        checkWin(word.hiddenWord, word.attempt);
    });
}
function checkWin(word, attempt) {

    var hiddenLetter = word.includes('_');

    // if user has 0 attempt left
    if (attempt == 0) {
        console.log("No more guesses!");
    }
    // if user has won
    else if (!hiddenLetter) {
        console.log("Winner Winner, Chicken Dinner!");
    }
    else {
        game();
    }
}

play();