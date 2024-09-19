console.log("Hello World")

let computerScore = 0
let humanScore = 0

getComputerChoice = () => {
    let randomChoice = Math.floor(Math.random() * 3)
    if (randomChoice == 0) {
        return "ROCK"
    } else if (randomChoice == 1) {
        return "PAPER"
    } else if (randomChoice == 2) {
        return "SCISSORS"
    }
}

1 2 3
1 2 3

11, 12, 13, 21, 22, 23, 31, 32, 33


getHumanChoice = () => {
    let humanChoice = prompt("Rock, Paper, or Scissors?", "Rock/Paper/Scissors").toUpperCase()
    console.log("You chose " + humanChoice)
    if (humanChoice == "ROCK" || "PAPER" || "SCISSORS") {
        return humanChoice
    } else {
        console.log("Wrong Input. Choose only either Rock, Paper, or Scissors.")
        getHumanChoice()
    }
}

playRound = (humanChoice, computerChoice) => {
    if (humanChoice == "ROCK" && computerChoice == "PAPER") {
        console.log("Computer WINS")
        computerScore++
    } else if (humanChoice == "ROCK" && computerChoice == "ROCK") {
        console.log("TIE!")
    } else if (humanChoice == "ROCK" && computerChoice == "SCISSORS") {
        console.log("You WIN")
        humanScore++
    } else if (humanChoice == "PAPER" && computerChoice == "PAPER") {
        console.log("TIE!")
    } else if (humanChoice == "PAPER" && computerChoice == "ROCK") {
        console.log("You WIN")
        humanScore++
    } else if (humanChoice == "PAPER" && computerChoice == "SCISSORS") {
        console.log("Computer WINS")
        computerScore++
    } else if (humanChoice == "SCISSORS" && computerChoice == "PAPER") {
        console.log("You WIN")
        humanScore++
    } else if (humanChoice == "SCISSORS" && computerChoice == "ROCK") {
        console.log("Computer WINS")
        computerScore++
    } else if (humanChoice == "SCISSORS" && computerChoice == "SCISSORS") {
        console.log("TIE!")
    }
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()