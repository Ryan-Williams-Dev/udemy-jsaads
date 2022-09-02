function getDigit(num, digit) {
  const stringified = String(num);

  const result = Number(stringified[stringified.length - 1 - digit]) || 0;

  return result;
}

console.log(getDigit(12345, 0));