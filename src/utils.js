export function pickRandomNumbers() {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  numbers.sort(() => (Math.random() - Math.random()));
  return numbers.slice(-3).join('');
}

export function checkInputValid(inputValue) {
  if (inputValue.length !== 3)
    return false;
  if (/^\d+$/.test(inputValue) === false)
    return false;
  const inputSet = new Set(inputValue.split(''));
  return (inputSet.size === 3);
}

export function correctInput(computerInputNumbers, userInputNumbers) {
  const inputSet = new Set(userInputNumbers.split(''));
  let ball = 0;
  let strike = 0;

  for (let index = 0; index < 3; index++) {
    if (!inputSet.has(computerInputNumbers[index]))
      continue;
    if (userInputNumbers[index] === computerInputNumbers[index])
      strike++;
    else
      ball++;
  }

  return {strike, ball};
}

export function makeResultString(resultObject) {
  let resultArray = [];

  if (resultObject.ball)
    resultArray.push(`${resultObject.ball}볼`);
  if (resultObject.strike)
    resultArray.push(`${resultObject.strike}스트라이크`);
  if (resultArray.length === 0)
  resultArray.push('낫싱');

  return resultArray.join(' ');
}
