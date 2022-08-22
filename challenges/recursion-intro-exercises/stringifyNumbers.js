function stringifyNumbers(obj) {
  let result = {};

  for (const key in obj) {
    let curr;

    if (Array.isArray(obj[key])) {
      curr = obj[key]
    } else if (typeof obj[key] === 'object') {
      curr = stringifyNumbers(obj[key]);
    } else if (typeof obj[key] === 'number') {
      curr = obj[key].toString();
    } else {
      curr = obj[key];
    }

    result[key] = curr;
  }

  return result;
}


let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
};

console.log(stringifyNumbers(obj));

/* 
Output =>
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/