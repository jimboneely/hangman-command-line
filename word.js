var words = ["cat", "dog", "hamster", "fish", "lizard", "parrot"];
var hidden= [];
var hiddenDisplay;
var Letter = require('./letter.js');

function Word (){
	this.createWord = function(){
	this.chosenWord = words[Math.floor(Math.random() * words.length)];
};

	this.countBlanks = function(){

		this.chosenArray = this.chosenWord.split("");
		this.numBlanks = this.chosenArray.length;
		for (var i = 0; i < this.numBlanks; i++) {
    	hidden.push("_");
	
		};
	
		hiddenDisplay = hidden.join(' ');
		console.log(hiddenDisplay);
		}

};

module.exports = Word;