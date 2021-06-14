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
    return false;
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

  this.makeGameResult = function makeGameResult(input) {
    const inputArray = [];
    const answerArray = answer.slice();
    const obj = {
      balls: 0,
      strikes: 0,
    };
    let num = input;

    for (let i = 0; i < 3; i += 1) {
      inputArray.splice(0, 0, num % 10);
      num = Math.floor(num / 10);
    }

    for (let i = 0; i < inputArray.length; i += 1) {
      if (inputArray[i] === answerArray[i]) {
        obj.strikes += 1;
        inputArray.splice(i, 1);
        answerArray.splice(i, 1);
        i -= 1;
      }
    }
    for (let i = 0; i < inputArray.length; i += 1) {
      obj.balls += (answerArray.includes(inputArray[i]) ? 1 : 0);
    }
    return obj;
  };

  this.play = function play(computerInputNumbers, userInputNumbers) {
    if (!this.isValidInput(userInputNumbers)) {
      return this.handleError();
    }
    const gameResult = this.makeGameResult(userInputNumbers);
    let resultStr = '';
    if (gameResult.balls > 0) {
      resultStr += `${gameResult.balls}볼`;
    }
    if (gameResult.balls > 0 && gameResult.strikes > 0) {
      resultStr += ' ';
    }
    if (gameResult.strikes > 0) {
      resultStr += `${gameResult.strikes}스트라이크`;
    }
    if (resultStr.length === 0) {
      return '낫싱';
    }
    return resultStr;
  };

  this.handleSubmit = function handleSubmit() {
    const result = this.play(answer, +(userInput.value));
    if (result === false) {
      return;
    }
    // TODO: 정답 처리
  };

  const handler = this.handleSubmit.bind(this);

  this.resetGame();
  submitButton.addEventListener('click', handler);
}

new BaseballGame();
