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

console.log(merge([1,10,50, 200, 650], [2,14,99,100, 1000, 5000, 3000, 7000, 6505]))