let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    
    if(playerSelection.toLowerCase() == computerSelection) {return 'TIE';
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {++playerScore; return 'WIN';
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {++playerScore; return 'WIN'; 
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {++playerScore; return 'WIN'; 
    } else {++computerScore; return 'LOSE'; 
    }
}

function computerPlay() {
    let moves = ['rock', 'paper', 'scissors']
    return (moves[Math.floor(Math.random() *moves.length)])
}
    
function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Select your move: rock, paper, or scissors?');
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));  
        console.log(playerScore, 'vs.', computerScore)
    }   
    if(playerScore > computerScore) {alert('YOU ARE THE CHAMP!')
    } else if(computerScore > playerScore) {alert('COMPUTER HAS BESTED YOU!')
    } else if(computerScore == playerScore) {'HOW CAN THIS BE? ITS A TIE'}
}
   

console.log(game())