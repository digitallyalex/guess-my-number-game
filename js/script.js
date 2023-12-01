'use strict';

//selecting a secret random number between 1 and 20 for each game:
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//sets initial score
let score = 20;

//sets initial highscore
let highscore = 0;

//function for displaying messages within the game
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//adds event listener to check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //GAME STEPS
  //1. check if there is a value and add response if null, if equal to secretNumber, if higher than the secret number and if lower than the secret number
  //2. decrease score by 1 if wrong choice (higher or lower) is selected
  //3. when the score gets to 0, the player loses the game
  //4. when the player guesses the right number, the background changes to green

  //input is null
  if (!guess) {
    displayMessage('⛔ No Number! Please insert a number between 1 and 20!');

    //input is correct - Player Wins and highscore is logged
  } else if (guess == secretNumber) {
    displayMessage('🎉 Correct Number!');
    //reveals the secretNumber
    document.querySelector('.number').textContent = secretNumber;

    //changes background color
    document.querySelector('body').style.backgroundColor = '#60b347';
    //doubles size of secretNumber container
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('☹️ You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  //restores initial values of score and secretNumber
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //restores the initial conditions of message, score, number and guess input fields
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  //restores the initial body colour and guess box size
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
