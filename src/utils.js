export function pickRandomNumbers() {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  numbers.sort(() => (Math.random() - Math.random()));
  return numbers.slice(-3).join('');
}

export function test() {
  console.log('test');
}
