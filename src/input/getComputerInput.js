export default function GetComputerInput() {
  const set = new Set();
  while (set.size < 3) {
    set.add(Math.floor(Math.random() * 9) + 1);
  }
  return Number([...set].join(''));
}
