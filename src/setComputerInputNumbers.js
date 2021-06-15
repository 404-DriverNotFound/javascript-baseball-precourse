export default function setComputerInputNumbers() {
  const arr = [];
  while (arr.length !== 3) {
    const randomDigit = Math.floor(Math.random() * 5 + 1);
    if (!arr.includes(randomDigit)) {
      arr.push(randomDigit);
    }
  }
  return (arr.join(''));
}
