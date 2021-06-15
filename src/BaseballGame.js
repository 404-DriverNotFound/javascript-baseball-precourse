function getRandomNumbers() {
  const arr = [];
  while (arr.length !== 3) {
    const randomDigit = Math.floor(Math.random() * 5 + 1);
    if (!arr.includes(randomDigit)) {
      arr.push(randomDigit);
    }
  }
  return (arr.join(''));
}

function isValidUserInputNumbers(userInputNumbers) {
  if (userInputNumbers.length !== 3) {
    return false;
  }
  const number = Number(userInputNumbers);
  if (Number.isNaN(number)) {
    return false;
  }
  const arr = userInputNumbers.split('').map(Number);
  return arr.every((element) => !arr.includes(element, arr.indexOf(element) + 1));
}

function checkBallCount(computerInputNumbers, userInputNumbers) {
  const computerArr = computerInputNumbers.split('');
  const userInputArr = userInputNumbers.split('');
  const total = userInputArr.filter((element) => computerArr.includes(element)).length;
  const strike = userInputArr.filter((element, index) => element === computerArr[index]).length;
  const ball = total - strike;
  // console.log({ total, strike, ball });
  return [strike, ball];
}

export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = getRandomNumbers();
    this.userInputNumbers = '';
    this.result = '';
  }

  addEventListener() {
    this.$app = document.querySelector('#app');
    this.$userInput = document.querySelector('#user-input');
    // this.$submit = document.querySelector('#submit');
    this.$result = document.querySelector('#result');

    this.$app.addEventListener('click', (e) => {
      if (e.target.id === 'submit') {
        this.onClickSubmitButton();
      }
      if (e.target.id === 'restart') {
        this.onClickRestartButton();
      }
    });
  }

  onClickSubmitButton() {
    let result = '제대로 입력하라';
    this.userInputNumbers = this.$userInput.value;
    if (isValidUserInputNumbers(this.userInputNumbers)) {
      result = this.play(this.computerInputNumbers, this.userInputNumbers);
    }
    this.render(result);
  }

  onClickRestartButton() {
    this.computerInputNumbers = getRandomNumbers();
    this.render('');
  }

  play(computerInputNumbers, userInputNumbers) {
    this.result = '';
    const ballCount = checkBallCount(computerInputNumbers, userInputNumbers);
    const strike = Number(ballCount[0]);
    const ball = Number(ballCount[1]);
    // console.log(ballCount);
    if (ball > 0) {
      this.result = `${ball}볼`;
    }
    if (strike === 3) {
      this.result = '정답';
    } else if (strike > 0) {
      this.result += ` ${strike}스트라이크`;
    }

    if (this.result === '') {
      this.result = '낫싱';
    }
    return `<span>${this.result}</span>`;
  }

  render(result) {
    let resultToHTML = result;
    if (result === '정답') {
      resultToHTML = ''
        + '      <h4>\n'
        + '        🎉 정답을 맞추셨습니다! 🎉\n'
        + '      </h4>\n'
        + '      <div>\n'
        + '        <span>게임을 새로 시작하시겠습니까?</span>\n'
        + '        <button id="restart">게임 재시작</button>\n'
        + '      </div>\n'
        + '      <br>';
    }
    this.$result.innerHTML = resultToHTML;
  }
}
