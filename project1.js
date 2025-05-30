<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Rock Paper Scissors Game</title>
</head>
<body>
  <script>
    let playerChoice = '';
    let compChoice = '';

    function comp() {
      const rand = Math.floor(Math.random() * 3);
      if (rand === 0) compChoice = 'rock';
      else if (rand === 1) compChoice = 'paper';
      else compChoice = 'scissors';
    }

    function game() {
      if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
        comp(); // pick computer's move
      } else {
        alert("Invalid Player Move!");
        return; // exit game early
      }
    }

    function compare() {
      if (playerChoice === 'paper') {
        if (compChoice === 'rock') {
          alert(`The computer chose ${compChoice}, you win!`);
        } else if (compChoice === 'scissors') {
          alert(`The computer chose ${compChoice}, you lose!`);
        } else {
          alert(`The computer chose ${compChoice}, tie game!`);
        }
      } else if (playerChoice === 'rock') {
        if (compChoice === 'rock') {
          alert(`The computer chose ${compChoice}, tie game!`);
        } else if (compChoice === 'scissors') {
          alert(`The computer chose ${compChoice}, you win!`);
        } else {
          alert(`The computer chose ${compChoice}, you lose!`);
        }
      } else {
        if (compChoice === 'rock') {
          alert(`The computer chose ${compChoice}, you lose!`);
        } else if (compChoice === 'scissors') {
          alert(`The computer chose ${compChoice}, tie game!`);
        } else {
          alert(`The computer chose ${compChoice}, you win!`);
        }
      }
    }

    // main logic
    const play = prompt("Do you wanna play?").toLowerCase();

    if (play === "yes") {
      alert("Rock, paper, scissors, shoot!");
      playerChoice = prompt("Enter your move (rock, paper, or scissors):").toLowerCase();
      game();
      if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
        compare();
      }
    } else {
      alert("Okay! Bye!");
    }
  </script>
</body>
</html>
