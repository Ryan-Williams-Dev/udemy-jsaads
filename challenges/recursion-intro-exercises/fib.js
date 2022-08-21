function fib(x) {
  if (x <= 0) return 0;
  if (x === 1) return 1;

  return fib(x - 1) + fib( x - 2);
}

console.log(fib(4))// 3
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465