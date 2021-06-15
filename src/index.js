import { pickRandomNumbers } from './utils.js';

export default function BaseballGame() {
  const answer = pickRandomNumbers();

  const userInput = document.getElementById("user-input");
  const submitButton = document.getElementById("submit");

  this.play = function baseballPlay(computerInputNumbers, userInputNumbers) {
    console.log(userInputNumbers);
    return '결과 값 String';
  };

  submitButton.addEventListener("click", () => {
    this.play(answer, userInput.value);
  });
}

// eslint-disable-next-line no-new
new BaseballGame();
