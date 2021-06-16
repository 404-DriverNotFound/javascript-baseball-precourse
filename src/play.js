/* eslint-disable no-param-reassign */

export function correctInput(computerInputNumbers, userInputNumbers) {
  const inputSet = new Set(userInputNumbers.split(''));
  let ball = 0;
  let strike = 0;

  for (let index = 0; index < 3; index += 1) {
    if (userInputNumbers[index] === computerInputNumbers[index]) {
      strike += 1;
    } else if (inputSet.has(computerInputNumbers[index])) {
      ball += 1;
    }
  }

  return { strike, ball };
}

export function makeResultString(resultObject) {
  const resultArray = [];

  if (resultObject.ball) {
    resultArray.push(`${resultObject.ball}볼`);
  }
  if (resultObject.strike) {
    resultArray.push(`${resultObject.strike}스트라이크`);
  }
  if (resultArray.length === 0) {
    resultArray.push('낫싱');
  }

  return resultArray.join(' ');
}

export function showResultString(resultString, resultDiv, resetButton) {
  if (resultString === '3스트라이크') {
    resultDiv.innerHTML = `
      🎉 <b>정답을 맞추셨습니다!</b> 🎉
      <br>
      게임을 새로 시작하시겠습니까?
    `;
    resultDiv.appendChild(resetButton);
  } else {
    resultDiv.innerHTML = resultString;
  }
}
