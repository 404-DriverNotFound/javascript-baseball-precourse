const set = new Set();

export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    return '결과 값 String';
  };
}

function randomValue() {
  while (set.size !== 3) {
    set.add(Math.floor(Math.random() * 10) + 1);
  }
  alert(set);
}

function CompareWithInput() {
  const app = document.getElementById('app');
}

// export default class BaseballGame {
//   play(computerInputNumbers, userInputNumbers) {
//     return "결과 값 String";
//   }
// }

export { set, randomValue };

new BaseballGame();
