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

  this.resetGame = function resetGame() {
    answer.length = 0;
    this.setRandomAnswer();
  };

  this.handleError = function handleError() {
    userInput.value = '';
    alert('잘못된 값을 입력하셨습니다.\n1부터 9까지의 서로 다른 수로 이루어진 3자리 숫자를 입력해주세요.\n예시) 123, 645, 987');
  };

  this.isValidInput = function isValidInput(input) {
    if (Number.isNaN(input) || input < 123 || input > 987) {
      return false;
    }

    const set = new Set();
    let num = input;

    for (let i = 0; i < 3; i += 1) {
      set.add(num % 10);
      num = Math.floor(num / 10);
    }

    if (set.size !== 3 || set.has(0)) {
      return false;
    }
    return true;
  };

  this.play = function play(computerInputNumbers, userInputNumbers) {
    if (!this.isValidInput(userInputNumbers)) {
      return this.handleError();
    }
    // TODO: 힌트 생성
    return "결과 값 String";
  };

  this.handleSubmit = function handleSubmit() {
    const result = this.play(answer, +(userInput.value));
    // TODO: 정답 처리
  };

  const handler = this.handleSubmit.bind(this);

  this.resetGame();
  submitButton.addEventListener('click', handler);
}

new BaseballGame();
