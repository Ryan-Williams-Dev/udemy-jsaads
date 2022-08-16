function sameFrequency(int1, int2) {
  const str1 = int1.toString();
  const str2 = int2.toString();

  if (str1.length !== str2.length) {
    return false;
  }

  const digits = {};

  for (const char of str1) {
    digits[char] = digits[char] ? digits[char] + 1 : 1;
  }
  
  for (let i = 0; i < str2.length; i++) {
    let digit = str2[i];
    if(!digits[digit]) {
      return false;
    } else {
      digits[digit] -= 1; 
    }
  }

  return true;
}

console.log(sameFrequency(3589578, 5879385));