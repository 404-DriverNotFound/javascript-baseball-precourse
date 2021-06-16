import IsValid from './validate.js';

export default function GetUserInput() {
  const $userInput = document.querySelector('#user-input');
  const userInputNumbers = $userInput.value.split('').map((x) => Number(x));

  if (IsValid(userInputNumbers)) {
    return Number(userInputNumbers.join(''));
  }
  return false;
}
