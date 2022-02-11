
function playRound(playerSelection, computerSelection) {
   
    if(playerSelection.toLowerCase() == computerSelection) {
        console.log('TIE');
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {return 'WIN'
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {return 'WIN'
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {return 'WIN' 
    } else {return 'LOSE'
    }
}

function computerPlay() {
    let moves = ['rock', 'paper', 'scissors']
    return (moves[Math.floor(Math.random() *moves.length)])
}


const playerSelection = prompt('Select your move: rock, paper, or scissors?');
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))
