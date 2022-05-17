const scorePlayer = document.querySelector('.user-score-val');
const scoreCPU = document.querySelector('.cpu-score-val');
const rollDice = document.getElementById('roll-dice-btn');
const diceImage = document.querySelector('.game-menu-dice');
const scoreHold = document.getElementById('score-hold')
const playerHead = document.getElementById('player-heading');
const cpuHead = document.getElementById('cpu-heading');
const gameReset = document.getElementById('game-reset');

const playerCurrentScore = document.getElementById('current-score-0');
const cpuCurrentScore = document.getElementById('current-score-1');
const player = document.getElementById('player-0');
const cpu = document.getElementById('player-1');

// score counts
let scores = [0,0];
let currentScore = 0;
let activePlayer = 0;

// confetti-intialization
var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);

function renderConfetti(){
    confetti.render();
}

function clearConfetti(){
    confetti.clear();
}

function switchActivePlayer(){
    document.getElementById(`current-score-${activePlayer}`).textContent = 0 
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    playerHead.classList.toggle('player-active');
    cpuHead.classList.toggle('player-active');
}

// rolling the dice
rollDice.addEventListener('click',()=>{
    diceImage.classList.remove('hidden');
    diceNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    diceImage.src=`./assets/dice-${diceNumber}.png`;
    playerTurn(diceNumber);
})

scoreHold.addEventListener('click',()=>{
    scores[activePlayer] += currentScore;
    document.getElementById(`score-player-${activePlayer}`).innerText = scores[activePlayer];
    if(scores[activePlayer] >= 10){
        renderConfetti();
    }
})

gameReset.addEventListener('click',()=>{
    activePlayer = 0;
    currentScore = 0;
    scores[0] = 0;
    scores[1] = 0;
    playerCurrentScore.innerText = 0;
    cpuCurrentScore.innerText = 0;
    document.querySelector('#score-player-0').innerText = 0;
    document.querySelector('#score-player-1').innerHTML = 0;

    clearConfetti();
})

function playerTurn(diceNumber){
    if(diceNumber!==1){
        currentScore += diceNumber;
        document.getElementById(`current-score-${activePlayer}`).textContent = currentScore;
    }else{
        switchActivePlayer();
    }
}




