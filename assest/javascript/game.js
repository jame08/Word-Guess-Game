

var game = (function () {


    var private = {

        wordList: ["pineapple", "beetle", "restaurant", "building", "torn", "underscroll"],

        _randomWord: [],
        _dashesAr: [],
        win: 0,
        looses: 0,
        remainingLetters: 0,
        remainingTries: 5,



        randomWord: function () {


            var raWord = this.wordList[Math.floor(Math.random() * this.wordList.length)].toString();
            this._randomWord = raWord.split('');
            this.remainingLetters = this._randomWord.length;


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


            for (var j = 0; j < this._randomWord.length; j++) {

                if (this._randomWord[j] === arg) {
                    this._dashesAr[j] = arg;
                    this.remainingLetters--;
                }

            }
        },
    }


    return {
        init: function (word) {

            private.randomWord();
            private.fillDashes();
        },

        getUserImput: function (arg) {
            private.compareWord(arg);
        },

        getWord: function () {

            return private._randomWord;
        },

        getDashes: function () {

            return private._dashesAr;
        },

        testLetter: function (arg) {

            return private.checkLetter(arg);

        },

        getRL: function () {
            return private.remainingLetters;
        },

        setRL: function() {

            private.remainingLetters--;
        },

        getRT: function(){
            return private.remainingTries;

        },

        setRT: function() {
            private.remainingTries--;

        },

        getCompareWord: function (arg) {
            private.compareWord(arg);

        },

        updateHtml: function (){

        document.getElementById("guessW").innerText = this.getDashes();
        document.getElementById("re-letters").innerText = this.getRL();
        document.getElementById("re-tries").innerText = this.getRT();
        }




    }
})();
