

var game = (function () {


    var private = {

        wordList: ["pineapple", "beetle", "restaurant", "building", "torn", "underscroll"],

        _randomWord: [],
        _dashesAr: [],
        win: 0,
        looses: 0,
        remainingLetters: 0,
        remainingTries: 7,
        _gameOver: false,



        randomWord: function () {


            var raWord = this.wordList[Math.floor(Math.random() * this.wordList.length)].toString();
            this._randomWord = raWord.split('');
            this.remainingLetters = this._randomWord.length;


        },

        fillDashes: function () {
            this._dashesAr =[];
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

        compareArr: function(){
            

            return this._dashesAr.toString() === this._randomWord.toString();

        },

    
    }


    return {
        init: function () {
            private.win = 0;
            private.remainingTries = 7;
            private.randomWord();
            private.fillDashes();
           
            console.log (private);
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
  
        
        setRT: function() {

           if (private.remainingTries > 1){ 
            private.remainingTries = private.remainingTries - 1;
           }
           else
           {
            this.gameOver();
           

           }
            

        },



        getCompareWord: function (arg) {
            private.compareWord(arg);

        },

        updateHtml: function (){
        
        
        document.getElementById("guessW").innerText = private._dashesAr;
        document.getElementById("re-letters").innerText = private.remainingLetters;
        document.getElementById("re-tries").innerText = private.remainingTries;

        if(private.compareArr()){
            
            this.reset();
            private.win = private.win + 1;
            document.getElementById("guessW").innerText = private._dashesAr;
            document.getElementById("re-letters").innerText = private.remainingLetters;
            document.getElementById("re-tries").innerText = private.remainingTries;
             document.getElementById("usedW").innerText = private.win;
            
        }
        

        
        },
        
        getCompareArr: function(){

            return private.compareArr();

        },

        gameOver: function (){
            if (confirm("You Lost. Do you want to play again"))
            {   
                this.reset();
                private.looses = private.looses +1;
                console.log(private.looses);
                
            }
            else {

                alert("Bye Felicia")
            }

        },

        reset: function() {
            
            private.remainingTries = 7;
            private.randomWord();
            private.fillDashes();
            


        },


        


    }
})();
