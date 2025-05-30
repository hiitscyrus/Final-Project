let playerChoice = '';
let compChoice = '';

function playerSelect(choice) {
  playerChoice = choice;
  game();
  if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
    compare();
  }
}

function game() {
  if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
    comp();
  } 
  else {
    document.getElementById('result').textContent = "Invalid Player Move!";
  }
}

function comp() {
  const rand = Math.floor(Math.random() * 3);
  if (rand === 0) compChoice = 'rock';
  else if (rand === 1) compChoice = 'paper';
  else compChoice = 'scissors';
}

function compare() {
  let message = `The computer chose ${compChoice}, `;

  if (playerChoice === 'paper') {
    if (compChoice === 'rock') message += "you win!";
    else if (compChoice === 'scissors') message += "you lose!";
    else message += "tie game!";
  } 
  else if (playerChoice === 'rock') {
    if (compChoice === 'rock') message += "tie game!";
    else if (compChoice === 'scissors') message += "you win!";
    else message += "you lose!";
  } 
  else {
    if (compChoice === 'rock') message += "you lose!";
    else if (compChoice === 'scissors') message += "tie game!";
    else message += "you win!";
  }

  document.getElementById('result').textContent = message;
  document.getElementById('replay').style.display = 'inline-block';
  document.querySelectorAll('.buttons button').forEach(btn => btn.disabled = true);
}

function resetGame() {
  playerChoice = '';
  compChoice = '';
  document.getElementById('result').textContent = '';
  document.getElementById('replay').style.display = 'none';
  document.querySelectorAll('.buttons button').forEach(btn => btn.disabled = false);
}
