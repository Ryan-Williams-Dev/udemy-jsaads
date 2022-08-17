function maxSubarraySum(arr, length) {
  if (length > arr.length) return null;

  let curr = 0;
  
  for (let i = 0; i < length; i++) {
    curr += arr[i]
  }
  let max = curr
  
  let start = 1;
  let end = start + (length - 1);

  while (end < arr.length) {
    curr -= arr[start - 1]
    curr += arr[end]
    if (curr > max) max = curr;

    start++;
    end++;
  }

  return max;
}

console.log(maxSubarraySum([100,200,300,400], 2)) // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))  // 39 
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
console.log(maxSubarraySum([2,3], 3)) // null