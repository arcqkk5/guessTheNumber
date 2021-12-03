'use strict';

//DOM (document object model):
// document.querySelector('.guess-message').textContent = 'Верно! А ты хорош =)';
// document.querySelector('.question').textContent = 7;
// document.querySelector('.score').textContent = 11;
// document.querySelector('.number-input').value = 7;

//events
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.question').textContent = secretNumber;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  if (!guessingNumber) {
    document.querySelector('.guess-message').textContent =
      'Введите число и нажмите проверить!';
  } else if (guessingNumber > 20 || guessingNumber < 1) {
    document.querySelector('.guess-message').textContent =
      'Введите число от 1 до 20 включительно!';
  } else if (guessingNumber > secretNumber) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent = 'Эхх..Много';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'Вы проиграли(';
    }
  } else if (guessingNumber < secretNumber) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent = 'Эхх..Мало';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'Вы проиграли(';
    }
  } else if (guessingNumber == secretNumber) {
    document.querySelector('.guess-message').textContent = 'Верно! Молодец!';
  }
});
