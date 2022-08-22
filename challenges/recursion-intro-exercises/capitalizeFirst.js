function capitalizeFirst (arr) {
  let newArr = [];

  if (arr.length <= 0) return newArr;

  const wordCapped = arr[0][0].toUpperCase() + arr[0].slice(1);

  newArr.push(wordCapped)

  return newArr.concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
