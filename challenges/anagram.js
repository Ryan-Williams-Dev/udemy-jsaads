
function validAnagram(s1, s2){
  if (s1.length !== s2.length) {
    return false;
  }

  const s1Letters = {};
  const s2Letters = {};

  for (const char of s1) {
    s1Letters[char] = (s1Letters[char] || 0) + 1;
  }
  for (const char of s2) {
    s2Letters[char] = (s2Letters[char] || 0) + 1;
  }

  for(const char in s1Letters) {
    if (s1Letters[char] !== s2Letters[char]) {
      return false;
    }
  }

  return true;
}



validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true

console.log(validAnagram('anagram', 'nagaram'))