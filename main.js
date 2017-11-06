var Word = require('./word.js');
var Letter = require('./letter.js');
var inquirer = require('inquirer');
var array = [];

word = new Word;
letter = new Letter;

function play(){
letter.ask();
};

function presentWord(array){
console.log(array);
};

function checkLetters() {

  var letterInWord = false;

  for (var i = 0; i < numBlanks; i++) {
    if (chosenWord[i].toLowerCase() === guessed) {
      letterInWord = true;
      return letterInWord;
    }
  }
};


word.createWord();
word.countBlanks();
play();
presentWord(letter.guessed);




// var choose = word.countBlanks.chosenArray;
// letter.check(choose);
