function pivot(arr, start = 0, end = arr.length - 1) {
  let pivotNum = arr[start];
  let pivotIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivotNum > arr[i]) {
      pivotIndex++;
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]]
    }
  }

  [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]]

  return { pivotIndex, pivotNum, arr };
}

let arr = [5,2,1,8,4,7,6,3]

console.log(pivot(arr))