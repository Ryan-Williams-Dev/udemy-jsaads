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

function radixSort(nums) {
  let longestNum = mostDigits(nums);

  for (let i = 0; i < longestNum; i++) {
    let buckets = [[],[],[],[],[],[],[],[],[],[]];

    for (const num of nums) {
      let digit = getDigit(num, i);
      buckets[digit].push(num);
    }

    nums = [].concat(...buckets)
  }

  return nums;
}

// console.log(getDigit(12345, 0));
// console.log(digitCount(0));
console.log(radixSort([1,4000,324,25,67,2000,367,3,9,4,56,78,9743]))