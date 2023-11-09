let choice;
let computerDecision;
let playerDecosion;
let winner;
function getComputerChoice(){
   return  choice = Math.floor(Math.random()*(4-1)+1);
}
//Computer takes a decision
getComputerChoice()
if (choice === 1){
    computerDecision = "rock";
}else if (choice === 2){
    computerDecision = "paper"
}else{
    computerDecision = "scissors"
}
let playerDecision = prompt("Choose rock, paper or scissors").toLowerCase()
//Determines the winner 
function determineWinner (playerDecision,computerDecision){
    if (playerDecision == computerDecision){
        return `It is a tie. You chose ${playerDecision} and computer chose ${computerDecision}`
    }else if (playerDecision == "rock" && computerDecision == "paper" || playerDecision == "paer" && computerDecision == "scissors" || playerDecision == "scissors" && computerDecision == "rock"){
        return `You lost.You chose ${playerDecision} and computer chose ${computerDecision} `
    }else {
        return `You won.You chose ${playerDecision} and computer chose ${computerDecision}`
    }
}
//Executes the game 5 times
function game(){
    for (i=0; i<5, i++;);{
        console.log(determineWinner(playerDecision,computerDecision));
    }
}
game()