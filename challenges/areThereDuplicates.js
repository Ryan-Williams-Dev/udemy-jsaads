function areThereDuplicates() {
  const args = Array.from(arguments)
  const lookup = {}
  for (const el of args) {
    if(!lookup[el]) {
      lookup[el] = true;
    } else {
      return true;
    }
  }

  return false
}

console.log(areThereDuplicates(1, 2, 3, 3)) 