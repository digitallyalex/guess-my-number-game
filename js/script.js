'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 30;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//selecting a secret random number between 1 and 20 for each game:
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = secretNumber;

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
    document.querySelector('.message').textContent =
      '⛔No Number! Please insert a number between 1 and 20!';

    //input is correct
  } else if (guess == secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    //changes background color
    document.querySelector('body').style.backgroundColor = '#60b347';
    //doubles size of secretNumber container
    document.querySelector('.number').style.width = '30rem';

    //input is higher than the secretNumber
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '☹️ You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    //input is lower than the secretNumber
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '☹️ You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
