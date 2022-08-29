function insertionSort(inputArr) {
  let n = inputArr.length;
      for (let i = 1; i < n; i++) {
          // Choosing the first element in our unsorted subarray
          let current = inputArr[i];
          // The last element of our sorted subarray
          let j = i-1; 
          while ((j > -1) && (current < inputArr[j])) {
              inputArr[j+1] = inputArr[j];
              j--;
          }
          inputArr[j+1] = current;
      }
  return inputArr;
}

const arr = [4,1,6,9,3,6,3,7,4,1,0,5,45,3,67,3,888,6,7,4,2,11,4,5,44]

console.log('Actual: ', insertionSort(arr))
console.log('Expected:', arr.sort((a,b) => a - b))