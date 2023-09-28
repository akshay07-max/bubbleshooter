var randomNum = 0;
var score = 0;
var timer = 60;
var timing;


function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function hitValue(){
    randomNum = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = randomNum;
}

function makeBubbles(){

var bubbles="";

for(var i=0; i<=89; i++){
    var a = Math.floor(Math.random()*10)
    bubbles +=  `<div class="bubble">${a}</div>`;
}

document.querySelector("#pbottom").innerHTML = bubbles;


}



function runTimer(){
    timing = setInterval(function(){
        if(timer > 0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timing);
            document.querySelector("#pbottom").innerHTML = `<h1 id = "game">Game Over</h1>` 
        }
        
    },1000)

}




document.querySelector("#pbottom").addEventListener("click", function getValue(detail){
    var checkNum = Number(detail.target.textContent)
    if(checkNum === randomNum){
        increaseScore();
        makeBubbles();
        hitValue();
    }
    else{
        // alert("Please Enter valid Number");
        clearInterval(timing);

        document.querySelector("#pbottom").innerHTML = `<h1 id = "game">Game Over!!</h1> <p id="para">Your Score is: ${score} </p>`
    }
})

increaseScore();
makeBubbles();
hitValue();
runTimer();
