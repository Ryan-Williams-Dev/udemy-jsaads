function sameFrequency(int1, int2) {
  const str1 = int1.toString();
  const str2 = int2.toString();

  if (str1.length !== str2.length) {
    return false;
  }

  const digits1 = {};
  const digits2 = {};

  for (const char of str1) {
    digits1[char] = digits1[char] ? digits1[char] + 1 : 1;
  }
  for (const char of str2) {
    digits2[char] = digits2[char] ? digits2[char] + 1 : 1;
  }

  for(const char in digits1) {
    if (digits1[char] !== digits2[char]) {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(3589578, 5879385));