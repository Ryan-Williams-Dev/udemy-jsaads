/*  Write a function called recursiveRange which accepts a number
    and adds up all the numbers from 0 to the number passed to the function 
*/

function recursiveRange(x) {
  return x <= 0 ? 0 : x + recursiveRange(x - 1);
}

console.log(recursiveRange(6)) // 21
console.log(recursiveRange(10)) // 55 