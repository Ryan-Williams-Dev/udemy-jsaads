function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (result.length < arr1.length + arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  return result;
}

console.log(merge([1,10,50], [2,14,99,100]))