function getDigit(num, digit) {
  const stringified = String(num);

  const result = Number(stringified[stringified.length - 1 - digit]) || 0;

  return result;
}

function digitCount(num){ 
  return String(num).length;
}

function mostDigits(nums) {
  let max = 0;
  for (const num of nums) {
    max = Math.max(digitCount(num), max);
  }
  return max;
}

console.log(getDigit(12345, 0));
console.log(digitCount(0))