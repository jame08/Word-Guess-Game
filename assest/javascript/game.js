


var win, looses, remainingLetters;
   
    
    var game = {
    gameWords : ["pineapple","beetle","restaurant", "Building","Torn", "underscroll"],

    _random : "",
    _dashesAr: [],


    randomWord: function() {

     this._random = this.gameWords[Math.floor(Math.random()*this.gameWords.length)].toString();

    },
 
    fillDashes: function (){
        
         var dashesAr= [];
        for (var i = 0; i <= this._random.length -1  ;i++)
        {
          
        this._dashesAr[i] =   dashesAr[i] = "_";
          
 
        } 
 
    },
 
    compareWord: function(){

    for (var j = 0; j < this._random.length; j++)
     { 
         if (this._random[j] === guess) {
        answerAr[j] = guess;
        
        remainingLetters--;
        } }
        
}
 
}
