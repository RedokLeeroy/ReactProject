export default function SpaceForTotalAmount(amount) {
  const floatNum = amount.toFixed(2);
  const parts = floatNum.toString().split('.');
  const integerReverse = parts[0].split('').reverse();

  const newString = integerReverse
    .map((char, index) => {
      if ((index + 1) % 3 === 0) {
        return ` ${char}`;
      }
      return char;
    })
    .reverse()
    .join('');

  return `${newString}.${parts[1]}`;
}
