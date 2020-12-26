var score, activePlayer, roundscore, dice, gameplaying;
init();
var lastdice;

document.querySelector('.btn--roll').addEventListener('click',function()
    {
        if(gameplaying){
             //random number
       var dice= Math.floor(Math.random() * 6) + 1;
       //display the dice result
      var DomDice = document.querySelector('.dice');
      document.querySelector('.dice').style.display='block';
      DomDice.src= 'dice-' + dice + '.png';

      if(dice===6 && lastdice==6){
          score[activePlayer]=0;
          document.querySelector('#score--' + activePlayer).textContent= '0';
          nextPlayer();

      }

      //update the dice result
     else if(dice !== 1){
          roundscore+= dice;
         
          document.querySelector('#current--' + activePlayer).textContent= roundscore;

      }
      else{
          //next player
          nextPlayer();


      }
      lastdice=dice;

        }
       

      


    }
);
document.querySelector('.btn--hold').addEventListener('click',function(){
    if(gameplaying){
        //add curreent score to global
    score[activePlayer] += roundscore;
    //display ui
    document.querySelector('#score--' + activePlayer).textContent= score[activePlayer];
    

    //check player won the game
    if(score[activePlayer] >= 100){
        document.querySelector('#name--' + activePlayer).textContent='Congratulation you Win!!';
        document.querySelector('.dice').style.display='none';
        gameplaying=false;


    }
    else{
        nextPlayer();
    }

    }
    


}
);
function nextPlayer(){
     activePlayer === 0 ? activePlayer= 1 : activePlayer=0;
          roundscore=0;

          document.getElementById('current--0').textContent='0';
          document.getElementById('current--1').textContent='0';

       

}

document.querySelector('.btn--new').addEventListener('click',function(){

    init();

});



function init(){

score=[0,0];
activePlayer=0;
roundscore=0;
gameplaying=true;

document.getElementById('score--0').textContent='0';
document.getElementById('score--1').textContent='0';
document.getElementById('current--0').textContent='0';
document.getElementById('current--1').textContent='0';
document.querySelector('.dice').style.display='none';
document.querySelector('#name--0').textContent='Player 1';
document.querySelector('#name--1').textContent='Player 2';
}