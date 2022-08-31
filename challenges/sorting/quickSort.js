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

  return pivotIndex;
}



function quickSort(arr, start = 0, end = arr.length - 1) {
  if (end - start < 2) {
    return arr;
  }

  let pivotIndex = pivot(arr, start, end)

  quickSort(arr, start, pivotIndex)
  quickSort(arr, pivotIndex + 1, end)

  return arr;
}



let arr = [5,2,1,8,4,7,6,3]

console.log(quickSort(arr))