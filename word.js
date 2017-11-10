var Letter = require('./letter');
var food = ['Beans','Fish','Rice','Falafel','Broccoli','Chicken'];

var Word = function() {
    this.word = food[Math.floor(Math.random() * food.length)];
    this.wordArray = [];
    this.hiddenWord = [];
    this.shownWord = [];
    this.attempt = this.word.split('').length - 2;
    this.converted = function() {
        this.wordArray = this.word.split('');

        for (var i = 0; i < this.wordArray.length; i++) {
            this.wordArray[i] = new Letter(this.wordArray[i]);

            if (this.wordArray[i].letter == ' ') {
                 // keep space in word
                this.hiddenWord.push(this.wordArray[i].letter);
            }
            else {
                // replace letters with underscore
                this.hiddenWord.push(this.wordArray[i].hide());
            }
        }

        this.shownWord = this.hiddenWord.join(' ');
        return this.shownWord;
    };
    this.checkLetter = function(letter) {
        var match = false;
        
        for (var i = 0; i < this.wordArray.length; i++) {
            if (this.wordArray[i].letter.toLowerCase() == letter) {
                match = true;
            }
        }
    
        if (match) {

            for (var j = 0; j < this.wordArray.length; j++) {
    
                if (this.wordArray[j].letter.toLowerCase() == letter) {
                    this.hiddenWord[j] = this.wordArray[j].letter;
                }
            }
    
            this.shownWord = this.hiddenWord.join(' ');
            console.log("Yup!");
        }
        else {
            this.attempt -= 1;
            console.log("Nope!");
            console.log('Attempt(s) remaining: ' + this.attempt + '\n');
        }

        return this.shownWord;
    };
};

module.exports = Word;