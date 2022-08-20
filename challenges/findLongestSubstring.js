function findLongestSubstring(str){
  if (str.length === 0) return 0;
  if (str.length === 1) return 1;

  let maxWindow = 0;
  let start = 0;
  let end = 1;
  const lookup = new Set();

  lookup.add(str[0])

  while (start < str.length) {
   if (!lookup.has(str[end]) && str[end] !== undefined) {
      lookup.add(str[end]);
      maxWindow = Math.max(lookup.size, maxWindow);
      end++;
    } else {
      maxWindow = Math.max(lookup.size, maxWindow);
      lookup.delete(str[start]);
      start++;
    }
  }

  return maxWindow;
}


console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6