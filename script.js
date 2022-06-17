'use strict';

let randomNumber = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
console.log(randomNumber);

let score = 20;
let highscore = Number(document.querySelector(".highscore").textContent);

document.querySelector('.again').addEventListener("click", function () {
    score = 20;
    randomNumber = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector(".number").textContent = "?";
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";
});

document.querySelector('.check').addEventListener("click", function () { 
    var guess = Number(document.querySelector(".guess").value);
    if(!guess)
    {
        document.querySelector(".message").textContent = " 👎🏼 No Number!"
        
    }
    else if(guess === randomNumber){

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector(".message").textContent = "🥳 Correct guess!"
        document.querySelector(".number").textContent = randomNumber;
        if(highscore < score){
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }

    }else if(guess>randomNumber){
        document.querySelector(".message").textContent = "📈 Too High"
        score --;
        document.querySelector(".score").textContent = score

    }else if(guess<randomNumber){
        document.querySelector(".message").textContent = "📉 Too Low"
        score --;
        document.querySelector(".score").textContent = score;

    }
});


