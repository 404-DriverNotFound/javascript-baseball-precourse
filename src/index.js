export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInㅍputNumbers) {
    return '결과 값 String';
  };
}

function randomValue() {
  const set = new Set();
  while (set.size !== 3) {
    set.add(Math.floor(Math.random() * 10) + 1);
  }
}

// export default class BaseballGame {
//   play(computerInputNumbers, userInputNumbers) {
//     return "결과 값 String";
//   }
// }

new BaseballGame();
