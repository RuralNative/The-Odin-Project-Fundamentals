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

getHumanChoice = () => {
    let humanChoice = prompt("Rock, Paper, or Scissors?", "Rock/Paper/Scissors").toUpperCase()
    console.log("You chose " + humanChoice)
    if (["ROCK", "PAPER", "SCISSORS"].includes(humanChoice)) {
        return humanChoice
    } else {
        console.log("Wrong Input. Choose only either Rock, Paper, or Scissors.")
        return getHumanChoice()
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

playGame = () => {
    for (roundCount = 1; roundCount < 6; roundCount++) {
        console.log("")
        console.log("Start Game")
        let humanSelection = getHumanChoice()
        let computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
        console.log("Your Score: " + humanScore)
        console.log("Computer's Score: " + computerScore)
        console.log("End Game")
    }
}

playGame()
