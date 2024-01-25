let x = Math.floor((Math.random() * 10) + 1);
let guess = document.getElementById('guesses');
let resultPrint = document.getElementById('result');
let show = document.getElementById('Show');
guess.addEventListener('click',Try);
let chances = 3;
function Try(e){
    let guessNumber = document.getElementById('guessingNumber').value;
    Check(guessNumber);
    if(chances == 0){
        Result(false);
    }
    e.preventDefault();
}

function Check(num){
    if(x!=num){
        chances = chances - 1;
        if(x>num){
            let text = `<h1>Your Chances : ${chances} <br>Hint: Your guessing number is too small</h1>`;
            resultPrint.innerHTML = text;
        }
        else{
            let text = `<h1>Your Chances : ${chances} <br>Hint: Your guessing number is too big</h1>`;
            resultPrint.innerHTML = text;
        }
    }
    else{
        Result(true);
    }
}
function Result(res){
    if(res == true){
        let text =`<h1>Winner!!! You Succesfully Guess the number ! <br>Number is : ${x}</h1>
        <button id="reload">New Game</button>`;
        show.innerHTML = text;
    }
    else{
        let text =`<h1>Loser!! Your chances are over ! Number is : ${x}</h1>
        <button id="reload">New Game</button>
        `;
        show.innerHTML = text;
    }
    let reload = document.getElementById('reload');
    reload.addEventListener('click',Reload);
    function Reload(e){
        location.reload();
    }
}