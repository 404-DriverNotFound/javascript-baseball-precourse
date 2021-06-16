import { pickRandomNumbers, checkInputValid, correctInput, makeResultString } from './utils.js';

export default function BaseballGame() {
  const answer = pickRandomNumbers();

  const userInput = document.getElementById("user-input");
  const submitButton = document.getElementById("submit");

  this.play = function baseballPlay(computerInputNumbers, userInputNumbers) {
    const result = correctInput(computerInputNumbers, userInputNumbers);
    return makeResultString(result);
  };

  function onSubmitButtonClicked() {
    if (checkInputValid(userInput.value) === false) {
      alert('🚨 입력값이 잘못되었습니다! 🚨');
      return;
    }
    console.log(this.play(answer, userInput.value));
  }

  submitButton.addEventListener("click", onSubmitButtonClicked.bind(this));
}

// eslint-disable-next-line no-new
new BaseballGame();
