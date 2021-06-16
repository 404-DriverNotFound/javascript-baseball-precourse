function makeRandomAnswer() {
  const answer = new Set();

  while (answer.size !== 3) {
    answer.add(Math.floor((Math.random() * 9) + 1));
  }
  return [...answer].join('');
}

function isValidInput(input) {
  const num = Number(input);
  if (Number.isNaN(num)) {
    return false;
  }
  const set = new Set(input.split(''));
  return (set.size === 3 && !set.has('0'));
}

function makeGameResult(computerInputNumbers, userInputNumbers) {
  const inputArray = userInputNumbers.split('');
  const answerArray = computerInputNumbers.split('');
  let balls = 0;
  let strikes = 0;

  strikes = inputArray.reduce(((acc, cur, idx) => {
    if (cur === answerArray[idx]) {
      return acc + 1;
    }
    return acc;
  }), 0);

  balls = inputArray.reduce(((acc, cur, idx) => {
    if (cur !== answerArray[idx] && answerArray.includes(cur)) {
      return acc + 1;
    }
    return acc;
  }), 0);

  return { balls, strikes };
}

function makeResultStr(resultObj) {
  let resultStr = '';
  if (resultObj.balls > 0) {
    resultStr += `${resultObj.balls}볼`;
  }
  if (resultObj.balls > 0 && resultObj.strikes > 0) {
    resultStr += ' ';
  }
  if (resultObj.strikes > 0) {
    resultStr += `${resultObj.strikes}스트라이크`;
  }
  return (resultStr.length === 0 ? '낫싱' : resultStr);
}

export {
  isValidInput,
  makeRandomAnswer,
  makeGameResult,
  makeResultStr,
};
