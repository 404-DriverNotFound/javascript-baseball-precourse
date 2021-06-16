import { pickRandomNumbers, checkInputValid } from './utils.js';
import { correctInput, makeResultString, showResultString } from './play.js';

export default function BaseballGame() {
  let answer = pickRandomNumbers();

  const userInput = document.getElementById('user-input');
  const submitButton = document.getElementById('submit');
  const resultDiv = document.getElementById('result');
  const resetButton = document.createElement('button');
  resetButton.innerHTML = '게임 재시작';

  this.play = function baseballPlay(computerInputNumbers, userInputNumbers) {
    const result = correctInput(computerInputNumbers, userInputNumbers);
    return makeResultString(result);
  };

  function onSubmitButtonClicked() {
    if (checkInputValid(userInput.value) === false) {
      alert('🚨 입력값이 잘못되었습니다! 🚨');
      return;
    }
    const resultString = this.play(answer, userInput.value)
    showResultString(resultString, resultDiv, resetButton);
  }

  function onResetButtonClicked() {
    answer = pickRandomNumbers();
    resultDiv.innerHTML = '';
  }

  submitButton.addEventListener('click', onSubmitButtonClicked.bind(this));
  resetButton.addEventListener('click', onResetButtonClicked);
}

// eslint-disable-next-line no-new
new BaseballGame();
