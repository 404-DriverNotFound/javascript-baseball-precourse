function getGameResult(strikeCount, ballCount) {
  if (strikeCount === 3) {
    return '정답';
  }
  if (strikeCount && !ballCount) {
    return `${strikeCount}스트라이크`;
  }
  if (!strikeCount && ballCount) {
    return `${ballCount}볼`;
  }
  if (strikeCount && ballCount) {
    return `${ballCount}볼 ${strikeCount}스트라이크`;
  }
  return '낫싱';
}

function getBallCount(computerInputNumbers, userInputNumbers) {
  return userInputNumbers.reduce((acc, currentValue, index) => {
    if (
      currentValue !== computerInputNumbers[index]
      && computerInputNumbers.includes(currentValue)) {
      return acc + 1;
    }
    return acc;
  }, 0);
}

function getStrikeCount(computerInputNumbers, userInputNumbers) {
  return computerInputNumbers.reduce((acc, currentValue, index) => {
    if (currentValue === userInputNumbers[index]) {
      return acc + 1;
    }
    return acc;
  }, 0);
}

export default function GetGameResult(ComputerInputNumbers, UserInputNumbers) {
  const computerInputArray = String(ComputerInputNumbers).split('');
  const userInputArray = String(UserInputNumbers).split('');
  const ballCount = getBallCount(computerInputArray, userInputArray);
  const strikeCount = getStrikeCount(computerInputArray, userInputArray);
  return getGameResult(strikeCount, ballCount);
}
