const fibonic = (n) => {
  if (n === 1 || n === 2) {
    return 1;
  }

  return fibonic(n - 1) + fibonic(n - 2);
};

console.log(fibonic(1));
console.log(fibonic(2));
console.log(fibonic(3));
console.log(fibonic(4));
console.log(fibonic(5));
console.log(fibonic(6));
console.log(fibonic(7));
console.log(fibonic(8));
console.log(fibonic(9));
