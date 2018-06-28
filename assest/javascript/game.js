

    var  game  = {
        gameWords:  ["pineapple", "beetle", "restaurant",  "building", "torn",  "underscroll"],

    _random: [],
    _dashesAr: [],
    win: 0,
    looses: 0,
    remainingLetters: 0,
    remainingTries: 5,


        randomWord:  function () {

             var raWord  =  this.gameWords[Math.floor(Math.random() * this.gameWords.length)].toString();
        this._random = raWord.split('');
        this.remainingLetters = this._random.length;
        },

        fillDashes:  function  () {

        var dashesAr = [];
                for  (var  i  =  0;  i  <=  this._random.length  - 1; i++) {

                    this._dashesAr[i] = dashesAr[i] = "_";


        }

    },

    checkLetter: function (arg) {
        return this._random.includes(arg);

    },

        compareWord:  function (guess) {

        if (this.checkLetter(guess)) {

            for (var j = 0; j < this._random.length; j++) {

                if (this._random[j] === guess) {
                    this._dashesAr[j] = guess;
                    this.remainingLetters--;
                }

            }

        }
        else {
            this.remainingTries--;

        }

    },

    bgMusic: function () {


    }




}