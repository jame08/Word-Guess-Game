

var GWG = (function() {

    var private = {

    wordList: ["pineapple", "beetle", "restaurant", "building", "torn", "underscroll"],

    _randomWord: [],
    _dashesAr: [],
    win: 0,
    looses: 0,
    remainingLetters: 0,
    remainingTries: 5,

    Init: function(word){
        this.word =word;
       this.randomWord();
       this.fillDashes();
       
    },

    randomWord: function () {

        
        var raWord = this.wordList[Math.floor(Math.random() * this.wordList.length)].toString();
        this._random = raWord.split('');
        this.remainingLetters = this._random.length;


    },

    fillDashes: function () {

        var dashesAr = [];
        for (var i = 0; i <= this._randomWord.length - 1; i++) {

            this._dashesAr[i] = dashesAr[i] = "_";

        }
    },


    checkLetter: function (arg) {
        return this._randomWord.includes(arg);

    },

    compareWord: function (arg) {

        if (this.checkLetter(arg)) {

            for (var j = 0; j < this._randomWord.length; j++) {

                if (this._randomWord[j] === arg) {
                    this._dashesAr[j] = arg;
                    this.remainingLetters--;
                }

            }



        }
        else {
            this.remainingTries--;

        }

    },//CompareWord
    }
  
})();

