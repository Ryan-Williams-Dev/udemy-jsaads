function bubbleSort(arr) {
  
  
  for (let i = arr.length; i > 0; i--) {
    let noSwap = true
    
    for (let j = 0; j < i - 1; j++) {
      
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwap = false;
      }
    }

    if (noSwap) break;
  }
    

  return arr;
}

const arr = [4,1,6,9,3,6,3,7,4,1,0,5,45,3,67,3,888,6,7,4,2,11,4,5,44]

console.log(bubbleSort(arr))
console.log(arr.sort((a,b) => a - b))