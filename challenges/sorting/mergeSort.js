function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  return result.concat(i < arr1.length ? arr1.slice(i) : arr2.slice(j));
}

function mergeSort(arr) { 
  if (arr.length < 2) {
    return arr;
  }

  let left  = arr.splice(0, Math.floor(arr.length / 2))
  return merge(mergeSort(left), mergeSort(arr))
}

console.log(mergeSort([47, 6, 8, 43, 36, 21, 31, 25, 87, 44, 14, 72, 52, 82, 80, 88, 86, 74, 26, 24, 85, 81, 63, 23, 5, 64, 75, 83, 62, 56, 42, 65, 46, 94, 19, 22]))