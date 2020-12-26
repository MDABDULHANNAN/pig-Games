var score, activePlayer, roundscore, dice, gameplaying;
init();

document.querySelector('.btn--roll').addEventListener('click',function()
    {
        if(gameplaying){
             //random number
       var dice= Math.floor(Math.random() * 6) + 1;
       //display the dice result
      var DomDice = document.querySelector('.dice');
      document.querySelector('.dice').style.display='block';
      DomDice.src= 'dice-' + dice + '.png';

      //update the dice result
      if(dice !== 1){
          roundscore+= dice;
         
          document.querySelector('#current--' + activePlayer).textContent= roundscore;

      }
      else{
          //next player
          nextPlayer();


      }

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
    if(score[activePlayer] >= 20){
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

          document.getElementById('player--0').classList.toggle('active');
          document.getElementById('player--1').classList.toggle('active');

}

document.querySelector('.btn--new').addEventListener('click',function(){

    init();

})



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