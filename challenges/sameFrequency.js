function sameFrequency(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();

  if (num1.length !== num2.length) {
    return false;
  }

  const digits = {};

  for (const char of num1) {
    digits[char] = digits[char] ? digits[char] + 1 : 1;
  }
  
  for (let i = 0; i < num2.length; i++) {
    let digit = num2[i];
    if(!digits[digit]) {
      return false;
    } else {
      digits[digit] -= 1; 
    }
  }

  return true;
}

console.log(sameFrequency(3589578, 5879385));