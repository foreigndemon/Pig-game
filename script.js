const scorePlayer = document.querySelector('.user-score-val');
const scoreCPU = document.querySelector('.cpu-score-val');
const rollDice = document.getElementById('roll-dice-btn');
const diceImage = document.querySelector('.game-menu-dice');
const scoreHold = document.getElementById('score-hold')
const playerHead = document.getElementById('player-heading');
const cpuHead = document.getElementById('cpu-heading');

const playerCurrentScore = document.getElementById('current-score-0');
const cpuCurrentScore = document.getElementById('current-score-1');
const player = document.getElementById('player-0');
const cpu = document.getElementById('player-1');

// score counts
let scores = [0,0];
let currentScore = 0;
let activePlayer = 0;

// rolling the dice
rollDice.addEventListener('click',()=>{
    diceImage.classList.remove('hidden');
    diceNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    diceImage.src=`./assets/dice-${diceNumber}.png`;
    playerTurn(diceNumber);
})

scoreHold.addEventListener('click',()=>{

})

function playerTurn(diceNumber){
    if(diceNumber!==1){
        currentScore += diceNumber;
        document.getElementById(`current-score-${activePlayer}`).textContent = currentScore;
    }else{
        document.getElementById(`current-score-${activePlayer}`).textContent = 0 
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        playerHead.classList.toggle('player-active');
        cpuHead.classList.toggle('player-active');
    }
}




