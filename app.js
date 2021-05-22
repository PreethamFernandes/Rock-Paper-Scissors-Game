let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById('user-score');
let computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r')
const paper_div = document.getElementById('p')
const scissors_div = document.getElementById('s')
// let winner_p = document.getElementById('winner')

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3))
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === 'r') return "Rock";
    if (letter === 'p') return "Paper"
    return "Scissors"
}

function userWins() {
    result_p.innerHTML = "User Wins"
    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML - computerScore;
    // !win(userScore, computerScore)
}

function computerWins() {
    result_p.innerHTML = "Computer Wins"
    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    // !lose(userScore, computerScore)
}



function win(userChoice, computerChoice) {
    const smallUserWord = "(User)".fontsize(3).sup();
    const smallCompWord = "(Comp.)".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    userScore++
    userScore_span.innerHTML = userScore;
    //    computerScore_span = computerScore;
    
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} . You Win!`;
    userChoice_div.classList.add('green-glow')
    setTimeout(function () { userChoice_div.classList.remove('green-glow') }, 500)
     if (computerScore == 10 || userScore == 10) {
        userScore = 0;
        computerScore = 0;
    }
    }


function lose(userChoice, computerChoice) {
    computerScore++
    // userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "(User)".fontsize(3).sup();
    const smallCompWord = "(Comp.)".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to. ${convertToWord(computerChoice)}${smallCompWord}  You Lost...`
    userChoice_div.classList.add('red-glow')
    setTimeout(function () { userChoice_div.classList.remove('red-glow') }, 500)
    if (computerScore == 10 && userScore < 10) { 
       computerWins();
    }
     if (computerScore == 10 || userScore == 10) {
        userScore = 0;
        computerScore = 0;
    }
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "(User)".fontsize(3).sup();
    const smallCompWord = "(Comp.)".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals. ${convertToWord(computerChoice)}${smallCompWord} It's a Draw...`
    userChoice_div.classList.add('grey-glow')
    setTimeout(function () { userChoice_div.classList.remove('grey-glow') }, 500)
    if (computerScore == 10 || userScore == 10) {
        userScore = 0;
        computerScore = 0;
    }

}

function game(userChoice) {
    let computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice)
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice)
            break;

        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice)
            break;

    }
}
game()


function main() {
    rock_div.addEventListener('click', function () {
        game('r')
    }
    )
    paper_div.addEventListener('click', function () {
        game('p')
    }
    )
    scissors_div.addEventListener('click', function () {
        game('s')
    }
    )
}

switch (userScore) {
    case 10:
    document.getElementById('action-message').innerHTML = "User Won!"
        break;
}
switch (computerScore) {
    case 10:
        document.getElementById('action-message').innerHTML = "Computer Won!"    
        break;
}
main()
