'use strict';

let ans=Math.trunc(Math.random()*20) + 1;
let highScore=0;
const maxScore=document.querySelector('#current-score').textContent;
let currScore=maxScore;

//guessing number

document.querySelector('#submit-ans').addEventListener
('click', function(){
    const guess=Number(document.querySelector('#guess').value);

    // didn't input any number

    if(!guess){
        document.querySelector('#message').textContent='⛔ No number!';
    }

    // Incorrect guess

    else if(guess!==ans){
        document.querySelector('#message').textContent=guess<ans?'📉 Too Low!':'📈 Too High!';
        currScore-=1;
        document.querySelector('#current-score').textContent=currScore;
    }

    // Correct guess

    else{
        document.querySelector('#message').textContent='🎉 Correct Answer!';
        document.querySelector('#number').textContent=ans;
        document.querySelector('body>header').style.backgroundColor='#60b347';
        document.querySelector('body>main').style.backgroundColor='#60b347';
        document.querySelector('#guess').style.backgroundColor='#60b347';
        document.querySelector('#number').style.width='20rem'; 

        // Updating highscore
        if(currScore>highScore){
            highScore=currScore;
            document.querySelector('#highscore').textContent=highScore;
        }
    }

    // Lost the game

    if(currScore==0){
        document.querySelector('#message').textContent='💥 Game Over!'
    }
})

// play again

document.querySelector('#again').addEventListener
('click',function(){
    ans=Math.trunc(Math.random()*20) + 1;
    currScore=maxScore;
    document.querySelector('#message').textContent='Start guessing...';
    document.querySelector('#number').textContent='?';
    document.querySelector('body>header').style.backgroundColor='#222';
    document.querySelector('body>main').style.backgroundColor='#222';
    document.querySelector('#guess').style.backgroundColor='#222';
    document.querySelector('#number').style.width='10rem';
    document.querySelector('#current-score').textContent=maxScore;
    document.querySelector('#guess').value='';
})
