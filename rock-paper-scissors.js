let score = {
    wins: 0,
    losses: 0,
    ties: 0
};
function goToUrl(url){
    window.location.href=url;
}
function addSection(){
        const container=document.querySelector('#new_section');
        const newDiv=document.createElement('div');
        newDiv.textContent='New Section';
        newDiv.classList.add('new_section_class');
        newDiv.setAttribute('style', 'color:blue');
        container.appendChild(newDiv);
}
function playGame(userMove) {
    

    // Array of possible moves
    const moves = ['rock', 'paper', 'scissors'];

    // Generate a random move for the computer
    const computerMove = moves[Math.floor(Math.random() * moves.length)];

    // Determine the winner
    let result;
    if (userMove === computerMove) {
    result = "It's a tie!";
    score.ties++;
    } else if (
    (userMove === 'rock' && computerMove === 'scissors') ||
    (userMove === 'paper' && computerMove === 'rock') ||
    (userMove === 'scissors' && computerMove === 'paper')
    ) {
    result = 'You win!';
    score.wins++;
    } else {
    result = 'Computer wins!';
    score.losses++;
    }

    // Display the result
    document.getElementById('result').textContent = `You chose ${userMove}. Computer chose ${computerMove}. ${result}`;
    updateScore();
}
function reset(){
    scores.wins=0;
    scores.losses=0;
    scores.ties=0;
    updateScore();
}
function updateScore(){
    document.getElementById('wins').textContent = score.wins;
    document.getElementById('losses').textContent = score.losses;
    document.getElementById('ties').textContent = score.ties;
}

