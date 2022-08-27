function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let min = {
      value: Infinity,
      index: null
    };

    for(let j = i; j < arr.length; j++) {
      if (arr[j] < min.value) {
        min.value = arr[j];
        min.index = j;
      }
    }

    [arr[i], arr[min.index]] = [arr[min.index], arr[i]]
  }

  return arr;
}

const arr = [4,1,6,9,3,6,3,7,4,1,0,5,45,3,67,3,888,6,7,4,2,11,4,5,44]

console.log('Actual: ', selectionSort(arr))
console.log('Expected:', arr.sort((a,b) => a - b))