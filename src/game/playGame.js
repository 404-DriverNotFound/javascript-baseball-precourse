import GetUserInput from '../input/getUserInput.js';
import GetComputerInput from '../input/getComputerInput.js';
import PrintGameResult from './printGame.js';

function resetScreen() {
  const $result = document.querySelector('#result');
  const $userInput = document.querySelector('#user-input');

  $result.textContent = '';
  $userInput.value = '';
}

export default function PlayGame(computerInputNumbers, play) {
  const $submit = document.querySelector('#submit');
  const $result = document.querySelector('#result');

  $submit.addEventListener('click', () => {
    const userInputNumbers = GetUserInput();

    if (userInputNumbers) {
      PrintGameResult(play(computerInputNumbers, userInputNumbers));
    }
  });

  $result.addEventListener('click', ({ target }) => {
    if (target.id === 'game-restart-button') {
      resetScreen();
      computerInputNumbers = GetComputerInput();
    }
  });
}
