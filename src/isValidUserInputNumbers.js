export default function isValidUserInputNumbers(userInputNumbers) {
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
