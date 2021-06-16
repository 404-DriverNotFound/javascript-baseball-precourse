function isDuplicate(userInputNumbers) {
  if (userInputNumbers.length === [...new Set(userInputNumbers)].length) {
    return true;
  }
  return false;
}

function isScope(number) {
  if (number >= 1 && number <= 9) {
    return true;
  }
  return false;
}

function isNumber(text) {
  if (typeof text === 'number') {
    return true;
  }
  return false;
}

export default function IsValid(userInputNumbers) {
  if (userInputNumbers.length !== 3) {
    return false;
  }
  if (!userInputNumbers.every(isNumber)) {
    return false;
  }
  if (!userInputNumbers.every(isScope)) {
    return false;
  }
  if (!isDuplicate(userInputNumbers)) {
    return false;
  }
  return true;
}
