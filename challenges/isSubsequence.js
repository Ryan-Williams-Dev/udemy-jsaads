function isSubsequence(subSeq, str) {
  let i = 0;
  let j = 0;

  if (!subSeq) return true;
  while (j < str.length) {
    if (str[j] === subSeq[i]) i++;
    if (i === subSeq.length) return true;
    j++;
  }

  return false;
}

console.log(isSubsequence('abc', 'abracadabra'));