import { pickRandomNumbers } from './utils.js';

export default function BaseballGame() {
  const answer = pickRandomNumbers();

  this.play = function baseballPlay(computerInputNumbers, userInputNumbers) {
    return '결과 값 String';
  };

  console.log(answer);
}

// eslint-disable-next-line no-new
new BaseballGame();
