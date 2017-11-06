var inquirer = require('inquirer');
var Word = require('./word.js');



function Letter(){
	var guessed = [];
	this.ask = function(){
	inquirer.prompt([
	{
		name: 'guess',
		type: 'input',
		message: 'Guess a Letter:',
		choices: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
	}
		]).then(function(attempt){
			 this.Guess = attempt.guess;
			 guessed.push(this.Guess);
			 console.log(guessed);

		});
	};
	
};


module.exports = Letter;