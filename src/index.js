export default function BaseballGame() {
  const answer = [];

  const userInput = document.querySelector('#user-input');
  const submitButton = document.querySelector('#submit');

  this.getRandomDecimalLessThan = function getRandomDecimalLessThan(num) {
    return Math.floor((Math.random() * 10) % num);
  };

  this.setRandomAnswer = () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    answer.length = 0;
    for (let i = 0; i < 3; i += 1) {
      const idx = this.getRandomDecimalLessThan(array.length);
      answer.push(array[idx]);
      array.splice(idx, 1);
    }
    return answer;
  };

  this.handleSubmit = function handleSubmit() {
    this.play(answer, +(userInput.value));
    // TODO: 힌트 생성 및 정답 처리
  };

  this.play = function play(computerInputNumbers, userInputNumbers) {
  // TODO: 유효성 검사
    return "결과 값 String";
  };

  const handler = this.handleSubmit.bind(this);

  this.setRandomAnswer();
  submitButton.addEventListener('click', handler);
}

new BaseballGame();
