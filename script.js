'use strict';
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
const decScore = function () {
  score--;
  document.querySelector('.score').textContent = score;
};

const displayMesaage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //No number
  if (!guess) {
    // document.querySelector('.message').textContent = ' No number';
    displayMesaage(' No number');
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('.message').textContent = 'You won the game';
    displayMesaage('You won the game');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber && score > 1) {
    let numberStatus =
      guess > secretNumber ? 'Number is High' : ' Number is Low ';
    displayMesaage(numberStatus);
    decScore();
  } else {
    // document.querySelector('.message').textContent = ' Lost the Game';
    displayMesaage('Lost the Game');
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = '#f70f0f';
  }
});
// Reset
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = ' #222';
  document.querySelector('.number').style.width = '15rem';
});
