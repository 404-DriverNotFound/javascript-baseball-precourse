export default function BaseballGame() {
  let answer;

  this.getRandomDecimalLessThan = function getRandomDecimalLessThan(num) {
    return Math.floor((Math.random() * 10) % num);
  };

  this.setRandomAnswer = function setRandomAnswer() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    answer = 0;
    for (let i = 0; i < 3; i += 1) {
      const idx = this.getRandomDecimalLessThan(array.length);
      answer += array[idx] * (10 ** i);
      array.splice(idx, 1);
    }
    return answer;
  };

  this.play = function play(computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };
}

new BaseballGame();
