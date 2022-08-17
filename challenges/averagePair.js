function averagePair(arr, target) {
  if (!arr.length) return false;

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const mean = (arr[left] + arr[right]) / 2

    if (mean === target) {
      return true;
    }
    if (mean < target) {
      left++
    } else {
      right--
    }

  }

  return false;
}

console.log(averagePair([1,3,3,5,6,7,10,12,19],8));