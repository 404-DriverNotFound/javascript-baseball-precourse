import { pickRandomNumbers, checkInputValid, correctInput } from './utils.js';

export default function BaseballGame() {
  const answer = pickRandomNumbers();

  const userInput = document.getElementById("user-input");
  const submitButton = document.getElementById("submit");

  this.play = function baseballPlay(computerInputNumbers, userInputNumbers) {
    console.log(correctInput(computerInputNumbers, userInputNumbers));
    return '결과 값 String';
  };

  function onSubmitButtonClicked() {
    if (checkInputValid(userInputNumbers) === false) {
      alert('🚨 입력값이 잘못되었습니다! 🚨');
      return;
    }
    this.play(answer, userInput.value);
  }

  submitButton.addEventListener("click", onSubmitButtonClicked.bind(this));
}

// eslint-disable-next-line no-new
new BaseballGame();
