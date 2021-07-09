function computerPlay(){
    let choice = Math.floor(Math.random()*(3)+1);
    if (choice === 1){
        return "rock";
    }
    else if (choice === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
function rpc(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "paper"){
        console.log(`You lost! ${computerSelection} beats ${playerSelection}!`)
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        console.log(`You lost! ${computerSelection} beats ${playerSelection}!`)
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        console.log(`You lost! ${computerSelection} beats ${playerSelection}!`)
    }
    else if (playerSelection === computerSelection){
        console.log(`It's a draw! ${computerSelection} can't beat ${playerSelection}!`)
    }
    else{
        console.log(`You won! ${playerSelection} beats ${computerSelection}`)
    }
}
function game(){
    let playerSelection = "rock";
    let computerSelection = computerPlay();
    for (let i = 0; i<5; i++){
        playerSelection = window.prompt("Rock, Paper, Scissors!");
        computerSelection = computerPlay();
        rpc(playerSelection, computerSelection)
    }
}
game();
