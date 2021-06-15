import getUserInputNumbers from './getUserInputNumbers.js';

const submit = document.querySelector('#submit');
submit.addEventListener('click', () => {
  const userInputNumbers = getUserInputNumbers();
  alert(userInputNumbers);
});

export default function BaseballGame() {
  this.play = function play(computerInputNumbers, userInputNumbers) {
    return '결과 값 String';
  };
}

BaseballGame();
