import { pickRandomNumbers, checkInputValid } from './utils.js';
import { correctInput, makeResultString } from './play.js';

export default function BaseballGame() {
  const answer = pickRandomNumbers();

  const userInput = document.getElementById('user-input');
  const submitButton = document.getElementById('submit');
  const resultDiv = document.getElementById('result');

  this.play = function baseballPlay(computerInputNumbers, userInputNumbers) {
    const result = correctInput(computerInputNumbers, userInputNumbers);
    return makeResultString(result);
  };

  function onSubmitButtonClicked() {
    if (checkInputValid(userInput.value) === false) {
      alert('🚨 입력값이 잘못되었습니다! 🚨');
      return;
    }
    resultDiv.innerHTML = this.play(answer, userInput.value);
  }

  submitButton.addEventListener("click", onSubmitButtonClicked.bind(this));
}

// eslint-disable-next-line no-new
new BaseballGame();
