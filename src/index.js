/* eslint-disable import/extensions */
/* eslint-disable no-param-reassign */
import {
  makeRandomAnswer,
  isValidInput,
  makeGameResult,
  makeResultStr,
} from './utils.js';

export default function BaseballGame() {
  let answer;

  const $userInput = document.querySelector('#user-input');
  const $submitButton = document.querySelector('#submit');
  const $resultDiv = document.querySelector('#result');

  const $restartButton = document.createElement('button');
  $restartButton.id = 'game-restart-button';
  $restartButton.innerText = '게임 재시작';

  function resetGame() {
    $resultDiv.innerHTML = '';
    $userInput.value = '';
    answer = '';
    answer = makeRandomAnswer();
  }

  function handleError() {
    // eslint-disable-next-line no-alert
    alert(`잘못된 값을 입력하셨습니다.
1부터 9까지의 서로 다른 수로 이루어진 3자리 숫자를 입력해주세요.
예시) 123, 645, 987`);
  }
  function play(computerInputNumbers, userInputNumbers) {
    if (!isValidInput(userInputNumbers)) {
      return false;
    }
    return makeResultStr(makeGameResult(computerInputNumbers, userInputNumbers));
  }

  function handleSubmit() {
    const result = play(answer, $userInput.value);
    if (result === false) {
      handleError();
      $resultDiv.innerHTML = '';
      return;
    }
    if (result === '3스트라이크') {
      $resultDiv.innerText = `🎉 정답을 맞추셨습니다! 🎉
게임을 새로 시작하시겠습니까? `;

      $resultDiv.appendChild($restartButton);
    } else {
      $resultDiv.innerHTML = result;
    }
  }

  resetGame();
  $restartButton.addEventListener('click', resetGame);
  $submitButton.addEventListener('click', handleSubmit);
}

// eslint-disable-next-line no-new
new BaseballGame();
